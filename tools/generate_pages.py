"""Génère les pages « coquilles » du site (français à la racine, anglais sous en/).

Usage (depuis la racine du dépôt) :  python tools/generate_pages.py

Chaque page ne contient que son titre, sa description et quelques attributs ; le contenu est rendu par
assets/js/main.js à partir de data.js (français) et data.en.js (anglais). Pour ajouter une page, ajouter
une ligne à PAGES puis relancer ce script. Le script de HEAD_SCRIPT pose data-theme (préférence mémorisée, sinon réglage du système) avant l'affichage.
"""
import datetime, json, os, sys

repo = sys.argv[1] if len(sys.argv) > 1 else os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NAME = "Léonore Vanier"
# Adresse publique de référence : la copie hébergée par le site de la compagnie (voir tools/publish_cie.py).
BASE = "https://lacompagniesensibleindocile.fr/leonore_vanier/"
OG_IMAGE = BASE + "assets/img/a-propos/leonore-tournage.webp"
# Pour les données structurées de l’accueil (mêmes liens que data.js)
SAME_AS = [
    "https://www.linkedin.com/in/l%C3%A9onore-vanier/",
    "https://www.instagram.com/leonorevanier/",
    "https://www.filmmakers.eu/en/actors/leonore-vanier",
    "https://lacompagniesensibleindocile.fr/",
]

# (chemin, page, section, attributs, titre FR, description FR, titre EN, description EN)
PAGES = [
    ("", "home", "", "",
     NAME + " — Productrice artistique · Creative Producer · Cheffe de projet vidéo",
     "Portfolio de Léonore Vanier, productrice artistique, Creative Producer et cheffe de projet vidéo : fiction, audio, IA et spectacles vivants, de la conception à la réalisation. Fondatrice de la Compagnie Sensible Indocile.",
     NAME + " — Artistic producer · Creative Producer · Video project manager",
     "Portfolio of Léonore Vanier, artistic producer, Creative Producer and video project manager: fiction, audio, AI and live performance, from concept to delivery. Founder of the Compagnie Sensible Indocile."),
    ("projets", "projects", "projets", "",
     "Projets — " + NAME,
     "Les projets de Léonore Vanier : fiction, audio, IA et spectacles vivants : mosaïque des réalisations.",
     "Projects — " + NAME,
     "Léonore Vanier's projects: fiction, audio, AI and live performance: a mosaic of her work."),
    ("a-propos", "about", "a-propos", "",
     "À propos — " + NAME,
     "Parcours de Léonore Vanier : ingénieure et créatrice, elle accompagne des projets audiovisuels et artistiques de leur conception à leur réalisation.",
     "About — " + NAME,
     "Léonore Vanier's background: engineer and creator, she supports audiovisual and artistic projects from concept to delivery."),
    ("fiction", "category", "fiction", 'data-category="fiction"',
     "Fiction — " + NAME,
     "Fiction : Le Contrôle sanitaire, ADAM (mini-série de FeatureProd) et Sous ta peau brûlante.",
     "Fiction — " + NAME,
     "Fiction: Le Contrôle sanitaire, ADAM (a FeatureProd mini-series) and Sous ta peau brûlante."),
    ("fiction/le-controle-sanitaire", "project", "fiction", 'data-project="le-controle-sanitaire"',
     "Le Contrôle sanitaire — " + NAME,
     "Le Contrôle sanitaire, court-métrage de fiction 2026, un film de Léonore Vanier et Juliette Ganay. Sélections en festivals et mention spéciale.",
     "Le Contrôle sanitaire — " + NAME,
     "Le Contrôle sanitaire, a 2026 short fiction film by Léonore Vanier and Juliette Ganay. Festival selections and a special mention."),
    ("fiction/adam", "project", "fiction", 'data-project="adam"',
     "ADAM — " + NAME,
     "ADAM, mini-série produite par FeatureProd. Léonore Vanier y est chargée de production et assistante réalisatrice.",
     "ADAM — " + NAME,
     "ADAM, a mini-series produced by FeatureProd. Léonore Vanier is production coordinator and assistant director."),
    ("fiction/sous-ta-peau-brulante", "project", "fiction", 'data-project="sous-ta-peau-brulante"',
     "Sous ta peau brûlante — " + NAME,
     "Sous ta peau brûlante, court-métrage de fiction (2025, 1 min) écrit et réalisé par Léonore Vanier.",
     "Sous ta peau brûlante — " + NAME,
     "Sous ta peau brûlante, a short fiction film (2025, 1 min) written and directed by Léonore Vanier."),
    ("audio", "category", "audio", 'data-category="audio"',
     "Audio — Productions de livres audio — " + NAME,
     "Huit productions de livres audio : six thrillers, dont une trilogie, et deux romances. Production, direction artistique et narration.",
     "Audio — Audiobook productions — " + NAME,
     "Eight audiobook productions: six thrillers, including a trilogy, and two romances. Production, artistic direction and narration."),
    ("ia", "category", "ia", 'data-category="ia"',
     "IA — Life on Xenia — " + NAME,
     "Life on Xenia, fiction verticale créée avec des outils de génération vidéo IA : écriture, génération, itérations et sélection des plans.",
     "AI — Life on Xenia — " + NAME,
     "Life on Xenia, a vertical fiction series made with AI video generation tools: writing, generation, iterations and shot selection."),
    ("spectacles-vivants", "category", "spectacles-vivants", 'data-category="spectacles-vivants"',
     "LE BAIN — Spectacles vivants — " + NAME,
     "LE BAIN, théâtre contemporain à Paris et au Festival OFF Avignon 2026 : production, écriture et co-mise en scène par Léonore Vanier.",
     "LE BAIN — Live performance — " + NAME,
     "LE BAIN, contemporary theatre in Paris and at the Festival OFF Avignon 2026: production, writing and co-direction by Léonore Vanier."),
    ("acting", "acting", "acting", "",
     "Acting — " + NAME,
     "Léonore Vanier, comédienne : portraits, bande-démo, démo voix et représentation.",
     "Acting — " + NAME,
     "Léonore Vanier, actress: portraits, showreel, voice reel and representation."),
    ("contacts", "contact", "contacts", "",
     "Contacts — " + NAME,
     "Contacter Léonore Vanier, productrice artistique et cheffe de projet vidéo, par e-mail ou sur LinkedIn.",
     "Contact — " + NAME,
     "Contact Léonore Vanier, artistic producer and video project manager, by e-mail or on LinkedIn."),
]

HEAD_SCRIPT = """<script>
(function(){var d=document.documentElement,t=null;try{t=localStorage.getItem("lv-theme")}catch(e){}
if(t!=="light"&&t!=="dark"){t=(window.matchMedia&&matchMedia("(prefers-color-scheme: light)").matches)?"light":"dark"}
d.setAttribute("data-theme",t)})();
</script>
"""

TEMPLATE = """<!doctype html>
<html lang="{lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc}">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Léonore Vanier">
<meta property="og:locale" content="{og_locale}">
<meta property="og:image" content="{og_image}">
{canonical}<meta name="theme-color" content="#03141a">
<link rel="alternate" hreflang="fr" href="{href_fr}">
<link rel="alternate" hreflang="en" href="{href_en}">
{xdefault}{jsonld}{head_script}<link rel="icon" href="{root}assets/img/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Anton&amp;family=Cormorant+Garamond:wght@500&amp;family=DM+Sans:wght@400;500;700&amp;display=swap">
<link rel="stylesheet" href="{root}assets/css/style.css">
</head>
<body data-root="{root}" data-lang-root="{lroot}" data-path="{path}" data-page="{page}" data-section="{section}"{extra}>
<a class="skip" href="#main">{skip}</a>
<div id="site-header"></div>
<main id="main" tabindex="-1">
<noscript>
<div class="container prose-page">
<h1>{name}</h1>
<p>{noscript}</p>
<p><a href="mailto:leonore.vanier@gmail.com">leonore.vanier@gmail.com</a></p>
</div>
</noscript>
</main>
<div id="site-footer"></div>
<script src="{root}assets/js/data.js" defer></script>
{en_script}<script src="{root}assets/js/main.js" defer></script>
</body>
</html>
"""


def write(path, html):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8", newline="\n") as f:
        f.write(html)


for path, page, section, extra, tfr, dfr, ten, den in PAGES:
    depth = 0 if not path else path.count("/") + 1
    for lang in ("fr", "en"):
        # root : vers la racine du site (assets) ; lroot : vers la racine de la langue
        rel = "../" * depth
        if lang == "fr":
            root = rel or "./"
            lroot = root
            out = os.path.join(repo, path, "index.html") if path else os.path.join(repo, "index.html")
            href_fr = "./" if not path else "./"
            href_en = (root + "en/" + (path + "/" if path else ""))
        else:
            root = "../" * (depth + 1)
            lroot = rel or "./"
            out = os.path.join(repo, "en", path, "index.html") if path else os.path.join(repo, "en", "index.html")
            href_fr = root + (path + "/" if path else "")
            href_en = "./"
        public_fr = BASE + (path + "/" if path else "")
        public_en = BASE + "en/" + (path + "/" if path else "")
        here = public_fr if lang == "fr" else public_en
        canonical = '<link rel="canonical" href="' + here + '">' + chr(10) + '<meta property="og:url" content="' + here + '">' + chr(10)
        jsonld = ""
        if not path:
            person = {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": NAME,
                "jobTitle": "Productrice artistique" if lang == "fr" else "Artistic producer",
                "description": dfr if lang == "fr" else den,
                "url": here,
                "image": OG_IMAGE,
                "sameAs": SAME_AS,
                "worksFor": {"@type": "Organization", "name": "Compagnie Sensible Indocile", "url": "https://lacompagniesensibleindocile.fr/"},
            }
            jsonld = '<script type="application/ld+json">' + json.dumps(person, ensure_ascii=False) + '</script>' + chr(10)
        html = TEMPLATE.format(
            og_locale="fr_FR" if lang == "fr" else "en_GB", og_image=OG_IMAGE, canonical=canonical, jsonld=jsonld,
            xdefault='<link rel="alternate" hreflang="x-default" href="' + public_fr + '">' + chr(10),
            lang=lang,
            title=tfr if lang == "fr" else ten,
            desc=dfr if lang == "fr" else den,
            root=root, lroot=lroot, path=(path + "/") if path else "", page=page, section=section,
            extra=(" " + extra) if extra else "", name=NAME,
            skip="Aller au contenu" if lang == "fr" else "Skip to content",
            noscript="Ce site nécessite JavaScript pour afficher les projets." if lang == "fr" else "This site needs JavaScript to display the projects.",
            href_fr=public_fr, href_en=public_en,
            head_script=HEAD_SCRIPT,
            en_script=('<script src="' + root + 'assets/js/data.en.js" defer></script>\n') if lang == "en" else "",
        )
        write(out, html)
        print(os.path.relpath(out, repo))

# sitemap.xml : toutes les pages publiques, FR et EN
today = datetime.date.today().isoformat()
urls = []
for path, page, section, extra, tfr, dfr, ten, den in PAGES:
    for pub in (BASE + (path + "/" if path else ""), BASE + "en/" + (path + "/" if path else "")):
        urls.append(pub)
sm = '<?xml version="1.0" encoding="UTF-8"?>' + chr(10) + '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + chr(10)
for u in urls:
    sm += '  <url><loc>' + u + '</loc><lastmod>' + today + '</lastmod></url>' + chr(10)
sm += '</urlset>' + chr(10)
write(os.path.join(repo, 'sitemap.xml'), sm)
print('sitemap.xml', len(urls), 'adresses')
