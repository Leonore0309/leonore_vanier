/*
 * Contenu centralisé du site.
 * - Modifier ce fichier suffit pour changer textes, rôles, liens et médias.
 * - Une valeur `null` ou une liste vide = information à fournir : le site affiche
 *   alors un emplacement « À compléter » (visible tant que showTodos vaut true).
 * - Les chemins d’images sont relatifs à la racine du site ; main.js ajoute le préfixe.
 * Voir README.md pour le détail des champs.
 */
window.SITE = {
  name: "Léonore Vanier",
  title: "Creative Producer · Cheffe de projet vidéo",
  tagline: "La créativité d’une artiste, la rigueur d’une ingénieure.",
  email: "leonore.vanier@gmail.com",
  linkedin: "https://www.linkedin.com/in/l%C3%A9onore-vanier/",

  /* true : affiche les emplacements « À compléter » (prévisualisation).
     false : les masque pour la mise en ligne définitive. */
  showTodos: true,

  nav: [
    { id: "a-propos", label: "À propos", path: "a-propos/" },
    { id: "fiction", label: "Fiction", path: "fiction/" },
    { id: "ia", label: "IA", path: "ia/" },
    { id: "audio", label: "Audio", path: "audio/" },
    { id: "spectacles-vivants", label: "Spectacles vivants", path: "spectacles-vivants/" },
    { id: "acting", label: "Acting", path: "acting/" },
    { id: "contacts", label: "Contacts", path: "contacts/" }
  ],

  categories: {
    fiction: {
      label: "Fiction",
      path: "fiction/",
      description: "Courts-métrages et séries : écriture, production et réalisation."
    },
    ia: {
      label: "IA",
      path: "ia/",
      description: "Fictions créées avec des outils de génération vidéo IA."
    },
    audio: {
      label: "Audio",
      path: "audio/",
      description: "Productions de livres audio : narration, direction artistique et production."
    },
    "spectacles-vivants": {
      label: "Spectacles vivants",
      path: "spectacles-vivants/",
      description: "Théâtre contemporain : production, écriture et co-mise en scène."
    }
  },

  /* Ordre = ordre de la mosaïque d’accueil et de la navigation entre projets. */
  projects: [
    {
      id: "le-controle-sanitaire",
      category: "fiction",
      slug: "le-controle-sanitaire",
      title: "Le Contrôle sanitaire",
      format: "Court-métrage · 2026",
      role: "Productrice · Auteure · Réalisatrice",
      description:
        "Court-métrage de fiction écrit, produit et réalisé par Léonore Vanier en 2026. Sélections et mention spéciale en festivals.",
      tile: {
        ratio: "16 / 9",
        images: [
          {
            src: "assets/img/le-controle-sanitaire/photogramme-1.webp",
            w: 800,
            h: 450,
            alt: "Photogramme du Contrôle sanitaire : deux femmes face à face dans une chambre, l’une enveloppée dans une couette."
          }
        ]
      },
      hero: {
        type: "youtube",
        id: "SmhharGafCE",
        title: "Le Contrôle sanitaire, court-métrage",
        poster: {
          src: "assets/img/le-controle-sanitaire/photogramme-1.webp",
          w: 800,
          h: 450,
          alt: "Photogramme du Contrôle sanitaire : deux femmes face à face dans une chambre."
        }
      },
      intro: [
        "Court-métrage de fiction écrit, produit et réalisé en 2026."
      ],
      contributionsLead:
        "J’ai piloté le projet de l’écriture à sa diffusion, en conciliant direction artistique, organisation du tournage et contraintes de fabrication.",
      contributions: [
        {
          title: "Écriture",
          text: "Développement du scénario."
        },
        {
          title: "Préparation",
          text: "Dépouillement et préparation du tournage."
        },
        {
          title: "Tournage",
          text: "Coordination des équipes."
        },
        {
          title: "Postproduction",
          text: "Suivi de postproduction et gestion des livrables."
        },
        {
          title: "Diffusion",
          text: "Inscriptions en festivals et diffusion numérique."
        }
      ],
      stats: [{ value: "32 000", label: "vues sur YouTube" }],
      awards: [
        {
          label: "Mention spéciale",
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
          src: "assets/img/le-controle-sanitaire/photogramme-2.webp",
          w: 560,
          h: 315,
          alt: "Photogramme : une jeune femme assise sur un lit, dans une chambre aux murs couverts de photos."
        },
        {
          src: "assets/img/le-controle-sanitaire/photogramme-3.webp",
          w: 560,
          h: 315,
          alt: "Photogramme : gros plan sur un livre posé sur un lit."
        }
      ],
      credits: [
        { label: "Format", value: "Court-métrage de fiction, 2026" },
        { label: "Écriture · Réalisation · Production", value: "Léonore Vanier" },
        { label: "Synopsis", value: null, todo: "synopsis du film (2 à 3 phrases)" },
        { label: "Durée", value: null, todo: "durée du film" },
        { label: "Distribution et équipe technique", value: null, todo: "générique complet" }
      ],
      links: [
        {
          label: "Voir le film sur YouTube",
          url: "https://www.youtube.com/watch?v=SmhharGafCE"
        }
      ]
    },

    {
      id: "adam",
      category: "fiction",
      slug: "adam",
      title: "ADAM",
      format: "Mini-série · produite par FeatureProd",
      role: "Chargée de production · Assistante réalisatrice",
      description:
        "Mini-série produite par FeatureProd. Léonore Vanier y est chargée de production et assistante réalisatrice.",
      tile: {
        ratio: "4 / 5",
        images: [],
        placeholder: "Visuel à fournir"
      },
      hero: { type: "placeholder", ratio: "16 / 9", label: "Visuel ou bande-annonce à fournir" },
      intro: [],
      contributionsLead: null,
      contributions: [],
      stats: [],
      awards: [],
      gallery: [],
      credits: [
        { label: "Format", value: "Mini-série" },
        { label: "Production", value: "FeatureProd" },
        { label: "Rôle", value: "Chargée de production · Assistante réalisatrice" },
        { label: "Synopsis", value: null, todo: "synopsis" },
        { label: "Statut et date de sortie", value: null, todo: "statut actuel et date" },
        { label: "Équipe", value: null, todo: "crédits d’équipe autorisés à la publication" },
        { label: "Réalisation", value: null, todo: "nom de la ou du réalisateur" }
      ],
      links: []
    },

    {
      id: "le-bain",
      category: "spectacles-vivants",
      slug: "le-bain",
      title: "LE BAIN",
      format: "Théâtre contemporain · Paris + Festival OFF Avignon 2026",
      role: "Productrice · Auteure · Co-metteuse en scène",
      description:
        "LE BAIN, théâtre contemporain à Paris et au Festival OFF d’Avignon 2026 : production, écriture et co-mise en scène par Léonore Vanier.",
      tile: {
        ratio: "4 / 3",
        images: [
          {
            src: "assets/img/le-bain/scene-mouvement.webp",
            w: 800,
            h: 533,
            alt: "Scène du BAIN : silhouette en mouvement flou sous une lumière bleue."
          }
        ]
      },
      hero: {
        type: "youtube",
        id: "aE0wtUnpz-Y",
        title: "LE BAIN, teaser",
        poster: {
          src: "assets/img/le-bain/scene-mouvement.webp",
          w: 800,
          h: 533,
          alt: "Scène du BAIN : silhouette en mouvement flou sous une lumière bleue."
        }
      },
      intro: [
        "Pièce de théâtre contemporain présentée à Paris puis au Festival OFF d’Avignon 2026.",
        "J’en ai assuré le pilotage artistique, opérationnel et financier, ainsi que la coordination des équipes artistiques, administrative et technique."
      ],
      contributionsLead: null,
      contributions: [
        {
          title: "Développement et financements",
          text: "Construction du modèle économique, recherche de partenaires et montage des dossiers de financement."
        },
        {
          title: "Production et management",
          text: "Organisation de la production, coordination des équipes artistiques et techniques, contractualisation et suivi budgétaire."
        },
        {
          title: "Exploitation et diffusion",
          text: "Plus de 30 représentations à Paris et Avignon, dont 19 dates au Festival OFF 2026, avec un taux de remplissage supérieur à 75 % à Avignon."
        }
      ],
      stats: [
        { value: "45 k€", label: "budget de production" },
        { value: "13", label: "personnes coordonnées" },
        { value: "30+", label: "représentations" },
        { value: "21 k€", label: "financements levés" }
      ],
      awards: [],
      press: {
        outlet: "La Provence",
        title: "Festival off : « Le Bain », absurde et dérangeant",
        author: "Jean-Noël Grando",
        date: "19 juillet 2026",
        url: "https://www.laprovence.com/article/region/9482563578810414/festival-off-le-bain-absurde-et-derangeant"
      },
      gallery: [
        {
          src: "assets/img/le-bain/scene-baignoire.webp",
          w: 800,
          h: 559,
          alt: "Scène du BAIN : une femme dans une baignoire blanche entre deux autres, sur un plateau sombre éclairé de bleu."
        }
      ],
      galleryTodo: "autres photographies du spectacle (avec crédit photo)",
      credits: [
        { label: "Genre", value: "Théâtre contemporain" },
        { label: "Auteure · Co-mise en scène · Production", value: "Léonore Vanier" },
        { label: "Lieux", value: "Paris ; Festival OFF Avignon 2026 (La Factory, salle des Antonins)" },
        { label: "Dates à Paris", value: null, todo: "théâtre et dates à Paris" },
        { label: "Co-metteur ou co-metteuse en scène", value: null, todo: "nom" },
        { label: "Distribution et équipe", value: null, todo: "générique complet" }
      ],
      links: [
        { label: "Voir le teaser", url: "https://www.youtube.com/watch?v=aE0wtUnpz-Y" },
        {
          label: "Lire l’article de La Provence",
          url: "https://www.laprovence.com/article/region/9482563578810414/festival-off-le-bain-absurde-et-derangeant"
        }
      ]
    },

    {
      id: "life-on-xenia",
      category: "ia",
      slug: "life-on-xenia",
      title: "Life on Xenia",
      format: "Série verticale · fiction générée en IA",
      role: "Productrice · Scénariste · AI Video Creator",
      description:
        "Life on Xenia, fiction verticale créée avec des outils de génération vidéo IA : écriture, génération, itérations et sélection des plans.",
      tile: {
        ratio: "4 / 5",
        images: [
          {
            src: "assets/img/life-on-xenia/couple-vertical.webp",
            w: 405,
            h: 720,
            alt: "Image de Life on Xenia : une femme appuyée contre un homme à l’oreille pointue, dans une forêt la nuit."
          }
        ]
      },
      hero: {
        type: "tiktok",
        id: "7693246234198396192",
        title: "Life on Xenia, extrait sur TikTok",
        ratio: "9 / 16",
        poster: {
          src: "assets/img/life-on-xenia/couple-vertical.webp",
          w: 405,
          h: 720,
          alt: "Image de Life on Xenia : une femme appuyée contre un homme à l’oreille pointue, dans une forêt la nuit."
        }
      },
      intro: [
        "Fiction verticale générée avec des outils de création vidéo par IA, pensée pour les formats courts des réseaux sociaux."
      ],
      sections: [
        {
          title: "Objectifs",
          text: "Explorer un workflow de création de fiction verticale associant écriture, génération vidéo IA et montage."
        },
        {
          title: "Défis de fabrication",
          text: "Continuité des personnages, cohérence visuelle, mouvements, synchronisation des dialogues, itérations et coûts de génération."
        }
      ],
      contributionsLead: null,
      contributions: [
        {
          title: "Intervention",
          text: "Développement narratif et découpage des séquences, structuration des prompts et des références, coordination des générations, suivi des itérations et sélection des plans en vue du montage."
        }
      ],
      tools: ["Runway", "OpenRouter", "FFmpeg", "Seedance", "WAN"],
      stats: [
        { value: "+ 10 k", label: "vues sur TikTok" },
        { value: "> 6 k", label: "vues sur Instagram" }
      ],
      statsNote: "Sur deux semaines de lancement.",
      awards: [],
      gallery: [
        {
          src: "assets/img/life-on-xenia/planches-continuite.webp",
          w: 800,
          h: 446,
          alt: "Planches de continuité en six cases : trois personnages dans une forêt lumineuse, avec indications de dialogue et de durée.",
          caption: "Planches de continuité utilisées pour structurer les générations."
        },
        {
          src: "assets/img/life-on-xenia/univers.webp",
          w: 800,
          h: 446,
          alt: "Huit images de l’univers : la mégapole terrestre, l’évacuation, le voyage, le système Manaar, la planète Xenia, la forêt, la base d’exploration, la prison.",
          caption: "Références visuelles de l’univers : de la Terre à la planète Xenia."
        }
      ],
      credits: [
        { label: "Format", value: "Série verticale, fiction générée en IA" },
        { label: "Rôle", value: "Productrice · Scénariste · AI Video Creator" },
        { label: "Outils", value: "Runway · OpenRouter · FFmpeg · Seedance · WAN" },
        { label: "Durée et nombre d’épisodes", value: null, todo: "nombre et durée des épisodes" }
      ],
      links: [
        {
          label: "Voir l’extrait sur TikTok",
          url: "https://www.tiktok.com/@lifeonxenia/video/7693246234198396192"
        }
      ]
    },

    {
      id: "productions-audio",
      type: "audio",
      category: "audio",
      slug: "productions-audio",
      title: "Productions audio",
      format: "Livres audio · 2026",
      role: "Productrice · Directrice artistique",
      description:
        "Productions de livres audio : prospection, coordination des enregistrements, direction artistique et livraison.",
      tile: {
        ratio: "4 / 3",
        images: [
          {
            src: "assets/img/audio/les-disparues-de-la-crypte.webp",
            w: 560,
            h: 560,
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
          {
            title: "Développement",
            text: "Prospection, négociation, acquisition de clients et contractualisation."
          },
          {
            title: "Production",
            text: "Recrutement et coordination des intervenants, calendrier d’enregistrement, suivi artistique et opérationnel."
          },
          {
            title: "Livraison",
            text: "Coordination de la postproduction, contrôle qualité et remise des fichiers finalisés."
          }
        ],
        stats: [
          { value: "7 contrats", label: "signés au T2 2026" },
          { value: "6,5 k€", label: "de chiffre d’affaires généré par l’activité" }
        ],
        note: "Ces indicateurs portent sur l’activité commerciale ; ils ne correspondent pas au nombre de titres présentés ci-dessous."
      },
      credit: "Mention sur les couvertures : La Lucarne d’Ariane.",
      /* Chaque production : une fiche. `null` = à compléter. */
      groups: [
        {
          id: "trilogie",
          label: "Trilogie",
          title: "Quand les murs tremblent",
          note: "Trois thrillers réunis en trilogie.",
          items: [
            {
              slug: "quand-les-murs-tremblent-1",
              title: "Quand les murs tremblent — tome 1",
              titleTodo: "titre exact du tome 1",
              author: null,
              genre: "Thriller",
              cover: null,
              summary: null,
              listen: null
            },
            {
              slug: "quand-les-murs-tremblent-2",
              title: "Quand les murs tremblent — tome 2",
              titleTodo: "titre exact du tome 2",
              author: null,
              genre: "Thriller",
              cover: null,
              summary: null,
              listen: null
            },
            {
              slug: "quand-les-murs-tremblent-3",
              title: "Quand les murs tremblent — tome 3",
              titleTodo: "titre exact du tome 3",
              author: null,
              genre: "Thriller",
              cover: null,
              summary: null,
              listen: null
            }
          ]
        },
        {
          id: "thrillers",
          label: "Thrillers",
          title: "Autres thrillers",
          items: [
            {
              slug: "les-disparues-de-la-crypte",
              title: "Les disparues de la crypte",
              author: "Mélodie Miller",
              genre: "Thriller",
              series: "Les enquêtes d’Anna Blanchard & Julien Vautrin, tome 2",
              cover: {
                src: "assets/img/audio/les-disparues-de-la-crypte.webp",
                w: 560,
                h: 560,
                alt: "Couverture de Les disparues de la crypte, de Mélodie Miller : une fillette court dans une crypte sombre."
              },
              summary:
                "Une crypte macabre à Chablis, une légende gravée dans la pierre et trois jeunes femmes disparues : la journaliste Anna Blanchard et le policier Julien Vautrin doivent collaborer pour percer les secrets de la crypte.",
              listen: {
                label: "Écouter sur Audible",
                url: "https://www.audible.fr/pd/B0HNHT8XD7"
              },
              extract: null
            },
            {
              slug: "la-mariee-de-la-fosse",
              title: "La Mariée de la fosse",
              author: "Mélodie Miller",
              genre: "Thriller",
              cover: {
                src: "assets/img/audio/la-mariee-de-la-fosse.webp",
                w: 447,
                h: 434,
                alt: "Couverture de La Mariée de la fosse, de Mélodie Miller : une jeune mariée flotte dans l’eau verte d’un bassin."
              },
              summary: null,
              listen: null
            },
            {
              slug: "thriller-a-completer",
              title: "Thriller",
              titleTodo: "titre du sixième thriller",
              author: null,
              genre: "Thriller",
              cover: null,
              summary: null,
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
              summary: null,
              listen: null
            },
            {
              slug: "romance-a-completer",
              title: "Romance",
              titleTodo: "titre de la seconde romance",
              author: null,
              genre: "Romance",
              cover: null,
              summary: null,
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

  about: {
    lead:
      "Formée à l’ENSTA Paris, à la National University of Singapore et au Cours Florent, j’accompagne des projets audiovisuels et artistiques de leur conception à leur réalisation.",
    home:
      "J’ai piloté trois ans des projets d’innovation chez ENGIE Solutions, et je produis aujourd’hui mes propres projets : fiction, spectacle vivant, fiction IA et livres audio. J’y associe la rigueur de la gestion de projet et l’exigence artistique.",
    photo: {
      src: "assets/img/a-propos/leonore-tournage.webp",
      w: 800,
      h: 450,
      alt: "Léonore Vanier, vue de dos, cadre son image avec un appareil photo en extérieur."
    },
    paragraphs: [
      "Mon parcours associe deux cultures : celle d’un grand groupe industriel et celle de l’entrepreneuriat artistique. Ingénieure, j’ai passé trois ans chez ENGIE Solutions comme Project Manager. J’y ai piloté des projets d’innovation et de transformation dans un environnement industriel complexe : coordination multi-acteurs, amélioration des processus et déploiement d’une solution générant 8,8 M€ de chiffre d’affaires additionnel.",
      "Formée aussi au Cours Florent, j’ai créé Sensible Indocile, une structure de production. J’y développe et produis des projets artistiques : gestion de projets, financements, production et exploitation."
    ],
    formation: ["ENSTA Paris", "National University of Singapore", "Cours Florent"],
    pillars: [
      {
        title: "Créer & produire",
        text: "Développer les projets, comprendre les intentions artistiques et coordonner leur fabrication."
      },
      {
        title: "Structurer & optimiser",
        text: "Construire des méthodes fiables, piloter les coûts, anticiper les risques et fluidifier la coordination."
      },
      {
        title: "Innover & accompagner",
        text: "Mobiliser les outils numériques et les workflows IA pour explorer de nouvelles méthodes de fabrication."
      }
    ],
    timeline: [
      {
        label: "ENGIE Solutions",
        role: "Project Manager",
        text: "Trois ans de pilotage de projets d’innovation et de transformation. Solution développée et déployée : +8,8 M€ de chiffre d’affaires additionnel.",
        dates: null
      },
      {
        label: "Sensible Indocile",
        role: "Structure de production",
        text: "Création et développement d’une structure de production : gestion de projets artistiques, financements, production et exploitation.",
        dates: null
      }
    ]
  },

  acting: {
    intro:
      "Parallèlement à la production, je travaille comme comédienne. Formée au Cours Florent, je prête aussi ma voix à des livres audio.",
    portraits: [
      { label: "Portrait 1", todo: "portrait (crédit photo à indiquer)" },
      { label: "Portrait 2", todo: "portrait (crédit photo à indiquer)" },
      { label: "Portrait 3", todo: "portrait (crédit photo à indiquer)" }
    ],
    reel: { label: "Bande-démo", url: null, youtubeId: null, todo: "lien de la bande-démo" },
    voice: { label: "Démo voix", src: null, url: null, todo: "fichier audio ou lien de la démo voix" },
    voiceNote: {
      label: "Voix en situation : Les disparues de la crypte, sur Audible",
      url: "https://www.audible.fr/pd/B0HNHT8XD7"
    },
    agency: { label: "Mon agence", url: null, todo: "nom de l’agence et lien" },
    adAgent: { label: "Mon agent publicité", url: null, todo: "nom de l’agent et lien" },
    cvNote: "Mon CV artistique est disponible sur la page de mon agent."
  },

  contact: {
    intro: "Échangeons sur vos projets.",
    note: "Pour toute proposition de collaboration, le plus simple est de m’écrire."
  }
};
