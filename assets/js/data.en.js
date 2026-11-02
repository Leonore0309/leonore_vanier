/*
 * ============================================================================
 *  ENGLISH TEXTS — loaded on the pages under /en/ only.
 * ============================================================================
 *  This file mirrors the structure of data.js and only holds what changes in English:
 *  texts, labels and image descriptions. Names, titles of works, figures, links and
 *  image paths come from data.js. Arrays are merged item by item (same order as data.js).
 *  To edit the French site, change data.js; to edit the English site, change this file.
 */
window.SITE_EN = {
  lang: "en",
  role: "Artistic producer",
  title: "Creative Producer · Video project manager",

  nav: [
    { label: "About" },
    { label: "Fiction" },
    { label: "Audio" },
    { label: "AI" },
    { label: "Live performance" },
    { label: "Acting" },
    { label: "Contact" }
  ],

  categories: {
    fiction: { label: "Fiction", description: "Short films and series." },
    ia: { label: "AI", description: "Fiction created with AI video generation tools." },
    audio: { label: "Audio", description: "Audiobooks: narration, artistic direction and production." },
    "spectacles-vivants": { label: "Live performance", description: "Contemporary theatre." }
  },

  ui: {
    skip: "Skip to content",
    menu: "Menu",
    mainNav: "Main navigation",
    newTab: "(opens in a new tab)",
    role: "My role",
    roleSr: "Role: ",
    section: "Section",
    projects: "Projects",
    work: "The work",
    method: "What I did",
    synopsis: "Synopsis",
    enter: "My portfolio",
    toolsUsed: "Tools used",
    buyPlay: "Buy the play",
    awardsTitle: "Awards",
    themeToLight: "Switch to light mode",
    themeToDark: "Switch to dark mode",
    available: "Available",
    languages: "Languages",
    software: "Software",
    watchVideo: "Watch the video: ",
    demoLink: "Watch my showreel and awards",
    inProgress: "Being written",
    keyFigures: "Key figures",
    contribution: "My contribution",
    tools: "Tools tested",
    gallery: "Gallery",
    credits: "Credits",
    press: "Press",
    readArticle: "Read the article",
    awards: "Awards and selections",
    viewProject: "View the project",
    prev: "← Previous",
    next: "Next →",
    otherProjects: "Other projects",
    allProjects: "All projects",
    playVideo: "Play the video: ",
    photo: "Photo: ",
    photos: "Photos: ",
    textBy: "Text by",
    genre: "Genre",
    series: "Series",
    coverMissing: "Cover to be provided",
    eightProductions: "The eight productions",
    portraits: "Portraits",
    representation: "Representation",
    viewPage: "View the page",
    email: "E-mail",
    linkedin: "LinkedIn",
    website: "Website",
    instagram: "Instagram",
    otherLang: "FR",
    otherLangName: "Français",
    langSwitch: "Passer en français",
    skipTodo: "To be completed",
    footerRole: "Artistic producer",
    styleLabel: "Style",
    styleAria: "Choose the visual style",
    comparison: "Comparison",
    comparisonTitle: "Two styles for the site",
    comparisonIntro: "Same content, two visual universes. Each preview is the real home page. “Browse” applies the style to the whole site; the selector at the bottom of the page lets you switch at any time.",
    browseStyle: "Browse the site in this style",
    previewTitle: "Home page preview, style ",
    notFoundSkills: "View",
    homeHeading: "Artistic producer — portfolio"
  },

  projects: [
    /* ---- Le Contrôle sanitaire ---- */
    {
      id: "le-controle-sanitaire",
      format: "Short film · 2026 · 8 min",
      filmBy: "A film by Léonore Vanier & Juliette Ganay",
      role: "Producer · Writer · Director",
      description:
        "Le Contrôle sanitaire, a short fiction film (2026, 8 min), a film by Léonore Vanier and Juliette Ganay. Festival selections and a special mention.",
      synopsis: "Alice and Sacha have been madly in love for 5 years, but the couple has grown fragile. United by the same love, the two young women try to reconcile their relationship and their differences.",
      method: "Writing → Preparation → Shoot → Post-production (editing, grading, mixing) → Festivals and online release.",
      tile: { images: [{ alt: "Le Contrôle sanitaire: two women face to face in a bedroom, one of them tossing her hair back." }] },
      hero: {
        title: "Le Contrôle sanitaire, short film",
        poster: { alt: "Le Contrôle sanitaire: two women face to face in a bedroom, one of them tossing her hair back." }
      },
      stats: [{ value: "33,000 views", label: "on YouTube (October 2026)" }],
      awards: [
        { label: "Special mention", detail: "for “the quality of the writing and of the performances”", source: "Prix Florent Image 2026" },
        { label: "Official selection 2026", detail: "Plus c’est court, plus c’est bon · KINO POP Festival · CAST Festival" }
      ],
      gallery: [
        { alt: "Le Contrôle sanitaire: two young women in profile, face to face in a bedroom; one rests her hand on the other’s chin, mouth open." },
        { alt: "Le Contrôle sanitaire: portrait of a dark-haired young woman in a blue dressing gown, looking worried, in a bedroom." },
        { alt: "Le Contrôle sanitaire: portrait of a young woman with short hair, lips parted, string lights in the background." },
        { alt: "Le Contrôle sanitaire: two laughing young women hugging." },
        { alt: "Le Contrôle sanitaire: a young woman in a blue dressing gown, caught mid-movement, looking off-screen." },
        { alt: "Le Contrôle sanitaire: close-up of objects resting on a book, seen from above." }
      ],
      credits: [
        { label: "Format", value: "Short fiction film, 2026" },
        { label: "Running time", value: "8 minutes" },
        { label: "A film by" },
        { label: "Director · Producer" },
        { label: "Written by", value: "Juliette Ganay and Léonore Vanier" },
        { label: "Cast", value: "Juliette Ganay and Léonore Vanier" },
        { label: "Director of photography" },
        { label: "Sound" },
        { label: "Assistant director (staging)" },
        { label: "Editing · Grading · Mixing" },
        { label: "Photos" }
      ],
      links: [{ label: "Watch the film on YouTube" }]
    },

    /* ---- ADAM ---- */
    {
      id: "adam",
      format: "Mini-series · produced by FeatureProd",
      role: "Production coordinator · Assistant director",
      description:
        "ADAM, a mini-series directed by Hadrien Fière and produced by FeatureProd. Léonore Vanier is production coordinator and assistant director.",
      synopsis: "When Adam learns he is going to become a father, everything he knew changes. Torn between loyalty to his new family and to the one he comes from, he wonders about his future role as a father.",
      method: "Production: script breakdown, shooting schedule, casting, location scouting · Assistant directing: call sheets, actor, location and technical constraints, rushes follow-up.",
      status: "Project in progress",
      tile: { images: [{ alt: "Still from ADAM: a man in a long green coat standing in a street at night, blurred in motion." }] },
      hero: { image: { alt: "Still from ADAM: a man in a long green coat standing in a street at night, blurred in motion." } },
      galleryFirst: { alt: "Still from ADAM: close-up on a young man’s profile, his face lit by a warm light.", caption: "Photo: @bidounini" },
      gallery: [
        { alt: "Still from ADAM: a man in a long green coat standing in a street at night, blurred in motion.", caption: "Photo: @bidounini" },
        { alt: "Still from ADAM: a hand holding a pincushion with colourful pin heads.", caption: "Photo: @bidounini" },
        { alt: "Still from ADAM: a man and a woman in profile, side by side in the dark.", caption: "Photo: @bidounini" }
      ],
      credits: [
        { label: "Format", value: "Mini-series" },
        { label: "Director" },
        { label: "Production" },
        { label: "Status", value: "In progress · release planned for late 2026" },
        { label: "My role", value: "Production coordinator · Assistant director" },
        { label: "Photos" },
        { label: "Cast and crew" }
      ]
    },

    /* ---- Sous ta peau brûlante ---- */
    {
      id: "sous-ta-peau-brulante",
      format: "Short film · 2025 · 1 min",
      role: "Producer · Writer · Director",
      description:
        "Sous ta peau brûlante, a short fiction film (2025, 1 min) written and directed by Léonore Vanier, produced by the Compagnie Sensible Indocile.",
      synopsis: "Between Axel and Léo, the spark is instant. As the date goes wonderfully, Léo notices a detail about Axel that will tip their romance into drama.",
      method: "Writing → Preparation → Shoot → Post-production (editing, grading, mixing) → Festivals and online release.",
      methodNote: "In collaboration with the Cours Florent.",
      tile: { images: [{ alt: "Sous ta peau brûlante: two silhouettes in profile, face to face, against a purple background." }] },
      hero: {
        title: "Sous ta peau brûlante, short film",
        poster: { alt: "Sous ta peau brûlante: two silhouettes in profile, face to face, against a purple background." }
      },
      stats: [{ value: "4,400 views", label: "on Instagram (May 2025)" }],
      awards: [{ label: "Festival selection", detail: "1 min 2 court" }],
      gallery: [
        { alt: "Sous ta peau brûlante: two silhouettes in profile, face to face, against a purple background." },
        { alt: "Sous ta peau brûlante: two silhouettes embracing against a purple background, one arm raised." },
        { alt: "Sous ta peau brûlante: close-up on a young man’s face in profile, a hand resting on his shoulder." },
        { alt: "Sous ta peau brûlante: two men embracing, one with his face turned upwards." }
      ],
      credits: [
        { label: "Format", value: "Short fiction film, 2025" },
        { label: "Running time", value: "1 minute" },
        { label: "Director · Writer" },
        { label: "Assistant director" },
        { label: "Director of photography" },
        { label: "Sound and lighting" },
        { label: "Cast" },
        { label: "Music", value: "“Sicilian Tango”, Joshua Arcoleo and Alex Munk (Cezame Music)" },
        { label: "Production", value: "Compagnie Sensible Indocile and Léonore Vanier, in collaboration with the Cours Florent" },
        { label: "Photos" }
      ],
      links: [{ label: "Watch the film on YouTube" }]
    },

    /* ---- LE BAIN ---- */
    {
      id: "le-bain",
      format: "Contemporary theatre · Paris + Festival OFF Avignon 2026",
      role: "Producer · Playwright · Co-director",
      description:
        "LE BAIN, contemporary theatre in Paris and at the Festival OFF Avignon 2026: production, writing and co-direction by Léonore Vanier.",
      synopsis: "A contemporary play, presented in Paris then at the Festival OFF Avignon 2026.",
      method: "Business model and funding → Production and coordination of 13 people → More than 30 performances in Paris and Avignon.",
      highlight: { text: "Festival OFF Avignon 2026 — La Factory" },
      tile: { images: [{ alt: "Scene from LE BAIN: a blurred silhouette in motion under blue light." }] },
      hero: {
        title: "LE BAIN, teaser",
        poster: { alt: "Scene from LE BAIN: a blurred silhouette in motion under blue light." }
      },
      stats: [
        { value: "€45k", label: "production budget" },
        { label: "people coordinated" },
        { label: "performances" },
        { value: "€21k", label: "funding raised" },
        { value: "> 75%", label: "occupancy rate at the Festival OFF Avignon 2026" }
      ],
      press: { date: "19 July 2026" },
      pressImage: {
        image: { alt: "Press clipping: “At the Avignon off festival, Léonore Vanier dives into Le (grand) Bain”, an article with a photo of Léonore Vanier holding a booklet." }
      },
      gallery: [
        { alt: "Scene from LE BAIN: a woman in a white bathtub between two others, on a dark stage lit in blue.", caption: "Photo: Arthur Couvreur" },
        { alt: "Scene from LE BAIN: an actress in a white shirt holds a sheet of paper under purple light.", caption: "Photo: Marcus Boury" },
        { alt: "Scene from LE BAIN: an actress smiles in a white bathtub, legs in the air.", caption: "Photo: Matthieu Le Jeune" },
        { alt: "Scene from LE BAIN: an actress sitting on the floor next to a candle, on a stage lit in blue and purple.", caption: "Photo: Marcus Boury" },
        { alt: "Scene from LE BAIN: a white sheet standing like a pyramid in the dark, a raised hand, lit candles.", caption: "Photo: Marcus Boury" },
        { alt: "Le Bain: an actress’s wet face under a bluish light.", caption: "Photo: Léonore Vanier" },
        { alt: "Le Bain: an actress’s face underwater, hair floating, blue and pink light.", caption: "Photo: Léonore Vanier" }
      ],
      credits: [
        { label: "Genre", value: "Contemporary theatre" },
        { label: "Writing · Production" },
        { label: "Direction", value: "Léonore Vanier and Clara Kermarec" },
        { label: "Sound composition" },
        { label: "Cast" },
        { label: "Technical director" },
        { label: "Supporters", value: "Théâtre Municipal de Fontainebleau, Service culturel de Montrouge, Cours Florent" },
        { label: "Paris", value: "Théâtre La Croisée des Chemins, 15 November 2025 to 4 January 2026" },
        { label: "Avignon", value: "Festival OFF 2026 (La Factory, salle des Antonins)" }
      ],
      links: [{ label: "Read the La Provence article" }, { label: "Buy the play" }]
    },

    /* ---- Life on Xenia ---- */
    {
      id: "life-on-xenia",
      format: "Vertical series · AI-generated fiction",
      role: "Producer · Screenwriter · AI Video Creator",
      description:
        "Life on Xenia, a 30-episode vertical fiction series created with AI video generation tools: writing, generation, iterations and shot selection.",
      synopsis: "A 30-episode vertical (9:16) fiction series generated with AI video creation tools.",
      method: "Writing → Breakdown and prompts → Generations and iterations → Shot selection and edit.",
      tools: "Runway, OpenRouter, FFmpeg, Seedance, WAN",
      tile: { images: [{ alt: "Life on Xenia: a lush forest crossed by sunbeams." }] },
      hero: {
        title: "Life on Xenia, excerpt on TikTok",
        poster: { alt: "Still from Life on Xenia: a woman leaning against a pointy-eared man in a forest at night." }
      },
      stats: [{ label: "episodes" }, { value: "+ 14,000 views", label: "on TikTok" }, { value: "> 8,600 views", label: "on Instagram" }],
      statsNote: "Views over the two-week launch period (recorded October 2026).",
      gallery: [
        { alt: "Character sheet: Lya, from the front, from behind and in close-up.", caption: "Character sheet: Lya" },
        { alt: "Character sheet: Raafa, from the front, from behind and in close-up.", caption: "Character sheet: Raafa" },
        { alt: "Set sheet: six variations of a luminous forest crossed by sunbeams.", caption: "Sets: the forest of Xenia" },
        { alt: "Set sheet: an ancient civilisation’s spacecraft covered in vines in the jungle.", caption: "Sets: the ancient civilisation" },
        { alt: "Set sheet: a spaceport, ships and an industrial city under orange light.", caption: "Sets: the spaceport" },
        { alt: "Six-panel continuity boards: three characters in a luminous forest, with dialogue and timing notes.", caption: "Continuity boards used to structure the generations." }
      ],
      credits: [
        { label: "Format", value: "9:16 vertical series, AI-generated fiction" },
        { label: "Episodes" },
        { label: "Role", value: "Producer · Screenwriter · AI Video Creator" },
        { label: "Tools" },
        { label: "Images" }
      ],
      links: [{ label: "Watch the excerpt on TikTok" }, { label: "Life on Xenia on Instagram" }, { label: "Watch a reel on Instagram" }]
    },

    /* ---- Productions audio ---- */
    {
      id: "productions-audio",
      title: "Audio productions",
      format: "Audiobooks · 2026",
      role: "Producer · Artistic director",
      description:
        "Eight audiobook productions: prospecting, coordination of recordings, artistic direction, narration and delivery.",
      tile: {
        images: [
          { alt: "Cover of the audiobook Les disparues de la crypte, by Mélodie Miller." },
          { alt: "Cover of the audiobook La Mariée de la fosse, by Mélodie Miller." },
          { alt: "Cover of the audiobook Au cœur du Yukon, by Sophie Camus Hoguet." }
        ]
      },
      intro: [
        "Development and structuring of a new audiobook production activity in 2026, from commercial prospecting to delivery of the productions.",
        "Eight productions: six thrillers, including a trilogy, and two romances."
      ],
      activity: {
        title: "From manuscript to final delivery",
        steps: [
          { title: "Development", text: "Prospecting, negotiation, client acquisition and contracts." },
          { title: "Production", text: "Hiring and coordinating contributors, recording schedule, artistic and operational follow-up." },
          { title: "Delivery", text: "Coordination of post-production, quality control and delivery of the final files." }
        ],
        stats: [{ value: "8 contracts", label: "signed" }, { value: "€10,000", label: "revenue generated by the activity" }]
      },
      credit: "Post-production: La Lucarne d’Ariane, partner post-production studio.",
      groups: [
        {
          label: "Thrillers",
          title: "The Anna Blanchard & Julien Vautrin investigations",
          note: "A series by Mélodie Miller.",
          items: [
            {
              series: "The Anna Blanchard & Julien Vautrin investigations, book 1",
              cover: { alt: "Cover of La Mariée de la fosse, by Mélodie Miller: a young bride floats in the green water of a pool." },
              listen: { label: "Listen on Audible" }
            },
            {
              series: "The Anna Blanchard & Julien Vautrin investigations, book 2",
              cover: { alt: "Cover of Les disparues de la crypte, by Mélodie Miller: a little girl runs through a dark crypt." },
              listen: { label: "Listen on Audible" }
            },
            { title: "Book 3", series: "The Anna Blanchard & Julien Vautrin investigations, book 3", status: "Being written" }
          ]
        },
        {
          label: "Romances",
          title: "Romances",
          items: [
            {
              cover: { alt: "Cover of Au cœur du Yukon, by Sophie Camus Hoguet: a woman and her husky in a snowy landscape." },
              listen: { label: "Listen on Kobo" }
            },
            {
              series: "A Christmas romantic comedy set in Quebec",
              cover: { alt: "Cover of Un chum pour Noël, by Mélodie Miller." }
            }
          ]
        },
        {
          label: "Trilogy",
          title: "Quand les murs tremblent",
          note: "A trilogy by Victoire Sentenac, three thrillers.",
          items: [
            { series: "Quand les murs tremblent trilogy, book 1", cover: { alt: "Cover of Quand les murs tremblent, by Victoire Sentenac." } },
            { series: "Quand les murs tremblent trilogy, book 2", cover: { alt: "Cover of Sur les chemins du doute, by Victoire Sentenac." } },
            { series: "Quand les murs tremblent trilogy, book 3", cover: { alt: "Cover of Envers et contre tout, by Victoire Sentenac." } }
          ]
        }
      ],
      itemRole: "Narrator · Producer · Artistic director"
    }
  ],

  landing: {
    lead: "I support audiovisual projects from writing to distribution.",
    lines: ["Production · Development · Writing · Directing · Coordination · Post-production · Code & AI video generation", "Acting · Voice"],
    quote: {
      text: "Special mention for the quality of the writing and of the performances",
      source: "Prix Florent Image 2026 · Le Contrôle sanitaire"
    }
  },

  home: {
    heading: "Artistic producer — portfolio",
    intro: [
      "I support audiovisual projects from concept to delivery, at the crossroads of creation, production and operational coordination."
    ],
    linkLabel: "Discover my background",
    photo: { alt: "Seen from behind, the producer frames her shot with a camera outdoors." }
  },

  about: {
    statement: "Linking artistic intent, production organisation and team coordination.",
    photo: { alt: "Seen from behind, the producer frames her shot with a camera outdoors." },
    presentation: [
      "I am Léonore Vanier, artistic producer & creative producer. I develop, structure and support audiovisual and artistic projects by linking artistic intent, production organisation and team coordination.",
      "My strength for your assignments is a hybrid profile combining operational rigour and artistic creativity.",
      "With an engineering degree from ENSTA Paris & the National University of Singapore (2021), then drama training at the Cours Florent (2025), my background combines 3 years of project management at ENGIE with 2 years of artistic production in fiction, audio, AI and live performance at Sensible Indocile."
    ],
    doTitle: "What I do",
    do: [
      {
        label: "Project development",
        details: "Writing with Final Draft and WriterDuet; financing plans and forecast budgets in Excel and Google Sheets."
      },
      {
        label: "Preparation and production",
        details: "Script breakdown, shooting schedule and call sheets with Movie Magic and StudioBinder; shooting on the Sony Alpha 7S II."
      },
      {
        label: "Artistic and technical coordination",
        details: "Call sheets in StudioBinder, version approval on Frame.io, coordination of the artistic and technical teams."
      },
      {
        label: "Budgets and schedules",
        details: "Budgets, financing plans and schedules in Excel and Google Sheets; shooting schedule in Movie Magic."
      },
      {
        label: "Teams, suppliers and partners",
        details: "Contracts, shared calendars in Google Sheets, file exchange via SwissTransfer."
      },
      {
        label: "Post-production and delivery",
        details: "Editing and graphics with Premiere Pro and After Effects; approvals on Frame.io; delivery via SwissTransfer and as a DCP."
      },
      {
        label: "Video formats and AI workflows",
        details: "Visual references with Midjourney and Flux; video generation with Runway, Seedance and WAN; orchestration with OpenRouter and Claude; assembly with FFmpeg."
      },
      {
        label: "Audio productions",
        details: "Voice recording with Røde equipment; post-production entrusted to the partner studio La Lucarne d’Ariane."
      }
    ],
    domainsTitle: "Projects I can work on",
    domains: [
      { label: "Fiction", text: "Short films and series" },
      { label: "AI and new formats", text: "Vertical fiction, video workflows" },
      { label: "Audio", text: "Audiobooks, from prospecting to delivery" },
      { label: "Live performance", text: "Contemporary theatre" },
      { label: "Video production", text: "Shoot, post-production, deliverables" }
    ],
    skillsTitle: "Examples of application",
    skills: [
      { label: "Development", proof: "Script of Le Contrôle sanitaire; business model and funding for LE BAIN", project: "le-bain" },
      { label: "Production", proof: "ADAM: script breakdown, shooting schedule, casting, location scouting", project: "adam" },
      { label: "Coordination", proof: "LE BAIN: 13 people coordinated, artistic and technical teams", project: "le-bain" },
      { label: "Scheduling", proof: "ADAM: shooting schedule and call sheets", project: "adam" },
      { label: "Budget", proof: "LE BAIN: €45k production budget, budget follow-up", project: "le-bain" },
      { label: "Teams and suppliers", proof: "Audio: hiring and coordinating contributors", project: "productions-audio" },
      { label: "Post-production", proof: "Le Contrôle sanitaire: editing, grading, mixing", project: "le-controle-sanitaire" },
      { label: "Delivery", proof: "Audio: quality control and delivery of final files", project: "productions-audio" },
      { label: "AI video", proof: "Life on Xenia: 30 vertical AI-generated episodes", project: "life-on-xenia" },
      { label: "Audio", proof: "8 audiobook productions", project: "productions-audio" },
      { label: "Live performance", proof: "LE BAIN: more than 30 performances in Paris and Avignon", project: "le-bain" }
    ],
    proofsTitle: "Concrete proof",
    proofs: [
      { value: "Short films", text: "Le Contrôle sanitaire (33,000 views), Sous ta peau brûlante" },
      { value: "Mini-series", text: "ADAM, produced by FeatureProd" },
      { value: "€45k · 13 · 30+", text: "LE BAIN: budget, people, performances" },
      { value: "30 episodes", text: "Life on Xenia, AI vertical fiction" },
      { value: "8 productions", text: "Audiobooks: 6 thrillers, 2 romances" },
      { value: "2021–2024", text: "Project Manager at ENGIE · +€8.8M revenue" },
      { value: "Since 2024", text: "Creation of Sensible Indocile" }
    ],
    identityTitle: "My identity",
    identity: [
      {
        label: "Engineering",
        items: [
          "ENSTA Paris, engineering degree (2020)",
          "National University of Singapore, Master of Engineering (2021)",
          "Project Manager at ENGIE (2021–2024): innovation, multi-stakeholder coordination, +€8.8M revenue"
        ]
      },
      {
        label: "Creation",
        items: ["Drama, Cours Florent (2025)", "Fiction, live performance, audio and AI-assisted video"]
      },
      {
        label: "Entrepreneurship",
        items: ["Creation of Sensible Indocile (2024): artistic projects, funding, production and touring"],
        link: "Sensible Indocile website"
      }
    ],
    languagesTitle: "Languages",
    languages: ["French (native)", "English (bilingual)", "Spanish (advanced)", "Korean (basic)"],
    softwareTitle: "Software",
    softwareGroups: [
      { label: "Writing and development" },
      { label: "Preparation and production" },
      { label: "Post-production and delivery" },
      { label: "Creation and AI" }
    ],
    cta: "Let’s talk about your projects"
  },

  acting: {
    intro:
      "Alongside producing, I work as an actress on screen, on stage and at the microphone, lending my voice.",
    reel: { label: "Showreel", title: "Showreel of Léonore Vanier, actress", poster: { alt: "Still from the showreel of Léonore Vanier, actress." } },
    voice: { label: "Voice reel", linkLabel: "View my voice reel on Filmmakers" },
    voiceNote: { label: "Voice in context: Les disparues de la crypte, on Audible" },
    awards: {
      label: "Awards",
      before: "Special mention for “the quality of the writing and of the performances” in ",
      after: ", at the Prix Florent Image 2026."
    },
    agent: { label: "My agent" },
    adAgent: { label: "Commercials agent" },
    cvNote: "My artistic profile is available on my agent’s page."
  },

  contact: {
    intro: "Let’s talk about your projects.",
    note: "For any collaboration proposal, the simplest way is to write to me.",
    available: "Available — assignments, fixed-term and permanent roles · Paris and remote",
    links: [{ label: "Sensible Indocile website" }, { label: "Instagram" }]
  }
};
