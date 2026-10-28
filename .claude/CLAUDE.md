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
- Information manquante : mettre `null` (ou liste vide) dans `data.js` pour afficher « À compléter ». **Ne jamais inventer** de contenu (synopsis, crédits, chiffres, noms). Mettre à jour `CONTENT_TODO.md` en parallèle.
- `showTodos: false` uniquement pour la version finale.
- Images : renseigner `src`, `w`, `h` réels et un `alt` descriptif en français. 1 600 px de large conseillés.
- Vidéos YouTube : charger le lecteur au clic uniquement, pas de lecture automatique.
- Typographie française : espaces insécables avant `: ; ? ! %` (gérées par `nb()` dans `main.js`), apostrophes typographiques ’, guillemets « ».
- Le téléphone n’est volontairement pas affiché sur le site.
- Accessibilité : lien d’évitement, `lang="fr"`, contrastes, navigation clavier, balises sémantiques.

## Charte graphique

- Couleurs : ivoire `#f5f1e9`, sable `#ece5d8`, brun `#302824`, prune `#654653`, rose `#b78c82`. Réutiliser les variables CSS existantes.
- Polices : Cormorant Garamond (titres, serif), DM Sans (texte, sans).

## Ajouter un projet

Voir le README : nouvelle entrée dans `SITE.projects`, dossier `<catégorie>/<slug>/index.html` copié depuis `fiction/adam/index.html`, puis adapter `data-root`, `data-section`, `data-project`, `<title>` et description.

## Prévisualisation

`python -m http.server 8000` puis http://localhost:8000/. Le dossier est dans OneDrive : une image peut être servie de façon intermittente pendant la synchronisation.
