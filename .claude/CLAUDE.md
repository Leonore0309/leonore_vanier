# Portfolio — Léonore Vanier

Site statique (HTML, CSS, JavaScript vanilla), sans framework, sans build, déployé sur GitHub Pages. Contenu et interface en **français**.

## Architecture

- `assets/js/data.js` : TOUT le contenu (`window.SITE` : textes, rôles, projets, liens, médias). Modifier les contenus ici, jamais dans le HTML.
- `assets/js/main.js` : rendu des pages à partir de `window.SITE`, menu mobile, lecteurs vidéo.
- `assets/css/style.css` : tous les styles (variables CSS sur `:root`).
- Chaque dossier contient un vrai `index.html` « coquille » (pas de routage client). Attributs : `data-root`, `data-page`, `data-section`, `data-category`, `data-project`.
- Images dans `assets/img/<projet>/`, en WebP.

## Règles

- Ne pas ajouter de framework, bundler ou dépendance npm.
- Tous les chemins sont **relatifs** (compatible sous-dossier GitHub Pages) ; `data-root` doit correspondre à la profondeur de la page (`./`, `../`, `../../`).
- Information manquante : mettre `null` (ou liste vide) dans `data.js` pour afficher « À compléter ». **Ne jamais inventer** de contenu (synopsis, crédits, chiffres, noms). Mettre à jour `AMELIORATIONS.md` (visuels et chiffres à fournir, page par page) en parallèle.
- `showTodos: false` uniquement pour la version finale.
- Images : renseigner `src`, `w`, `h` réels et un `alt` descriptif en français. 1 600 px de large conseillés.
- Vidéos YouTube / TikTok : lien vers la vidéo (nouvel onglet), pas d’iframe ni de lecteur intégré, pas de lecture automatique du son (voir « Visuels animés »).
- Typographie française : espaces insécables avant `: ; ? ! %` (gérées par `nb()` dans `main.js`), apostrophes typographiques ’, guillemets « ».
- Le téléphone n’est volontairement pas affiché sur le site.
- Accessibilité : lien d’évitement, `lang="fr"`, contrastes, navigation clavier, balises sémantiques.

## Charte graphique

- Couleurs : ivoire `#f5f1e9`, sable `#ece5d8`, brun `#302824`, bleu pétrole `--teal` `#2f4a52` (tiré du logo), beige rosé `--blush` `#ebdcd4`, taupe `--taupe` `#6f6159`, prune `#654653`, terracotta `--terra` `#a5573d` (interactions), rose `#b78c82` (filets uniquement, jamais du texte). Réutiliser les variables CSS existantes ; vérifier les contrastes (≥ 4,5:1 pour le texte courant).
- Polices : Anton (titres, via `--display` / `--serif`), Cormorant Garamond (nom du menu, citation), DM Sans (texte). Pas de gras ni d’italique synthétiques (`font-synthesis: none`).
- Photos : vignettes en 16:9 (2 par ligne, écarts réguliers) ; galeries paysages en 16:9, verticales à leur ratio ; couvertures audio carrées, `object-fit: cover`, même étalonnage léger (`.photo`), aucun arrondi ; portraits Acting en 4:5 ou 3:2.
- Animations : fondu 0,3 s + 12 px (`.reveal`), flou subtil au survol ; tout doit être coupé sous `prefers-reduced-motion`.
- Logo Sensible Indocile (`assets/img/brand/`) : secondaire, jamais plus visible que le nom. Le nom apparaît dans le menu (avec « Productrice artistique » dessous) et dans le pied de page ; le titre « Creative Producer · Cheffe de projet vidéo » n’est plus affiché sur l’accueil (h1 masqué). Chaque logo ouvre https://lacompagniesensibleindocile.fr/  ; version sombre (`logo-*-sombre.webp`) en mode sombre, logo d’origine en mode clair, jamais de pastille.

## Pages particulières

- **Thème** : deux modes (`html[data-theme="light|dark"]`), même mise en page. Le mode clair est le socle des variables de `style.css`, le mode sombre (`#03141a`) les remappe (section 11). Script du `<head>` généré par `tools/generate_pages.py` (préférence mémorisée `lv-theme`, sinon réglage du système). La page d’entrée (`.landing`) redéfinit ses variables : toujours claire. Les zones qui restent sombres ou claires utilisent `--on-dark`, `--deep`, `--ink`. `url()` construit les liens de pages (langue courante), `asset()` les fichiers.
- **Langues** : français (racine) et anglais (`en/`). Contenu français dans `data.js`, anglais dans `data.en.js` (fusion par clé et par index de tableau). Libellés d’interface dans `ui`. Les coquilles sont générées par `python tools/generate_pages.py` (attributs `data-root`, `data-lang-root`, `data-path`, hreflang) ; ne pas les éditer à la main. Toute modification de texte français doit être répercutée en anglais.
- **Boucles vidéo muettes** : `tile.loop` / `reel.loop` ; jouées en continu dès que le cadre est visible (mosaïque, pages projets, bande-démo), sans affiche en tête, jamais avec mouvement réduit ou économie de données. Jamais de film source dans le dépôt (limite GitHub 100 Mo).
- **Pages projets courtes** : champs `method` (une ligne) et `synopsis` (court) ; plus de blocs « contributions » ni « intro ». Distribution en petit sur 3 colonnes. Survol des vignettes : genre (libellé de la rubrique) en grand, rôle en petit, sans répéter le titre.
- **Pages projets** : titre en Cormorant Garamond majuscules ; « Mon intervention » : une majuscule après chaque flèche ; crédits photo `@sensibleindocile` dans la fiche seulement.
- **À propos** : « Ce que je fais » = boutons `aria-expanded` ; un clic ouvre toute la ligne de la grille (`initDo`). Ordre : Ce que je fais, Preuves, Domaines, Identité, Exemples d’application.
- `a-propos/` : blocs pilotés par `SITE.about` (ce que je fais, domaines, compétences reliées à des projets, preuves, double culture). Seuls des faits vérifiés.
- `acting/` : portraits `assets/img/acting/portrait-NN.webp` (5 grands, 5 petits), crédits photo obligatoires ; aucun CV téléchargeable.
- Les originaux lourds restent dans `sources/` (non publié) ; ne jamais copier un fichier dont le nom ou les métadonnées contiennent un numéro de téléphone.

## Ajouter un projet

Voir le README : nouvelle entrée dans `SITE.projects` (et `data.en.js`), puis une ligne dans `PAGES` de `tools/generate_pages.py` et `python tools/generate_pages.py`.

## Prévisualisation

`python -m http.server 8000` puis http://localhost:8000/. Le dossier est dans OneDrive : une image peut être servie de façon intermittente pendant la synchronisation (les réponses de plus de 64 Ko peuvent aussi caler en boucle locale sur certaines machines : recharger).

- **CV** : non publié sur le site. Le PDF reste dans `sources/cv/`. Tout PDF publié dans `assets/docs/` : jamais de numéro de téléphone (texte, lien, métadonnées).
- **`sources/`** (ignoré par git, non publié) : originaux lourds (`videos/`, `photos-hd/`, `portraits-acting/`, `adam/`, `demo-voix/`, `cv/`, `logos/`). `.gitignore` exclut `*.mp4` mais ré-inclut `assets/video/*.mp4`.
- **Accueil** : page d’entrée seule, sans en-tête ni pied de page ; MON PORTFOLIO mène à `projets/` (citation, mosaïque, plus de showreel). Nom, titre et bouton en Cormorant, en majuscules ; le tout tient sur l’écran sans défiler (classe `landing--v2`). Le nom du menu et « Tous les projets » mènent aussi à `projets/`.
- **En-tête** : thème et langue (`.site-header__tools`) à droite du menu.
- **Vidéos des pages projets** : `hero.loop`, boucle en continu (`initLoops`). Les encarts (liens) sont dans la colonne `.essentials`, sous le dernier bloc de texte.
- **Référencement** : généré par `tools/generate_pages.py` (constante `BASE`, canonical, hreflang, JSON-LD, `sitemap.xml`) ; ne jamais éditer les coquilles à la main.
- **Copie sur le site de la compagnie** : adresse principale https://lacompagniesensibleindocile.fr/leonore_vanier/ (GitHub Pages reste actif). Ce dépôt est la version de référence ; `python tools/publish_cie.py <clone ACO-LV/Cie-Site-web>` remplace le dossier `leonore_vanier/` du clone. Pas de commit/push sans demande explicite.
- **Visuels animés** : liens `<a class="player">` vers la vidéo (nouvel onglet, `hero.url`), sans bouton play ni iframe ; bande-démo vers Filmmakers (le titre YouTube contient un numéro de téléphone). `AMELIORATIONS.md` est privé (ignoré par git).
- `showTodos: false` : les « à compléter » sont masqués ; les manques sont dans `AMELIORATIONS.md`.
