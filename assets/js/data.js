/*
 * ============================================================================
 *  CONTENU DU SITE (FRANÇAIS) — le seul fichier à modifier pour changer les textes.
 *  La version anglaise est dans data.en.js (mêmes clés ; seuls les textes diffèrent).
 * ============================================================================
 *  Sommaire (cherchez le titre en MAJUSCULES) :
 *    1. IDENTITÉ ET RÉGLAGES   nom, titre, e-mail, LinkedIn, showTodos, style
 *    2. SOCIÉTÉ                logo et lien Sensible Indocile
 *    3. NAVIGATION, RUBRIQUES ET LIBELLÉS D’INTERFACE
 *    4. PROJETS                un bloc par projet, dans l’ordre de la mosaïque
 *    5. ACCUEIL                textes de la première page
 *    6. À PROPOS               présentation, compétences, preuves
 *    7. ACTING                 portraits, bande-démo, démo voix, agents
 *    8. CONTACTS
 *
 *  Règles :
 *  - Une valeur `null` ou une liste vide = information à fournir : le site affiche
 *    « À compléter » tant que showTodos vaut true.
 *  - Ne jamais inventer d’information : mettre `null` et l’ajouter à AMELIORATIONS.md.
 *  - Les chemins d’images sont relatifs à la racine du site.
 *  - Une image se déclare avec src, w, h (dimensions réelles) et alt (description).
 *  - tile.loop : boucle vidéo muette (MP4 sans son) jouée au survol de la vignette.
 */
window.SITE = {
  lang: "fr",

  /* 1. IDENTITÉ ET RÉGLAGES ------------------------------------------------ */
  name: "Léonore Vanier",
  role: "Productrice artistique", // affiché sous le nom dans le menu
  title: "Creative Producer · Cheffe de projet vidéo",
  email: "leonore.vanier@gmail.com",
  linkedin: "https://www.linkedin.com/in/l%C3%A9onore-vanier/",

  /* true : affiche les emplacements « À compléter » (revue). false : les masque (version publique). */
  showTodos: false,

  /* 2. SOCIÉTÉ ------------------------------------------------------------- */
  company: {
    name: "Sensible Indocile",
    label: "Production Company",
    since: 2024,
    url: "https://lacompagniesensibleindocile.fr/", // lien du logo
    full: { src: "assets/img/brand/logo-sensible-indocile.webp", w: 640, h: 833, alt: "Sensible Indocile — Production Company" },
    mark: { src: "assets/img/brand/logo-mark.webp", w: 160, h: 299, alt: "Sensible Indocile — Production Company" },
    // Versions pour fond sombre (mode sombre). `null` : le logo d’origine est posé sur une pastille claire.
    fullDark: { src: "assets/img/brand/logo-sensible-indocile-sombre.webp", w: 640, h: 835, alt: "Sensible Indocile — Production Company" },
    markDark: { src: "assets/img/brand/logo-mark-sombre.webp", w: 160, h: 299, alt: "Sensible Indocile — Production Company" }
  },

  /* 3. NAVIGATION, RUBRIQUES ET LIBELLÉS D’INTERFACE ---------------------- */
  nav: [
    { id: "a-propos", label: "À propos", path: "a-propos/" },
    { id: "fiction", label: "Fiction", path: "fiction/" },
    { id: "audio", label: "Audio", path: "audio/" },
    { id: "spectacles-vivants", label: "Spectacles vivants", path: "spectacles-vivants/" },
    { id: "ia", label: "IA", path: "ia/" },
    { id: "acting", label: "Acting", path: "acting/" },
    { id: "contacts", label: "Contacts", path: "contacts/" }
  ],

  categories: {
    fiction: {
      label: "Fiction",
      path: "fiction/",
      description: "Courts-métrages et séries."
    },
    ia: {
      label: "IA",
      path: "ia/",
      description: "Fictions créées avec des outils de génération vidéo IA."
    },
    audio: {
      label: "Audio",
      path: "audio/",
      description: "Livres audio : narration, direction artistique et production."
    },
    "spectacles-vivants": {
      label: "Spectacles vivants",
      path: "spectacles-vivants/",
      description: "Théâtre contemporain."
    }
  },

  ui: {
    skip: "Aller au contenu",
    menu: "Menu",
    mainNav: "Navigation principale",
    newTab: "(nouvel onglet)",
    role: "Mon rôle",
    roleSr: "Rôle : ",
    section: "Rubrique",
    projects: "Projets",
    work: "L’œuvre",
    method: "Mon intervention",
    synopsis: "Synopsis",
    enter: "Mon portfolio",
    toolsUsed: "Outils utilisés",
    buyPlay: "Acheter la pièce",
    awardsTitle: "Récompenses",
    themeToLight: "Passer en mode clair",
    themeToDark: "Passer en mode sombre",
    available: "Disponible",
    languages: "Langues",
    software: "Logiciels",
    watchVideo: "Voir la vidéo : ",
    demoLink: "Voir ma bande démo et mes récompenses",
    inProgress: "En cours d’écriture",
    keyFigures: "Chiffres clés",
    contribution: "Ma contribution",
    tools: "Outils expérimentés",
    gallery: "Galerie",
    credits: "Fiche et crédits",
    press: "Presse",
    readArticle: "Lire l’article",
    awards: "Distinctions et sélections",
    viewProject: "Voir le projet",
    prev: "← Précédent",
    next: "Suivant →",
    otherProjects: "Autres projets",
    allProjects: "Tous les projets",
    playVideo: "Lire la vidéo : ",
    photo: "Photo : ",
    photos: "Photos : ",
    textBy: "Texte de",
    genre: "Genre",
    series: "Série",
    coverMissing: "Couverture à fournir",
    eightProductions: "Les huit productions",
    portraits: "Portraits",
    representation: "Représentation",
    viewPage: "Voir la page",
    email: "E-mail",
    linkedin: "LinkedIn",
    website: "Site web",
    instagram: "Instagram",
    otherLang: "EN",
    otherLangName: "English",
    langSwitch: "Passer en anglais",
    skipTodo: "À compléter",
    footerRole: "Productrice artistique",
    styleLabel: "Style",
    styleAria: "Choix du style graphique",
    comparison: "Comparaison",
    comparisonTitle: "Deux styles pour le site",
    comparisonIntro: "Même contenu, deux univers graphiques. Chaque aperçu est l’accueil réel. « Parcourir » applique le style à tout le site ; le sélecteur en bas de page permet d’en changer à tout moment.",
    browseStyle: "Parcourir le site dans ce style",
    previewTitle: "Aperçu de l’accueil, style ",
    notFoundSkills: "Voir",
    homeHeading: "Productrice artistique — portfolio"
  },

  /* 4. PROJETS ------------------------------------------------------------- *
   * L’ordre de cette liste = ordre de la mosaïque d’accueil, de l’index (style 3)
   * et de la navigation « projet précédent / suivant ».                       */
  projects: [
    /* ---- Le Contrôle sanitaire ---- */
    {
      id: "le-controle-sanitaire",
      category: "fiction",
      slug: "le-controle-sanitaire",
      title: "Le Contrôle sanitaire",
      format: "Court-métrage · 2026 · 8 min",
      filmBy: "Un film de Léonore Vanier & Juliette Ganay",
      role: "Productrice · Auteure · Réalisatrice",
      description:
        "Le Contrôle sanitaire, court-métrage de fiction (2026, 8 min), un film de Léonore Vanier et Juliette Ganay. Sélections et mention spéciale en festivals.",
      synopsis: "Alice et Sacha s’aiment éperdument depuis 5 ans, mais le couple s’est fragilisé. Unies par un même amour, les deux jeunes femmes cherchent à concilier leur couple et leurs différences.",
      method: "Écriture → Préparation → Tournage → Postproduction (montage, étalonnage, mixage) → Festivals et diffusion en ligne.",
      tile: {
        ratio: "16 / 9",
        focus: "50% 40%",
        loop: "assets/video/le-controle-sanitaire.mp4",
        images: [
          {
            src: "assets/img/le-controle-sanitaire/hd-1.webp",
            w: 1600,
            h: 900,
            alt: "Le Contrôle sanitaire : deux femmes face à face dans une chambre, l’une rejetant ses cheveux en arrière."
          }
        ]
      },
      hero: {
        type: "youtube",
        id: "SmhharGafCE",
        loop: "assets/video/le-controle-sanitaire.mp4", // animée au survol
        title: "Le Contrôle sanitaire, court-métrage",
        poster: {
          src: "assets/img/le-controle-sanitaire/hd-1.webp",
          w: 1600,
          h: 900,
          alt: "Le Contrôle sanitaire : deux femmes face à face dans une chambre, l’une rejetant ses cheveux en arrière."
        }
      },
      stats: [{ value: "33 000 vues", label: "sur YouTube (octobre 2026)" }],
      awards: [
        {
          label: "Mention spéciale",
          icon: "trophy",
          detail: "pour « la qualité de l’écriture et de l’interprétation »",
          source: "Prix Florent Image 2026"
        },
        {
          label: "Sélection officielle 2026",
          detail: "Plus c’est court, plus c’est bon · KINO POP Festival · CAST Festival",
          source: null
        }
      ],
      gallery: [
        {
          src: "assets/img/le-controle-sanitaire/hd-7.webp",
          w: 1600,
          h: 900,
          alt: "Le Contrôle sanitaire : deux jeunes femmes de profil, face à face dans une chambre ; l’une pose la main sur le menton de l’autre, bouche ouverte."
        },
        {
          src: "assets/img/le-controle-sanitaire/hd-2.webp",
          w: 1600,
          h: 900,
          alt: "Le Contrôle sanitaire : portrait d’une jeune femme brune en peignoir bleu, l’air inquiet, dans une chambre."
        },
        {
          src: "assets/img/le-controle-sanitaire/hd-3.webp",
          w: 1600,
          h: 900,
          alt: "Le Contrôle sanitaire : portrait d’une jeune femme aux cheveux courts, bouche entrouverte, guirlande lumineuse en arrière-plan."
        },
        {
          src: "assets/img/le-controle-sanitaire/hd-4.webp",
          w: 1600,
          h: 900,
          alt: "Le Contrôle sanitaire : deux jeunes femmes rieuses se prennent dans les bras."
        },
        {
          src: "assets/img/le-controle-sanitaire/hd-5.webp",
          w: 1600,
          h: 900,
          alt: "Le Contrôle sanitaire : une jeune femme en peignoir bleu, saisie en plein mouvement, regarde hors champ."
        },
        {
          src: "assets/img/le-controle-sanitaire/hd-6.webp",
          w: 1600,
          h: 900,
          alt: "Le Contrôle sanitaire : gros plan sur des objets posés sur un livre, vus du dessus."
        }
      ],
      credits: [
        { label: "Format", value: "Court-métrage de fiction, 2026" },
        { label: "Durée", value: "8 minutes" },
        { label: "Un film de", value: "Léonore Vanier & Juliette Ganay" },
        { label: "Réalisation · Production", value: "Léonore Vanier" },
        { label: "Écriture", value: "Juliette Ganay et Léonore Vanier" },
        { label: "Interprétation", value: "Juliette Ganay et Léonore Vanier" },
        { label: "Direction de la photographie", value: "Matthieu Le Jeune" },
        { label: "Son", value: "Louis Faudais" },
        { label: "Assistanat à la mise en scène", value: "Clara Kermarec" },
        { label: "Montage · Étalonnage · Mixage", value: "Léonore Vanier" },
        { label: "Photos", value: "@sensibleindocile" }
      ],
      links: [{ label: "Voir le film sur YouTube", url: "https://www.youtube.com/watch?v=SmhharGafCE" }]
    },

    /* ---- ADAM ---- */
    {
      id: "adam",
      category: "fiction",
      slug: "adam",
      title: "ADAM",
      format: "Mini-série · produite par FeatureProd",
      role: "Chargée de production · Assistante réalisatrice",
      description:
        "ADAM, mini-série réalisée par Hadrien Fière et produite par FeatureProd. Léonore Vanier y est chargée de production et assistante réalisatrice.",
      synopsis: "Quand Adam apprend qu’il va devenir père, tous ses repères changent. Perdu entre loyauté pour sa nouvelle famille et sa famille d’origine, il se questionne sur son futur rôle de père.",
      method: "Production : dépouillement, plan de travail, casting, repérages · Assistanat : feuilles de service, contraintes acteurs, lieux et techniques, suivi des rushes.",
      status: "Projet en cours",
      tile: {
        ratio: "16 / 9",
        focus: "50% 50%",
        images: [
          {
            src: "assets/img/adam/adam-2-169.webp",
            w: 1011,
            h: 569,
            alt: "Image d’ADAM : un homme en long manteau vert se tient dans une rue la nuit, image floue en mouvement."
          }
        ]
      },
      hero: {
        type: "image",
        image: {
          src: "assets/img/adam/adam-2-169.webp",
          w: 1011,
          h: 569,
          alt: "Image d’ADAM : un homme en long manteau vert se tient dans une rue la nuit, image floue en mouvement."
        }
      },
      stats: [],
      awards: [],
      gallery: [
        {
          src: "assets/img/adam/adam-2.webp",
          w: 900,
          h: 1600,
          alt: "Image d’ADAM : visage de profil presque entièrement dans l’ombre, lumière rasante sur le nez et les lèvres.",
          caption: "Photo : FeatureProd"
        },
        {
          src: "assets/img/adam/adam-3.webp",
          w: 1014,
          h: 1464,
          alt: "Image d’ADAM : une main saisit une pelote d’épingles aux têtes colorées.",
          caption: "Photo : @bidounini"
        },
        {
          src: "assets/img/adam/adam-4.webp",
          w: 900,
          h: 1600,
          alt: "Image d’ADAM : un jeune homme en chemise grise, de profil au premier plan ; une femme floue se tient dans l’embrasure d’une porte.",
          caption: "Photo : FeatureProd"
        }
      ],
      galleryFirst: {
        src: "assets/img/adam/adam-1.webp",
        w: 900,
        h: 1600,
        alt: "Image d’ADAM : gros plan sur le profil d’un jeune homme barbu, visage éclairé par une lumière chaude.",
        caption: "Photo : FeatureProd"
      },
      credits: [
        { label: "Format", value: "Mini-série" },
        { label: "Réalisation", value: "Hadrien Fière" },
        { label: "Production", value: "FeatureProd" },
        { label: "Statut", value: "En cours · sortie prévue fin 2026" },
        { label: "Mon rôle", value: "Chargée de production · Assistante réalisatrice" },
        { label: "Photos", value: "@bidounini · FeatureProd" },
        { label: "Distribution et équipe", value: null, todo: "crédits d’équipe autorisés à la publication" }
      ],
      links: []
    },

    /* ---- Matriochka (hors mosaïque : visible dans la rubrique Fiction ; retirer mosaic: false pour l’afficher partout) ---- */
    {
      id: "matriochka",
      category: "fiction",
      slug: "matriochka",
      mosaic: false,
      title: "Matriochka",
      format: "Court-métrage · 2026 · 7 min",
      role: "Directrice de production",
      description:
        "Matriochka, court-métrage de fiction (2026, 7 min) réalisé par Marianne Font dans le cadre du concours Klach ! du Festival Paris Court Devant. Léonore Vanier en est la directrice de production.",
      synopsis: "Le film explore les liens entre transmission, mémoire et héritage féminin à travers une atmosphère intime et mystérieuse, où les espaces naturels (parcs, forêts, bois, etc.) occupent une place centrale. Ils deviennent un espace de passage, de mémoire et de transformation.",
      method: "Direction de production : budget de production, lien avec les équipes réalisation, image et régie · Autorisations : tournage en forêts et espaces naturels, droit à l’image.",
      methodNote: "Concours Klach !, qui promeut la visibilité des personnes en situation de handicap : le premier rôle est confié à une personne en situation de handicap. Chaque film est conçu, tourné et monté en un mois.",
      status: "Production : novembre 2026",
      tile: {
        ratio: "16 / 9",
        focus: "50% 50%",
        images: [
          {
            src: "assets/img/matriochka/moodboard.webp",
            w: 682,
            h: 1024,
            alt: "Planche d’inspiration de Matriochka : collage d’images de films et de portraits de femmes, de parcs et de forêts, avec au centre le titre « Matriocka Mood Board »."
          }
        ]
      },
      hero: {
        type: "image",
        image: {
          src: "assets/img/matriochka/moodboard.webp",
          w: 682,
          h: 1024,
          alt: "Planche d’inspiration de Matriochka : collage d’images de films et de portraits de femmes, de parcs et de forêts, avec au centre le titre « Matriocka Mood Board »."
        }
      },
      stats: [
        { value: "3 k€", label: "de budget de production" },
        { value: "14 personnes", label: "dans l’équipe" },
        { value: "2 jours", label: "de tournage en milieu naturel" },
        { value: "1 mois", label: "de l’écriture au montage final" }
      ],
      awards: [],
      gallery: [],
      credits: [
        { label: "Format", value: "Court-métrage de fiction, 2026" },
        { label: "Durée", value: "7 minutes" },
        { label: "Concours", value: "Klach ! · Festival Paris Court Devant" },
        { label: "Réalisation · Scénario", value: "Marianne Font" },
        { label: "Collaboration au scénario", value: "Jonathan Israël" },
        { label: "Script doctoring", value: "Luca Minardi" },
        { label: "Direction de production", value: "Léonore Vanier" },
        { label: "Assistanat à la réalisation", value: "Marie Lager" },
        { label: "Scripte", value: "Ettie Lechopier" },
        { label: "Direction de la photographie", value: "Denez Pithois" },
        { label: "Interprétation", value: "Claire Pitot, Anthony Rhino, Carole André" },
        { label: "Son", value: "Margaux Roux" },
        { label: "Costumes", value: "Solenne Azam" },
        { label: "Maquillage", value: "Lucie Chiron" },
        { label: "Régie générale", value: "Rebecca Gournay" },
        { label: "Montage", value: "Julia Camps" },
        { label: "Musique", value: "Antoine Martre" },
        { label: "Étalonnage", value: "Aladin" },
        { label: "Mixage", value: "Anthony Ferrero" }
      ],
      links: []
    },

    /* ---- Sous ta peau brûlante ---- */
    {
      id: "sous-ta-peau-brulante",
      category: "fiction",
      slug: "sous-ta-peau-brulante",
      title: "Sous ta peau brûlante",
      format: "Court-métrage · 2025 · 1 min",
      role: "Productrice · Auteure · Réalisatrice",
      description:
        "Sous ta peau brûlante, court-métrage de fiction (2025, 1 min) écrit et réalisé par Léonore Vanier, produit par la Compagnie Sensible Indocile.",
      synopsis: "Entre Axel et Léo, c’est tout de suite l’étincelle. Alors que le date se poursuit à merveille, Léo remarque un détail chez Axel qui va faire basculer leur idylle en drame.",
      method: "Écriture → Préparation → Tournage → Postproduction (montage, étalonnage, mixage) → Festivals et diffusion en ligne.",
      methodNote: "En collaboration avec le Cours Florent.",
      tile: {
        ratio: "16 / 9",
        focus: "50% 40%",
        loop: "assets/video/sous-ta-peau-brulante.mp4",
        images: [
          {
            src: "assets/img/sous-ta-peau-brulante/photogramme-1.webp",
            w: 1600,
            h: 900,
            alt: "Sous ta peau brûlante : deux silhouettes de profil, face à face, sur un fond violet."
          }
        ]
      },
      hero: {
        type: "youtube",
        id: "jm_t5PYLE94",
        loop: "assets/video/sous-ta-peau-brulante.mp4",
        title: "Sous ta peau brûlante, court-métrage",
        poster: {
          src: "assets/img/sous-ta-peau-brulante/photogramme-1.webp",
          w: 1600,
          h: 900,
          alt: "Sous ta peau brûlante : deux silhouettes de profil, face à face, sur un fond violet."
        }
      },
      stats: [{ value: "4 400 vues", label: "sur Instagram (mai 2025)" }],
      awards: [{ label: "Sélection festival", detail: "1 min 2 court", source: null }],
      gallery: [
        {
          src: "assets/img/sous-ta-peau-brulante/photogramme-1.webp",
          w: 1600,
          h: 900,
          alt: "Sous ta peau brûlante : deux silhouettes de profil, face à face, sur un fond violet."
        },
        {
          src: "assets/img/sous-ta-peau-brulante/photogramme-2.webp",
          w: 1600,
          h: 900,
          alt: "Sous ta peau brûlante : deux silhouettes enlacées sur un fond violet, un bras levé."
        },
        {
          src: "assets/img/sous-ta-peau-brulante/photogramme-3.webp",
          w: 1600,
          h: 900,
          alt: "Sous ta peau brûlante : gros plan sur le visage d’un jeune homme de profil, une main posée sur son épaule."
        },
        {
          src: "assets/img/sous-ta-peau-brulante/photogramme-4.webp",
          w: 1600,
          h: 900,
          alt: "Sous ta peau brûlante : deux hommes enlacés, l’un le visage tourné vers le haut."
        }
      ],
      credits: [
        { label: "Format", value: "Court-métrage de fiction, 2025" },
        { label: "Durée", value: "1 minute" },
        { label: "Réalisation · Écriture", value: "Léonore Vanier" },
        { label: "Assistanat à la réalisation", value: "Juliette Ganay" },
        { label: "Direction de la photographie", value: "Calypso Vanier" },
        { label: "Son et lumière", value: "Joseph Laurent" },
        { label: "Distribution", value: "Mathias Benhamou, Louis Faudais, Félicie Genest" },
        { label: "Musique", value: "« Sicilian Tango », Joshua Arcoleo et Alex Munk (Cezame Music)" },
        { label: "Production", value: "Compagnie Sensible Indocile et Léonore Vanier, en collaboration avec le Cours Florent" },
        { label: "Photos", value: "@sensibleindocile" }
      ],
      links: [{ label: "Voir le film sur YouTube", url: "https://youtu.be/jm_t5PYLE94" }]
    },

    /* ---- LE BAIN ---- */
    {
      id: "le-bain",
      category: "spectacles-vivants",
      slug: "le-bain",
      title: "LE BAIN",
      format: "Théâtre contemporain · Paris + Festival OFF Avignon 2026",
      role: "Productrice · Auteure · Co-metteuse en scène",
      description:
        "LE BAIN, théâtre contemporain à Paris et au Festival OFF d’Avignon 2026 : production, écriture et co-mise en scène par Léonore Vanier.",
      synopsis: "Pièce de théâtre contemporain, présentée à Paris puis au Festival OFF d’Avignon 2026.",
      method: "Modèle économique et financements → Production et coordination de 13 personnes → Plus de 30 représentations à Paris et Avignon.",
      highlight: { icon: "masks", text: "Festival OFF Avignon 2026 — La Factory" },
      tile: {
        ratio: "16 / 9",
        focus: "50% 50%",
        loop: "assets/video/le-bain.mp4",
        images: [
          {
            src: "assets/img/le-bain/scene-mouvement.webp",
            w: 1600,
            h: 1067,
            alt: "Scène du BAIN : silhouette en mouvement flou sous une lumière bleue."
          }
        ]
      },
      hero: {
        type: "youtube",
        id: "aE0wtUnpz-Y",
        loop: "assets/video/le-bain.mp4",
        title: "LE BAIN, teaser",
        poster: {
          src: "assets/img/le-bain/scene-mouvement.webp",
          w: 1600,
          h: 1067,
          alt: "Scène du BAIN : silhouette en mouvement flou sous une lumière bleue."
        }
      },
      stats: [
        { value: "45 k€", label: "budget de production" },
        { value: "13", label: "personnes coordonnées" },
        { value: "30+", label: "représentations" },
        { value: "21 k€", label: "financements levés" },
        { value: "> 75 %", label: "de taux de remplissage au Festival OFF Avignon 2026" }
      ],
      awards: [],
      press: {
        outlet: "La Provence",
        title: "Festival off : « Le Bain », absurde et dérangeant",
        author: "Jean-Noël Grando",
        date: "19 juillet 2026",
        url: "https://www.laprovence.com/article/region/9482563578810414/festival-off-le-bain-absurde-et-derangeant"
      },
      pressImage: {
        image: {
          src: "assets/img/le-bain/image1.webp",
          w: 915,
          h: 902,
          alt: "Coupure de presse : « Au festival off d’Avignon, Léonore Vanier se jette dans Le (grand) Bain », article avec la photo de Léonore Vanier tenant un livret."
        },
        credit: "La République de Seine-et-Marne"
      },
      gallery: [
        {
          src: "assets/img/le-bain/scene-baignoire.webp",
          w: 1536,
          h: 1075,
          alt: "Scène du BAIN : une femme dans une baignoire blanche entre deux autres, sur un plateau sombre éclairé de bleu.",
          caption: "Photo : Arthur Couvreur"
        },
        {
          src: "assets/img/le-bain/divine.webp",
          w: 1600,
          h: 1067,
          alt: "Scène du BAIN : une comédienne en chemise blanche tient un papier sous une lumière violette.",
          caption: "Photo : Marcus Boury"
        },
        {
          src: "assets/img/le-bain/scene-pied.webp",
          w: 1600,
          h: 1067,
          alt: "Scène du BAIN : une comédienne sourit dans une baignoire blanche, les jambes en l’air.",
          caption: "Photo : Matthieu Le Jeune"
        },
        {
          src: "assets/img/le-bain/grace.webp",
          w: 1200,
          h: 1800,
          alt: "Scène du BAIN : une comédienne assise au sol près d’une bougie, sur un plateau éclairé de bleu et de violet.",
          caption: "Photo : Marcus Boury"
        },
        {
          src: "assets/img/le-bain/debut.webp",
          w: 1600,
          h: 1067,
          alt: "Scène du BAIN : un drap blanc dressé en pyramide dans le noir, une main levée, des bougies allumées.",
          caption: "Photo : Marcus Boury"
        },
        {
          src: "assets/img/le-bain/lebain1.webp",
          w: 1200,
          h: 1600,
          alt: "Le Bain : visage d’une comédienne mouillé, sous une lumière bleutée.",
          caption: "Photo : Léonore Vanier"
        },
        {
          src: "assets/img/le-bain/lebain2.webp",
          w: 1200,
          h: 1600,
          alt: "Le Bain : visage d’une comédienne sous l’eau, cheveux flottants, lumière bleue et rose.",
          caption: "Photo : Léonore Vanier"
        }
      ],
      credits: [
        { label: "Genre", value: "Théâtre contemporain" },
        { label: "Écriture · Production", value: "Léonore Vanier" },
        { label: "Mise en scène", value: "Léonore Vanier et Clara Kermarec" },
        { label: "Composition sonore", value: "Zoé Juin" },
        { label: "Interprétation", value: "Mélina Cortès-Davezat, Antoine Ody, Adèle Thomas, Léonore Vanier" },
        { label: "Direction technique", value: "Dominique Pierson" },
        { label: "Soutiens", value: "Théâtre Municipal de Fontainebleau, Service culturel de Montrouge, Cours Florent" },
        { label: "Paris", value: "Théâtre La Croisée des Chemins, du 15 novembre 2025 au 4 janvier 2026" },
        { label: "Avignon", value: "Festival OFF 2026 (La Factory, salle des Antonins)" }
      ],
      links: [
        {
          label: "Lire l’article de La Provence",
          url: "https://www.laprovence.com/article/region/9482563578810414/festival-off-le-bain-absurde-et-derangeant"
        },
        { label: "Acheter la pièce", url: "https://www.amazon.fr/BAIN-pi%C3%A8ce-th%C3%A9%C3%A2tre-contemporaine-absurde/dp/B0G1HZQBQG", primary: true }
      ]
    },

    /* ---- Life on Xenia ---- */
    {
      id: "life-on-xenia",
      category: "ia",
      slug: "life-on-xenia",
      title: "Life on Xenia",
      format: "Série verticale · fiction générée en IA",
      role: "Productrice · Scénariste · AI Video Creator",
      description:
        "Life on Xenia, fiction verticale en 30 épisodes créée avec des outils de génération vidéo IA : écriture, génération, itérations et sélection des plans.",
      synopsis: "Fiction verticale (9:16) en 30 épisodes, générée avec des outils de création vidéo par IA.",
      method: "Écriture → Découpage et prompts → Générations et itérations → Sélection des plans et montage.",
      tools: "Runway, OpenRouter, FFmpeg, Seedance, WAN, GitHub, Visual Studio Code",
      tile: {
        ratio: "16 / 9",
        focus: "50% 50%",
        images: [
          {
            src: "assets/img/life-on-xenia/foret-vignette.webp",
            w: 1280,
            h: 720,
            alt: "Life on Xenia : une forêt luxuriante traversée de rayons de soleil."
          }
        ]
      },
      hero: {
        type: "tiktok",
        id: "7693246234198396192",
        loop: "assets/video/life_on_xenia.mp4",
        url: "https://www.tiktok.com/@lifeonxenia/video/7693246234198396192",
        title: "Life on Xenia, extrait sur TikTok",
        ratio: "9 / 16",
        poster: {
          src: "assets/img/life-on-xenia/video-poster.webp",
          w: 720,
          h: 1280,
          alt: "Image de Life on Xenia : une femme appuyée contre un homme à l’oreille pointue, dans une forêt la nuit."
        }
      },
      stats: [
        { value: "30", label: "épisodes" },
        { value: "+ 14 000 vues", label: "sur TikTok" },
        { value: "> 8 600 vues", label: "sur Instagram" }
      ],
      statsNote: "Vues sur deux semaines de lancement (relevé : octobre 2026).",
      awards: [],
      gallery: [
        {
          src: "assets/img/life-on-xenia/lya.webp",
          w: 1600,
          h: 893,
          alt: "Planche de personnage : Lya, de face, de dos et en gros plan.",
          caption: "Planche de personnage : Lya"
        },
        {
          src: "assets/img/life-on-xenia/raafa.webp",
          w: 1600,
          h: 893,
          alt: "Planche de personnage : Raafa, de face, de dos et en gros plan.",
          caption: "Planche de personnage : Raafa"
        },
        {
          src: "assets/img/life-on-xenia/foret.webp",
          w: 1600,
          h: 893,
          alt: "Planche de décors : six variantes d’une forêt lumineuse traversée de rayons de soleil.",
          caption: "Décors : la forêt de Xenia"
        },
        {
          src: "assets/img/life-on-xenia/civilisation-ancienne.webp",
          w: 1600,
          h: 893,
          alt: "Planche de décors : vaisseau d’une civilisation ancienne recouvert de lianes dans la jungle.",
          caption: "Décors : la civilisation ancienne"
        },
        {
          src: "assets/img/life-on-xenia/astroport.webp",
          w: 1600,
          h: 893,
          alt: "Planche de décors : astroport, vaisseaux et ville industrielle sous une lumière orangée.",
          caption: "Décors : l’astroport"
        },
        {
          src: "assets/img/life-on-xenia/planches-continuite.webp",
          w: 800,
          h: 446,
          alt: "Planches de continuité en six cases : trois personnages dans une forêt lumineuse, avec indications de dialogue et de durée.",
          caption: "Planches de continuité utilisées pour structurer les générations."
        }
      ],
      credits: [
        { label: "Format", value: "Série verticale 9:16, fiction générée en IA" },
        { label: "Épisodes", value: "30" },
        { label: "Rôle", value: "Productrice · Scénariste · AI Video Creator" },
        { label: "Outils", value: "Runway · OpenRouter · FFmpeg · Seedance · WAN · GitHub · Visual Studio Code" },
        { label: "Images", value: "@leonorevanier" }
      ],
      links: [
        { label: "Voir l’extrait sur TikTok", url: "https://www.tiktok.com/@lifeonxenia/video/7693246234198396192" },
        { label: "Life on Xenia sur Instagram", url: "https://www.instagram.com/lifeonxenia/" },
        { label: "Voir un reel sur Instagram", url: "https://www.instagram.com/reel/De4z9DGsBS4/" }
      ]
    },

    /* ---- Productions audio ---- */
    {
      id: "productions-audio",
      type: "audio",
      category: "audio",
      slug: "productions-audio",
      title: "Productions audio",
      format: "Livres audio · 2026",
      role: "Productrice · Directrice artistique",
      description:
        "Huit productions de livres audio : prospection, coordination des enregistrements, direction artistique, narration et livraison.",
      tile: {
        ratio: "16 / 9",
        images: [
          {
            src: "assets/img/audio/les-disparues-de-la-crypte.webp",
            w: 800,
            h: 800,
            alt: "Couverture du livre audio Les disparues de la crypte, de Mélodie Miller."
          },
          {
            src: "assets/img/audio/la-mariee-de-la-fosse.webp",
            w: 447,
            h: 434,
            alt: "Couverture du livre audio La Mariée de la fosse, de Mélodie Miller."
          },
          {
            src: "assets/img/audio/au-coeur-du-yukon.webp",
            w: 436,
            h: 434,
            alt: "Couverture du livre audio Au cœur du Yukon, de Sophie Camus Hoguet."
          }
        ]
      },
      intro: [
        "Développement et structuration d’une nouvelle activité de production de livres audio en 2026, de la prospection commerciale à la livraison des productions.",
        "Huit productions : six thrillers, dont une trilogie, et deux romances."
      ],
      activity: {
        title: "Du manuscrit à la livraison finale",
        steps: [
          { title: "Développement", text: "Prospection, négociation, acquisition de clients et contractualisation." },
          {
            title: "Production",
            text: "Recrutement et coordination des intervenants, calendrier d’enregistrement, suivi artistique et opérationnel."
          },
          { title: "Livraison", text: "Coordination de la postproduction, contrôle qualité et remise des fichiers finalisés." }
        ],
        stats: [
          { value: "8 contrats", label: "signés" },
          { value: "10 000 €", label: "de chiffre d’affaires généré par l’activité" }
        ],
        note: null
      },
      credit: "Postproduction : La Lucarne d’Ariane, studio de postproduction partenaire.",
      /* Chaque production = une fiche. `null` = à compléter.
         Ordre d’affichage : enquêtes d’Anna Blanchard & Julien Vautrin, romances, trilogie. */
      groups: [
        {
          id: "thrillers",
          label: "Thrillers",
          title: "Les enquêtes d’Anna Blanchard & Julien Vautrin",
          note: "Série de Mélodie Miller.",
          items: [
            {
              slug: "la-mariee-de-la-fosse",
              title: "La Mariée de la fosse",
              author: "Mélodie Miller",
              genre: "Thriller",
              series: "Les enquêtes d’Anna Blanchard & Julien Vautrin, tome 1",
              cover: {
                src: "assets/img/audio/la-mariee-de-la-fosse.webp",
                w: 447,
                h: 434,
                alt: "Couverture de La Mariée de la fosse, de Mélodie Miller : une jeune mariée flotte dans l’eau verte d’un bassin."
              },
              listen: {
                label: "Écouter sur Audible",
                url: "https://www.audible.fr/pd/La-mariee-de-la-fosse-Un-thriller-psychologique-inspire-de-faits-reels-Livre-Audio/B0GRX36BLP"
              }
            },
            {
              slug: "les-disparues-de-la-crypte",
              title: "Les disparues de la crypte",
              author: "Mélodie Miller",
              genre: "Thriller",
              series: "Les enquêtes d’Anna Blanchard & Julien Vautrin, tome 2",
              cover: {
                src: "assets/img/audio/les-disparues-de-la-crypte.webp",
                w: 800,
                h: 800,
                alt: "Couverture de Les disparues de la crypte, de Mélodie Miller : une fillette court dans une crypte sombre."
              },
              listen: { label: "Écouter sur Audible", url: "https://www.audible.fr/pd/B0HNHT8XD7" }
            },
            {
              slug: "l-enfant-du-canal",
              title: "L’enfant du canal",
              author: "Mélodie Miller",
              genre: "Thriller",
              series: "Les enquêtes d’Anna Blanchard & Julien Vautrin, tome 3",
              status: "En cours de production",
              cover: {
                src: "assets/img/audio/l-enfant-du-canal.webp",
                w: 900,
                h: 900,
                alt: "Couverture de L’enfant du canal, de Mélodie Miller : une péniche éclairée glisse sur un canal de nuit, un ours en peluche abandonné au bord de l’eau."
              },
              listen: null
            }
          ]
        },
        {
          id: "romances",
          label: "Romances",
          title: "Romances",
          items: [
            {
              slug: "au-coeur-du-yukon",
              title: "Au cœur du Yukon",
              author: "Sophie Camus Hoguet",
              genre: "Romance",
              cover: {
                src: "assets/img/audio/au-coeur-du-yukon.webp",
                w: 436,
                h: 434,
                alt: "Couverture de Au cœur du Yukon, de Sophie Camus Hoguet : une femme et son chien husky dans un paysage enneigé."
              },
              listen: { label: "Écouter sur Kobo", url: "https://www.kobo.com/fr/fr/audiobook/au-coeur-du-yukon-1" }
            },
            {
              slug: "un-chum-pour-noel",
              title: "Un chum pour Noël",
              author: "Mélodie Miller",
              genre: "Romance",
              series: "Comédie romantique de Noël au Québec",
              cover: {
                src: "assets/img/audio/un-chum-pour-noel.webp",
                w: 800,
                h: 800,
                alt: "Couverture de Un chum pour Noël, de Mélodie Miller."
              },
              listen: null
            }
          ]
        },
        {
          id: "trilogie",
          label: "Trilogie",
          title: "Quand les murs tremblent",
          note: "Trilogie de Victoire Sentenac, trois thrillers.",
          items: [
            {
              slug: "quand-les-murs-tremblent",
              title: "Quand les murs tremblent",
              author: "Victoire Sentenac",
              genre: "Thriller",
              series: "Trilogie Quand les murs tremblent, tome 1",
              cover: {
                src: "assets/img/audio/quand-les-murs-tremblent.webp",
                w: 800,
                h: 800,
                alt: "Couverture de Quand les murs tremblent, de Victoire Sentenac."
              },
              listen: null
            },
            {
              slug: "sur-les-chemins-du-doute",
              title: "Sur les chemins du doute",
              author: "Victoire Sentenac",
              genre: "Thriller",
              series: "Trilogie Quand les murs tremblent, tome 2",
              cover: {
                src: "assets/img/audio/sur-les-chemins-du-doute.webp",
                w: 800,
                h: 800,
                alt: "Couverture de Sur les chemins du doute, de Victoire Sentenac."
              },
              listen: null
            },
            {
              slug: "envers-et-contre-tout",
              title: "Envers et contre tout",
              author: "Victoire Sentenac",
              genre: "Thriller",
              series: "Trilogie Quand les murs tremblent, tome 3",
              cover: {
                src: "assets/img/audio/envers-et-contre-tout.webp",
                w: 800,
                h: 800,
                alt: "Couverture de Envers et contre tout, de Victoire Sentenac."
              },
              listen: null
            }
          ]
        }
      ],
      /* Rôle affiché sur chaque fiche de livre audio. */
      itemRole: "Narratrice · Productrice · Directrice artistique",
      credits: [],
      links: []
    }
  ],

  /* 5. ACCUEIL ------------------------------------------------------------- */
  // Page d’entrée (accueil-test.html) : grandes lignes de l’activité.
  landing: {
    lead: "J’accompagne des projets audiovisuels de l’écriture à la diffusion.",
    lines: ["Production · Développement · Écriture · Réalisation · Coordination · Postproduction · Code & génération vidéo IA", "Acting · Voix"],
    quote: {
      text: "Mention spéciale pour la qualité de l’écriture et de l’interprétation",
      source: "Prix Florent Image 2026 · Le Contrôle sanitaire"
    }
  },
  home: {
    // Titre masqué visuellement (accessibilité) : le titre professionnel est déjà sous le nom, dans le menu.
    heading: "Productrice artistique — portfolio",
    intro: [
      "J’accompagne des projets audiovisuels de la conception à la livraison, à la croisée de la création, de la production et de la coordination opérationnelle."
    ],
    linkLabel: "Découvrir mon parcours",
    photo: {
      src: "assets/img/a-propos/leonore-tournage.webp",
      w: 1600,
      h: 900,
      alt: "Vue de dos, la productrice cadre son image avec un appareil photo en extérieur.",
      credit: "Nemo Pierson"
    }
  },

  /* 6. À PROPOS ------------------------------------------------------------ */
  about: {
    statement: "Relier intention artistique, organisation de production et coordination des équipes.",
    photo: {
      src: "assets/img/a-propos/leonore-tournage.webp",
      w: 1600,
      h: 900,
      alt: "Vue de dos, la productrice cadre son image avec un appareil photo en extérieur.",
      credit: "Nemo Pierson"
    },
    /* Qui suis-je ? */
    presentation: [
      "Je suis Léonore Vanier, productrice artistique & creative producer. Je développe, structure et accompagne des projets audiovisuels et artistiques en reliant intention artistique, organisation de production et coordination des équipes.",
      "Mon atout pour vos missions est mon profil hybride entre rigueur opérationnelle et créativité artistique.",
      "Diplômée d’ingénierie à l’ENSTA Paris & National University of Singapore en 2021 puis d’art dramatique au Cours Florent en 2025, mon parcours associe 3 ans de project management chez ENGIE puis 2 ans de production artistique de fiction, audio, IA et spectacle vivant au sein de Sensible Indocile."
    ],
    /* Que fais-je concrètement ? Chaque ligne se déplie : outils maîtrisés et projet qui l’illustre. */
    doTitle: "Ce que je fais",
    do: [
      {
        label: "Développement de projets",
        icon: "pen",
        details: "Écriture sous Final Draft et WriterDuet ; plans de financement et budgets prévisionnels sous Excel et Google Sheets.",
        project: "le-bain"
      },
      {
        label: "Préparation et production",
        icon: "clipboard",
        details: "Dépouillement, plan de travail et feuilles de service sous Movie Magic et StudioBinder ; tournage au Sony Alpha 7S II.",
        project: "adam"
      },
      {
        label: "Coordination artistique et technique",
        icon: "users",
        details: "Feuilles de service sous StudioBinder, validation des versions sur Frame.io, coordination des équipes artistiques et techniques.",
        project: "le-bain"
      },
      {
        label: "Budgets et plannings",
        icon: "calc",
        details: "Budgets, plans de financement et plannings sous Excel et Google Sheets ; plan de travail sous Movie Magic.",
        project: "le-bain"
      },
      {
        label: "Équipes, prestataires et partenaires",
        icon: "handshake",
        details: "Contractualisation, calendriers partagés sous Google Sheets, échanges de fichiers via SwissTransfer.",
        project: "productions-audio"
      },
      {
        label: "Postproduction et livraison",
        icon: "cut",
        details: "Montage et habillage sous Premiere Pro et After Effects ; validations sur Frame.io ; livraison via SwissTransfer et en DCP.",
        project: "le-controle-sanitaire"
      },
      {
        label: "Formats vidéo et workflows IA",
        icon: "spark",
        details: "Références visuelles avec Midjourney et Flux ; génération vidéo avec Runway, Seedance et WAN ; orchestration avec OpenRouter et Claude ; assemblage avec FFmpeg.",
        project: "life-on-xenia"
      },
      {
        label: "Productions audio",
        icon: "mic",
        details: "Enregistrement des voix avec du matériel Røde ; postproduction confiée au studio partenaire La Lucarne d’Ariane.",
        project: "productions-audio"
      }
    ],
    /* Sur quels projets puis-je intervenir ? (5 blocs sur une seule rangée) */
    domainsTitle: "Sur quels projets je peux intervenir",
    domains: [
      {
        icon: "clap",
        label: "Fiction",
        text: "Courts-métrages et séries",
        links: [
          { label: "Le Contrôle sanitaire", project: "le-controle-sanitaire" },
          { label: "ADAM", project: "adam" },
          { label: "Sous ta peau brûlante", project: "sous-ta-peau-brulante" }
        ]
      },
      {
        icon: "spark",
        label: "IA et nouveaux formats",
        text: "Fiction verticale, workflows vidéo",
        links: [{ label: "Life on Xenia", project: "life-on-xenia" }]
      },
      {
        icon: "headphones",
        label: "Audio",
        text: "Livres audio, de la prospection à la livraison",
        links: [{ label: "Productions audio", project: "productions-audio" }]
      },
      {
        icon: "masks",
        label: "Spectacles vivants",
        text: "Théâtre contemporain",
        links: [{ label: "LE BAIN", project: "le-bain" }]
      },
      {
        icon: "camera",
        label: "Production vidéo",
        text: "Tournage, postproduction, livrables",
        links: [
          { label: "Le Contrôle sanitaire", project: "le-controle-sanitaire" },
          { label: "ADAM", project: "adam" }
        ]
      }
    ],
    /* Quelles compétences puis-je mobiliser ? Chaque compétence renvoie à une preuve. */
    skillsTitle: "Exemples d’application",
    skills: [
      { label: "Développement", proof: "Scénario du Contrôle sanitaire ; modèle économique et financements du BAIN", project: "le-bain" },
      { label: "Production", proof: "ADAM : dépouillement, plan de travail, casting, repérages", project: "adam" },
      { label: "Coordination", proof: "LE BAIN : 13 personnes coordonnées, équipes artistiques et techniques", project: "le-bain" },
      { label: "Planning", proof: "ADAM : plan de travail et feuilles de service", project: "adam" },
      { label: "Budget", proof: "LE BAIN : 45 k€ de budget de production, suivi budgétaire", project: "le-bain" },
      { label: "Équipes et prestataires", proof: "Audio : recrutement et coordination des intervenants", project: "productions-audio" },
      { label: "Postproduction", proof: "Le Contrôle sanitaire : montage, étalonnage, mixage", project: "le-controle-sanitaire" },
      { label: "Livraison", proof: "Audio : contrôle qualité et remise des fichiers finalisés", project: "productions-audio" },
      { label: "Vidéo IA", proof: "Life on Xenia : 30 épisodes verticaux générés en IA", project: "life-on-xenia" },
      { label: "Audio", proof: "8 productions de livres audio", project: "productions-audio" },
      { label: "Spectacle vivant", proof: "LE BAIN : plus de 30 représentations à Paris et Avignon", project: "le-bain" }
    ],
    /* Preuves concrètes : uniquement des éléments vérifiés (7 blocs, sur 2 lignes au plus). */
    proofsTitle: "Preuves concrètes",
    proofs: [
      { icon: "film", value: "Courts-métrages", text: "Le Contrôle sanitaire (33 000 vues), Sous ta peau brûlante", project: "le-controle-sanitaire" },
      { icon: "series", value: "Mini-série", text: "ADAM, produite par FeatureProd", project: "adam" },
      { icon: "euro", value: "45 k€ · 13 · 30+", text: "LE BAIN : budget, personnes, représentations", project: "le-bain" },
      { icon: "phone", value: "30 épisodes", text: "Life on Xenia, fiction verticale en IA", project: "life-on-xenia" },
      { icon: "headphones", value: "8 productions", text: "Livres audio : 6 thrillers, 2 romances", project: "productions-audio" },
      { icon: "briefcase", value: "2021–2024", text: "Project Manager chez ENGIE · +8,8 M€ de CA", project: null },
      { icon: "logo", value: "Depuis 2024", text: "Création de Sensible Indocile", project: null }
    ],
    /* Mon identité : trois blocs sur une ligne. `company: true` = bloc Sensible Indocile (logo et lien). */
    identityTitle: "Mon identité",
    identity: [
      {
        label: "Ingénierie",
        items: [
          "ENSTA Paris, diplôme d’ingénieure (2020)",
          "National University of Singapore, Master of Engineering (2021)",
          "Project Manager chez ENGIE (2021–2024) : innovation, coordination multi-acteurs, +8,8 M€ de CA"
        ]
      },
      {
        label: "Création",
        items: ["Art dramatique, Cours Florent (2025)", "Fiction, spectacle vivant, audio et vidéo assistée par IA"]
      },
      {
        label: "Entrepreneuriat",
        company: true,
        items: ["Création de Sensible Indocile (2024) : projets artistiques, financements, production et exploitation"],
        link: "Site de Sensible Indocile"
      }
    ],
    languagesTitle: "Langues",
    languages: ["Français (maternelle)", "Anglais (bilingue)", "Espagnol (avancé)", "Coréen (notions)"],
    softwareTitle: "Logiciels",
    softwareGroups: [
      { label: "Écriture et développement", items: ["Final Draft", "WriterDuet", "Excel", "Google Sheets"] },
      { label: "Préparation et production", items: ["Movie Magic", "StudioBinder", "Frame.io", "SwissTransfer"] },
      { label: "Postproduction et livraison", items: ["Premiere Pro", "After Effects", "Frame.io", "SwissTransfer"] },
      { label: "Création et IA", items: ["Canva", "Midjourney", "Flux", "Runway", "Seedance", "WAN", "OpenRouter", "Claude", "FFmpeg", "GitHub", "Visual Studio Code"] }
    ],
    cta: "Échangeons sur vos projets"
  },

  /* 7. ACTING -------------------------------------------------------------- *
   * Les portraits : size "large" (gros) ou "small" (petit) ; ratio du cadre ;
   * focus = point de cadrage (object-position) pour recentrer le visage.      */
  acting: {
    intro:
      "Parallèlement à la production, je travaille comme actrice à l’écran, à la scène et au micro en prêtant ma voix.",
    portraits: [
      { n: 1, size: "large", ratio: "4 / 5", focus: "50% 20%", w: 1200, h: 1680, credit: "Timeo Christophe" },
      { n: 2, size: "large", ratio: "4 / 5", focus: "50% 25%", w: 984, h: 1230, credit: "Lou Benoit-Colin" },
      // Ordre d’affichage : les trois verticaux (1, 2, 4), puis les deux horizontaux (3, 5).
      { n: 4, size: "large", ratio: "4 / 5", focus: "50% 25%", w: 1200, h: 1804, credit: "Anselme Desmichel" },
      { n: 3, size: "large", ratio: "16 / 9", focus: "50% 50%", w: 1200, h: 800, credit: "Marie Texier" },
      { n: 5, size: "large", ratio: "16 / 9", focus: "50% 22%", w: 1200, h: 1032, credit: "Gwennoline Piccolo" },
      { n: 6, size: "small", ratio: "4 / 5", focus: "50% 25%", w: 800, h: 1127, credit: "Julie Reggiani" },
      { n: 7, size: "small", ratio: "4 / 5", focus: "50% 30%", w: 800, h: 1199, credit: "Celia Hamou" },
      { n: 8, size: "small", ratio: "4 / 5", focus: "50% 35%", w: 800, h: 1200, credit: "Lou Benoit-Colin" },
      { n: 9, size: "small", ratio: "4 / 5", focus: "50% 25%", w: 800, h: 1067, credit: "Leo Raimondjean" },
      { n: 10, size: "small", ratio: "4 / 5", focus: "50% 45%", w: 800, h: 1422, credit: "Lou Benoit-Colin" }
    ],
    reel: {
      label: "Bande-démo",
      youtubeId: "QKqZMe2uuG0",
      title: "Bande-démo de Léonore Vanier, comédienne",
      ratio: "16 / 9",
      url: "https://www.filmmakers.eu/fr/actors/leonore-vanier/video/176486",
      poster: {
        src: "assets/img/acting/bande-demo.webp",
        w: 1280,
        h: 720,
        alt: "Image de la bande-démo de Léonore Vanier, comédienne."
      },
      loop: "assets/video/bande-demo.mp4" // aperçu muet, en continu
    },
    voice: {
      label: "Démo voix",
      src: "assets/audio/demo-voix.mp3", // lecteur intégré (aucune lecture automatique)
      url: "https://www.filmmakers.eu/en/actors/leonore-vanier/audio/176490",
      linkLabel: "Voir ma démo voix sur Filmmakers"
    },
    awards: {
      label: "Récompenses",
      icon: "trophy",
      before: "Mention spéciale pour « la qualité de l’écriture et de l’interprétation » dans ",
      film: "le-controle-sanitaire",
      after: ", au Prix Florent Image 2026."
    },
    voiceNote: {
      label: "Voix en situation : Les disparues de la crypte, sur Audible",
      url: "https://www.audible.fr/pd/B0HNHT8XD7"
    },
    agent: {
      label: "Mon agent",
      name: "Thomas Soligny — Modern Players Agency",
      url: "https://www.filmmakers.eu/en/actors/leonore-vanier"
    },
    adAgent: {
      label: "Agent publicité",
      name: "Rebecca Artists",
      url: "https://www.rebecca-artists.fr/index.htm"
    },
    adAgent2: {
      label: "Agent publicité",
      name: "Dynamite Agency",
      url: "https://www.agency-dynamite.fr/"
    },
    cvNote: "Mon profil artistique est disponible sur la page de mon agent."
  },

  /* 8. CONTACTS ------------------------------------------------------------ */
  contact: {
    intro: "Échangeons sur vos projets.",
    note: "Pour toute proposition de collaboration, le plus simple est de m’écrire.",
    available: "Disponible — missions, CDD et CDI · Paris et à distance",
    links: [
      { label: "Site de Sensible Indocile", url: "https://lacompagniesensibleindocile.fr/" },
      { label: "Instagram", url: "https://www.instagram.com/leonorevanier/" }
    ]
  }
};
