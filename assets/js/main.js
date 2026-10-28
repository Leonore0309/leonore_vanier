/*
 * Rendu des pages à partir de window.SITE (assets/js/data.js).
 * Chaque page HTML est une « coquille » portant :
 *   data-root     chemin relatif vers la racine du site ("./", "../", "../../")
 *   data-page     home | about | category | project | acting | contact
 *   data-section  entrée de menu active
 *   data-category / data-project  selon la page
 */
(function () {
  "use strict";

  var S = window.SITE;
  var body = document.body;
  var ROOT = body.dataset.root || "./";

  /* ---------- Utilitaires ---------- */

  // Typographie française : espaces insécables avant ; : ? ! % », après «, et dans les milliers.
  function nb(s) {
    return String(s)
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
  function url(path) {
    return ROOT + path;
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
  // Une catégorie à projet unique développe directement ce projet.
  function projectUrl(p) {
    var cat = S.categories[p.category];
    return inCategory(p.category).length === 1 ? url(cat.path) : url(cat.path + p.slug + "/");
  }
  function todo(text, inline) {
    if (!S.showTodos) return "";
    var tag = inline ? "span" : "p";
    return "<" + tag + ' class="todo">À compléter — ' + esc(text) + "</" + tag + ">";
  }
  function img(i, opts) {
    opts = opts || {};
    return (
      '<img src="' + url(i.src) + '" width="' + i.w + '" height="' + i.h + '" alt="' + esc(i.alt) + '"' +
      (opts.eager ? ' fetchpriority="high"' : ' loading="lazy"') +
      ' decoding="async">'
    );
  }
  function ext(href, label) {
    return (
      '<a class="link-ext" href="' + href + '" target="_blank" rel="noopener noreferrer">' +
      esc(label) + '<span aria-hidden="true"> ↗</span><span class="sr-only"> (nouvel onglet)</span></a>'
    );
  }
  function ratioNum(r) {
    var p = r.split("/");
    return parseFloat(p[0]) / parseFloat(p[1]);
  }

  /* ---------- En-tête, pied de page ---------- */

  function renderHeader() {
    var section = body.dataset.section || "";
    var links = S.nav
      .map(function (n) {
        var cur = n.id === section ? ' aria-current="page"' : "";
        return '<li><a href="' + url(n.path) + '"' + cur + ">" + esc(n.label) + "</a></li>";
      })
      .join("");
    return (
      '<header class="site-header"><div class="container site-header__bar">' +
      '<a class="brand" href="' + url("") + '">' + esc(S.name) + "</a>" +
      '<button class="menu-btn" type="button" aria-expanded="false" aria-controls="site-nav">' +
      '<span class="menu-btn__label">Menu</span><span class="menu-btn__icon" aria-hidden="true"></span></button>' +
      '<nav id="site-nav" class="site-nav" aria-label="Navigation principale"><ul>' + links + "</ul></nav>" +
      "</div></header>"
    );
  }

  function renderFooter() {
    return (
      '<footer class="site-footer"><div class="container site-footer__inner">' +
      "<p>© " + new Date().getFullYear() + " " + esc(S.name) + " · " + esc(S.title) + "</p>" +
      '<p><a href="mailto:' + S.email + '">' + esc(S.email) + "</a> · " +
      ext(S.linkedin, "LinkedIn") + "</p></div></footer>"
    );
  }

  function initMenu() {
    var btn = document.querySelector(".menu-btn");
    var nav = document.getElementById("site-nav");
    if (!btn || !nav) return;
    function set(open) {
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      nav.classList.toggle("is-open", open);
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

  /* ---------- Composants ---------- */

  function tile(p, idx) {
    var t = p.tile;
    var n = t.images.length;
    var media;
    if (n) {
      media = t.images
        .map(function (i) {
          return img(i, { eager: idx === 0 });
        })
        .join("");
    } else {
      media = '<span class="tile__placeholder">' + esc(t.placeholder || "Visuel à fournir") + "</span>";
    }
    return (
      '<li class="mosaic__item mosaic__item--' + (idx + 1) + '">' +
      '<a class="tile" href="' + projectUrl(p) + '">' +
      '<span class="tile__frame" style="--ar:' + t.ratio + '">' +
      '<span class="tile__media tile__media--' + (n || 1) + '">' + media + "</span>" +
      '<span class="tile__veil" aria-hidden="true"></span>' +
      '<span class="tile__role"><span class="sr-only">Rôle : </span>' + esc(p.role) + "</span>" +
      "</span>" +
      '<span class="tile__caption"><span class="tile__title">' + esc(p.title) + "</span>" +
      '<span class="tile__format">' + esc(p.format) + "</span></span>" +
      "</a></li>"
    );
  }

  function player(h) {
    var ratio = h.ratio || (h.type === "tiktok" ? "9 / 16" : "16 / 9");
    var vertical = ratioNum(ratio) < 1;
    return (
      '<div class="player' + (vertical ? " player--vertical" : "") + '" style="--ar:' + ratio + '" ' +
      'data-type="' + h.type + '" data-id="' + h.id + '" data-title="' + esc(h.title) + '">' +
      img(h.poster, { eager: true }) +
      '<button class="player__btn" type="button" aria-label="Lire la vidéo : ' + esc(h.title) + '">' +
      '<svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" focusable="false"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>' +
      "</button></div>"
    );
  }

  function initPlayers() {
    document.querySelectorAll(".player").forEach(function (el) {
      var btn = el.querySelector(".player__btn");
      btn.addEventListener("click", function () {
        var src =
          el.dataset.type === "tiktok"
            ? "https://www.tiktok.com/embed/v2/" + el.dataset.id
            : "https://www.youtube-nocookie.com/embed/" + el.dataset.id + "?autoplay=1&rel=0";
        var f = document.createElement("iframe");
        f.src = src;
        f.title = el.dataset.title;
        f.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
        f.allowFullscreen = true;
        f.referrerPolicy = "strict-origin-when-cross-origin";
        el.innerHTML = "";
        el.classList.add("is-playing");
        el.appendChild(f);
        f.focus();
      });
    });
  }

  function gallery(items, label) {
    if (!items || !items.length) return "";
    return (
      '<ul class="gallery" aria-label="' + esc(label) + '">' +
      items
        .map(function (i) {
          var r = i.w / i.h;
          return (
            '<li style="flex:' + r.toFixed(3) + " 1 " + Math.round(r * 200) + "px;max-width:" + i.w + 'px"><figure>' +
            img(i) +
            (i.caption ? "<figcaption>" + esc(i.caption) + "</figcaption>" : "") +
            "</figure></li>"
          );
        })
        .join("") +
      "</ul>"
    );
  }

  function stats(list, note) {
    if (!list || !list.length) return "";
    return (
      '<ul class="stats">' +
      list
        .map(function (s) {
          return '<li><span class="stats__value">' + esc(s.value) + '</span><span class="stats__label">' + esc(s.label) + "</span></li>";
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
        '<li class="pnav__' + dir + '"><a href="' + projectUrl(q) + '"><span class="pnav__dir">' + label +
        '</span><span class="pnav__title">' + esc(q.title) + '</span><span class="pnav__role">' + esc(q.format) + "</span></a></li>"
      );
    }
    return (
      '<nav class="pnav" aria-label="Autres projets"><ul>' +
      item(prev, "prev", "← Projet précédent") + item(next, "next", "Projet suivant →") +
      '</ul><p class="pnav__all"><a href="' + url("") + '#projets">Tous les projets</a></p></nav>'
    );
  }

  function pageHead(p) {
    var cat = S.categories[p.category];
    var single = inCategory(p.category).length === 1;
    return (
      '<header class="page-head">' +
      '<p class="eyebrow">' + (single ? esc(cat.label) : '<a href="' + url(cat.path) + '">' + esc(cat.label) + "</a>") + "</p>" +
      "<h1>" + esc(p.title) + "</h1>" +
      '<p class="page-head__format">' + esc(p.format) + "</p>" +
      '<p class="page-head__role"><span class="label">Mon rôle</span> ' + esc(p.role) + "</p></header>"
    );
  }

  /* ---------- Pages ---------- */

  function renderHome() {
    var a = S.about;
    return (
      '<section class="container intro" aria-labelledby="home-title">' +
      '<figure class="intro__photo">' + img(a.photo, { eager: true }) + "</figure>" +
      '<div class="intro__text"><h1 id="home-title" class="intro__name">' + esc(S.name) + "</h1>" +
      '<p class="intro__title">' + esc(S.title) + "</p>" +
      '<p class="intro__blurb">' + esc(a.home) + "</p>" +
      '<p><a class="link-arrow" href="' + url("a-propos/") + '">Découvrir mon parcours</a></p></div></section>' +
      '<section class="container" id="projets" aria-labelledby="projets-title">' +
      '<h2 id="projets-title" class="sr-only">Projets</h2><ul class="mosaic">' +
      S.projects.map(tile).join("") +
      "</ul></section>"
    );
  }

  function renderAbout() {
    var a = S.about;
    return (
      '<article class="container prose-page"><header class="page-head"><p class="eyebrow">À propos</p>' +
      "<h1>" + esc(S.name) + "</h1>" +
      '<p class="page-head__format">' + esc(S.title) + "</p></header>" +
      '<div class="about-top"><figure class="about-top__photo">' + img(a.photo, { eager: true }) + "</figure>" +
      '<div class="about-top__text"><p class="lead">' + esc(a.lead) + "</p>" +
      a.paragraphs.map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("") +
      '<ul class="tags" aria-label="Formations">' +
      a.formation.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul>" +
      todo("intitulés exacts et années des formations") + "</div></div>" +
      '<section class="block" aria-labelledby="pil"><h2 id="pil">Une double expertise : ingénierie &amp; création</h2><ul class="pillars">' +
      a.pillars.map(function (p) { return "<li><h3>" + esc(p.title) + "</h3><p>" + esc(p.text) + "</p></li>"; }).join("") +
      "</ul></section>" +
      '<section class="block" aria-labelledby="exp"><h2 id="exp">Grand groupe &amp; entrepreneuriat</h2><ul class="timeline">' +
      a.timeline.map(function (t) {
        return "<li><h3>" + esc(t.label) + '</h3><p class="timeline__role">' + esc(t.role) + "</p><p>" + esc(t.text) + "</p>" +
          (t.dates ? '<p class="timeline__dates">' + esc(t.dates) + "</p>" : todo("dates", true)) + "</li>";
      }).join("") + "</ul></section>" +
      '<p class="cta"><a class="link-arrow" href="' + url("contacts/") + '">Échangeons sur vos projets</a></p></article>'
    );
  }

  function renderCategoryList(cat) {
    var list = inCategory(cat);
    var c = S.categories[cat];
    return (
      '<section class="container"><header class="page-head"><p class="eyebrow">Rubrique</p><h1>' + esc(c.label) + "</h1>" +
      '<p class="page-head__format">' + esc(c.description) + "</p></header>" +
      '<ul class="mosaic mosaic--category">' + list.map(tile).join("") + "</ul></section>"
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
      heroHtml = "<figure>" + img(h.image, { eager: true }) + "</figure>";
    } else if (S.showTodos) {
      heroHtml = '<div class="placeholder" style="--ar:' + h.ratio + '"><span>' + esc(h.label) + "</span></div>";
    }

    var work = "";
    if (p.intro && p.intro.length) {
      work += p.intro.map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("");
    } else {
      work += todo("présentation de l’œuvre (synopsis, ton, format)");
    }
    (p.sections || []).forEach(function (s) {
      work += "<h3>" + esc(s.title) + "</h3><p>" + esc(s.text) + "</p>";
    });

    var awards = "";
    if (p.awards && p.awards.length) {
      awards =
        '<ul class="awards" aria-label="Distinctions et sélections">' +
        p.awards.map(function (a) {
          return "<li><strong>" + esc(a.label) + "</strong> " + esc(a.detail) +
            (a.source ? '<span class="awards__src">' + esc(a.source) + "</span>" : "") + "</li>";
        }).join("") + "</ul>";
    }

    var contrib = "";
    if (p.contributionsLead) contrib += '<p class="lead-sm">' + esc(p.contributionsLead) + "</p>";
    if (p.contributions && p.contributions.length) {
      var steps = p.contributions.length > 3 && p.id === "le-controle-sanitaire";
      contrib += '<ol class="contrib' + (steps ? " contrib--steps" : "") + '">' +
        p.contributions.map(function (c) {
          return "<li><h3>" + esc(c.title) + "</h3><p>" + esc(c.text) + "</p></li>";
        }).join("") + "</ol>";
    }
    if (!contrib) contrib = todo("mes contributions concrètes sur ce projet");
    if (p.tools) {
      contrib += '<h3>Outils expérimentés</h3><ul class="tags">' +
        p.tools.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>";
    }

    var press = "";
    if (p.press) {
      press =
        '<aside class="press" aria-label="Presse"><p class="eyebrow">Presse</p>' +
        '<p class="press__title">' + esc(p.press.title) + "</p>" +
        '<p class="press__meta">' + esc(p.press.outlet) + " · " + esc(p.press.author) + " · " + esc(p.press.date) + "</p>" +
        "<p>" + ext(p.press.url, "Lire l’article") + "</p></aside>";
    }

    var gal = gallery(p.gallery, "Galerie");
    if (p.galleryTodo) gal += todo(p.galleryTodo);

    var links = (p.links || []).length
      ? '<ul class="links">' + p.links.map(function (l) { return "<li>" + ext(l.url, l.label) + "</li>"; }).join("") + "</ul>"
      : "";

    return (
      '<article class="container project">' + pageHead(p) +
      '<div class="project__top' + (vertical ? " project__top--vertical" : "") + '">' +
      (heroHtml ? '<div class="project__hero">' + heroHtml + "</div>" : "") +
      '<div class="project__intro"><h2>L’œuvre</h2>' + work +
      (p.stats && p.stats.length ? '<h2 class="h-gap">Chiffres clés</h2>' + stats(p.stats, p.statsNote) : "") +
      awards + press + "</div></div>" +
      '<section class="block project__contrib" aria-labelledby="contrib"><h2 id="contrib">Ma contribution</h2>' + contrib + "</section>" +
      (gal ? '<section class="block" aria-labelledby="gal"><h2 id="gal">Galerie</h2>' + gal + "</section>" : "") +
      '<section class="block" aria-labelledby="cred"><h2 id="cred">Fiche et crédits</h2>' + credits(p.credits) + links + "</section>" +
      projectNav(p) + "</article>"
    );
  }

  function audioCard(it, role) {
    var cover = it.cover
      ? '<div class="audio-card__cover">' + img(it.cover) + "</div>"
      : S.showTodos
        ? '<div class="audio-card__cover placeholder placeholder--sq"><span>Couverture à fournir</span></div>'
        : "";
    var rows = [];
    rows.push("<div><dt>Texte de</dt><dd>" + (it.author ? esc(it.author) : todo("auteur ou autrice", true)) + "</dd></div>");
    rows.push("<div><dt>Genre</dt><dd>" + esc(it.genre) + "</dd></div>");
    if (it.series) rows.push("<div><dt>Série</dt><dd>" + esc(it.series) + "</dd></div>");
    rows.push("<div><dt>Mon rôle</dt><dd>" + esc(role) + "</dd></div>");
    var listen;
    if (it.extract) listen = '<audio controls preload="none" src="' + url(it.extract) + '"></audio>';
    else if (it.listen) listen = '<p class="audio-card__listen">' + ext(it.listen.url, it.listen.label) + "</p>";
    else listen = todo("extrait audio ou lien d’écoute");
    if (it.extract && it.listen) listen += '<p class="audio-card__listen">' + ext(it.listen.url, it.listen.label) + "</p>";
    return (
      '<article class="audio-card" id="' + it.slug + '">' + cover +
      '<div class="audio-card__body"><h4>' + esc(it.title) + "</h4>" +
      (it.titleTodo ? todo(it.titleTodo, true) : "") +
      '<dl class="credits credits--tight">' + rows.join("") + "</dl>" +
      (it.summary ? "<p>" + esc(it.summary) + "</p>" : todo("présentation courte (2 à 3 phrases)")) +
      listen + "</div></article>"
    );
  }

  function renderAudio(p) {
    var ac = p.activity;
    var groups = p.groups
      .map(function (g) {
        var tri = g.id === "trilogie";
        return (
          '<section class="audio-group' + (tri ? " audio-group--trilogy" : "") + '" aria-labelledby="g-' + g.id + '">' +
          '<header><p class="eyebrow">' + esc(g.label) + "</p>" +
          '<h3 id="g-' + g.id + '">' + esc(g.title) + "</h3>" +
          (g.note ? '<p class="audio-group__note">' + esc(g.note) + "</p>" : "") + "</header>" +
          '<div class="audio-list">' + g.items.map(function (it) { return audioCard(it, p.itemRole); }).join("") + "</div></section>"
        );
      })
      .join("");
    return (
      '<article class="container project project--audio">' + pageHead(p) +
      '<div class="audio-intro"><div>' + p.intro.map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("") + "</div></div>" +
      '<section class="block" aria-labelledby="act"><h2 id="act">' + esc(ac.title) + "</h2>" +
      '<ol class="contrib contrib--steps">' +
      ac.steps.map(function (s) { return "<li><h3>" + esc(s.title) + "</h3><p>" + esc(s.text) + "</p></li>"; }).join("") +
      "</ol>" + stats(ac.stats, ac.note) + "</section>" +
      '<section class="block" aria-labelledby="prods"><h2 id="prods">Les huit productions</h2>' + groups +
      '<p class="audio-credit">' + esc(p.credit) + "</p></section>" +
      projectNav(p) + "</article>"
    );
  }

  function renderActing() {
    var a = S.acting;
    var portraits = a.portraits
      .map(function (x) {
        return S.showTodos ? '<li class="placeholder placeholder--portrait"><span>' + esc(x.label) + " · à fournir</span></li>" : "";
      })
      .join("");
    var reel = a.reel.youtubeId
      ? player({ type: "youtube", id: a.reel.youtubeId, title: a.reel.label, poster: a.reel.poster })
      : S.showTodos
        ? '<div class="placeholder" style="--ar:16 / 9"><span>' + esc(a.reel.todo) + "</span></div>"
        : "";
    var voice = a.voice.src
      ? '<audio controls preload="none" src="' + url(a.voice.src) + '"></audio>'
      : a.voice.url
        ? "<p>" + ext(a.voice.url, a.voice.label) + "</p>"
        : todo(a.voice.todo);
    function agent(x) {
      if (x.url) return '<li>' + ext(x.url, x.label) + "</li>";
      return S.showTodos ? '<li><span class="btn-todo">' + esc(x.label) + " — à compléter : " + esc(x.todo) + "</span></li>" : "";
    }
    return (
      '<article class="container project"><header class="page-head"><p class="eyebrow">Rubrique</p><h1>Acting</h1>' +
      '<p class="page-head__format">' + esc(a.intro) + "</p></header>" +
      (portraits ? '<section class="block" aria-labelledby="por"><h2 id="por">Portraits</h2><ul class="portraits">' + portraits + "</ul></section>" : "") +
      '<section class="block acting-media"><div><h2>Bande-démo</h2>' + reel + "</div>" +
      "<div><h2>Démo voix</h2>" + voice +
      '<p class="muted">' + ext(a.voiceNote.url, a.voiceNote.label) + "</p></div></section>" +
      '<section class="block" aria-labelledby="rep"><h2 id="rep">Représentation</h2><ul class="links">' +
      agent(a.agency) + agent(a.adAgent) + "</ul>" +
      '<p class="muted">' + esc(a.cvNote) + "</p></section></article>"
    );
  }

  function renderContact() {
    var c = S.contact;
    return (
      '<article class="container prose-page"><header class="page-head"><p class="eyebrow">Contacts</p><h1>' + esc(c.intro) + "</h1>" +
      '<p class="page-head__format">' + esc(c.note) + "</p></header>" +
      '<ul class="contact-list">' +
      '<li><span class="label">E-mail</span><a class="contact-big" href="mailto:' + S.email + '">' + esc(S.email) + "</a></li>" +
      '<li><span class="label">LinkedIn</span>' + ext(S.linkedin, "Léonore Vanier sur LinkedIn") + "</li></ul></article>"
    );
  }

  /* ---------- Montage ---------- */

  function render() {
    var page = body.dataset.page;
    var html;
    if (page === "home") html = renderHome();
    else if (page === "about") html = renderAbout();
    else if (page === "acting") html = renderActing();
    else if (page === "contact") html = renderContact();
    else if (page === "category") {
      var list = inCategory(body.dataset.category);
      html = list.length === 1 ? renderProject(list[0]) : renderCategoryList(body.dataset.category);
    } else if (page === "project") html = renderProject(byId(body.dataset.project));
    else html = "";

    document.getElementById("site-header").innerHTML = renderHeader();
    document.getElementById("main").innerHTML = html;
    document.getElementById("site-footer").innerHTML = renderFooter();
    document.documentElement.classList.add("is-ready");
    initMenu();
    initPlayers();
  }

  render();
})();
