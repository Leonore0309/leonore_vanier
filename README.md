# Portfolio — Léonore Vanier

Site statique (HTML, CSS, JavaScript sans framework ni compilation) présentant le portfolio de Léonore Vanier, productrice artistique, Creative Producer et cheffe de projet vidéo. Compatible GitHub Pages. Disponible en **français** (racine) et en **anglais** (`/en/`).

Les éléments encore à fournir sont listés dans `AMELIORATIONS.md`, un mémo **privé** conservé sur l’ordinateur (ignoré par git, jamais publié). Avec `showTodos: true`, ils apparaissent comme des encadrés pointillés « À compléter ».

## Lancer le site en local

Depuis ce dossier :

```bash
python -m http.server 8000
```

puis ouvrir <http://localhost:8000/> (français) ou <http://localhost:8000/en/> (anglais). Autres options : l’extension « Live Server » de VS Code, ou un double-clic sur `index.html`.

> **Dossier OneDrive** : la synchronisation peut ralentir ou interrompre la lecture de fichiers récents ou lourds : si une image ne s’affiche pas en local, recharger la page. Cela n’a aucune incidence sur GitHub Pages.

## Où modifier les textes

| Fichier | Contenu |
|---|---|
| [assets/js/data.js](assets/js/data.js) | **tout le contenu en français**, avec un sommaire commenté en tête |
| [assets/js/data.en.js](assets/js/data.en.js) | **tout le contenu en anglais** : mêmes clés, seuls les textes diffèrent |

Sections de `data.js` : 1. identité et réglages (`showTodos`) · 2. société (logo, lien) · 3. navigation, rubriques et libellés d’interface (`ui`) · 4. projets · 5. accueil · 6. à propos · 7. acting · 8. contacts.

Règles utiles :

- Une valeur `null` (ou une liste vide) affiche un encadré « À compléter ». Mettre `showTodos: false` pour la version finale.
- Ne jamais inventer d’information : mettre `null` et l’ajouter à `AMELIORATIONS.md`.
- **Anglais** : `data.en.js` n’a pas besoin de répéter les noms, chiffres, liens ni chemins d’images ; les tableaux sont fusionnés élément par élément, dans le même ordre que `data.js`. Si une information change dans `data.js`, répercuter le texte dans `data.en.js`.
- **Images** : déposer dans `assets/img/<projet>/` (WebP, 1 200 à 1 600 px de large), puis déclarer `src`, `w`, `h` (dimensions réelles) et `alt`. Les originaux lourds restent hors du dépôt.
- **Crédits photo** : champ `caption` (« Photo : Nom ») des images de galerie, `credit` des portraits et des photos d’accueil.
- **Vidéos** : renseigner l’adresse de la vidéo (`hero.url`) ou l’identifiant YouTube (`hero.id`, la partie après `v=`). Le visuel est un lien qui ouvre la vidéo dans un nouvel onglet, sans lecteur intégré.
- **Boucles animées** : voir « Boucles vidéo muettes » ci-dessous.

## Structure

```
index.html                  page d’entrée (photo, nom, MON PORTFOLIO)
projets/                    citation et mosaïque des projets
sitemap.xml                 plan du site (généré)
a-propos/ acting/ contacts/ audio/ ia/ spectacles-vivants/
fiction/                    liste Fiction, puis une fiche par projet
  le-controle-sanitaire/ adam/ sous-ta-peau-brulante/
en/                         même arborescence, en anglais (en/fiction/adam/, …)
404.html                    page d’erreur autonome
assets/css/style.css        tous les styles (variables sur :root)
assets/js/data.js           contenu français
assets/js/data.en.js        contenu anglais
assets/js/main.js           rendu des pages, langues, menu mobile, lecteurs, boucles
assets/img/                 images optimisées (WebP) ; logo dans assets/img/brand/
assets/video/               boucles vidéo muettes (MP4)
assets/audio/               démo voix (MP3 sans métadonnées personnelles)
tools/generate_pages.py     génère toutes les pages (FR et EN) : `python tools/generate_pages.py`
tools/publish_cie.py        copie le site dans le dépôt de la compagnie (voir « Publier »)
```

Chaque dossier contient un vrai `index.html` : aucune erreur 404 au rechargement. Tous les chemins sont relatifs : le site fonctionne à la racine d’un domaine comme dans un sous-dossier GitHub Pages.

## Identité visuelle

- **Deux modes de couleur**, sur la même mise en page :
  - **sombre** : fond bleu pétrole presque noir `#03141a` ;
  - **clair** : ivoire `#f5f1e9`, titres bleu pétrole.
  Au premier passage, le site suit le réglage clair / sombre de l’appareil ; le bouton soleil / lune de l’en-tête permet de basculer, et le choix est mémorisé. Le petit script du `<head>` (généré par `tools/generate_pages.py`) pose `data-theme` avant l’affichage ; `style.css` (section 11) remappe les variables de palette pour le mode sombre.
- **Accueil** : la **page d’entrée** (photo à la voiture, activités, bouton **Mon portfolio**) est seule sur la page d’accueil, toujours en ivoire clair, sans menu ; le bouton mène à `projets/` : citation (Mention spéciale, Prix Florent Image 2026) puis mosaïque des projets. Nom, titre et bouton en Cormorant Garamond ; le tout tient sur l’écran sans défiler. Données dans `landing` et `home` (`data.js`).
- **Typographie** : **Anton** pour les titres (condensée, façon affiche de cinéma, gratuite) ; **Cormorant Garamond** pour le nom dans le menu et la citation ; DM Sans pour le texte. Heading Now est commerciale : pour l’utiliser, fournir les `.woff2` et la licence, déclarer un `@font-face` et changer la variable `--display` de `style.css`.
- **Mosaïque** : 2 projets par ligne, visuels 16:9, titre centré ; au survol ou au focus clavier, le **genre** (FICTION, AUDIO, IA, SPECTACLES VIVANTS) en grand puis le **rôle** en petit. Sur téléphone, un bandeau genre + rôle reste visible.
- **Pages projets courtes** : rôle, chiffres clés, distinctions, **« Mon intervention »** (une ligne), liens importants, galerie, puis synopsis court et distribution sur 3 colonnes. Galeries : paysages en 16:9 sur 2 colonnes, verticales à leur ratio.
- **À propos** : « Ce que je fais » (grille de 3 colonnes ; un clic sur un item déplie tous ceux de la même ligne), preuves concrètes, domaines, « Mon identité » (Ingénierie · Création · Entrepreneuriat), puis « Exemples d’application ».
- **Logo Sensible Indocile** : `logo-sensible-indocile.webp` / `logo-mark.webp` (mode clair, tirés de `Logo2026.png`) et `logo-sensible-indocile-sombre.webp` / `logo-mark-sombre.webp` (mode sombre, tirés de `Logo2026_black.png`), dans `assets/img/brand/` ; les deux PNG d’origine sont conservés dans `sources/logos/` ; aucun fond ni pastille. Chaque logo ouvre https://lacompagniesensibleindocile.fr/ dans un nouvel onglet.
- **Palette** : ivoire `#f5f1e9`, brun `#302824`, bleu pétrole `#2f4a52`, beige rosé `#ebdcd4`, prune `#654653`, terracotta `#a5573d`.
- **Animations** : apparition courte (0,3 s), flou subtil au survol, défilement doux vers les projets ; tout est coupé sous `prefers-reduced-motion`.

## Version anglaise

- Les pages anglaises sont dans `en/` ; le bouton « EN / FR » de l’en-tête renvoie vers la page équivalente (le thème choisi est conservé). Des liens `hreflang` relient les deux versions.
- Les libellés d’interface (« Mon rôle », « Voir le projet », pied de page…) sont dans `ui` (`data.js` pour le français, `data.en.js` pour l’anglais).
- Les pages (françaises et anglaises) sont générées à partir d’un modèle commun : ajouter une ligne à `PAGES` dans `tools/generate_pages.py`, puis lancer `python tools/generate_pages.py` à la racine du dépôt. Aucune autre dépendance.

## Boucles vidéo muettes

Les projets avec vidéo (Le Contrôle sanitaire, Sous ta peau brûlante, LE BAIN, Life on Xenia, bande-démo Acting) affichent une courte boucle animée sans son, en continu dès que le cadre est visible ; le visuel est un **lien** vers la vidéo (nouvel onglet), sans bouton ni lecteur intégré. Coupées avec mouvement réduit ou économie de données. Une boucle se prépare avec FFmpeg (8 s, sans son, pixels carrés) ; dans `data.js`, `hero.loop` et `hero.url`.

- Elles ne sont jamais lues avec « mouvement réduit » ni en mode économie de données ; le fichier n’est chargé qu’à l’approche de l’écran.
- Fichiers : `assets/video/<projet>.mp4`, déclarés par `tile.loop` (ou `reel.loop`) dans `data.js`.
- Pour en fabriquer une avec FFmpeg (5 à 8 s, sans son, vignette 3:2, moins de 1 Mo) :
  ```bash
  ffmpeg -ss 46 -t 8 -i film.mp4 -an -vf "crop=ih*3/2:ih,scale=960:640,fps=24" -c:v libx264 -crf 29 -pix_fmt yuv420p -movflags +faststart assets/video/mon-projet.mp4
  ```
- Les films sources (plusieurs Go) ne doivent **jamais** être dans le dépôt : GitHub refuse les fichiers de plus de 100 Mo. Ils sont conservés dans `sources/videos/` (dossier ignoré par git).

### Ajouter une création IA (ou tout autre projet)

1. Ajouter une entrée dans `SITE.projects` (`data.js`) en copiant celle de Life on Xenia, et son pendant dans `data.en.js` (même `id`).
2. Ajouter la page dans `PAGES` de `tools/generate_pages.py` (chemin, `data-project`, titres et descriptions FR/EN), puis lancer `python tools/generate_pages.py`.
3. Dès que la rubrique compte deux projets, `ia/` affiche une liste de vignettes ; le projet apparaît aussi dans la mosaïque (ou l’index) et dans la navigation précédent / suivant.

### Ajouter une production audio

Ajouter un objet dans la liste `items` du bon groupe de la production « Productions audio » (et son pendant dans `data.en.js`).

## Publier avec GitHub Pages

Le dépôt est `Leonore0309/leonore_vanier`. Rien n’est publié automatiquement.

1. Vérifier le site en local et relire `AMELIORATIONS.md` (mémo privé).
2. Enregistrer et envoyer les fichiers :
   ```bash
   git add .
   git commit -m "Portfolio : mise en ligne"
   git push origin main
   ```
3. Sur GitHub : **Settings → Pages → Build and deployment → Source : Deploy from a branch**, branche `main`, dossier `/ (root)`, puis **Save**.
4. Après une à deux minutes : <https://leonore0309.github.io/leonore_vanier/> (français) et <https://leonore0309.github.io/leonore_vanier/en/> (anglais).

Le fichier `.nojekyll` désactive Jekyll : ne pas le supprimer.

- **Autre nom de dépôt** : adapter la constante `REPO` dans `404.html`.
- **Référencement** : `tools/generate_pages.py` pose `canonical`, `og:url`, `og:image`, `hreflang`, les données structurées `Person` (accueil) et génère `sitemap.xml`. L’adresse de référence est la constante `BASE` du générateur (copie du site de la compagnie) : à changer, puis `python tools/generate_pages.py`. Le fichier `robots.txt` ne peut être posé qu’à la racine d’un domaine : sans objet ici ; déclarer le sitemap dans Google Search Console.
- **Copie sur le site de la compagnie** : adresse principale <https://lacompagniesensibleindocile.fr/leonore_vanier/>. Ce dépôt reste la version de référence ; l’adresse GitHub Pages reste active. Pour mettre la copie à jour : `python tools/generate_pages.py`, puis `python tools/publish_cie.py <clone de ACO-LV/Cie-Site-web>`, puis commit et push dans ce clone (le script ne fait ni l’un ni l’autre). Ne jamais modifier le dossier `leonore_vanier/` du site de la compagnie à la main.
- **Domaine personnalisé** : aucun sur ce dépôt ; les chemins relatifs restent valides.
- **Polices** : pour une conformité RGPD stricte, les héberger dans `assets/fonts/`.
- **Originaux** : portraits, visuels, films, démo voix d’origine, logos et anciennes versions sont rangés dans `sources/` (`videos/`, `photos-hd/`, `portraits-acting/`, `adam/`, `demo-voix/`, `cv/`, `logos/`), dossier **ignoré par git** donc jamais publié.

## Choix techniques

- HTML sémantique, lien d’évitement, navigation clavier, focus visibles, textes alternatifs, menu mobile plein écran fermable avec Échap.
- Images WebP avec dimensions réservées ; chargement différé sauf image principale.
- Vidéos YouTube et TikTok : simples liens vers la vidéo (nouvel onglet), aucun lecteur ni script tiers chargé ; boucles muettes sans son.
- Aucun secret ni donnée confidentielle dans le dépôt ; le numéro de téléphone n’est pas affiché.

## Limites connues

- Quelques images issues du PDF sont en basse définition : voir AMELIORATIONS.md.
- Le contenu est généré par JavaScript : sans JavaScript, seule l’adresse e-mail s’affiche.
- La traduction anglaise est rédigée à la main : à relire.

## CV

Le CV n’est **pas** publié sur le site (le téléphone n’y est jamais affiché). Le PDF est rangé dans `sources/cv/`. Tout PDF éventuellement publié dans `assets/docs/` ne doit contenir aucun numéro de téléphone (texte, lien ou métadonnées).
