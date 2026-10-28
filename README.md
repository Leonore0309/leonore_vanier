# Portfolio — Léonore Vanier

Site statique (HTML, CSS, JavaScript sans framework ni compilation) présentant le portfolio de Léonore Vanier, Creative Producer · Cheffe de projet vidéo. Compatible GitHub Pages.

Les éléments encore à fournir sont listés dans [CONTENT_TODO.md](CONTENT_TODO.md). Dans la prévisualisation, ils apparaissent comme des encadrés pointillés « À compléter ».

## Prévisualiser en local

Depuis ce dossier, au choix :

```bash
python -m http.server 8000
```

puis ouvrir <http://localhost:8000/>. Autres options : l’extension « Live Server » de VS Code (clic droit sur `index.html` → *Open with Live Server*), ou simplement un double-clic sur `index.html` (le site fonctionne aussi en `file://`).

> **Dossier OneDrive** : ce dépôt se trouve dans OneDrive. La synchronisation peut ralentir ou interrompre la lecture de fichiers récents (une image a ainsi été servie de façon intermittente pendant les tests). En cas d’image qui ne s’affiche pas en local, patienter la fin de la synchronisation ou recharger la page.

## Structure

```
index.html                  accueil (encart à propos + mosaïque)
a-propos/ acting/ contacts/ pages éditoriales
fiction/                    liste Fiction (2 projets)
  le-controle-sanitaire/    fiche projet
  adam/                     fiche projet (à compléter)
ia/                         Life on Xenia (projet unique : affiché directement)
spectacles-vivants/         LE BAIN (projet unique : affiché directement)
audio/                      productions audio (8 fiches, ancres #slug)
404.html                    page d’erreur autonome
assets/css/style.css        tous les styles
assets/js/data.js           TOUT le contenu (textes, rôles, liens, médias)
assets/js/main.js           rendu des pages, menu mobile, lecteurs vidéo
assets/img/<projet>/        médias optimisés (WebP)
```

Chaque dossier contient un vrai `index.html` : il n’y a pas de routage côté client, donc aucune erreur 404 au rechargement d’une page. Tous les chemins sont relatifs : le site fonctionne à la racine d’un domaine comme dans un sous-dossier GitHub Pages.

## Modifier les contenus

**Tout se passe dans [assets/js/data.js](assets/js/data.js).**

- **Coordonnées** : `SITE.email`, `SITE.linkedin`. Le téléphone n’est volontairement pas affiché.
- **Projets** : chaque entrée de `SITE.projects` définit titre, format, rôle, vignette d’accueil (`tile`), média principal (`hero`), présentation (`intro`), contributions, chiffres (`stats`), distinctions (`awards`), galerie, crédits et liens. L’ordre de la liste est l’ordre de la mosaïque d’accueil.
- **Information manquante** : une valeur `null` (ou une liste vide) affiche un emplacement « À compléter ». Pour renseigner une information, remplacer `null` par la valeur.
  - Exemple, ADAM : dans `credits`, remplacer `value: null` par `value: "Texte du synopsis"`.
  - Exemple, audio : `author: null` devient `author: "Nom Prénom"`, `summary: null` devient un texte, `listen: null` devient `{ label: "Écouter sur Audible", url: "https://…" }`. Pour un extrait hébergé dans le dépôt : `extract: "assets/audio/mon-extrait.mp3"`.
- **Masquer les emplacements** : mettre `showTodos: false` pour la version finale. Vérifier d’abord qu’aucun champ important n’est resté vide.
- **Images** : déposer les fichiers dans `assets/img/<projet>/` (WebP ou JPEG, 1 600 px de large conseillés) puis les référencer avec `src`, `w`, `h` (dimensions réelles, pour éviter les sauts de mise en page) et un `alt` descriptif.
- **Vidéos** : renseigner l’identifiant YouTube (`hero.id`, la partie après `v=`). Le lecteur n’est chargé qu’au clic, sans lecture automatique.
- **Typographie française** : les espaces insécables avant `: ; ? ! %` sont ajoutées automatiquement.

### Ajouter une création IA (ou tout autre projet)

1. Ajouter une entrée dans `SITE.projects` en copiant celle de Life on Xenia et en changeant `id`, `slug`, `category: "ia"`.
2. Créer le dossier `ia/<slug>/` avec un `index.html` copié depuis `fiction/adam/index.html`, puis adapter : `data-root="../../"`, `data-section="ia"`, `data-project="<id>"`, `<title>` et description.
3. C’est tout : dès que la rubrique compte deux projets, `ia/` affiche automatiquement une liste de vignettes au lieu de développer le projet unique, et la navigation « projet précédent / suivant » s’étend. Le nouveau projet apparaît aussi à la fin de la mosaïque d’accueil.

### Ajouter une production audio

Ajouter un objet dans la liste `items` du bon groupe (`trilogie`, `thrillers`, `romances`) de la production « Productions audio ».

## Publier avec GitHub Pages

Le dépôt est `Leonore0309/leonore_vanier`. Rien n’a été publié ni poussé automatiquement.

1. Vérifier le site en local et relire [CONTENT_TODO.md](CONTENT_TODO.md).
2. Enregistrer et envoyer les fichiers :
   ```bash
   git add .
   git commit -m "Portfolio : première version"
   git push origin main
   ```
3. Sur GitHub : **Settings → Pages → Build and deployment → Source : Deploy from a branch**, branche `main`, dossier `/ (root)`, puis **Save**.
4. Après une à deux minutes, le site est disponible à l’adresse <https://leonore0309.github.io/leonore_vanier/>.

Le fichier `.nojekyll` désactive le traitement Jekyll : ne pas le supprimer.

- **Autre nom de dépôt** : adapter la constante `REPO` dans `404.html` (elle sert uniquement à calculer le lien « Retour à l’accueil »).
- **Domaine personnalisé** : non configuré. Le cas échéant, ajouter le domaine dans *Settings → Pages* ; les chemins relatifs resteront valides.
- **Polices** : Cormorant Garamond et DM Sans sont chargées depuis Google Fonts. Pour une conformité RGPD stricte, les télécharger et les héberger dans `assets/fonts/` (remplacer le `<link>` Google Fonts des pages et ajouter des `@font-face` dans `style.css`).

## Choix techniques

- HTML sémantique, lien d’évitement, navigation clavier, focus visibles, textes alternatifs.
- `prefers-reduced-motion` coupe toutes les transitions et animations.
- Vignettes : au survol **et** au focus clavier, flou léger du visuel seul, voile et rôle net. Sur écran tactile (`hover: none`), le rôle est affiché en permanence.
- Images WebP avec dimensions réservées, chargement différé sauf image principale.
- Lecteurs YouTube (`youtube-nocookie.com`) et TikTok chargés au clic uniquement.
- Aucun secret ni donnée confidentielle dans le dépôt.

## Limites connues

- Les images extraites du PDF font au plus 800 px de large : elles sont nettes à taille de vignette mais pas pour de très grands écrans. Remplacer par les originaux dès que possible.
- Le contenu est généré par JavaScript depuis `data.js` : sans JavaScript, seule la coordonnée e-mail est affichée.
