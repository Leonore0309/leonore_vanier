/*
 * Rendu des pages à partir de window.SITE (assets/js/data.js), fusionné avec
 * window.SITE_EN (assets/js/data.en.js) sur les pages anglaises.
 * Chaque page HTML est une « coquille » portant :
 *   data-root       chemin relatif vers la racine du site ("./", "../", "../../")
 *   data-lang-root  chemin relatif vers la racine de la langue (identique en français, « en/ » en anglais)
 *   data-path       chemin de la page dans sa langue (ex. "fiction/adam/")
 *   data-page       home | about | category | project | acting | contact
 *   data-section    entrée de menu active
 *   data-category / data-project  selon la page
 */
(function () {
  "use strict";

  var S = window.SITE;
  var body = document.body;
  var ROOT = body.dataset.root || "./";
  var LROOT = body.dataset.langRoot || ROOT;
  var PATH = body.dataset.path || "";

  /* ---------- Langue : fusion des textes anglais sur la structure française ---------- */

  function merge(base, ex) {
    if (Array.isArray(base) && Array.isArray(ex)) {
      ex.forEach(function (v, i) {
        base[i] = v && typeof v === "object" && base[i] && typeof base[i] === "object" ? merge(base[i], v) : v;
      });
      return base;
    }
    if (base && ex && typeof base === "object" && typeof ex === "object") {
      Object.keys(ex).forEach(function (k) {
        var v = ex[k];
        if (k === "projects" && Array.isArray(v)) {
          v.forEach(function (pe) {
            var pb = base.projects.filter(function (p) {
              return p.id === pe.id;
            })[0];
            if (pb) merge(pb, pe);
          });
        } else if (v && typeof v === "object" && base[k] && typeof base[k] === "object") {
          merge(base[k], v);
        } else {
          base[k] = v;
        }
      });
      return base;
    }
    return ex;
  }
  if (document.documentElement.lang === "en" && window.SITE_EN) merge(S, window.SITE_EN);
  var LANG = document.documentElement.lang === "en" ? "en" : "fr";
  var UI = S.ui;

  var REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var SAVE_DATA = !!(navigator.connection && navigator.connection.saveData);

  /* ---------- Utilitaires ---------- */

  // Typographie française : espaces insécables avant ; : ? ! % », après «, et dans les milliers.
  function nb(s) {
    s = String(s);
    if (LANG !== "fr") return s;
    return s
      .replace(/ ([:;?!»%])/g, " $1")
      .replace(/« /g, "« ")
      .replace(/(\d) (?=\d{3}(?!\d))/g, "$1 ");
  }
  var ENT = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
  function esc(s) {
    return nb(s).replace(/[&<>"]/g, function (c) {
      return ENT[c];
    });
  }
  function byId(id) {
    return S.projects.filter(function (p) {
      return p.id === id;
    })[0];
  }
  function inCategory(cat) {
    return S.projects.filter(function (p) {
      return p.category === cat;
    });
  }

  // Fichier du site (image, audio, vidéo) : chemin relatif à la racine du site.
  function asset(path) {
    return ROOT + path;
  }
  // Lien vers une page du site, dans la langue courante.
  function url(path) {
    return LROOT + path;
  }
  // Thème : "dark" ou "light" (posé avant l'affichage par le script du <head>).
  function theme() {
    return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
  }
  // Logo Sensible Indocile : en mode sombre, la version pour fond sombre si elle existe.
  function logoSrc(kind) {
    var c = S.company;
    var dark = kind === "mark" ? c.markDark : c.fullDark;
    return theme() === "dark" && dark ? dark.src : c[kind].src;
  }
  if (S.company.markDark && S.company.fullDark) document.documentElement.classList.add("has-dark-logo");

  // Un seul projet dans la rubrique : on développe directement ce projet.
  function projectUrl(p) {
    var cat = S.categories[p.category];
    return inCategory(p.category).length === 1 ? url(cat.path) : url(cat.path + p.slug + "/");
  }
  function todo(text, inline) {
    if (!S.showTodos) return "";
    var tag = inline ? "span" : "p";
    return "<" + tag + ' class="todo">' + esc(UI.skipTodo) + " — " + esc(text) + "</" + tag + ">";
  }
  function img(i, opts) {
    opts = opts || {};
    return (
      '<img src="' + asset(i.src) + '" width="' + i.w + '" height="' + i.h + '" alt="' + esc(i.alt) + '"' +
      (opts.style ? ' style="' + opts.style + '"' : "") +
      (opts.eager ? ' fetchpriority="high"' : ' loading="lazy"') +
      ' decoding="async">'
    );
  }
  function ext(href, label) {
    return (
      '<a class="link-ext" href="' + href + '" target="_blank" rel="noopener noreferrer">' +
      esc(label) + '<span aria-hidden="true"> ↗</span><span class="sr-only"> ' + esc(UI.newTab) + "</span></a>"
    );
  }
  function ratioNum(r) {
    var p = r.split("/");
    return parseFloat(p[0]) / parseFloat(p[1]);
  }
  function num(i) {
    return (i + 1 < 10 ? "0" : "") + (i + 1);
  }

  /* ---------- Icônes (SVG en ligne, monochromes) ---------- */

  function svg(inner) {
    return '<svg class="icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + inner + "</svg>";
  }
  var ICONS = {
    sun: svg('<circle class="i-sun" cx="12" cy="12" r="4"/><path class="i-sun" d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),
    moon: svg('<path class="i-moon" d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/>'),
    clap: svg('<path d="M3 9h18v11H3z"/><path d="M3 9l2-5 4 1M7 5l4 1M11 6l4 1M15 7l4 1"/>'),
    spark: svg('<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/>'),
    headphones: svg('<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><path d="M4 15h3v5H5a1 1 0 0 1-1-1zM20 15h-3v5h2a1 1 0 0 0 1-1z"/>'),
    masks: svg('<path d="M3 4h10v6a5 5 0 0 1-10 0z"/><path d="M5.5 7.2h1.2M9.5 7.2h1.2M5.6 10.4a2.6 2.6 0 0 0 4.8 0"/><path d="M13 9h8v5a4 4 0 0 1-8 0z"/><path d="M15 12h1M18 12h1M15.2 16.2a2 2 0 0 1 3.6 0"/>'),
    camera: svg('<path d="M3 7h12v10H3z"/><path d="M15 10l6-3v10l-6-3"/>'),
    film: svg('<path d="M4 4h16v16H4z"/><path d="M8 4v16M16 4v16M4 9h4M4 15h4M16 9h4M16 15h4"/>'),
    series: svg('<path d="M3 6h14v10H3z"/><path d="M7 20h10M20 8v8"/>'),
    euro: svg('<path d="M17 6.5A6 6 0 1 0 17 17.5"/><path d="M5 10h8M5 14h8"/>'),
    phone: svg('<path d="M8 2h8v20H8z"/><path d="M11 19h2"/>'),
    briefcase: svg('<path d="M3 8h18v12H3z"/><path d="M9 8V5h6v3M3 13h18"/>'),
    logo: svg('<path d="M12 3c-4 3-4 6 0 9s4 6 0 9"/><path d="M12 3c4 3 4 6 0 9"/>'),
    trophy: svg('<path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3M12 14v4M8 21h8M9 18h6"/>'),
    stage: svg('<path d="M3 4h18v3H3z"/><path d="M5 7v13M19 7v13M9 7c0 5-2 8-4 13M15 7c0 5 2 8 4 13"/>'),
    handshake: svg('<path d="M2 12l4-4 4 1 3-2 4 3 5-1"/><path d="M6 8l-4 4 6 6 3-1 2 2 4-3 5-4"/>'),
    mic: svg('<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6"/>'),
    package: svg('<path d="M3 7l9-4 9 4v10l-9 4-9-4z"/><path d="M3 7l9 4 9-4M12 11v10"/>'),
    contract: svg('<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 13h7M9 17h5"/>'),
    pen: svg('<path d="M4 20l1-4L16 5l3 3L8 19z"/><path d="M14 7l3 3"/>'),
    clipboard: svg('<path d="M6 5h12v16H6z"/><path d="M9 5V3h6v2M9 11h6M9 15h4"/>'),
    users: svg('<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.4"/><path d="M3 20a6 6 0 0 1 12 0M15 15a5 5 0 0 1 6 5"/>'),
    calc: svg('<rect x="5" y="3" width="14" height="18"/><path d="M8 7h8M8 12h2M12 12h2M8 16h2M12 16h2M16 12v4"/>'),
    cut: svg('<circle cx="6" cy="7" r="2.5"/><circle cx="6" cy="17" r="2.5"/><path d="M8 8l12 9M8 16L20 7"/>'),
    chevron: svg('<path d="M6 9l6 6 6-6"/>')
  };

  /* ---------- En-tête, pied de page ---------- */

  function companyLink(cls, inner) {
    return (
      '<a class="' + cls + '" href="' + S.company.url + '" target="_blank" rel="noopener noreferrer">' + inner +
      '<span class="sr-only"> ' + esc(UI.newTab) + "</span></a>"
    );
  }

  function langHref() {
    return LANG === "fr" ? ROOT + "en/" + PATH : ROOT + PATH;
  }

  function renderHeader() {
    var section = body.dataset.section || "";
    var links = S.nav
      .map(function (n) {
        var cur = n.id === section ? ' aria-current="page"' : "";
        return '<li><a href="' + url(n.path) + '"' + cur + ">" + esc(n.label) + "</a></li>";
      })
      .join("");
    var m = S.company.mark;
    return (
      '<header class="site-header"><div class="container site-header__bar">' +
      '<a class="brand" href="' + url("projets/") + '"><span class="brand__name">' + esc(S.name) + "</span>" +
      '<span class="brand__role">' + esc(S.role) + "</span></a>" +
      companyLink("brand-logo", '<img data-logo="mark" src="' + asset(logoSrc("mark")) + '" width="17" height="32" alt="' + esc(m.alt) + '">') +
      '<nav id="site-nav" class="site-nav" aria-label="' + esc(UI.mainNav) + '"><ul>' + links + "</ul></nav>" +
      '<div class="site-header__tools">' +
      '<button class="theme-btn" type="button" aria-pressed="false">' + ICONS.sun + ICONS.moon + "</button>" +
      '<a class="lang-switch" href="' + langHref() + '" hreflang="' + (LANG === "fr" ? "en" : "fr") + '" lang="' + (LANG === "fr" ? "en" : "fr") +
      '" aria-label="' + esc(UI.langSwitch) + '">' + esc(UI.otherLang) + "</a>" +
      '<button class="menu-btn" type="button" aria-expanded="false" aria-controls="site-nav">' +
      '<span class="menu-btn__label">' + esc(UI.menu) + '</span><span class="menu-btn__icon" aria-hidden="true"></span></button></div>' +
      "</div></header>"
    );
  }

  function renderFooter() {
    var f = S.company.full;
    return (
      '<footer class="site-footer"><div class="container site-footer__inner">' +
      companyLink("footer-logo", '<img data-logo="full" src="' + asset(logoSrc("full")) + '" width="72" height="94" alt="' + esc(f.alt) + '" loading="lazy">') +
      '<div class="site-footer__text"><p>© ' + new Date().getFullYear() + " " + esc(S.name) + " · " + esc(S.company.name) + " · " + esc(UI.footerRole) + "</p>" +
      '<p><a href="mailto:' + S.email + '">' + esc(S.email) + "</a> · " + ext(S.linkedin, UI.linkedin) + "</p></div>" +
      "</div></footer>"
    );
  }

  function initMenu() {
    var btn = document.querySelector(".menu-btn");
    var nav = document.getElementById("site-nav");
    if (!btn || !nav) return;
    function set(open) {
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      nav.classList.toggle("is-open", open);
      document.documentElement.classList.toggle("menu-open", open);
    }
    btn.addEventListener("click", function () {
      set(btn.getAttribute("aria-expanded") !== "true");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && btn.getAttribute("aria-expanded") === "true") {
        set(false);
        btn.focus();
      }
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) set(false);
    });
    window.matchMedia("(min-width: 1001px)").addEventListener("change", function () {
      set(false);
    });
  }

  function initTheme() {
    var btn = document.querySelector(".theme-btn");
    if (!btn) return;
    function apply() {
      var dark = theme() === "dark";
      btn.setAttribute("aria-pressed", dark ? "true" : "false");
      btn.setAttribute("aria-label", dark ? UI.themeToLight : UI.themeToDark);
      btn.setAttribute("title", dark ? UI.themeToLight : UI.themeToDark);
      document.querySelectorAll("[data-logo]").forEach(function (i) {
        i.setAttribute("src", asset(logoSrc(i.getAttribute("data-logo"))));
      });
      var m = document.querySelector('meta[name="theme-color"]');
      if (m) m.setAttribute("content", dark ? "#03141a" : "#f5f1e9");
    }
    btn.addEventListener("click", function () {
      var next = theme() === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem("lv-theme", next);
      } catch (e) {}
      apply();
    });
    apply();
  }

  /* ---------- Composants ---------- */

  // Visuel d’un projet (images, ou emplacement) : utilisé par la mosaïque et l’index.
  function tileMedia(p, eager) {
    var t = p.tile;
    var n = t.images.length;
    var media = n
      ? t.images
          .map(function (i) {
            return img(i, { eager: eager, style: t.focus ? "object-position:" + t.focus : "" });
          })
          .join("")
      : '<span class="tile__placeholder">' + esc(t.placeholder || UI.coverMissing) + "</span>";
    return '<span class="tile__media tile__media--' + (n || 1) + '">' + media + "</span>";
  }

  function tile(p, idx) {
    return (
      '<li class="mosaic__item mosaic__item--' + (idx + 1) + ' reveal">' +
      '<a class="tile" href="' + projectUrl(p) + '">' +
      '<span class="tile__frame" style="--ar:' + p.tile.ratio + '"' + (p.tile.loop ? ' data-loop="' + p.tile.loop + '"' : "") + ">" +
      tileMedia(p, idx < 2) +
      '<span class="tile__veil" aria-hidden="true"></span>' +
      '<span class="tile__role"><span class="tile__genre">' + esc(S.categories[p.category].label) + "</span>" +
      '<span class="tile__roletxt"><span class="sr-only">' + esc(UI.roleSr) + "</span>" + esc(p.role) + "</span></span>" +
      "</span>" +
      '<span class="tile__caption"><span class="tile__title">' + esc(p.title) + "</span></span>" +
      "</a></li>"
    );
  }

  function mosaic(extraClass) {
    return '<ul class="mosaic' + (extraClass ? " " + extraClass : "") + '">' + S.projects.map(tile).join("") + "</ul>";
  }

  // Adresse de la vidéo : champ `url`, sinon déduite du type et de l’identifiant.
  function videoUrl(h) {
    if (h.url) return h.url;
    return h.type === "tiktok" ? "https://www.tiktok.com/@lifeonxenia/video/" + h.id : "https://www.youtube.com/watch?v=" + h.id;
  }

  // Visuel animé : un lien vers la vidéo (nouvel onglet), sans bouton ; la boucle muette est posée par initLoops.
  function player(h) {
    var ratio = h.ratio || (h.type === "tiktok" ? "9 / 16" : "16 / 9");
    var vertical = ratioNum(ratio) < 1;
    var cover = h.poster
      ? img(h.poster, { eager: true })
      : '<span class="player__panel"><span class="player__panel-label">' + esc(h.label || h.title) + "</span></span>";
    return (
      '<a class="player' + (vertical ? " player--vertical" : "") + '" style="--ar:' + ratio + '" href="' + videoUrl(h) + '" target="_blank" rel="noopener noreferrer" ' +
      'aria-label="' + esc(UI.watchVideo + h.title + " " + UI.newTab) + '"' + (h.loop ? ' data-loop="' + h.loop + '"' : "") + ">" +
      cover + "</a>"
    );
  }

  // Boucles vidéo muettes en continu (vignettes, pages projets, bande-démo) : jouées dès que le cadre est visible, en pause hors champ.
  // Jamais avec mouvement réduit ni en économie de données ; le fichier n’est chargé qu’à l’approche de l’écran.
  function initLoops() {
    if (REDUCED || SAVE_DATA || !("IntersectionObserver" in window)) return;
    document.querySelectorAll("[data-loop]").forEach(function (box) {
      var host = box.querySelector(".tile__media") || box;
      var v = null;
      function ensure() {
        if (!v) {
          v = document.createElement("video");
          v.className = "loop-video";
          v.muted = true;
          v.loop = true;
          v.playsInline = true;
          v.preload = "auto";
          v.tabIndex = -1;
          v.setAttribute("aria-hidden", "true");
          v.src = asset(box.dataset.loop);
          host.appendChild(v);
        }
        return v;
      }
      function on() {
        var x = ensure();
        var pr = x.play();
        if (pr && pr.then) {
          pr.then(function () {
            x.classList.add("is-on");
          }).catch(function () {});
        }
      }
      function off() {
        if (!v) return;
        v.pause();
        v.classList.remove("is-on");
      }
      new IntersectionObserver(
        function (es) {
          es.forEach(function (e) {
            if (e.isIntersecting) on();
            else off();
          });
        },
        { threshold: 0.4 }
      ).observe(box);
    });
  }

  function figure(i, extra) {
    return (
      "<li" + (extra || "") + '><figure class="photo">' + img(i) +
      (i.caption ? "<figcaption>" + esc(i.caption) + "</figcaption>" : "") + "</figure></li>"
    );
  }

  // Paysages : cadre 16:9, deux par ligne. Verticales : ratio d’origine, une seule rangée.
  function gallery(items, label) {
    if (!items || !items.length) return "";
    var wide = items.filter(function (i) { return i.w / i.h >= 1.2; });
    var tall = items.filter(function (i) { return i.w / i.h < 1.2; });
    return (
      (wide.length
        ? '<ul class="gallery gallery--wide" aria-label="' + esc(label) + '">' + wide.map(function (i) { return figure(i); }).join("") + "</ul>"
        : "") +
      (tall.length
        ? '<ul class="gallery gallery--tall" aria-label="' + esc(label) + '">' +
          tall.map(function (i) { return figure(i, ' style="flex:' + (i.w / i.h).toFixed(3) + ' 1 0"'); }).join("") + "</ul>"
        : "")
    );
  }

  function stats(list, note) {
    if (!list || !list.length) return "";
    return (
      '<ul class="stats">' +
      list
        .map(function (s) {
          return "<li>" + (s.icon ? ICONS[s.icon] : "") + '<span class="stats__value">' + esc(s.value) + '</span><span class="stats__label">' + esc(s.label) + "</span></li>";
        })
        .join("") +
      "</ul>" +
      (note ? '<p class="stats__note">' + esc(note) + "</p>" : "")
    );
  }

  function credits(list) {
    if (!list || !list.length) return "";
    var rows = list
      .map(function (c) {
        if (c.value) return "<div><dt>" + esc(c.label) + "</dt><dd>" + esc(c.value) + "</dd></div>";
        if (!S.showTodos) return "";
        return "<div><dt>" + esc(c.label) + "</dt><dd>" + todo(c.todo, true) + "</dd></div>";
      })
      .join("");
    return '<dl class="credits">' + rows + "</dl>";
  }

  function projectNav(p) {
    var i = S.projects.indexOf(p);
    var prev = S.projects[(i + S.projects.length - 1) % S.projects.length];
    var next = S.projects[(i + 1) % S.projects.length];
    function item(q, dir, label) {
      return (
        '<li class="pnav__' + dir + '"><a href="' + projectUrl(q) + '"><span class="pnav__dir">' + esc(label) +
        '</span><span class="pnav__title">' + esc(q.title) + "</span></a></li>"
      );
    }
    return (
      '<nav class="pnav" aria-label="' + esc(UI.otherProjects) + '"><ul>' +
      item(prev, "prev", UI.prev) + item(next, "next", UI.next) +
      '</ul><p class="pnav__all"><a href="' + url("projets/") + '">' + esc(UI.allProjects) + "</a></p></nav>"
    );
  }

  function pageHead(p) {
    var cat = S.categories[p.category];
    var single = inCategory(p.category).length === 1;
    return (
      '<header class="page-head reveal">' +
      '<p class="eyebrow">' + (single ? esc(cat.label) : '<a href="' + url(cat.path) + '">' + esc(cat.label) + "</a>") + "</p>" +
      "<h1>" + esc(p.title) + "</h1>" +
      '<p class="page-head__format">' + esc(p.format) + (p.filmBy ? " · " + esc(p.filmBy) : "") + "</p></header>"
    );
  }

  /* ---------- Accueil ---------- */

  function photoCredit(c) {
    return c ? '<figcaption class="photo__credit">' + esc(UI.photo + c) + "</figcaption>" : "";
  }

  // Accueil = page d’entrée seule (photo, nom, activité, MON PORTFOLIO), toujours claire, sans en-tête ni pied de page.
  function renderHome() {
    var l = S.landing;
    var ph = S.home.photo;
    return (
      '<a class="landing__lang lang-switch" href="' + langHref() + '" hreflang="' + (LANG === "fr" ? "en" : "fr") + '" lang="' + (LANG === "fr" ? "en" : "fr") +
      '" aria-label="' + esc(UI.langSwitch) + '">' + esc(UI.otherLang) + "</a>" +
      '<section class="landing landing--v2" aria-labelledby="home-title"><div class="landing__text">' +
      '<h1 id="home-title" class="landing__name">' + esc(S.name) + "</h1>" +
      '<p class="landing__role">' + esc(S.role) + "</p>" +
      '<p class="landing__lead">' + esc(l.lead) + '</p><hr class="landing__rule">' +
      l.lines.map(function (x) { return '<p class="landing__line">' + esc(x) + "</p>"; }).join("") +
      '<p><a class="landing__enter" href="' + url("projets/") + '">' + esc(UI.enter) + "</a></p></div>" +
      '<figure class="landing__photo">' + img(ph, { eager: true }) + photoCredit(ph.credit) + "</figure></section>"
    );
  }

  // Page Projets = citation + mosaïque.
  function renderProjects() {
    var l = S.landing;
    return (
      '<h1 class="sr-only">' + esc(UI.projects) + "</h1>" +
      '<figure class="container quote reveal"><blockquote><p>' + esc(l.quote.text) + "</p></blockquote><figcaption>" + esc(l.quote.source) + "</figcaption></figure>" +
      '<section class="container" id="projets" aria-labelledby="projets-title">' +
      '<h2 id="projets-title" class="sr-only">' + esc(UI.projects) + "</h2>" + mosaic() + "</section>"
    );
  }

  /* ---------- À propos ---------- */

  function projectLink(id, label) {
    var p = byId(id);
    return '<a href="' + projectUrl(p) + '">' + esc(label || p.title) + "</a>";
  }

  function renderAbout() {
    var a = S.about;
    var c = S.company;
    var pres = a.presentation
      .map(function (t, i) {
        return "<p" + (i === 0 ? ' class="lead"' : "") + ">" + esc(t) + "</p>";
      })
      .join("");
    var meta =
      '<dl class="about-meta"><div><dt>' + esc(a.languagesTitle) + "</dt><dd>" + a.languages.map(esc).join(" · ") + "</dd></div></dl>";

    var software = a.softwareGroups
      .map(function (g) {
        return '<div class="software__group"><h3>' + esc(g.label) + "</h3><ul>" + g.items.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div>";
      })
      .join("");

    var doList = a.do
      .map(function (d, i) {
        var p = byId(d.project);
        return (
          '<li class="do-item"><button class="do-item__btn" type="button" aria-expanded="false" aria-controls="do-' + i + '">' +
          '<span class="do-item__ico">' + ICONS[d.icon] + "</span>" +
          '<span class="do-item__label">' + esc(d.label) + "</span>" +
          '<span class="do-item__arrow" aria-hidden="true">' + ICONS.chevron + "</span></button>" +
          '<div class="do-item__body" id="do-' + i + '" hidden><p>' + esc(d.details) + '</p><p><a href="' + projectUrl(p) + '">' + esc(UI.viewProject) + " · " + esc(p.title) + "</a></p></div></li>"
        );
      })
      .join("");

    var domains = a.domains
      .map(function (d) {
        return (
          '<li class="domain">' + ICONS[d.icon] + "<h3>" + esc(d.label) + "</h3><p>" + esc(d.text) + "</p>" +
          '<ul class="domain__links">' +
          (d.links || []).map(function (l) { return "<li>" + projectLink(l.project, l.label) + "</li>"; }).join("") +
          "</ul></li>"
        );
      })
      .join("");

    // Compétences : une vignette par compétence, avec l'image du projet qui la prouve.
    var used = {};
    var skills = a.skills
      .map(function (s) {
        var p = byId(s.project);
        var pool = p.tile.images.concat(p.gallery || []).filter(function (i) {
          return i.w / i.h >= 1.2;
        });
        if (!pool.length) pool = p.tile.images;
        var k = used[s.project] || 0;
        used[s.project] = k + 1;
        var im = pool[k % pool.length];
        return (
          '<li class="skill-card"><a href="' + projectUrl(p) + '">' +
          '<span class="skill-card__img photo">' + img(im, { style: p.tile.focus ? "object-position:" + p.tile.focus : "" }) + "</span>" +
          '<span class="skill-card__label">' + esc(s.label) + "</span>" +
          '<span class="skill-card__proof">' + esc(s.proof) + "</span></a></li>"
        );
      })
      .join("");

    var proofs = a.proofs
      .map(function (p) {
        return (
          '<li class="proof">' + ICONS[p.icon] + '<span class="proof__value">' + esc(p.value) + "</span>" +
          '<span class="proof__text">' + (p.project ? projectLink(p.project, p.text) : esc(p.text)) + "</span></li>"
        );
      })
      .join("");

    var identity = a.identity
      .map(function (k) {
        var company = k.company
          ? companyLink("identity__logo", '<img data-logo="full" src="' + asset(logoSrc("full")) + '" width="' + c.full.w + '" height="' + c.full.h + '" alt="' + esc(c.full.alt) + '" loading="lazy">')
          : "";
        return (
          '<div class="identity__col' + (k.company ? " identity__col--company" : "") + '" ' + (k.company ? 'id="sensible-indocile"' : "") + "><h3>" + esc(k.label) + "</h3>" + company + "<ul>" +
          k.items.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" +
          (k.link ? "<p>" + ext(c.url, k.link) + "</p>" : "") + "</div>"
        );
      })
      .join("");

    var aboutLabel = S.nav[0].label;
    return (
      '<article class="about">' +
      '<header class="container about-hero reveal"><p class="eyebrow">' + esc(aboutLabel) + "</p>" +
      '<h1 class="about-hero__statement">' + esc(a.statement) + "</h1></header>" +

      '<section class="container about-intro" aria-label="' + esc(aboutLabel) + '">' +
      '<figure class="about-intro__photo photo reveal">' + img(a.photo, { eager: true }) + photoCredit(a.photo.credit) + "</figure>" +
      '<div class="about-intro__text reveal">' + pres + meta + "</div></section>" +

      '<section class="container block reveal" aria-labelledby="do-title"><h2 id="do-title">' + esc(a.doTitle) + "</h2>" +
      '<ul class="do-list">' + doList + "</ul></section>" +

      '<section class="container block reveal" aria-labelledby="soft-title"><h2 id="soft-title">' + esc(a.softwareTitle) + "</h2>" +
      '<div class="software">' + software + "</div></section>" +

      '<section class="container block reveal" aria-labelledby="proofs-title"><h2 id="proofs-title">' + esc(a.proofsTitle) + "</h2>" +
      '<ul class="proofs">' + proofs + "</ul></section>" +

      '<section class="container block reveal" aria-labelledby="dom-title"><h2 id="dom-title">' + esc(a.domainsTitle) + "</h2>" +
      '<ul class="domains">' + domains + "</ul></section>" +

      '<section class="container block reveal" aria-labelledby="identity-title"><h2 id="identity-title">' + esc(a.identityTitle) + "</h2>" +
      '<div class="identity">' + identity + "</div></section>" +

      '<section class="container block reveal" aria-labelledby="skills-title"><h2 id="skills-title">' + esc(a.skillsTitle) + "</h2>" +
      '<ul class="skill-cards">' + skills + "</ul>" +
      '<p class="cta"><a class="link-arrow" href="' + url("contacts/") + '">' + esc(a.cta) + "</a></p></section>" +
      "</article>"
    );
  }

  /* ---------- Rubriques et projets ---------- */

  function renderCategoryList(cat) {
    var c = S.categories[cat];
    return (
      '<section class="container"><header class="page-head reveal"><p class="eyebrow">' + esc(UI.section) + "</p><h1>" + esc(c.label) + "</h1>" +
      '<p class="page-head__format">' + esc(c.description) + "</p></header>" +
      '<ul class="mosaic mosaic--category">' + inCategory(cat).map(tile).join("") + "</ul></section>"
    );
  }

  function renderProject(p) {
    if (p.type === "audio") return renderAudio(p);
    var h = p.hero;
    var heroHtml = "";
    var vertical = false;
    if (h.type === "youtube" || h.type === "tiktok") {
      heroHtml = player(h);
      vertical = (h.ratio ? ratioNum(h.ratio) : h.type === "tiktok" ? 0.56 : 1.78) < 1;
    } else if (h.type === "image") {
      heroHtml = '<figure class="photo">' + img(h.image, { eager: true }) + "</figure>";
      vertical = h.image.h > h.image.w;
    } else if (S.showTodos) {
      heroHtml = '<div class="placeholder" style="--ar:' + h.ratio + '"><span>' + esc(h.label) + "</span></div>";
    }

    // Essentiel : rôle, chiffres clés, distinctions, méthode en une ligne, liens importants.
    var awards = "";
    if (p.awards && p.awards.length) {
      awards =
        '<ul class="awards" aria-label="' + esc(UI.awards) + '">' +
        p.awards.map(function (a) {
          return "<li>" + (a.icon ? ICONS[a.icon] : "") + "<strong>" + esc(a.label) + "</strong> " + esc(a.detail) +
            (a.source ? '<span class="awards__src">' + esc(a.source) + "</span>" : "") + "</li>";
        }).join("") + "</ul>";
    }
    var links = p.links || [];
    var linksHtml = links.length
      ? '<ul class="links">' + links.map(function (l) { return "<li" + (l.primary ? ' class="links__primary"' : "") + ">" + ext(l.url, l.label) + "</li>"; }).join("") + "</ul>"
      : "";

    var gal = gallery(p.galleryFirst ? [p.galleryFirst].concat(p.gallery || []) : p.gallery, UI.gallery);
    if (p.galleryTodo) gal += todo(p.galleryTodo);

    var press = "";
    if (p.pressImage) {
      press = '<figure class="press__clip photo">' + img(p.pressImage.image) + "<figcaption>" + esc(p.pressImage.credit) + "</figcaption></figure>";
    }

    return (
      '<article class="container project">' + pageHead(p) +
      '<div class="project__top reveal' + (vertical ? " project__top--vertical" : "") + '">' +
      (heroHtml ? '<div class="project__hero">' + heroHtml + "</div>" : "") +
      '<div class="essentials"><p class="essentials__role"><span class="label">' + esc(UI.role) + "</span>" + esc(p.role) + "</p>" +
      (p.stats && p.stats.length ? stats(p.stats, p.statsNote) : "") + awards +
      (p.method
        ? '<p class="essentials__method"><span class="label">' + esc(UI.method) + "</span>" + esc(p.method) +
          (p.methodNote ? '<span class="essentials__note">' + esc(p.methodNote) + "</span>" : "") + "</p>"
        : "") +
      (p.tools ? '<p class="essentials__method"><span class="label">' + esc(UI.toolsUsed) + "</span>" + esc(p.tools) + "</p>" : "") +
      (p.status ? '<p class="essentials__status">' + esc(p.status) + "</p>" : "") +
      (p.highlight ? '<p class="essentials__highlight">' + (p.highlight.icon ? ICONS[p.highlight.icon] : "") + "<span>" + esc(p.highlight.text) + "</span></p>" : "") +
      linksHtml + "</div></div>" +
      (gal ? '<section class="block reveal" aria-labelledby="gal"><h2 id="gal" class="sr-only">' + esc(UI.gallery) + "</h2>" + gal + "</section>" : "") +
      '<section class="block details reveal" aria-labelledby="cred"><div class="details__syn"><h2>' + esc(UI.synopsis) + "</h2><p>" + esc(p.synopsis) + "</p>" + press + "</div>" +
      '<div class="details__credits"><h2 id="cred">' + esc(UI.credits) + "</h2>" + credits(p.credits) + "</div></section>" +
      projectNav(p) + "</article>"
    );
  }

  function audioCard(it, role) {
    var cover = it.cover
      ? '<div class="audio-card__cover photo">' + img(it.cover) + "</div>"
      : it.status
        ? '<div class="audio-card__cover audio-card__cover--status"><span>' + esc(it.status) + "</span></div>"
        : S.showTodos
        ? '<div class="audio-card__cover placeholder placeholder--sq"><span>' + esc(UI.coverMissing) + "</span></div>"
        : "";
    var rows = [];
    rows.push("<div><dt>" + esc(UI.textBy) + "</dt><dd>" + (it.author ? esc(it.author) : todo("auteur ou autrice", true)) + "</dd></div>");
    rows.push("<div><dt>" + esc(UI.genre) + "</dt><dd>" + esc(it.genre) + "</dd></div>");
    if (it.series) rows.push("<div><dt>" + esc(UI.series) + "</dt><dd>" + esc(it.series) + "</dd></div>");
    rows.push("<div><dt>" + esc(UI.role) + "</dt><dd>" + esc(role) + "</dd></div>");
    var listen;
    if (it.extract) listen = '<audio controls preload="none" src="' + asset(it.extract) + '"></audio>';
    else if (it.listen) listen = '<p class="audio-card__listen">' + ext(it.listen.url, it.listen.label) + "</p>";
    else listen = it.status ? "" : todo("extrait audio ou lien d’écoute");
    if (it.extract && it.listen) listen += '<p class="audio-card__listen">' + ext(it.listen.url, it.listen.label) + "</p>";
    return (
      '<article class="audio-card reveal" id="' + it.slug + '">' + cover +
      '<div class="audio-card__body"><h4>' + esc(it.title) + "</h4>" +
      (it.titleTodo ? todo(it.titleTodo, true) : "") +
      '<dl class="credits credits--tight">' + rows.join("") + "</dl>" +
      (it.status ? '<p class="audio-card__status">' + esc(it.status) + "</p>" : "") +
      listen + "</div></article>"
    );
  }

  function renderAudio(p) {
    var ac = p.activity;
    var groups = p.groups
      .map(function (g) {
        return (
          '<section class="audio-group" aria-labelledby="g-' + g.id + '">' +
          '<header><p class="eyebrow">' + esc(g.label) + "</p>" +
          '<h3 id="g-' + g.id + '">' + esc(g.title) + "</h3>" +
          (g.note ? '<p class="audio-group__note">' + esc(g.note) + "</p>" : "") + "</header>" +
          '<div class="audio-list">' + g.items.map(function (it) { return audioCard(it, p.itemRole); }).join("") + "</div></section>"
        );
      })
      .join("");
    return (
      '<article class="container project project--audio">' + pageHead(p) +
      '<div class="audio-intro reveal"><div><p>' + esc(p.intro[p.intro.length - 1]) + "</p></div></div>" +
      '<section class="block reveal" aria-labelledby="act"><h2 id="act">' + esc(ac.title) + "</h2>" +
      '<ol class="contrib contrib--steps">' +
      ac.steps.map(function (s) { return "<li>" + (s.icon ? ICONS[s.icon] : "") + "<h3>" + esc(s.title) + "</h3><p>" + esc(s.text) + "</p></li>"; }).join("") +
      "</ol>" + stats(ac.stats, ac.note) + "</section>" +
      '<section class="block" aria-labelledby="prods"><h2 id="prods">' + esc(UI.eightProductions) + "</h2>" + groups +
      '<p class="audio-credit">' + esc(p.credit) + "</p></section>" +
      projectNav(p) + "</article>"
    );
  }

  /* ---------- Acting ---------- */

  function renderActing() {
    var a = S.acting;
    function portrait(x, eager) {
      var wide = ratioNum(x.ratio) > 1;
      var i = {
        src: "assets/img/acting/portrait-" + num(x.n - 1) + ".webp",
        w: x.w,
        h: x.h,
        alt: (LANG === "fr" ? "Portrait de comédienne — photo : " : "Actress portrait — photo: ") + x.credit
      };
      return (
        '<li class="portrait portrait--' + x.size + (wide ? " portrait--wide" : "") + ' reveal"><figure>' +
        '<div class="portrait__frame photo" style="--ar:' + x.ratio + '">' +
        img(i, { eager: eager, style: "object-position:" + x.focus }) + "</div>" +
        "<figcaption>" + esc(UI.photo + x.credit) + "</figcaption></figure></li>"
      );
    }
    var large = a.portraits.filter(function (x) { return x.size === "large"; });
    var small = a.portraits.filter(function (x) { return x.size === "small"; });

    var reel = a.reel.url || a.reel.youtubeId
      ? player({ type: "youtube", id: a.reel.youtubeId, url: a.reel.url, title: a.reel.title, label: a.reel.label, loop: a.reel.loop, ratio: a.reel.ratio, poster: a.reel.poster })
      : S.showTodos
        ? '<div class="placeholder" style="--ar:16 / 9"><span>' + esc(a.reel.label) + "</span></div>"
        : "";

    function rep(x) {
      return (
        '<li><span class="rep-inline__label">' + esc(x.label) + "</span>" +
        '<span class="rep-inline__name">' + esc(x.name) + "</span>" + ext(x.url, UI.viewPage) + "</li>"
      );
    }

    return (
      '<article class="container project"><header class="page-head page-head--acting reveal">' +
      '<div class="page-head__main"><p class="eyebrow">' + esc(UI.section) + "</p><h1>" + esc(S.nav[5].label) + "</h1>" +
      '<p class="page-head__format">' + esc(a.intro) + "</p>" +
      '<p class="page-head__link"><a class="link-arrow" href="#demo">' + esc(UI.demoLink) + "</a></p></div>" +
      '<div class="page-head__side"><ul class="rep-inline" aria-label="' + esc(UI.representation) + '">' + rep(a.agent) + rep(a.adAgent) + "</ul>" +
      '<p class="muted">' + esc(a.cvNote) + "</p></div></header>" +
      '<section aria-labelledby="por"><h2 id="por" class="sr-only">' + esc(UI.portraits) + "</h2>" +
      '<ul class="portraits portraits--large">' + large.map(function (x, i) { return portrait(x, i === 0); }).join("") + "</ul>" +
      '<ul class="portraits portraits--small">' + small.map(function (x) { return portrait(x, false); }).join("") + "</ul></section>" +
      '<section class="block acting-media reveal" id="demo"><div><h2>' + esc(a.reel.label) + "</h2>" + reel + "</div>" +
      "<div><h2>" + esc(a.voice.label) + "</h2>" +
      (a.voice.src ? '<audio class="voice__player" controls preload="none" aria-label="' + esc(a.voice.label) + '" src="' + asset(a.voice.src) + '"></audio>' : "") +
      '<p class="voice"><a class="btn" href="' + a.voice.url + '" target="_blank" rel="noopener noreferrer">' +
      esc(a.voice.linkLabel) + '<span aria-hidden="true"> ↗</span><span class="sr-only"> ' + esc(UI.newTab) + "</span></a></p>" +
      '<p class="muted">' + ext(a.voiceNote.url, a.voiceNote.label) + "</p>" +
      '<h2 class="acting-awards__title">' + esc(a.awards.label) + "</h2>" +
      '<p class="acting-award">' + (a.awards.icon ? ICONS[a.awards.icon] : "") + "<span>" + esc(a.awards.before) +
      projectLink(a.awards.film) + esc(a.awards.after) + "</span></p></div></section></article>"
    );
  }

  function renderContact() {
    var c = S.contact;
    var extra = (c.links || [])
      .map(function (l) {
        return '<li><span class="label">' + esc(l.label) + "</span>" + ext(l.url, l.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")) + "</li>";
      })
      .join("");
    return (
      '<article class="container prose-page"><header class="page-head reveal"><p class="eyebrow">' + esc(S.nav[6].label) + "</p><h1>" + esc(c.intro) + "</h1>" +
      '<p class="page-head__format">' + esc(c.note) + "</p></header>" +
      '<ul class="contact-list">' +
      (c.available ? '<li class="contact-available"><span class="label">' + esc(UI.available) + "</span><span>" + esc(c.available) + "</span></li>" : "") +
      '<li><span class="label">' + esc(UI.email) + '</span><a class="contact-big" href="mailto:' + S.email + '">' + esc(S.email) + "</a></li>" +
      '<li><span class="label">' + esc(UI.linkedin) + "</span>" + ext(S.linkedin, UI.linkedin) + "</li>" + extra +
      "</ul></article>"
    );
  }

  // « Ce que je fais » : un clic ouvre ou referme tous les éléments de la même ligne de la grille.
  function initDo() {
    var items = Array.prototype.slice.call(document.querySelectorAll(".do-item"));
    if (!items.length) return;
    items.forEach(function (li) {
      li.querySelector(".do-item__btn").addEventListener("click", function () {
        var top = li.offsetTop;
        var open = this.getAttribute("aria-expanded") !== "true";
        items.forEach(function (o) {
          if (Math.abs(o.offsetTop - top) > 2) return;
          o.querySelector(".do-item__btn").setAttribute("aria-expanded", open ? "true" : "false");
          o.querySelector(".do-item__body").hidden = !open;
        });
      });
    });
  }

  /* ---------- Apparition progressive ---------- */

  function initReveal() {
    if (REDUCED || !("IntersectionObserver" in window)) return;
    var els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    document.documentElement.classList.add("has-reveal");
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.05 }
    );
    els.forEach(function (el) {
      io.observe(el);
    });
  }

  /* ---------- Montage ---------- */

  function render() {
    var page = body.dataset.page;
    var html;
    if (page === "home") html = renderHome();
    else if (page === "projects") html = renderProjects();
    else if (page === "about") html = renderAbout();
    else if (page === "acting") html = renderActing();
    else if (page === "contact") html = renderContact();
    else if (page === "category") {
      var list = inCategory(body.dataset.category);
      html = list.length === 1 ? renderProject(list[0]) : renderCategoryList(body.dataset.category);
    } else if (page === "project") html = renderProject(byId(body.dataset.project));
    else html = "";

    var bare = page === "home";
    document.getElementById("site-header").innerHTML = bare ? "" : renderHeader();
    document.getElementById("main").innerHTML = html;
    document.getElementById("site-footer").innerHTML = bare ? "" : renderFooter();
    document.documentElement.classList.add("is-ready");
    initTheme();
    initMenu();
    initDo();
    initLoops();
    initReveal();
    // Ancre éventuelle (ex. a-propos/#sensible-indocile) : le contenu est généré après le chargement.
    if (location.hash) {
      var t = document.getElementById(location.hash.slice(1));
      if (t) t.scrollIntoView();
    }
  }

  render();
})();
