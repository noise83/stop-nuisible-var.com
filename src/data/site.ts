export type FAQItem = { question: string; answer: string };

export type GuideLink = { label: string; href: string };

export type IllustratedGuidePest = {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  signs: string[];
  places: string[];
  advice: string[];
  links: GuideLink[];
};

export type IllustratedGuide = {
  h1: string;
  introduction: string;
  heroImage: string;
  heroImageAlt: string;
  summary: GuideLink[];
  pests: IllustratedGuidePest[];
  photoBlock: {
    title: string;
    image: string;
    imageAlt: string;
    text: string;
    checklist: string[];
  };
  localContext: {
    title: string;
    text: string;
    links: GuideLink[];
  };
  reminder: {
    title: string;
    items: string[];
  };
  cta: {
    title: string;
    text: string;
    links: GuideLink[];
  };
};

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  leadFormPest: string;
  updatedAt?: string;
  title: string;
  description: string;
  hero: string;
  risks: string[];
  contexts: string[];
  advice: string[];
  faq: FAQItem[];
};

export type City = {
  slug: string;
  name: string;
  zone: string;
  intro: string;
  buildingTypes: string[];
  pests: string[];
  neighbours: string[];
  localAdvice: string[];
  angle: string;
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  serviceSlug: string;
  published: string;
  updatedAt?: string;
  sections: Array<{ heading: string; body: string }>;
  faq: FAQItem[];
  illustratedGuide?: IllustratedGuide;
};

export type LocalLanding = {
  slug: string;
  serviceSlug: string;
  citySlug: string;
  updatedAt?: string;
  h1: string;
  title: string;
  description: string;
  promise: string;
  localContext: string;
  observedSigns: string[];
  concernedPlaces: string[];
  callbackAdvice: string[];
  associatedLinks: Array<{ label: string; href: string }>;
  faq: FAQItem[];
  formDefaults?: {
    city?: string;
    pest?: string;
  };
  heroImage?: {
    src: string;
    alt: string;
  };
  localAreas?: string[];
};

export type LegacyLocalLandingRedirect = {
  source: string;
  destination: string;
};

export const services: Service[] = [
  {
    slug: "punaises-de-lit-var",
    name: "Punaises de lit",
    shortName: "Punaises de lit",
    icon: "bedbug",
    leadFormPest: "Punaises de lit",
    title: "Traitement des punaises de lit dans le Var",
    description:
      "Demande de rappel pour une suspicion de punaises de lit dans un logement, hôtel, location saisonnière ou résidence du Var.",
    hero:
      "Piqûres au réveil, traces sur le matelas, sommier suspect ou retour de voyage : les punaises de lit demandent une réaction méthodique. Décrivez les signes, les pièces touchées et le contexte pour transmettre une demande utile à un partenaire habitué aux logements occupés comme aux locations saisonnières.",
    risks: ["Piqûres groupées au réveil", "Taches sombres sur matelas, sommier ou draps", "Linge et bagages exposés après un voyage", "Doute dans une location saisonnière ou résidence secondaire"],
    contexts: ["Appartements en centre-ville", "Hôtels et locations saisonnières", "Résidences secondaires du littoral", "Chambres, canapés, sommiers et linge de lit"],
    advice: [
      "Éviter de déplacer les matelas ou sacs de linge dans d'autres pièces avant avis professionnel.",
      "Photographier les traces visibles aide à qualifier la demande sans manipulation inutile.",
      "Signaler un retour de voyage, une location récente ou un logement collectif potentiellement concerné.",
      "Éviter les traitements improvisés qui dispersent les insectes et compliquent l'analyse.",
    ],
    faq: [
      {
        question: "Une piqûre suffit-elle à confirmer des punaises de lit ?",
        answer:
          "Non. Les piqûres orientent le diagnostic, mais il faut croiser plusieurs signes : traces sur literie, insectes visibles, contexte de voyage ou voisinage.",
      },
      {
        question: "Stop Nuisible Var envoie-t-il un technicien ?",
        answer:
          "Non, la plateforme recueille votre demande et la transmet à un professionnel partenaire adapté au secteur et au type de problème.",
      },
    ],
  },
  {
    slug: "deratisation-var",
    name: "Dératisation rats et souris",
    shortName: "Dératisation",
    icon: "rodent",
    leadFormPest: "Rats ou souris",
    title: "Dératisation dans le Var : rats et souris",
    description:
      "Mise en relation pour rats, souris, bruits dans les combles, traces de passage et demandes de dératisation dans le Var.",
    hero:
      "Bruits dans les murs, combles ou plafonds, crottes près d'un local poubelle, traces de rongement dans un garage ou une cave : une demande de dératisation doit être précise pour orienter rapidement vers le bon partenaire.",
    risks: ["Bruits nocturnes dans les murs, cloisons, combles ou plafonds", "Crottes près des réserves alimentaires ou du local poubelle", "Traces de rongement sur gaines, cartons, isolants ou portes", "Passage suspect dans cave, garage, vide sanitaire ou arrière-cuisine"],
    contexts: ["Maisons avec jardin", "Restaurants et commerces alimentaires", "Caves, garages et locaux poubelles", "Immeubles, copropriétés et locaux techniques"],
    advice: [
      "Conserver les traces visibles pour faciliter le diagnostic, sans manipuler les déjections à mains nues.",
      "Limiter l'accès à la nourriture et fermer les sacs de déchets en attendant le rappel.",
      "Signaler les accès probables : vide sanitaire, toiture, local poubelle, terrasse ou canalisation.",
      "Préciser si la demande concerne un restaurant, un commerce alimentaire ou une copropriété.",
    ],
    faq: [
      {
        question: "Faut-il demander une dératisation dès les premiers signes ?",
        answer:
          "Oui, surtout lorsque des traces reviennent plusieurs jours. Une intervention nuisibles bien ciblée évite souvent que la situation s'installe.",
      },
      {
        question: "Le devis peut-il être fixé sans visite ?",
        answer:
          "Un ordre d'idée peut parfois être donné, mais un devis fiable dépend du site, des accès, de la surface et du niveau d'infestation.",
      },
    ],
  },
  {
    slug: "cafards-blattes-var",
    name: "Cafards et blattes",
    shortName: "Cafards",
    icon: "roach",
    leadFormPest: "Cafards / blattes",
    title: "Traitement cafards et blattes dans le Var",
    description:
      "Demande de devis nuisibles pour cafards, blattes germaniques, blattes orientales et infestations en logement ou local professionnel.",
    hero:
      "Cafards en cuisine, salle de bain, gaines techniques ou parties communes : les blattes peuvent se propager rapidement dans un appartement, une copropriété ou un restaurant. La demande doit préciser les zones actives pour accélérer l'orientation.",
    risks: ["Insectes visibles la nuit dans la cuisine ou la salle de bain", "Présence dans les gaines techniques, plinthes ou parties communes", "Odeurs persistantes et traces près des points d'eau", "Propagation rapide en immeuble ou local alimentaire"],
    contexts: ["Appartements et copropriétés", "Restaurants, snacks et boulangeries", "Locaux avec réserves ou points d'eau", "Cuisines, salles de bain et gaines techniques"],
    advice: [
      "Nettoyer les surfaces alimentaires, mais garder une photo des insectes si possible.",
      "Mentionner si les voisins ou parties communes sont aussi concernés.",
      "Éviter les traitements dispersés qui peuvent compliquer le diagnostic.",
      "Pour un restaurant, préciser l'urgence, les horaires de rappel et les contraintes d'activité.",
    ],
    faq: [
      {
        question: "Les cafards viennent-ils toujours d'un manque d'hygiène ?",
        answer:
          "Non. L'hygiène compte, mais les blattes circulent aussi par les gaines, livraisons, cartons, parties communes et logements voisins.",
      },
      {
        question: "Une copropriété doit-elle agir collectivement ?",
        answer:
          "Souvent oui lorsque les parties communes, colonnes ou plusieurs logements sont touchés. La demande doit alors préciser le contexte.",
      },
    ],
  },
  {
    slug: "guepes-frelons-var",
    name: "Guêpes, frelons et frelon asiatique",
    shortName: "Guêpes et frelons",
    icon: "wasp",
    leadFormPest: "Guêpes ou frelons",
    title: "Nid de guêpes ou frelons dans le Var",
    description:
      "Orientation vers un professionnel partenaire pour nid de guêpes, frelons européens ou suspicion de frelon asiatique dans le Var.",
    hero:
      "Nid en toiture, arbre, terrasse, volet ou cabanon : les guêpes et frelons présentent un risque réel quand le nid est en hauteur, proche d'enfants, d'animaux ou d'un passage. Ne tentez pas d'intervenir seul.",
    risks: ["Allers-retours au même point", "Nid sous toiture, dans un arbre, une haie ou un volet", "Présence proche d'enfants, clients ou animaux", "Nid en hauteur ou accès difficile"],
    contexts: ["Villas avec jardin", "Campings et restaurants", "Toitures, terrasses, volets et cabanons", "Écoles, copropriétés et lieux recevant du public"],
    advice: [
      "Ne pas tenter de décrocher, noyer ou brûler un nid.",
      "Observer à distance l'emplacement et la hauteur approximative.",
      "Signaler les allergies connues ou l'exposition d'un public fragile.",
      "Indiquer si le nid gêne une terrasse, une entrée, un commerce ou un lieu avec animaux.",
    ],
    faq: [
      {
        question: "Qui contacter pour un nid de frelon asiatique ?",
        answer:
          "Un professionnel équipé peut évaluer le type de nid, son accès et les précautions nécessaires. Stop Nuisible Var transmet la demande à un partenaire adapté.",
      },
      {
        question: "Le nid est-il plus dangereux en été ?",
        answer:
          "L'activité augmente souvent avec la saison. La dangerosité dépend surtout de l'emplacement, des passages proches et du type d'insecte.",
      },
    ],
  },
  {
    slug: "termites-var",
    name: "Termites et xylophages",
    shortName: "Termites",
    icon: "termite",
    leadFormPest: "Termites / xylophages",
    title: "Termites et insectes xylophages dans le Var",
    description:
      "Demande de rappel pour signes de termites, bois fragilisé, charpente, plinthes creuses ou diagnostic xylophage dans le Var.",
    hero:
      "Dans le Var, les constructions anciennes, maisons avec jardin et zones boisées demandent une vigilance particulière. L'enjeu est de faire examiner les signes sans détruire les indices utiles.",
    risks: ["Bois qui sonne creux", "Galeries ou cordonnets terreux", "Plinthes, huisseries ou charpente fragilisées"],
    contexts: ["Maisons anciennes", "Charpentes et combles", "Annexes, caves et pieces humides"],
    advice: [
      "Ne pas gratter largement les zones suspectes avant diagnostic.",
      "Photographier les éléments visibles et préciser l'âge du bâtiment.",
      "Verifier les obligations locales ou de vente avec un professionnel habilite si besoin.",
    ],
    faq: [
      {
        question: "Un traitement termites est-il toujours nécessaire ?",
        answer:
          "Il faut d'abord confirmer la présence et l'étendue. Un professionnel peut distinguer termites, vrillettes, capricornes ou simple humidité.",
      },
      {
        question: "Le site établit-il un diagnostic réglementaire ?",
        answer:
          "Non. Stop Nuisible Var transmet les demandes ; un diagnostiqueur ou professionnel qualifié doit être sollicité pour les obligations formelles.",
      },
    ],
  },
  {
    slug: "moustique-tigre-var",
    name: "Moustique tigre et demoustication",
    shortName: "Moustique tigre",
    icon: "mosquito",
    leadFormPest: "Moustique tigre",
    title: "Moustique tigre dans le Var",
    description:
      "Mise en relation pour invasion de moustique tigre, jardins, terrasses, piscines, campings et locations saisonnières.",
    hero:
      "Le moustique tigre est très présent dans les zones habitées du Var. Les demandes concernent souvent des jardins, terrasses, piscines et hébergements où le confort des occupants est prioritaire.",
    risks: ["Piqûres en journée", "Petits moustiques noirs rayés", "Eaux stagnantes autour du logement"],
    contexts: ["Jardins et villas", "Locations et campings", "Terrasses, piscines et patios"],
    advice: [
      "Supprimer les eaux stagnantes reste le premier reflexe utile.",
      "Lister les zones humides : coupelles, regards, gouttieres, baches, jeux d'enfants.",
      "Pour un site touristique, préciser les périodes d'occupation et contraintes de discrétion.",
    ],
    faq: [
      {
        question: "Peut-on eliminer totalement le moustique tigre ?",
        answer:
          "Il est difficile de promettre une elimination totale. L'objectif est de reduire fortement les zones de reproduction et l'inconfort.",
      },
      {
        question: "Une demande peut-elle concerner un jardin seulement ?",
        answer:
          "Oui, beaucoup de demandes portent sur jardins, terrasses, piscines, campings ou locations saisonnières.",
      },
    ],
  },
  {
    slug: "chenilles-processionnaires-var",
    name: "Chenilles processionnaires",
    shortName: "Chenilles",
    icon: "caterpillar",
    leadFormPest: "Chenilles processionnaires",
    title: "Chenilles processionnaires dans le Var",
    description:
      "Demande de rappel pour nids de chenilles processionnaires, pins, jardins, copropriétés et espaces fréquentés par enfants ou animaux.",
    hero:
      "Les pins du Var peuvent abriter des nids de chenilles processionnaires. Les poils urticants imposent une approche prudente, notamment près des chiens, enfants et espaces collectifs.",
    risks: ["Nids blancs dans les pins", "Processions au sol", "Chiens ou enfants exposes dans un jardin"],
    contexts: ["Jardins avec pins", "Copropriétés et lotissements", "Écoles, campings et espaces verts"],
    advice: [
      "Eloigner enfants et animaux des zones suspectes.",
      "Ne pas toucher les chenilles, nids ou branches contaminees.",
      "Préciser la hauteur des pins et l'accessibilité du terrain.",
    ],
    faq: [
      {
        question: "Les chenilles processionnaires sont-elles dangereuses pour les chiens ?",
        answer:
          "Oui, elles peuvent provoquer des réactions graves. En cas de contact suspect, il faut contacter rapidement un vétérinaire.",
      },
      {
        question: "Quand demander un rappel ?",
        answer:
          "Des l'apparition de nids visibles ou de processions dans un espace frequente, surtout si des animaux ou enfants y passent.",
      },
    ],
  },
  {
    slug: "depigeonnage-var",
    name: "Pigeons, goélands et dépigeonnage",
    shortName: "Dépigeonnage",
    icon: "bird",
    leadFormPest: "Pigeons / goélands",
    title: "Dépigeonnage dans le Var",
    description:
      "Mise en relation pour pigeons, goélands, fientes, balcons, toitures, enseignes, commerces et copropriétés dans le Var.",
    hero:
      "Sur le littoral comme en ville, pigeons et goélands peuvent salir les façades, bloquer des gouttières et gêner les occupants. La demande doit tenir compte du bâtiment, de l'accès et des contraintes de voisinage.",
    risks: ["Fientes recurrentes", "Nids sur balcon ou toiture", "Gouttieres, enseignes ou climatiseurs touches"],
    contexts: ["Immeubles et copropriétés", "Commerces de centre-ville", "Bâtiments proches du littoral"],
    advice: [
      "Ne pas obstruer un accès sans vérifier la présence de nids actifs.",
      "Photographier les zones touchees depuis un endroit sur.",
      "Mentionner les contraintes de hauteur, nacelle, copropriété ou commerce ouvert.",
    ],
    faq: [
      {
        question: "Le dépigeonnage est-il adapté aux goélands ?",
        answer:
          "Les solutions different selon l'espece et le site. Un professionnel doit tenir compte des regles applicables et de la periode.",
      },
      {
        question: "Une copropriété peut-elle faire une demande ?",
        answer:
          "Oui, le formulaire convient aux syndics, conseils syndicaux et gestionnaires d'immeubles.",
      },
    ],
  },
];

export const priorityCities: City[] = [
  {
    slug: "toulon",
    name: "Toulon",
    zone: "Métropole toulonnaise",
    intro:
      "À Toulon, les demandes concernent souvent des appartements, immeubles anciens, restaurants, commerces et logements proches du port ou des axes très denses.",
    buildingTypes: ["appartements", "immeubles", "restaurants", "locaux commerciaux", "copropriétés"],
    pests: ["punaises de lit", "rats et souris", "cafards", "pigeons"],
    neighbours: ["La Seyne-sur-Mer", "La Valette-du-Var", "Ollioules", "Le Pradet"],
    localAdvice: [
      "Préciser l'étage, la présence d'un local poubelle et l'éventuel rôle du syndic.",
      "Pour les commerces, indiquer les horaires de rappel et les contraintes d'ouverture.",
      "En logement collectif, signaler si d'autres occupants ont observé les mêmes signes.",
    ],
    angle: "densité urbaine, port, restauration et copropriétés",
  },
  {
    slug: "hyeres",
    name: "Hyères",
    zone: "Littoral et îles d'Hyères",
    intro:
      "À Hyères, villas avec jardins, locations saisonnières, campings et zones proches du littoral génèrent des demandes variées, notamment moustiques, guêpes et punaises de lit.",
    buildingTypes: ["villas", "jardins", "locations saisonnières", "campings", "résidences"],
    pests: ["moustique tigre", "guêpes et frelons", "punaises de lit", "chenilles processionnaires"],
    neighbours: ["La Londe-les-Maures", "Carqueiranne", "La Crau", "Le Pradet"],
    localAdvice: [
      "Lister les points d'eau extérieurs et la présence d'une piscine ou d'arrosage.",
      "Pour une location, indiquer la date d'arrivée des prochains occupants.",
      "Pour un nid en hauteur, décrire l'accès depuis le jardin ou la rue.",
    ],
    angle: "jardins méditerranéens, tourisme et confort extérieur",
  },
  {
    slug: "frejus",
    name: "Fréjus",
    zone: "Est Var",
    intro:
      "Fréjus combine résidences principales, hébergements touristiques, campings et commerces. Les demandes arrivent souvent avant ou pendant une période d'occupation.",
    buildingTypes: ["campings", "résidences secondaires", "appartements", "hôtels", "maisons"],
    pests: ["punaises de lit", "moustique tigre", "guêpes", "cafards"],
    neighbours: ["Saint-Raphaël", "Puget-sur-Argens", "Roquebrune-sur-Argens", "Le Muy"],
    localAdvice: [
      "Signaler si la demande concerne un séjour en cours ou une arrivée imminente.",
      "Pour punaises de lit, décrire les chambres et canapés exposés.",
      "Pour moustiques, mentionner les terrasses, espaces verts et sanitaires collectifs.",
    ],
    angle: "tourisme, campings, résidences secondaires et délais courts",
  },
  {
    slug: "draguignan",
    name: "Draguignan",
    zone: "Centre Var",
    intro:
      "À Draguignan, les maisons, caves, combles, garages et bâtiments anciens expliquent de nombreuses demandes de dératisation, termites ou insectes xylophages.",
    buildingTypes: ["maisons", "caves", "combles", "garages", "bâtiments anciens"],
    pests: ["rats et souris", "termites", "guêpes", "chenilles processionnaires"],
    neighbours: ["Trans-en-Provence", "Lorgues", "Le Muy", "Vidauban"],
    localAdvice: [
      "Décrire les bruits nocturnes, traces dans les combles et accès visibles.",
      "Pour le bois, éviter de retirer les éléments suspects avant avis.",
      "Mentionner les dépendances, restanques, caves ou zones peu visitées.",
    ],
    angle: "maisons, combles, caves, bois et nuisibles de jardin",
  },
  {
    slug: "saint-raphael",
    name: "Saint-Raphaël",
    zone: "Littoral de l'Esterel",
    intro:
      "À Saint-Raphaël, résidences, hébergements touristiques, commerces du littoral et jardins exposent à des demandes où discrétion et rapidité de rappel comptent beaucoup.",
    buildingTypes: ["résidences", "hôtels", "locations", "commerces", "villas"],
    pests: ["punaises de lit", "moustique tigre", "guêpes et frelons", "pigeons"],
    neighbours: ["Fréjus", "Puget-sur-Argens", "Roquebrune-sur-Argens", "Sainte-Maxime"],
    localAdvice: [
      "Préciser si le logement est occupé par des vacanciers ou entre deux séjours.",
      "Pour dépigeonnage, indiquer balcon, toiture, enseigne ou climatisation touchée.",
      "Pour guêpes, décrire la proximité des terrasses et passages clients.",
    ],
    angle: "littoral, hébergement touristique, discrétion et terrasses",
  },
  {
    slug: "la-seyne-sur-mer",
    name: "La Seyne-sur-Mer",
    zone: "Rade de Toulon",
    intro:
      "La Seyne-sur-Mer mélange habitat collectif, maisons de quartier, activité portuaire et zones littorales. Les demandes portent souvent sur cafards, rongeurs, punaises de lit et pigeons.",
    buildingTypes: ["immeubles", "maisons", "commerces", "locaux techniques", "résidences"],
    pests: ["cafards", "rats et souris", "punaises de lit", "dépigeonnage"],
    neighbours: ["Toulon", "Six-Fours-les-Plages", "Ollioules", "Sanary-sur-Mer"],
    localAdvice: [
      "Indiquer si les signes viennent d'un local poubelle, d'une cave ou d'une colonne technique.",
      "Pour les punaises de lit, préciser chambre, canapé et dernier déplacement.",
      "Pour un commerce, décrire les contraintes de discrétion et d'horaires.",
    ],
    angle: "habitat collectif, rade, commerces et locaux techniques",
  },
  {
    slug: "brignoles",
    name: "Brignoles",
    zone: "Provence Verte",
    intro:
      "À Brignoles et en Provence Verte, les demandes viennent souvent de maisons, jardins, garages, combles et terrains arborés.",
    buildingTypes: ["maisons", "jardins", "garages", "combles", "locaux agricoles"],
    pests: ["chenilles processionnaires", "termites", "rats et souris", "guêpes"],
    neighbours: ["Garéoult", "Flassans-sur-Issole", "Le Luc", "Saint-Maximin-la-Sainte-Baume"],
    localAdvice: ["Préciser la présence de pins.", "Décrire les dépendances.", "Mentionner les animaux domestiques."],
    angle: "jardins, pins, maisons et dépendances",
  },
  {
    slug: "saint-tropez",
    name: "Saint-Tropez",
    zone: "Golfe de Saint-Tropez",
    intro:
      "À Saint-Tropez, discrétion, délai de rappel et contraintes de locations ou hôtels sont souvent au cœur de la demande.",
    buildingTypes: ["villas", "hôtels", "locations saisonnières", "restaurants", "résidences"],
    pests: ["punaises de lit", "guêpes et frelons", "moustique tigre", "cafards"],
    neighbours: ["Sainte-Maxime", "Cogolin", "Ramatuelle", "Gassin"],
    localAdvice: ["Indiquer l'urgence d'occupation.", "Préciser les accès discrets.", "Mentionner les espaces extérieurs."],
    angle: "locations haut de gamme, hôtels et discrétion",
  },
  {
    slug: "six-fours-les-plages",
    name: "Six-Fours-les-Plages",
    zone: "Ouest toulonnais",
    intro: "Six-Fours-les-Plages combine habitat littoral, maisons avec jardins et résidences de vacances.",
    buildingTypes: ["maisons", "résidences", "campings", "commerces"],
    pests: ["moustique tigre", "guêpes", "punaises de lit", "pigeons"],
    neighbours: ["La Seyne-sur-Mer", "Sanary-sur-Mer", "Ollioules"],
    localAdvice: ["Décrire terrasses et jardins.", "Signaler occupation saisonnière.", "Préciser hauteur du nid."],
    angle: "littoral, jardins et résidences",
  },
  {
    slug: "la-garde",
    name: "La Garde",
    zone: "Aire toulonnaise",
    intro: "À La Garde, habitat résidentiel, zones commerciales et copropriétés génèrent des besoins variés.",
    buildingTypes: ["copropriétés", "maisons", "commerces", "bureaux"],
    pests: ["cafards", "rats et souris", "guêpes", "punaises de lit"],
    neighbours: ["Toulon", "La Valette-du-Var", "Le Pradet"],
    localAdvice: ["Mentionner les parties communes.", "Indiquer local poubelle.", "Préciser type d'activité commerciale."],
    angle: "copropriétés et zones commerciales",
  },
];

export const extensionCities = [
  "Bandol",
  "Saint-Cyr-sur-Mer",
  "Le Beausset",
  "Solliès-Pont",
  "Solliès-Ville",
  "Carqueiranne",
  "La Londe-les-Maures",
  "Bormes-les-Mimosas",
  "Le Lavandou",
  "Pierrefeu-du-Var",
  "Vidauban",
  "Roquebrune-sur-Argens",
  "Puget-sur-Argens",
  "Lorgues",
  "Trans-en-Provence",
  "Garéoult",
  "Gonfaron",
  "Le Luc",
  "Flassans-sur-Issole",
  "Fayence",
];

export const guides: Guide[] = [
  {
    slug: "identifier-un-nuisible-var",
    title: "Identifier un nuisible dans le Var : rats, cafards, punaises, frelons",
    description:
      "Traces, piqûres, crottes, insectes ou nid ? Guide pratique pour identifier un nuisible dans le Var et préparer une demande de rappel avec photo si besoin.",
    serviceSlug: "traitement-nuisibles-var",
    published: "2026-06-20",
    updatedAt: "2026-06-20T12:00:00+02:00",
    sections: [],
    illustratedGuide: {
      h1: "Identifier un nuisible dans le Var : rats, cafards, punaises, frelons",
      introduction:
        "Un bruit dans les combles, des piqûres au réveil, des traces noires sur un matelas, des crottes près d'un local poubelle ou un nid sous toiture ne demandent pas la même réponse. Ce guide aide à reconnaître les signes les plus utiles avant de transmettre une demande claire, sans promettre un diagnostic à distance.",
      heroImage: "/images/guides/identifier-nuisible-var-infographie.svg",
      heroImageAlt: "Infographie pour identifier les nuisibles fréquents dans le Var",
      summary: [
        { label: "Rats et souris", href: "#rats-souris" },
        { label: "Cafards et blattes", href: "#cafards-blattes" },
        { label: "Punaises de lit", href: "#punaises-lit" },
        { label: "Guêpes et frelons", href: "#guepes-frelons" },
        { label: "Termites et xylophages", href: "#termites-xylophages" },
        { label: "Moustique tigre", href: "#moustique-tigre" },
        { label: "Chenilles processionnaires", href: "#chenilles-processionnaires" },
        { label: "Pigeons et goélands", href: "#pigeons-goelands" },
        { label: "Envoyer une photo", href: "#photo" },
      ],
      pests: [
        {
          id: "rats-souris",
          title: "Rats et souris : bruits, crottes et passages",
          image: "/images/local/deratisation-local.svg",
          imageAlt: "Illustration sobre de signes de rats ou souris dans un logement avec garage",
          signs: [
            "Bruits nocturnes dans les murs, combles, cloisons ou faux plafonds.",
            "Crottes foncées près d'un local poubelle, d'un garage, d'une cave ou d'une réserve.",
            "Rongements sur cartons, gaines, sacs, isolants ou denrées stockées.",
          ],
          places: ["Maison avec jardin", "Garage ou cave", "Commerce alimentaire", "Copropriété ou local poubelle"],
          advice: [
            "Préciser si les traces sont intérieures, extérieures ou proches d'un accès.",
            "Ne pas manipuler les déjections à mains nues.",
            "Ajouter une photo des traces si elle peut être prise sans risque.",
          ],
          links: [
            { label: "Dératisation dans le Var", href: "/deratisation-var/" },
            { label: "Dératisation à Hyères", href: "/deratisation-hyeres/" },
          ],
        },
        {
          id: "cafards-blattes",
          title: "Cafards et blattes : cuisine, gaines et humidité",
          image: "/images/local/cafards-local.svg",
          imageAlt: "Illustration sobre de cafards dans un logement ou commerce",
          signs: [
            "Insectes visibles la nuit ou en plein jour près d'une cuisine ou salle d'eau.",
            "Petites blattes près des plinthes, gaines, évacuations ou appareils électroménagers.",
            "Odeur inhabituelle, traces sombres ou insectes morts dans les placards.",
          ],
          places: ["Appartement", "Restaurant ou commerce", "Local poubelle", "Réserve ou arrière-cuisine"],
          advice: [
            "Indiquer si les cafards sont vus de jour, de nuit ou après nettoyage.",
            "Préciser si plusieurs logements ou parties communes sont concernés.",
            "Éviter les traitements dispersés avant qualification.",
          ],
          links: [
            { label: "Cafards et blattes dans le Var", href: "/cafards-blattes-var/" },
            { label: "Cafards à Fréjus", href: "/cafards-frejus/" },
          ],
        },
        {
          id: "punaises-lit",
          title: "Punaises de lit : piqûres, literie et retour de voyage",
          image: "/images/local/punaises-lit-local.svg",
          imageAlt: "Illustration sobre de literie avec signes possibles de punaises de lit",
          signs: [
            "Piqûres groupées au réveil ou démangeaisons répétées après la nuit.",
            "Traces sombres sur matelas, sommier, tête de lit, canapé ou draps.",
            "Doute après un voyage, un changement d'occupant ou un meuble d'occasion.",
          ],
          places: ["Chambre", "Canapé-lit", "Location saisonnière", "Résidence ou logement collectif"],
          advice: [
            "Ne pas déplacer matelas, sacs ou linge dans d'autres pièces sans avis.",
            "Préciser le nombre de couchages touchés et les dates d'apparition.",
            "Photographier les traces sans montrer de personne ni document personnel.",
          ],
          links: [
            { label: "Punaises de lit dans le Var", href: "/punaises-de-lit-var/" },
            { label: "Punaises de lit à La Seyne-sur-Mer", href: "/punaises-de-lit-la-seyne-sur-mer/" },
          ],
        },
        {
          id: "guepes-frelons",
          title: "Guêpes et frelons : nid, allers-retours et hauteur",
          image: "/images/local/guepes-frelons-local.svg",
          imageAlt: "Illustration sobre d'un nid de guêpes ou frelons près d'un jardin",
          signs: [
            "Allers-retours répétés au même point d'une toiture, haie, volet ou arbre.",
            "Nid visible près d'une terrasse, entrée, piscine, commerce ou cabanon.",
            "Présence d'insectes en nombre près d'enfants, animaux, clients ou vacanciers.",
          ],
          places: ["Jardin", "Toiture ou volet", "Terrasse", "Camping ou commerce"],
          advice: [
            "Rester à distance et ne pas tenter de décrocher ou brûler le nid.",
            "Décrire la hauteur, le support et l'accès possible.",
            "Envoyer une photo uniquement si elle est prise à distance sans risque.",
          ],
          links: [
            { label: "Guêpes et frelons dans le Var", href: "/guepes-frelons-var/" },
            { label: "Guêpes et frelons à Fréjus", href: "/guepes-frelons-frejus/" },
          ],
        },
        {
          id: "termites-xylophages",
          title: "Termites et xylophages : bois fragilisé et traces discrètes",
          image: "/images/guides/termites-xylophages-guide.svg",
          imageAlt: "Illustration de bois et charpente avec indices de termites ou xylophages",
          signs: [
            "Bois qui sonne creux, plinthes fragilisées ou petits trous dans une pièce humide.",
            "Cordonnets terreux, sciure fine ou traces proches d'une cave, charpente ou menuiserie.",
            "Doute lors d'une vente, rénovation ou découverte dans une maison ancienne.",
          ],
          places: ["Maison ancienne", "Cave ou vide sanitaire", "Charpente", "Menuiseries et plinthes"],
          advice: [
            "Ne pas détruire les indices avant avis.",
            "Photographier les zones suspectes et préciser le type de bois touché.",
            "Demander un avis adapté si un diagnostic réglementaire peut être nécessaire.",
          ],
          links: [
            { label: "Termites dans le Var", href: "/termites-var/" },
            { label: "Termites à Draguignan", href: "/termites-draguignan/" },
          ],
        },
        {
          id: "moustique-tigre",
          title: "Moustique tigre : piqûres répétées et eaux stagnantes",
          image: "/images/guides/moustique-tigre-guide.svg",
          imageAlt: "Illustration de moustique tigre autour d'un jardin avec point d'eau",
          signs: [
            "Piqûres en journée, souvent autour des jambes ou bras.",
            "Présence près d'une terrasse, piscine, jardin, récupérateur d'eau ou soucoupe.",
            "Gêne répétée dans un extérieur malgré un logement propre.",
          ],
          places: ["Jardin", "Terrasse", "Piscine", "Résidence ou camping"],
          advice: [
            "Chercher les petites eaux stagnantes autour du logement.",
            "Préciser les zones extérieures concernées et les horaires de gêne.",
            "Éviter de décrire des traitements chimiques improvisés.",
          ],
          links: [
            { label: "Moustique tigre dans le Var", href: "/moustique-tigre-var/" },
            { label: "Demander un rappel", href: "/demande-devis/" },
          ],
        },
        {
          id: "chenilles-processionnaires",
          title: "Chenilles processionnaires : pins, nids blancs et animaux",
          image: "/images/guides/chenilles-processionnaires-guide.svg",
          imageAlt: "Illustration de pins avec nid de chenilles processionnaires",
          signs: [
            "Nids blancs visibles dans des pins ou arbres exposés.",
            "Processions au sol en saison, surtout près d'un jardin ou chemin.",
            "Risque pour chiens, enfants ou zones de passage.",
          ],
          places: ["Jardin avec pins", "Résidence", "École ou collectivité", "Chemin et espace vert"],
          advice: [
            "Tenir les animaux et enfants à distance.",
            "Ne pas toucher les chenilles ni les nids.",
            "Préciser la hauteur, le nombre d'arbres et la zone de passage.",
          ],
          links: [
            { label: "Chenilles processionnaires dans le Var", href: "/chenilles-processionnaires-var/" },
            { label: "Demander un rappel", href: "/demande-devis/" },
          ],
        },
        {
          id: "pigeons-goelands",
          title: "Pigeons et goélands : fientes, nids et accès bâtiment",
          image: "/images/guides/depigeonnage-guide.svg",
          imageAlt: "Illustration de pigeons et goélands près d'une toiture",
          signs: [
            "Fientes répétées sur balcon, rebord, toiture, enseigne ou cour.",
            "Nid ou stationnement régulier près d'une fenêtre, climatisation ou commerce.",
            "Gêne pour clients, copropriété, logement loué ou bâtiment public.",
          ],
          places: ["Balcon", "Toiture", "Commerce", "Copropriété ou résidence"],
          advice: [
            "Décrire la zone touchée et les accès possibles.",
            "Préciser si le problème concerne un commerce ou une copropriété.",
            "Ne pas détruire un nid sans avis sur le cadre applicable.",
          ],
          links: [
            { label: "Dépigeonnage dans le Var", href: "/depigeonnage-var/" },
            { label: "Zones d'intervention", href: "/zones-intervention/" },
          ],
        },
      ],
      photoBlock: {
        title: "Envoyer une photo pour faciliter la pré-identification",
        image: "/images/guides/photo-nuisible-guide.svg",
        imageAlt: "Illustration d'un envoi de photo de traces de nuisible depuis un téléphone",
        text:
          "Une photo peut aider à comprendre s'il s'agit d'un insecte, d'un nid, de traces, de crottes ou de dégâts visibles. Elle reste facultative et ne remplace pas l'avis d'un professionnel.",
        checklist: [
          "Photographier de près uniquement si cela ne présente pas de risque.",
          "Éviter les visages, personnes, documents personnels ou éléments identifiants.",
          "Ajouter le contexte : pièce, commune, date d'apparition et urgence ressentie.",
        ],
      },
      localContext: {
        title: "Contexte local dans le Var",
        text:
          "Dans le Var, le contexte change fortement entre un appartement à Toulon, une villa à Hyères, une location saisonnière à Fréjus, une résidence secondaire à Saint-Raphaël, une maison à Draguignan ou un commerce à La Seyne-sur-Mer. Le littoral, les jardins, les logements collectifs, les campings et les locaux poubelles influencent les signes observés et le niveau d'urgence.",
        links: [
          { label: "Nuisibles à Toulon", href: "/villes/toulon/" },
          { label: "Nuisibles à Hyères", href: "/villes/hyeres/" },
          { label: "Nuisibles à Fréjus", href: "/villes/frejus/" },
          { label: "Nuisibles à Draguignan", href: "/villes/draguignan/" },
        ],
      },
      reminder: {
        title: "Quand demander un rappel rapidement ?",
        items: [
          "Cafards visibles en plein jour ou dans plusieurs pièces.",
          "Bruits répétés dans les murs, combles ou cloisons.",
          "Piqûres nocturnes avec traces sur literie ou canapé.",
          "Nid de guêpes ou frelons près d'un passage, d'enfants, de clients ou d'animaux.",
          "Commerce, location saisonnière, copropriété ou hébergement concerné.",
        ],
      },
      cta: {
        title: "Besoin d'identifier un nuisible dans le Var ?",
        text:
          "Décrivez les signes observés, votre commune, le type de lieu et ajoutez une photo si elle peut aider. Stop Nuisible Var transmet une demande claire à un professionnel partenaire avec votre consentement.",
        links: [
          { label: "Demander un rappel gratuit", href: "/demande-devis/" },
          { label: "Voir tous les traitements nuisibles", href: "/traitement-nuisibles-var/" },
        ],
      },
    },
    faq: [
      {
        question: "Une photo suffit-elle à identifier un nuisible ?",
        answer:
          "Non. Une photo peut aider la pré-identification, mais elle doit être croisée avec le contexte, les signes observés, la pièce touchée et l'avis d'un professionnel.",
      },
      {
        question: "Quels signes décrire dans une demande de rappel ?",
        answer:
          "Indiquez les piqûres, crottes, bruits, traces, dégâts, nids, insectes visibles, la commune, le type de lieu et la date d'apparition.",
      },
      {
        question: "Stop Nuisible Var intervient-il directement ?",
        answer:
          "Non. Stop Nuisible Var est une plateforme de mise en relation. La demande peut être transmise à un professionnel partenaire selon la commune, le nuisible et l'urgence.",
      },
      {
        question: "Puis-je envoyer une demande si je ne sais pas quel nuisible c'est ?",
        answer:
          "Oui. Décrivez les signes et ajoutez une photo si possible. La demande sera qualifiée avant transmission éventuelle à un partenaire.",
      },
      {
        question: "Quels nuisibles sont fréquents dans le Var ?",
        answer:
          "Les demandes concernent souvent rats, souris, cafards, punaises de lit, guêpes, frelons, termites, moustique tigre, chenilles processionnaires, pigeons et goélands.",
      },
    ],
  },
  {
    slug: "prix-traitement-punaises-de-lit-var",
    title: "Prix d'un traitement contre les punaises de lit dans le Var",
    description: "Comprendre les éléments qui influencent un devis punaises de lit dans le Var, sans promesse de prix fixe.",
    serviceSlug: "punaises-de-lit-var",
    published: "2026-06-13",
    sections: [
      {
        heading: "Pourquoi les prix varient autant",
        body:
          "Le coût dépend surtout du nombre de pièces, du niveau de suspicion, de l'accessibilité, du type de logement et de la nécessité de passages complémentaires. Dans un appartement occupé à Toulon, la contrainte n'est pas la même que dans une location saisonnière entre deux séjours à Fréjus.",
      },
      {
        heading: "Ce qu'il faut décrire avant le rappel",
        body:
          "Indiquez les pièces touchées, les signes observés, la date des premières piqûres et le contexte : voyage, achat de mobilier, logement voisin ou arrivée de locataires. Plus la demande est précise, plus le professionnel partenaire peut orienter le devis.",
      },
      {
        heading: "Eviter les faux bons plans",
        body:
          "Un prix très bas annoncé sans diagnostic peut cacher une prestation incomplète. Le bon réflexe consiste à demander ce qui est inclus, les précautions avant passage et les conditions d'un éventuel suivi.",
      },
    ],
    faq: [
      { question: "Stop Nuisible Var affiche-t-il un tarif fixe ?", answer: "Non. Le site transmet la demande pour permettre un devis adapté au logement et à la situation." },
      { question: "Le devis est-il utile même en cas de doute ?", answer: "Oui, une suspicion bien décrite permet déjà d'être orienté vers le bon interlocuteur." },
    ],
  },
  {
    slug: "reconnaitre-infestation-punaises-de-lit",
    title: "Comment reconnaître une infestation de punaises de lit ?",
    description: "Signes utiles, erreurs à éviter et informations à transmettre pour une suspicion de punaises de lit.",
    serviceSlug: "punaises-de-lit-var",
    published: "2026-06-13",
    sections: [
      { heading: "Les signes à croiser", body: "Piqûres groupées, taches noires sur la literie, traces près des coutures et insectes visibles doivent être observés ensemble. Une piqûre isolée ne suffit pas à confirmer." },
      { heading: "Les lieux à regarder prudemment", body: "Matelas, sommier, tête de lit, canapé et bagages sont les zones les plus parlées dans les demandes. Il faut regarder sans secouer les textiles dans tout le logement." },
      { heading: "Quand demander un avis", body: "Si les signes reviennent plusieurs nuits ou concernent un logement loué, une demande de rappel évite de perdre du temps avec des gestes dispersés." },
    ],
    faq: [
      { question: "Faut-il jeter le matelas ?", answer: "Pas sans avis. Le déplacement d'un matelas peut propager le problème." },
      { question: "Une photo aide-t-elle ?", answer: "Oui, si elle est prise sans manipulation risquée." },
    ],
  },
  {
    slug: "rats-souris-maison-signes-solutions",
    title: "Rats ou souris dans une maison : signes et solutions",
    description: "Bruits, traces, accès possibles et réflexes utiles avant une dératisation dans le Var.",
    serviceSlug: "deratisation-var",
    published: "2026-06-13",
    sections: [
      { heading: "Les indices les plus fiables", body: "Bruits nocturnes, crottes, traces grasses, emballages rongés et odeurs inhabituelles indiquent souvent une activité de rongeurs." },
      { heading: "Les accès fréquents", body: "Vide sanitaire, toiture, canalisation, porte de garage, local poubelle ou végétation proche peuvent faciliter les passages." },
      { heading: "Ce que la demande doit contenir", body: "Précisez la pièce, la fréquence, les accès suspectés, la présence d'enfants ou animaux et le type de bâtiment." },
    ],
    faq: [
      { question: "Les souris peuvent-elles passer dans les cloisons ?", answer: "Oui, elles utilisent souvent les vides, gaines et combles." },
      { question: "Peut-on attendre ?", answer: "Mieux vaut demander conseil rapidement lorsque les signes se répètent." },
    ],
  },
  {
    slug: "cafards-appartement-que-faire",
    title: "Cafards dans un appartement : que faire ?",
    description: "Comprendre l'origine possible des blattes en appartement et préparer une demande claire.",
    serviceSlug: "cafards-blattes-var",
    published: "2026-06-13",
    sections: [
      { heading: "Identifier le contexte", body: "Les blattes peuvent venir d'un logement, d'une gaine, d'un local poubelle ou de cartons. Le contexte collectif compte autant que l'appartement." },
      { heading: "Informer sans accuser", body: "En copropriété, il est utile de signaler calmement les observations au syndic si plusieurs logements ou parties communes semblent touchés." },
      { heading: "Préparer le rappel", body: "Indiquez la pièce, l'horaire d'apparition, la fréquence et les actions déjà tentées." },
    ],
    faq: [
      { question: "Une seule blatte est-elle grave ?", answer: "Pas toujours, mais une observation répétée doit être prise au sérieux." },
      { question: "Le voisinage compte-t-il ?", answer: "Oui, surtout en immeuble avec gaines techniques partagées." },
    ],
  },
  {
    slug: "nid-guepes-frelons-que-faire",
    title: "Nid de guêpes ou de frelons : que faire et qui contacter ?",
    description: "Les bons réflexes face à un nid près d'une maison, terrasse, toiture ou commerce.",
    serviceSlug: "guepes-frelons-var",
    published: "2026-06-13",
    sections: [
      { heading: "Garder ses distances", body: "Un nid ne doit pas être secoué, brûlé ou bouché. Il faut limiter les passages à proximité et observer à distance." },
      { heading: "Décrire l'emplacement", body: "Haie, toiture, volet, cabanon, sol ou façade : l'emplacement et la hauteur conditionnent l'intervention possible." },
      { heading: "Évaluer l'urgence", body: "La proximité d'enfants, clients, animaux ou personnes allergiques rend la demande plus urgente." },
    ],
    faq: [
      { question: "Les pompiers interviennent-ils toujours ?", answer: "Non, cela dépend des communes et situations. Une mise en relation professionnelle est souvent nécessaire." },
      { question: "Dois-je approcher pour prendre une photo ?", answer: "Non si cela expose à une piqûre. La sécurité prime." },
    ],
  },
  {
    slug: "termites-var-signes-risques-traitement",
    title: "Termites dans le Var : signes, risques et traitement",
    description: "Comprendre les signes de termites ou xylophages et organiser un avis professionnel.",
    serviceSlug: "termites-var",
    published: "2026-06-13",
    sections: [
      { heading: "Les signes à surveiller", body: "Bois creux, cordonnets terreux, plinthes fragiles et traces près de zones humides peuvent justifier une demande." },
      { heading: "Ne pas détruire les indices", body: "Il vaut mieux photographier et limiter les manipulations afin de faciliter l'identification." },
      { heading: "Traitement ou diagnostic", body: "Selon le contexte, il peut falloir un avis technique, un diagnostic réglementaire ou un traitement par professionnel qualifié." },
    ],
    faq: [
      { question: "Le Var est-il concerné par les termites ?", answer: "Oui, certaines zones demandent une vigilance particulière, surtout sur maisons anciennes ou bois humides." },
      { question: "Stop Nuisible Var réalise-t-il le diagnostic ?", answer: "Non, la plateforme transmet la demande à un interlocuteur adapté." },
    ],
  },
];

export const globalPages = {
  "traitement-nuisibles-var": {
    title: "Traitement nuisibles Var : demande de rappel locale",
    description: "Hub local pour trouver une solution contre les nuisibles dans le Var : dératisation, désinsectisation, termites, moustiques, guêpes et plus.",
    heading: "Traitement des nuisibles dans le Var",
  },
  "zones-intervention": {
    title: "Zones d'intervention nuisibles dans le Var",
    description: "Consultez les communes couvertes par Stop Nuisible Var pour transmettre votre demande à un partenaire local.",
    heading: "Couverture locale dans le Var",
  },
  "comment-ca-marche": {
    title: "Comment fonctionne Stop Nuisible Var",
    description: "Comprendre les trois étapes : description du problème, qualification, transmission à un professionnel partenaire.",
    heading: "Comment ça marche",
  },
  partenaires: {
    title: "Partenaires anti-nuisibles dans le Var",
    description: "Critères de mise en relation et fonctionnement partenaire pour les demandes de traitement nuisibles dans le Var.",
    heading: "Professionnels partenaires et mise en relation",
  },
  confidentialite: {
    title: "Politique de confidentialité",
    description: "Données collectées, finalités, destinataires, durée de conservation et droits des personnes.",
    heading: "Politique de confidentialité",
  },
  "mentions-legales": {
    title: "Mentions légales",
    description: "Mentions légales du site Stop Nuisible Var, plateforme de demande de devis et de mise en relation.",
    heading: "Mentions légales",
  },
} as const;

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getCity(slug: string) {
  return priorityCities.find((city) => city.slug === slug);
}

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export const localLandings: LocalLanding[] = [
  {
    slug: "deratisation-toulon",
    serviceSlug: "deratisation-var",
    citySlug: "toulon",
    h1: "Dératisation à Toulon : rats et souris",
    title: "Dératisation Toulon - Rats, souris et demande de rappel",
    description: "Rats ou souris à Toulon : bruits, crottes, local poubelle, cave ou commerce. Décrivez la situation et demandez un rappel gratuit sans engagement.",
    promise: "Bruits nocturnes, crottes près d'un local poubelle, traces dans une cave ou passage dans un commerce : décrivez votre situation à Toulon pour transmettre une demande claire à un partenaire adapté.",
    localContext:
      "À Toulon, la densité urbaine, les immeubles anciens, les restaurants, les commerces de quartier et la proximité du port rendent les demandes de dératisation très différentes d'un logement à l'autre. Une demande utile précise le secteur, l'étage, les accès possibles et le type de bâtiment concerné.",
    observedSigns: [
      "Bruits dans les murs, plafonds, caves ou combles, surtout la nuit.",
      "Crottes visibles près d'une réserve, d'un local poubelle, d'un garage ou d'une arrière-cuisine.",
      "Traces de rongement sur cartons, gaines, isolants, sacs ou plinthes.",
      "Passage suspect dans une copropriété, un commerce alimentaire ou un logement proche d'un axe dense.",
    ],
    concernedPlaces: [
      "Appartements et immeubles collectifs du centre de Toulon.",
      "Restaurants, snacks, commerces alimentaires et réserves.",
      "Caves, garages, locaux techniques et locaux poubelles.",
      "Maisons avec jardin, dépendances ou accès par vide sanitaire.",
    ],
    callbackAdvice: [
      "Indiquez si les traces reviennent plusieurs jours de suite ou si un animal a été vu.",
      "Précisez l'étage, le type d'accès et la présence éventuelle d'un syndic.",
      "Évitez de manipuler les déjections à mains nues et conservez les indices visibles si possible.",
      "Mentionnez les contraintes horaires si la demande concerne un commerce ouvert au public.",
    ],
    associatedLinks: [
      { label: "Dératisation dans le Var", href: "/deratisation-var/" },
      { label: "Nuisibles à Toulon", href: "/villes/toulon/" },
      { label: "Demande de rappel", href: "/demande-devis/" },
      { label: "Cafards à Toulon", href: "/cafards-toulon/" },
      { label: "Guêpes et frelons à Toulon", href: "/guepes-frelons-toulon/" },
    ],
    faq: [
      { question: "Stop Nuisible Var intervient-il pour une dératisation à Toulon ?", answer: "Non. Le site sert à transmettre votre demande à un professionnel partenaire selon votre secteur, le nuisible et l'urgence." },
      { question: "Que faut-il préciser pour des rats ou souris à Toulon ?", answer: "Indiquez les signes observés, le type de lieu, l'étage, les accès possibles, la présence d'un local poubelle et le niveau d'urgence." },
    ],
  },
  {
    slug: "cafards-toulon",
    serviceSlug: "cafards-blattes-var",
    citySlug: "toulon",
    h1: "Cafards à Toulon : demande de rappel pour blattes",
    title: "Cafards Toulon - Blattes, logement et commerce",
    description: "Cafards à Toulon : blattes en cuisine, salle de bain, restaurant ou copropriété. Demandez un rappel gratuit pour qualifier la situation.",
    promise: "Cafards visibles en cuisine, blattes dans une salle de bain, parties communes touchées ou commerce alimentaire concerné : décrivez le contexte à Toulon pour une mise en relation claire.",
    localContext:
      "À Toulon, les cafards et blattes sont souvent signalés dans des appartements, restaurants, commerces, gaines techniques ou copropriétés. Le contexte change fortement selon que la demande concerne un logement isolé, un immeuble entier, une cuisine professionnelle ou une résidence avec parties communes.",
    observedSigns: [
      "Cafards visibles en plein jour dans une cuisine ou une salle de bain.",
      "Petites blattes près des plinthes, appareils électroménagers, gaines ou évacuations.",
      "Odeur inhabituelle, traces sombres ou insectes morts dans les placards.",
      "Signalements répétés dans plusieurs logements ou parties communes d'une copropriété.",
    ],
    concernedPlaces: [
      "Appartements, studios et logements en immeuble dense.",
      "Restaurants, snacks, bars, réserves et cuisines professionnelles.",
      "Salles de bain, buanderies, gaines techniques et locaux poubelles.",
      "Copropriétés, résidences étudiantes et locaux commerciaux.",
    ],
    callbackAdvice: [
      "Précisez si les cafards sont vus de jour, de nuit ou dans plusieurs pièces.",
      "Signalez les parties communes touchées et l'éventuelle implication du syndic.",
      "Indiquez si le lieu est un commerce alimentaire ou un logement occupé.",
      "Évitez les traitements improvisés qui peuvent disperser les blattes avant avis professionnel.",
    ],
    associatedLinks: [
      { label: "Cafards et blattes dans le Var", href: "/cafards-blattes-var/" },
      { label: "Nuisibles à Toulon", href: "/villes/toulon/" },
      { label: "Demande de rappel", href: "/demande-devis/" },
      { label: "Dératisation à Toulon", href: "/deratisation-toulon/" },
      { label: "Cafards à La Seyne-sur-Mer", href: "/cafards-la-seyne-sur-mer/" },
    ],
    faq: [
      { question: "Voir un cafard en plein jour est-il urgent ?", answer: "Cela peut indiquer une présence déjà installée. La demande doit préciser les pièces touchées, la fréquence et le type de lieu." },
      { question: "La plateforme promet-elle une intervention immédiate à Toulon ?", answer: "Non. Stop Nuisible Var transmet une demande qualifiée à un partenaire, qui peut rappeler selon disponibilité et pertinence du secteur." },
    ],
  },
  {
    slug: "punaises-de-lit-toulon",
    serviceSlug: "punaises-de-lit-var",
    citySlug: "toulon",
    h1: "Punaises de lit à Toulon : demande de rappel",
    title: "Punaises de lit Toulon - Logement, hôtel et location",
    description: "Punaises de lit à Toulon : piqûres, traces sur matelas, retour de voyage ou location touchée. Demandez un rappel gratuit sans engagement.",
    promise: "Piqûres au réveil, traces sur le matelas, doute après un voyage ou logement loué à Toulon : détaillez les signes pour faciliter la pré-qualification de votre demande.",
    localContext:
      "À Toulon, les demandes liées aux punaises de lit concernent autant les appartements occupés que les locations saisonnières, hôtels, résidences et logements proches des zones de passage. La qualification doit tenir compte des chambres touchées, des déplacements récents et des contraintes d'occupation.",
    observedSigns: [
      "Piqûres groupées au réveil ou démangeaisons récurrentes.",
      "Petites traces sombres sur matelas, sommier, tête de lit ou draps.",
      "Insecte visible dans une chambre, un canapé ou un bagage.",
      "Doute après un séjour, une location courte durée ou l'arrivée d'un nouveau meuble.",
    ],
    concernedPlaces: [
      "Chambres, sommiers, matelas, canapés et têtes de lit.",
      "Appartements occupés, colocations et résidences.",
      "Hôtels, locations saisonnières et logements de passage.",
      "Résidences secondaires ou logements entre deux occupants.",
    ],
    callbackAdvice: [
      "Indiquez le nombre de pièces ou couchages concernés.",
      "Mentionnez un retour de voyage, une location récente ou un meuble d'occasion si c'est le cas.",
      "Évitez de déplacer matelas, sacs ou linge dans d'autres pièces avant avis professionnel.",
      "Ajoutez une photo des traces visibles si elle peut aider à qualifier la demande.",
    ],
    associatedLinks: [
      { label: "Punaises de lit dans le Var", href: "/punaises-de-lit-var/" },
      { label: "Nuisibles à Toulon", href: "/villes/toulon/" },
      { label: "Demande de rappel", href: "/demande-devis/" },
      { label: "Punaises de lit à Hyères", href: "/punaises-de-lit-hyeres/" },
      { label: "Punaises de lit à Fréjus", href: "/punaises-de-lit-frejus/" },
    ],
    faq: [
      { question: "Une piqûre suffit-elle à confirmer des punaises de lit ?", answer: "Non. Les piqûres doivent être croisées avec d'autres signes comme traces sur literie, insecte visible ou contexte de voyage." },
      { question: "Puis-je envoyer une demande pour une location à Toulon ?", answer: "Oui. Le formulaire permet de préciser le type de logement, les dates importantes et les signes observés, sans promettre une intervention directe du site." },
    ],
  },
  {
    slug: "guepes-frelons-toulon",
    serviceSlug: "guepes-frelons-var",
    citySlug: "toulon",
    h1: "Guêpes et frelons à Toulon : demande de rappel",
    title: "Guêpes et frelons Toulon - Nid en toiture, commerce ou jardin",
    description: "Nid de guêpes ou frelons à Toulon : toiture, terrasse, commerce, immeuble ou jardin. Décrivez l'emplacement et demandez un rappel gratuit.",
    promise: "Nid sous toiture, allers-retours près d'une terrasse, commerce exposé ou passage fréquent dans un immeuble : décrivez la situation à Toulon sans prendre de risque.",
    localContext:
      "À Toulon, les demandes concernent souvent des immeubles denses, restaurants, commerces, toitures basses, jardins urbains et secteurs proches du port. L'enjeu est de préciser l'emplacement du nid, la hauteur et les passages exposés sans tenter d'intervenir soi-même.",
    observedSigns: [
      "Allers-retours répétés de guêpes ou frelons au même point d'une façade, toiture ou haie.",
      "Nid visible sous une avancée de toit, dans un volet, un arbre ou près d'une terrasse.",
      "Présence proche d'une entrée d'immeuble, d'un restaurant, d'un commerce ou d'une cour.",
      "Insectes nombreux près d'un passage client, d'un local professionnel ou d'un logement occupé.",
    ],
    concernedPlaces: [
      "Toitures, volets, façades et cours d'immeubles à Toulon.",
      "Restaurants, terrasses, commerces et zones de passage.",
      "Jardins urbains, haies, cabanons et dépendances.",
      "Copropriétés, résidences et logements proches du port ou du centre.",
    ],
    callbackAdvice: [
      "Indiquez la hauteur approximative et l'accès possible depuis la rue, une terrasse ou un jardin.",
      "Ne tentez pas de décrocher, brûler ou arroser le nid.",
      "Précisez si le nid expose des clients, enfants, animaux ou parties communes.",
      "Ajoutez une photo prise à distance si elle ne vous met pas en danger.",
    ],
    associatedLinks: [
      { label: "Guêpes et frelons dans le Var", href: "/guepes-frelons-var/" },
      { label: "Nuisibles à Toulon", href: "/villes/toulon/" },
      { label: "Demande de rappel", href: "/demande-devis/" },
      { label: "Guêpes et frelons à Saint-Raphaël", href: "/guepes-frelons-saint-raphael/" },
      { label: "Dératisation à Toulon", href: "/deratisation-toulon/" },
    ],
    faq: [
      { question: "Stop Nuisible Var détruit-il directement les nids à Toulon ?", answer: "Non. La plateforme transmet votre demande à un professionnel partenaire selon l'emplacement, le type de nid et le secteur." },
      { question: "Que préciser pour un nid de guêpes ou frelons ?", answer: "Indiquez la hauteur, l'accès, le support du nid, les passages exposés et si le lieu concerne un commerce, une copropriété ou un logement." },
    ],
  },
  {
    slug: "punaises-de-lit-hyeres",
    serviceSlug: "punaises-de-lit-var",
    citySlug: "hyeres",
    h1: "Punaises de lit à Hyères : logement, villa ou location",
    title: "Punaises de lit Hyères - Location, résidence et retour de voyage",
    description: "Punaises de lit à Hyères : piqûres, literie suspecte, retour de voyage, villa ou location saisonnière. Demandez un rappel gratuit.",
    promise: "Piqûres au réveil, traces sur la literie ou doute après un séjour à Hyères : précisez le logement, les couchages et le contexte pour faciliter la mise en relation.",
    localContext:
      "À Hyères, les demandes de punaises de lit concernent souvent des locations saisonnières, villas, résidences proches du littoral et retours de voyage. Les dates d'occupation, le nombre de chambres et le type de logement sont essentiels pour qualifier la demande.",
    observedSigns: [
      "Piqûres groupées au réveil après une nuit en chambre ou canapé-lit.",
      "Traces sombres ou petits points sur matelas, sommier, draps ou tête de lit.",
      "Doute après un voyage, l'accueil de vacanciers ou un changement d'occupants.",
      "Insecte observé dans un bagage, une chambre, une location ou une résidence.",
    ],
    concernedPlaces: [
      "Locations saisonnières, villas et résidences à Hyères.",
      "Chambres, canapés-lits, sommiers et linge de lit.",
      "Logements proches du littoral, résidences secondaires et hébergements touristiques.",
      "Appartements occupés ou logements entre deux séjours.",
    ],
    callbackAdvice: [
      "Indiquez les dates d'arrivée ou de départ si le logement est loué.",
      "Précisez le nombre de couchages concernés et les pièces suspectes.",
      "Évitez de déplacer les sacs, matelas ou linge dans d'autres pièces avant avis professionnel.",
      "Mentionnez tout retour de voyage ou séjour récent pouvant aider à comprendre le contexte.",
    ],
    associatedLinks: [
      { label: "Punaises de lit dans le Var", href: "/punaises-de-lit-var/" },
      { label: "Nuisibles à Hyères", href: "/villes/hyeres/" },
      { label: "Demande de rappel", href: "/demande-devis/" },
      { label: "Punaises de lit à Toulon", href: "/punaises-de-lit-toulon/" },
      { label: "Punaises de lit à Fréjus", href: "/punaises-de-lit-frejus/" },
    ],
    faq: [
      { question: "Une location saisonnière à Hyères peut-elle faire une demande ?", answer: "Oui. Le formulaire permet de préciser les dates, les pièces touchées et le contexte avant transmission à un partenaire adapté." },
      { question: "Faut-il traiter soi-même avant le rappel ?", answer: "Il vaut mieux éviter les traitements improvisés qui peuvent disperser les insectes. Décrivez les signes et conservez les indices visibles si possible." },
    ],
  },
  {
    slug: "deratisation-hyeres",
    serviceSlug: "deratisation-var",
    citySlug: "hyeres",
    h1: "Dératisation à Hyères : rats et souris",
    title: "Dératisation Hyères : rats, souris, villa et jardin",
    description: "Rats ou souris à Hyères : bruits nocturnes, crottes, rongements, garage, cave, jardin ou villa. Décrivez les signes et demandez un rappel gratuit.",
    promise: "Bruits nocturnes, crottes près des poubelles, traces grasses dans un garage ou rongements dans une villa à Hyères : détaillez la situation pour transmettre une demande précise.",
    localContext:
      "À Hyères, les demandes de dératisation ne se ressemblent pas entre le centre-ville, le port, Giens, L'Ayguade, La Capte, Costebelle, les Salins et les logements proches du littoral. Une villa avec jardin, une location saisonnière, un garage, une cave, un local poubelle ou un commerce ne présentent pas les mêmes accès ni les mêmes contraintes de rappel.",
    observedSigns: [
      "Bruits nocturnes dans les combles, cloisons, caves, garages ou faux plafonds.",
      "Crottes visibles près des poubelles, d'une cave, d'un garage, d'un cellier ou d'une terrasse.",
      "Rongements sur sacs, cartons, gaines, isolants, portes ou réserves alimentaires.",
      "Traces grasses le long des murs, passages répétés ou odeur inhabituelle dans une zone fermée.",
      "Indices autour d'une villa avec jardin, d'une location occupée, d'un commerce ou d'un local technique.",
    ],
    concernedPlaces: [
      "Villas, maisons avec jardin, garages, cabanons et dépendances.",
      "Locations saisonnières, résidences et logements proches du littoral.",
      "Caves, combles, vides sanitaires, locaux poubelles et locaux techniques.",
      "Commerces, réserves, restaurants et petites copropriétés.",
    ],
    callbackAdvice: [
      "Indiquez le secteur de Hyères concerné et si les signes sont à l'intérieur, à l'extérieur ou autour d'un accès au bâti.",
      "Précisez les zones touchées : poubelles, cave, garage, combles, jardin, cuisine, réserve ou local technique.",
      "Notez depuis quand les bruits, crottes, rongements, traces grasses ou odeurs inhabituelles sont observés.",
      "Ne manipulez pas les déjections à mains nues et conservez les indices visibles si possible.",
      "Mentionnez les contraintes d'accès ou d'occupation si la demande concerne une location saisonnière, un commerce ou une copropriété.",
    ],
    associatedLinks: [
      { label: "Dératisation dans le Var", href: "/deratisation-var/" },
      { label: "Nuisibles à Hyères", href: "/villes/hyeres/" },
      { label: "Demande de rappel", href: "/demande-devis/" },
      { label: "Dératisation à Fréjus", href: "/deratisation-frejus/" },
      { label: "Cafards à Hyères", href: "/cafards-hyeres/" },
      { label: "Identifier les signes d'un nuisible dans le Var", href: "/guides/identifier-un-nuisible-var/" },
    ],
    faq: [
      { question: "Quels signes de rats ou souris signaler à Hyères ?", answer: "Les bruits nocturnes, crottes, rongements, traces grasses, odeurs inhabituelles et passages près des poubelles, caves, garages ou combles sont utiles à préciser." },
      { question: "Une villa avec jardin à Hyères peut-elle faire une demande ?", answer: "Oui. Indiquez les accès possibles, les dépendances, le garage, le jardin et si les traces sont vues à l'intérieur ou autour du logement." },
      { question: "Que faire avant le rappel ?", answer: "Conservez les indices visibles, évitez de manipuler les déjections à mains nues et notez les zones touchées, la fréquence et les contraintes d'accès." },
      { question: "Stop Nuisible Var intervient-il directement à Hyères ?", answer: "Non. La plateforme qualifie votre demande puis peut la transmettre à un professionnel partenaire selon la commune, le nuisible et l'urgence." },
      { question: "La demande est-elle obligatoire après le rappel ?", answer: "Non. La demande de rappel est gratuite et sans engagement ; vous restez libre d'accepter ou non la suite proposée." },
    ],
    formDefaults: {
      city: "Hyères",
      pest: "Rats ou souris",
    },
    heroImage: {
      src: "/images/local/deratisation-hyeres.svg",
      alt: "Illustration d’une demande de dératisation à Hyères dans une villa avec jardin et garage",
    },
    localAreas: ["centre-ville", "port", "Giens", "L'Ayguade", "La Capte", "Costebelle", "Salins"],
  },
  {
    slug: "cafards-hyeres",
    serviceSlug: "cafards-blattes-var",
    citySlug: "hyeres",
    h1: "Cafards à Hyères : blattes en logement ou résidence",
    title: "Cafards Hyères : blattes, résidence, location et commerce",
    description: "Cafards à Hyères : blattes en cuisine, salle d'eau, résidence, location saisonnière ou commerce. Décrivez les signes et demandez un rappel gratuit.",
    promise: "Blattes en cuisine, salle d'eau, local technique, résidence ou location saisonnière à Hyères : décrivez les pièces touchées, la fréquence et le contexte d'occupation.",
    localContext:
      "À Hyères, les demandes liées aux cafards varient entre le centre-ville, le port, Giens, L'Ayguade, La Capte, Costebelle et les Salins. Les résidences proches du littoral, locations saisonnières, villas divisées, commerces et logements avec gaines techniques demandent une qualification précise, surtout quand plusieurs occupants ou parties communes sont concernés.",
    observedSigns: [
      "Cafards visibles en cuisine, salle d'eau, buanderie, placard ou arrière-cuisine.",
      "Petites blattes près des plinthes, gaines, évacuations, appareils électroménagers ou points d'eau.",
      "Traces sombres, odeur inhabituelle ou insectes morts dans les placards et recoins chauds.",
      "Présence répétée après nettoyage, en plein jour ou dans plusieurs pièces.",
      "Signalement dans une location avant un séjour, une résidence ou un commerce recevant du public.",
    ],
    concernedPlaces: [
      "Locations saisonnières, résidences et appartements proches du littoral.",
      "Cuisines, salles d'eau, buanderies, gaines techniques et locaux poubelles.",
      "Commerces, snacks, restaurants, réserves et arrière-boutiques.",
      "Villas, logements divisés et petites copropriétés.",
    ],
    callbackAdvice: [
      "Indiquez si les cafards sont vus de jour, de nuit ou dans plusieurs pièces.",
      "Précisez si le logement est une location et la date du prochain séjour ou changement d'occupants.",
      "Signalez les parties communes, gaines, locaux poubelles ou logements voisins concernés.",
      "Mentionnez si le lieu est un commerce alimentaire, un restaurant ou une résidence avec passage.",
      "Évitez les traitements dispersés avant qualification pour ne pas déplacer les blattes.",
    ],
    associatedLinks: [
      { label: "Cafards et blattes dans le Var", href: "/cafards-blattes-var/" },
      { label: "Nuisibles à Hyères", href: "/villes/hyeres/" },
      { label: "Demande de rappel", href: "/demande-devis/" },
      { label: "Dératisation à Hyères", href: "/deratisation-hyeres/" },
      { label: "Cafards à Toulon", href: "/cafards-toulon/" },
    ],
    faq: [
      { question: "Une location à Hyères peut-elle demander un rappel pour des cafards ?", answer: "Oui. Le formulaire permet de préciser les dates, les zones touchées et les contraintes d'accès avant transmission à un partenaire." },
      { question: "Voir une blatte suffit-il à confirmer une infestation ?", answer: "Non. La fréquence, les pièces touchées, les parties communes et les traces observées aident à mieux qualifier la situation." },
      { question: "Que préciser si une résidence est concernée ?", answer: "Indiquez les parties communes, gaines, locaux poubelles, logements voisins et si un syndic ou gestionnaire est déjà informé." },
      { question: "Stop Nuisible Var intervient-il directement ?", answer: "Non. La plateforme transmet une demande qualifiée à un professionnel partenaire selon la commune, le nuisible et la disponibilité." },
    ],
    heroImage: {
      src: "/images/local/cafards-local.svg",
      alt: "Illustration d’une demande pour cafards à Hyères dans un logement ou commerce",
    },
    localAreas: ["centre-ville", "port", "Giens", "L'Ayguade", "La Capte", "Costebelle", "Salins"],
  },
  {
    slug: "guepes-frelons-hyeres",
    serviceSlug: "guepes-frelons-var",
    citySlug: "hyeres",
    h1: "Guêpes et frelons à Hyères : nid et demande de rappel",
    title: "Guêpes et frelons Hyères : nid, jardin, villa et terrasse",
    description: "Nid de guêpes ou frelons à Hyères : jardin, toiture, volet, terrasse, villa, camping ou location. Décrivez l'emplacement et demandez un rappel.",
    promise: "Allers-retours près d'une toiture, d'une haie, d'une terrasse, d'une piscine ou d'une location à Hyères : décrivez le nid à distance, sans tenter d'intervenir.",
    localContext:
      "À Hyères, les nids peuvent être signalés dans des villas avec jardin, résidences, campings, commerces de bord de mer, terrasses et locations saisonnières. Entre le centre-ville, le port, Giens, L'Ayguade, La Capte, Costebelle et les Salins, la hauteur, l'accès et l'exposition des occupants changent fortement la qualification.",
    observedSigns: [
      "Allers-retours réguliers au même point d'une toiture, haie, volet ou cabanon.",
      "Nid visible près d'une terrasse, piscine, entrée, jardin ou location occupée.",
      "Présence de guêpes ou frelons près d'enfants, animaux, vacanciers ou clients.",
      "Insectes nombreux dans un camping, une résidence, un restaurant ou un commerce avec passage.",
      "Activité importante en hauteur, dans un arbre, sous une avancée de toit ou derrière un volet.",
    ],
    concernedPlaces: [
      "Villas, jardins, terrasses, piscines et dépendances.",
      "Locations saisonnières, campings et résidences proches du littoral.",
      "Toitures, volets, haies, arbres et cabanons.",
      "Restaurants, commerces, espaces extérieurs et zones de passage.",
      "Entrées, cours, piscines, jardins et zones occupées par des enfants ou animaux.",
    ],
    callbackAdvice: [
      "Décrivez la hauteur, le support du nid et l'accès possible depuis le jardin ou la rue.",
      "Ne tentez pas de décrocher, arroser ou brûler le nid.",
      "Mentionnez la présence d'enfants, animaux, vacanciers ou clients exposés.",
      "Indiquez si le logement est occupé, entre deux séjours ou soumis à des contraintes de location.",
      "Ajoutez une photo prise à distance seulement si cela ne vous met pas en danger.",
    ],
    associatedLinks: [
      { label: "Guêpes et frelons dans le Var", href: "/guepes-frelons-var/" },
      { label: "Nuisibles à Hyères", href: "/villes/hyeres/" },
      { label: "Demande de rappel", href: "/demande-devis/" },
      { label: "Guêpes et frelons à Toulon", href: "/guepes-frelons-toulon/" },
      { label: "Punaises de lit à Hyères", href: "/punaises-de-lit-hyeres/" },
    ],
    faq: [
      { question: "Que préciser pour un nid à Hyères ?", answer: "Indiquez la hauteur, le support, l'accès possible, les passages exposés et si le lieu est occupé par des vacanciers ou du public." },
      { question: "Le site détruit-il lui-même les nids ?", answer: "Non. Stop Nuisible Var transmet une demande qualifiée à un professionnel partenaire selon le secteur et la situation décrite." },
      { question: "Faut-il prendre une photo du nid ?", answer: "Seulement si elle peut être prise à distance sans risque. La hauteur, l'emplacement et les passages exposés sont déjà des informations utiles." },
      { question: "Une terrasse de restaurant peut-elle faire une demande ?", answer: "Oui. Il faut préciser les horaires, l'exposition des clients, l'accès au nid et les contraintes d'ouverture." },
    ],
    heroImage: {
      src: "/images/local/guepes-frelons-local.svg",
      alt: "Illustration d’un nid de guêpes ou frelons à Hyères près d’un jardin et d’une terrasse",
    },
    localAreas: ["centre-ville", "port", "Giens", "L'Ayguade", "La Capte", "Costebelle", "Salins"],
  },
  {
    slug: "deratisation-la-seyne-sur-mer",
    serviceSlug: "deratisation-var",
    citySlug: "la-seyne-sur-mer",
    h1: "Dératisation à La Seyne-sur-Mer : rats et souris",
    title: "Dératisation La Seyne-sur-Mer - Immeuble, commerce et local poubelle",
    description: "Rats ou souris à La Seyne-sur-Mer : copropriété, local poubelle, commerce, cave ou logement. Demandez un rappel gratuit sans engagement.",
    promise: "Bruits, crottes, traces de passage ou problème près d'un local poubelle à La Seyne-sur-Mer : détaillez le lieu et l'urgence pour orienter la demande.",
    localContext:
      "À La Seyne-sur-Mer, l'habitat collectif, les copropriétés, les commerces, les locaux techniques et les zones proches de la rade peuvent générer des demandes de dératisation très différentes. La demande doit préciser si le problème touche un logement, une cave, un commerce ou des parties communes.",
    observedSigns: [
      "Crottes près d'un local poubelle, d'une cave, d'un garage ou d'une réserve.",
      "Bruits dans les cloisons, plafonds, combles ou locaux techniques.",
      "Rongements sur cartons, sacs, portes, gaines ou isolants.",
      "Signalements répétés dans une copropriété ou un commerce de quartier.",
    ],
    concernedPlaces: [
      "Copropriétés, immeubles collectifs et parties communes.",
      "Locaux poubelles, caves, garages et locaux techniques.",
      "Commerces, réserves alimentaires et arrière-cuisines.",
      "Maisons de quartier, dépendances et jardins proches de zones de passage.",
    ],
    callbackAdvice: [
      "Précisez si le syndic ou plusieurs occupants sont déjà informés.",
      "Indiquez les accès possibles : cave, toiture, local poubelle, vide sanitaire ou canalisation.",
      "Conservez les traces visibles sans manipuler les déjections à mains nues.",
      "Mentionnez les contraintes horaires si la demande concerne un commerce.",
    ],
    associatedLinks: [
      { label: "Dératisation dans le Var", href: "/deratisation-var/" },
      { label: "Nuisibles à La Seyne-sur-Mer", href: "/villes/la-seyne-sur-mer/" },
      { label: "Demande de rappel", href: "/demande-devis/" },
      { label: "Cafards à La Seyne-sur-Mer", href: "/cafards-la-seyne-sur-mer/" },
      { label: "Dératisation à Toulon", href: "/deratisation-toulon/" },
    ],
    faq: [
      { question: "Une copropriété à La Seyne-sur-Mer peut-elle faire une demande ?", answer: "Oui. Indiquez les parties communes touchées, le rôle du syndic, les accès et les signes observés pour qualifier la demande." },
      { question: "Le site promet-il une dératisation immédiate ?", answer: "Non. Stop Nuisible Var transmet la demande à un partenaire selon votre secteur, le nuisible et la disponibilité de rappel." },
    ],
  },
  {
    slug: "cafards-la-seyne-sur-mer",
    serviceSlug: "cafards-blattes-var",
    citySlug: "la-seyne-sur-mer",
    h1: "Cafards à La Seyne-sur-Mer : demande de rappel",
    title: "Cafards La Seyne-sur-Mer - Blattes en logement ou copropriété",
    description: "Cafards à La Seyne-sur-Mer : blattes en appartement, copropriété, commerce, cuisine ou local poubelle. Demandez un rappel gratuit.",
    promise: "Blattes en cuisine, salle de bain, parties communes ou commerce à La Seyne-sur-Mer : décrivez les signes pour transmettre une demande exploitable.",
    localContext:
      "À La Seyne-sur-Mer, les cafards sont souvent signalés dans l'habitat collectif, les commerces, les locaux poubelles, les gaines techniques et les logements en immeuble. Il faut distinguer un signalement isolé d'un problème qui touche plusieurs appartements ou parties communes.",
    observedSigns: [
      "Cafards visibles la nuit ou en plein jour dans une cuisine ou salle de bain.",
      "Petites blattes près des plinthes, gaines, évacuations ou appareils électroménagers.",
      "Présence dans un local poubelle, une réserve, une cage d'escalier ou un commerce.",
      "Signalements de voisins ou répétition dans plusieurs pièces.",
    ],
    concernedPlaces: [
      "Appartements, immeubles collectifs et résidences.",
      "Locaux poubelles, caves, gaines techniques et parties communes.",
      "Commerces, snacks, restaurants et réserves.",
      "Salles d'eau, cuisines, buanderies et arrière-cuisines.",
    ],
    callbackAdvice: [
      "Précisez si le problème concerne votre logement seul ou des parties communes.",
      "Indiquez si les insectes sont vus de jour, de nuit ou après nettoyage.",
      "Mentionnez les zones touchées : cuisine, salle de bain, local poubelle ou commerce.",
      "Évitez les traitements dispersés qui peuvent déplacer les blattes avant qualification.",
    ],
    associatedLinks: [
      { label: "Cafards et blattes dans le Var", href: "/cafards-blattes-var/" },
      { label: "Nuisibles à La Seyne-sur-Mer", href: "/villes/la-seyne-sur-mer/" },
      { label: "Demande de rappel", href: "/demande-devis/" },
      { label: "Dératisation à La Seyne-sur-Mer", href: "/deratisation-la-seyne-sur-mer/" },
      { label: "Cafards à Toulon", href: "/cafards-toulon/" },
    ],
    faq: [
      { question: "Les cafards peuvent-ils venir des parties communes ?", answer: "Oui. Les gaines techniques, locaux poubelles, caves et logements voisins peuvent faire partie du contexte à préciser dans la demande." },
      { question: "Que faut-il indiquer pour un commerce ?", answer: "Mentionnez le type d'activité, les zones touchées, les horaires de rappel et les contraintes d'ouverture au public." },
    ],
  },
  {
    slug: "guepes-frelons-la-seyne-sur-mer",
    serviceSlug: "guepes-frelons-var",
    citySlug: "la-seyne-sur-mer",
    h1: "Guêpes et frelons à La Seyne-sur-Mer : nid et rappel",
    title: "Guêpes et frelons La Seyne-sur-Mer : nid, jardin et toiture",
    description: "Nid de guêpes ou frelons à La Seyne-sur-Mer : toiture, jardin, terrasse, commerce, résidence ou copropriété. Demandez un rappel gratuit.",
    promise: "Nid sous toiture, allers-retours près d'une terrasse, d'un jardin, d'un commerce ou d'une résidence à La Seyne-sur-Mer : décrivez l'accès et les passages exposés.",
    localContext:
      "À La Seyne-sur-Mer, les nids de guêpes ou frelons peuvent concerner le centre-ville, Les Sablettes, Tamaris, Mar Vivo, Berthe, Balaguier et les quartiers proches de la rade. Maisons de quartier, jardins, copropriétés, commerces, façades et terrasses n'impliquent pas les mêmes accès ni la même exposition des occupants.",
    observedSigns: [
      "Allers-retours répétés au même point d'une façade, toiture, volet ou haie.",
      "Nid visible dans un jardin, cabanon, arbre, avancée de toit ou terrasse.",
      "Présence gênante près d'une entrée d'immeuble, d'un commerce ou d'une cour.",
      "Insectes nombreux sur un passage fréquent, une terrasse ou une zone occupée.",
      "Activité proche d'une plage, d'un restaurant, d'une résidence ou d'une copropriété avec parties communes.",
    ],
    concernedPlaces: [
      "Maisons de quartier, jardins, haies, cabanons et dépendances.",
      "Copropriétés, façades, cours, toitures et parties communes.",
      "Commerces, restaurants, terrasses et zones de passage client.",
      "Résidences et logements proches de la rade ou des secteurs littoraux.",
      "Entrées d'immeubles, parkings, locaux techniques et espaces partagés.",
    ],
    callbackAdvice: [
      "Précisez la hauteur approximative du nid et l'accès possible depuis la rue ou un jardin.",
      "Ne tentez pas de traiter ou décrocher le nid vous-même.",
      "Indiquez si des enfants, animaux, clients ou voisins passent à proximité.",
      "Signalez les contraintes d'horaires si le lieu est un commerce ou une copropriété.",
      "Ajoutez une photo à distance seulement si le point d'observation est sûr.",
    ],
    associatedLinks: [
      { label: "Guêpes et frelons dans le Var", href: "/guepes-frelons-var/" },
      { label: "Nuisibles à La Seyne-sur-Mer", href: "/villes/la-seyne-sur-mer/" },
      { label: "Demande de rappel", href: "/demande-devis/" },
      { label: "Dératisation à La Seyne-sur-Mer", href: "/deratisation-la-seyne-sur-mer/" },
      { label: "Guêpes et frelons à Toulon", href: "/guepes-frelons-toulon/" },
      { label: "Identifier les signes d'un nuisible dans le Var", href: "/guides/identifier-un-nuisible-var/" },
    ],
    faq: [
      { question: "Une copropriété peut-elle envoyer une demande pour un nid ?", answer: "Oui. Il faut préciser les parties communes concernées, la hauteur, l'accès et les passages exposés." },
      { question: "Faut-il approcher le nid pour le photographier ?", answer: "Non. Une photo n'est utile que si elle peut être prise à distance sans risque. La description de l'emplacement suffit souvent à qualifier la demande." },
      { question: "Que préciser pour un commerce ou restaurant ?", answer: "Indiquez les horaires, l'exposition des clients, l'emplacement du nid et les contraintes d'accès." },
      { question: "Stop Nuisible Var intervient-il directement ?", answer: "Non. La plateforme transmet la demande à un professionnel partenaire selon le secteur, le nuisible et la disponibilité." },
    ],
    heroImage: {
      src: "/images/local/guepes-frelons-local.svg",
      alt: "Illustration d’un nid de guêpes ou frelons à La Seyne-sur-Mer près d’un jardin",
    },
    localAreas: ["centre-ville", "Les Sablettes", "Tamaris", "Mar Vivo", "Berthe", "Balaguier"],
  },
  {
    slug: "punaises-de-lit-frejus",
    serviceSlug: "punaises-de-lit-var",
    citySlug: "frejus",
    h1: "Punaises de lit à Fréjus : résidence, camping ou location",
    title: "Punaises de lit Fréjus - Tourisme, camping et location",
    description: "Punaises de lit à Fréjus : piqûres, literie suspecte, résidence, camping ou location saisonnière. Demandez un rappel gratuit.",
    promise: "Piqûres, traces sur literie ou doute dans un hébergement à Fréjus : décrivez le logement, les couchages et l'urgence liée à l'occupation.",
    localContext:
      "À Fréjus, le tourisme, les résidences secondaires, campings, hôtels et locations saisonnières rendent la qualification des punaises de lit très dépendante des dates d'occupation. Une demande utile précise les chambres touchées, le type d'hébergement et les délais avant arrivée ou départ.",
    observedSigns: [
      "Piqûres groupées au réveil ou démangeaisons après une nuit en hébergement.",
      "Traces sombres sur matelas, sommier, draps, tête de lit ou canapé.",
      "Insecte suspect aperçu dans un couchage, bagage ou logement de passage.",
      "Doute après un séjour, une arrivée de vacanciers ou un changement d'occupants.",
    ],
    concernedPlaces: [
      "Locations saisonnières, résidences secondaires et appartements.",
      "Campings, mobil-homes, hôtels et hébergements touristiques.",
      "Chambres, canapés-lits, sommiers et linge de lit.",
      "Logements occupés ou entre deux réservations.",
    ],
    callbackAdvice: [
      "Indiquez la date d'arrivée des prochains occupants si elle est connue.",
      "Précisez le nombre de couchages, chambres ou logements concernés.",
      "Ne déplacez pas les matelas, sacs et textiles dans d'autres pièces avant avis.",
      "Ajoutez une photo des traces visibles si elle peut aider à qualifier le problème.",
    ],
    associatedLinks: [
      { label: "Punaises de lit dans le Var", href: "/punaises-de-lit-var/" },
      { label: "Nuisibles à Fréjus", href: "/villes/frejus/" },
      { label: "Demande de rappel", href: "/demande-devis/" },
      { label: "Punaises de lit à Hyères", href: "/punaises-de-lit-hyeres/" },
      { label: "Punaises de lit à Toulon", href: "/punaises-de-lit-toulon/" },
    ],
    faq: [
      { question: "Une demande peut-elle concerner un camping à Fréjus ?", answer: "Oui. Le formulaire permet de préciser le type d'hébergement, les couchages touchés, les dates et les signes observés." },
      { question: "Stop Nuisible Var intervient-il directement ?", answer: "Non. La plateforme transmet une demande qualifiée à un professionnel partenaire selon le secteur et la situation décrite." },
    ],
  },
  {
    slug: "deratisation-frejus",
    serviceSlug: "deratisation-var",
    citySlug: "frejus",
    h1: "Dératisation à Fréjus : rats et souris",
    title: "Dératisation Fréjus : rats, souris, camping et commerce",
    description: "Rats ou souris à Fréjus : bruits, crottes, rongements, résidence, camping, commerce, garage ou local poubelle. Demandez un rappel gratuit.",
    promise: "Bruits nocturnes, crottes, rongements ou passages près d'un local poubelle, d'un camping, d'une résidence ou d'un commerce à Fréjus : précisez les zones touchées.",
    localContext:
      "À Fréjus, la dératisation concerne autant le centre historique que Fréjus-Plage, Port-Fréjus, Saint-Aygulf, Tour de Mare ou Caïs. Résidences, campings, hébergements touristiques, commerces, garages et locaux techniques demandent une qualification différente selon la période d'occupation et les accès disponibles.",
    observedSigns: [
      "Crottes près d'un local poubelle, d'une réserve, d'un garage ou d'un sanitaire collectif.",
      "Bruits dans les cloisons, combles, mobil-home, faux plafonds ou locaux techniques.",
      "Rongements sur sacs, cartons, gaines, portes ou réserves alimentaires.",
      "Passage suspect dans une résidence, un camping ou un commerce en période d'occupation.",
      "Traces grasses, odeur inhabituelle ou indices répétés près des caves, locaux poubelles ou cuisines.",
    ],
    concernedPlaces: [
      "Campings, résidences, hébergements touristiques et mobil-homes.",
      "Commerces, restaurants, réserves et locaux poubelles.",
      "Garages, caves, locaux techniques et dépendances.",
      "Maisons, appartements et résidences secondaires.",
      "Sanitaires collectifs, zones de stockage et parties communes exposées aux passages.",
    ],
    callbackAdvice: [
      "Indiquez si la demande concerne un séjour en cours ou une arrivée imminente.",
      "Précisez les zones touchées : local poubelle, sanitaire, réserve, garage ou logement.",
      "Conservez les traces visibles sans manipuler les déjections à mains nues.",
      "Mentionnez les contraintes horaires si le lieu reçoit du public.",
      "Signalez les accès possibles depuis l'extérieur, les caves, les combles ou les locaux techniques.",
    ],
    associatedLinks: [
      { label: "Dératisation dans le Var", href: "/deratisation-var/" },
      { label: "Nuisibles à Fréjus", href: "/villes/frejus/" },
      { label: "Demande de rappel", href: "/demande-devis/" },
      { label: "Cafards à Fréjus", href: "/cafards-frejus/" },
      { label: "Punaises de lit à Fréjus", href: "/punaises-de-lit-frejus/" },
    ],
    faq: [
      { question: "Un camping à Fréjus peut-il faire une demande de dératisation ?", answer: "Oui. Le formulaire permet de préciser les zones collectives, les hébergements concernés, les dates d'occupation et les signes observés." },
      { question: "Le rappel est-il obligatoire après l'envoi ?", answer: "Non. La demande reste sans engagement ; un partenaire peut rappeler selon le secteur et la situation décrite." },
      { question: "Quels signes indiquer en priorité ?", answer: "Bruits nocturnes, crottes, rongements, traces grasses, odeurs et zones de passage près des locaux poubelles ou réserves." },
      { question: "Une résidence ou un commerce peut-il être concerné ?", answer: "Oui. Il faut préciser les parties communes, les accès, les horaires et les contraintes liées à l'accueil du public." },
    ],
    heroImage: {
      src: "/images/local/deratisation-local.svg",
      alt: "Illustration d’une demande de dératisation à Fréjus dans une maison avec garage",
    },
    localAreas: ["centre historique", "Fréjus-Plage", "Port-Fréjus", "Saint-Aygulf", "Tour de Mare", "Caïs"],
  },
  {
    slug: "cafards-frejus",
    serviceSlug: "cafards-blattes-var",
    citySlug: "frejus",
    h1: "Cafards à Fréjus : blattes en résidence ou commerce",
    title: "Cafards Fréjus : blattes, résidence, camping et commerce",
    description: "Cafards à Fréjus : blattes en cuisine, résidence, camping, commerce, sanitaire collectif ou location. Demandez un rappel gratuit.",
    promise: "Cafards dans une cuisine, un commerce, une résidence, un camping ou un hébergement à Fréjus : détaillez les signes, les zones touchées et l'urgence d'occupation.",
    localContext:
      "À Fréjus, les cafards et blattes sont souvent signalés dans les résidences, campings, locations, commerces et restaurants, notamment en période touristique. Le centre historique, Fréjus-Plage, Port-Fréjus, Saint-Aygulf, Tour de Mare et Caïs n'ont pas les mêmes contraintes entre logement occupé, parties communes, sanitaire collectif ou local professionnel.",
    observedSigns: [
      "Blattes visibles dans une cuisine, salle d'eau, sanitaire collectif ou réserve.",
      "Petits insectes près des plinthes, évacuations, gaines ou appareils électriques.",
      "Présence dans un hébergement touristique, commerce ou local poubelle.",
      "Signalements répétés en période d'occupation ou dans plusieurs zones du bâtiment.",
      "Odeur inhabituelle, traces sombres ou insectes morts dans les placards et zones chaudes.",
    ],
    concernedPlaces: [
      "Résidences, campings, locations saisonnières et hébergements.",
      "Restaurants, commerces, réserves et cuisines professionnelles.",
      "Sanitaires collectifs, buanderies, gaines et locaux techniques.",
      "Appartements, studios, mobil-homes et parties communes.",
      "Locaux poubelles, arrière-cuisines, celliers et zones de stockage.",
    ],
    callbackAdvice: [
      "Précisez si les cafards sont visibles en plein jour ou uniquement la nuit.",
      "Indiquez si plusieurs logements, sanitaires ou parties communes sont concernés.",
      "Mentionnez les dates d'arrivée ou de départ si la demande concerne un hébergement.",
      "Évitez de multiplier les produits avant qualification pour ne pas disperser les blattes.",
      "Signalez les contraintes d'ouverture si la demande concerne un restaurant, un commerce ou un camping.",
    ],
    associatedLinks: [
      { label: "Cafards et blattes dans le Var", href: "/cafards-blattes-var/" },
      { label: "Nuisibles à Fréjus", href: "/villes/frejus/" },
      { label: "Demande de rappel", href: "/demande-devis/" },
      { label: "Dératisation à Fréjus", href: "/deratisation-frejus/" },
      { label: "Cafards à Hyères", href: "/cafards-hyeres/" },
      { label: "Identifier les signes d'un nuisible dans le Var", href: "/guides/identifier-un-nuisible-var/" },
    ],
    faq: [
      { question: "Les cafards dans un hébergement à Fréjus sont-ils urgents ?", answer: "La demande doit être qualifiée rapidement si des occupants sont présents ou attendus, surtout en cuisine, sanitaires ou parties communes." },
      { question: "Que faut-il préciser pour un commerce ?", answer: "Indiquez les zones touchées, la fréquence d'observation, les horaires de rappel et les contraintes d'ouverture au public." },
      { question: "Les parties communes peuvent-elles être concernées ?", answer: "Oui. Gaines, locaux poubelles, sanitaires collectifs et logements voisins peuvent faire partie du contexte à signaler." },
      { question: "Stop Nuisible Var promet-il une intervention immédiate ?", answer: "Non. Le site transmet une demande qualifiée à un partenaire qui peut rappeler selon le secteur et la disponibilité." },
    ],
    heroImage: {
      src: "/images/local/cafards-local.svg",
      alt: "Illustration d’une demande pour cafards à Fréjus dans une résidence ou un commerce",
    },
    localAreas: ["centre historique", "Fréjus-Plage", "Port-Fréjus", "Saint-Aygulf", "Tour de Mare", "Caïs"],
  },
  {
    slug: "guepes-frelons-saint-raphael",
    serviceSlug: "guepes-frelons-var",
    citySlug: "saint-raphael",
    h1: "Guêpes et frelons à Saint-Raphaël : nid et demande de rappel",
    title: "Guêpes et frelons Saint-Raphaël - Villas, jardins et littoral",
    description: "Nid de guêpes ou frelons à Saint-Raphaël : villa, jardin, toiture, terrasse ou résidence secondaire. Demandez un rappel gratuit.",
    promise: "Nid dans un jardin, toiture, volet ou terrasse à Saint-Raphaël : indiquez l'emplacement, la hauteur et les passages exposés avant transmission.",
    localContext:
      "À Saint-Raphaël, les demandes concernent souvent des villas, jardins, résidences secondaires, terrasses et secteurs littoraux où la discrétion et la sécurité des occupants comptent. La description doit aider à évaluer l'accès au nid sans prise de risque.",
    observedSigns: [
      "Allers-retours au même endroit dans une haie, toiture, volet, arbre ou cabanon.",
      "Nid visible près d'une terrasse, piscine, entrée de villa ou résidence.",
      "Présence de guêpes ou frelons à proximité d'enfants, animaux ou vacanciers.",
      "Insectes nombreux sur un passage fréquent, une façade ou un espace extérieur.",
    ],
    concernedPlaces: [
      "Villas, jardins, terrasses, piscines et dépendances.",
      "Résidences secondaires, locations et logements littoraux.",
      "Toitures, volets, arbres, haies et cabanons.",
      "Commerces, restaurants et hébergements exposés aux passages clients.",
    ],
    callbackAdvice: [
      "Décrivez la hauteur, le support du nid et l'accès possible.",
      "Ne tentez pas de traiter le nid seul, surtout en hauteur ou près d'un passage.",
      "Précisez si le logement est occupé par des vacanciers ou entre deux séjours.",
      "Mentionnez les allergies connues ou la présence d'enfants et animaux à proximité.",
    ],
    associatedLinks: [
      { label: "Guêpes et frelons dans le Var", href: "/guepes-frelons-var/" },
      { label: "Nuisibles à Saint-Raphaël", href: "/villes/saint-raphael/" },
      { label: "Demande de rappel", href: "/demande-devis/" },
      { label: "Guêpes et frelons à Toulon", href: "/guepes-frelons-toulon/" },
      { label: "Punaises de lit à Fréjus", href: "/punaises-de-lit-frejus/" },
    ],
    faq: [
      { question: "Que faire si le nid est près d'une terrasse ?", answer: "Évitez de vous approcher. Décrivez l'emplacement, la hauteur et les passages exposés pour faciliter l'orientation vers un partenaire." },
      { question: "La demande convient-elle pour une résidence secondaire ?", answer: "Oui. Précisez si le logement est occupé, les dates importantes et les contraintes d'accès." },
    ],
  },
  {
    slug: "deratisation-draguignan",
    serviceSlug: "deratisation-var",
    citySlug: "draguignan",
    h1: "Dératisation à Draguignan : rats et souris",
    title: "Dératisation Draguignan : rats, souris, cave et combles",
    description: "Rats ou souris à Draguignan : bruits dans les combles, crottes, rongements, cave, garage, maison ou dépendance. Demandez un rappel gratuit.",
    promise: "Bruits dans les combles, crottes dans une cave, traces grasses dans un garage ou rongements en dépendance à Draguignan : décrivez les accès et les signes observés.",
    localContext:
      "À Draguignan, les demandes de dératisation concernent souvent le centre-ville, Les Collettes, Saint-Hermentaire, Chabran, Sainte-Barbe et les zones d'activité. Maisons, caves, combles, garages, dépendances, commerces et bâtiments anciens impliquent des accès différents par toiture, jardin, vide sanitaire ou local technique.",
    observedSigns: [
      "Bruits nocturnes dans les combles, plafonds, cloisons, caves ou garages.",
      "Crottes, traces de gras ou passages près des réserves, sacs, cartons ou dépendances.",
      "Rongements sur gaines, isolants, portes, plinthes ou matériaux stockés.",
      "Présence suspecte autour d'un jardin, d'une cave humide ou d'un bâtiment ancien.",
      "Odeur inhabituelle, traces répétées près d'un local poubelle ou indices dans une zone peu visitée.",
    ],
    concernedPlaces: [
      "Maisons, caves, combles, garages et dépendances.",
      "Bâtiments anciens, annexes, locaux techniques et vides sanitaires.",
      "Jardins, restanques, remises et zones peu visitées.",
      "Commerces de proximité, réserves et locaux poubelles.",
      "Zones d'activité, ateliers, stockages et arrière-boutiques.",
    ],
    callbackAdvice: [
      "Décrivez les bruits, horaires, zones touchées et accès probables.",
      "Ne manipulez pas les déjections à mains nues et gardez les indices visibles.",
      "Précisez si la demande concerne une maison occupée, une dépendance ou un commerce.",
      "Mentionnez les caves, combles, jardins ou zones peu visitées autour du bâti.",
      "Indiquez si plusieurs bâtiments, annexes ou locaux de stockage sont concernés.",
    ],
    associatedLinks: [
      { label: "Dératisation dans le Var", href: "/deratisation-var/" },
      { label: "Nuisibles à Draguignan", href: "/villes/draguignan/" },
      { label: "Demande de rappel", href: "/demande-devis/" },
      { label: "Cafards à Draguignan", href: "/cafards-draguignan/" },
      { label: "Termites à Draguignan", href: "/termites-draguignan/" },
    ],
    faq: [
      { question: "Que préciser pour des bruits dans les combles à Draguignan ?", answer: "Indiquez les horaires, la fréquence, les accès possibles, les traces visibles et si des dépendances ou caves sont concernées." },
      { question: "La plateforme garantit-elle une intervention ?", answer: "Non. Stop Nuisible Var transmet une demande qualifiée à un partenaire qui peut rappeler selon le secteur et la disponibilité." },
      { question: "Quels lieux sont souvent concernés ?", answer: "Maisons, caves, combles, garages, dépendances, locaux techniques, commerces et zones de stockage peuvent être signalés." },
      { question: "Faut-il nettoyer avant le rappel ?", answer: "Limitez les risques sanitaires, mais conservez si possible les indices visibles et évitez de manipuler les déjections à mains nues." },
    ],
    heroImage: {
      src: "/images/local/deratisation-local.svg",
      alt: "Illustration d’une demande de dératisation à Draguignan dans une maison avec cave et combles",
    },
    localAreas: ["centre-ville", "Les Collettes", "Saint-Hermentaire", "Chabran", "Sainte-Barbe", "zones d'activité"],
  },
  {
    slug: "cafards-draguignan",
    serviceSlug: "cafards-blattes-var",
    citySlug: "draguignan",
    h1: "Cafards à Draguignan : blattes en logement ou local",
    title: "Cafards Draguignan : blattes, logement, cave et commerce",
    description: "Cafards à Draguignan : blattes en cuisine, salle d'eau, cave, commerce, réserve ou logement ancien. Décrivez la situation et demandez un rappel gratuit.",
    promise: "Blattes dans une cuisine, salle d'eau, cave, réserve, commerce ou logement à Draguignan : indiquez les pièces touchées, l'humidité et la fréquence d'observation.",
    localContext:
      "À Draguignan, les signalements de cafards peuvent venir du centre-ville, des Collettes, de Saint-Hermentaire, Chabran, Sainte-Barbe ou des zones d'activité. Les logements anciens, caves, commerces, réserves, gaines et locaux techniques doivent être décrits précisément, surtout lorsque l'humidité ou les espaces peu ventilés sont présents.",
    observedSigns: [
      "Cafards visibles en cuisine, salle d'eau, cave, buanderie ou arrière-boutique.",
      "Petites blattes près des plinthes, évacuations, gaines ou appareils électroménagers.",
      "Traces sombres, odeur inhabituelle ou insectes morts dans les placards.",
      "Présence répétée dans un local humide, un commerce ou un logement ancien.",
      "Signalements après nettoyage, en plein jour ou dans plusieurs pièces reliées par des gaines.",
    ],
    concernedPlaces: [
      "Maisons, appartements, caves, buanderies et salles d'eau.",
      "Commerces, réserves, arrière-boutiques et locaux techniques.",
      "Bâtiments anciens, gaines, évacuations et zones humides.",
      "Cuisines, celliers, garages et espaces de stockage.",
      "Locaux professionnels, ateliers, bureaux avec coin repas et parties communes.",
    ],
    callbackAdvice: [
      "Indiquez si les cafards sont vus de jour, de nuit ou après nettoyage.",
      "Précisez les pièces touchées, les zones humides et les éventuelles caves.",
      "Mentionnez si le lieu est un commerce ou un logement occupé.",
      "Évitez les traitements improvisés qui peuvent déplacer les blattes avant avis.",
      "Signalez les gaines, évacuations, réserves alimentaires ou locaux voisins potentiellement concernés.",
    ],
    associatedLinks: [
      { label: "Cafards et blattes dans le Var", href: "/cafards-blattes-var/" },
      { label: "Nuisibles à Draguignan", href: "/villes/draguignan/" },
      { label: "Demande de rappel", href: "/demande-devis/" },
      { label: "Dératisation à Draguignan", href: "/deratisation-draguignan/" },
      { label: "Cafards à La Seyne-sur-Mer", href: "/cafards-la-seyne-sur-mer/" },
    ],
    faq: [
      { question: "Les caves peuvent-elles favoriser les cafards ?", answer: "Les zones humides, sombres ou reliées à des gaines peuvent faire partie du contexte. Il faut préciser les pièces et accès concernés." },
      { question: "Une demande pour un commerce à Draguignan est-elle possible ?", answer: "Oui. Indiquez le type d'activité, les zones touchées, les horaires de rappel et les contraintes d'ouverture." },
      { question: "Voir des cafards en plein jour est-il important ?", answer: "Oui. Cela peut signaler une présence déjà installée. Précisez la fréquence, les pièces et les zones humides ou chaudes." },
      { question: "La plateforme intervient-elle directement ?", answer: "Non. Stop Nuisible Var transmet la demande à un partenaire selon le secteur, le nuisible et la disponibilité." },
    ],
    heroImage: {
      src: "/images/local/cafards-local.svg",
      alt: "Illustration d’une demande pour cafards à Draguignan dans un logement ou commerce",
    },
    localAreas: ["centre-ville", "Les Collettes", "Saint-Hermentaire", "Chabran", "Sainte-Barbe", "zones d'activité"],
  },
  {
    slug: "termites-draguignan",
    serviceSlug: "termites-var",
    citySlug: "draguignan",
    h1: "Termites à Draguignan : bois, caves et charpentes",
    title: "Termites Draguignan - Signes dans maison, cave ou charpente",
    description: "Termites à Draguignan : bois fragilisé, plinthes, cave, combles ou charpente. Décrivez les signes et demandez un rappel gratuit.",
    promise: "Bois qui sonne creux, traces suspectes, cave humide ou charpente concernée à Draguignan : détaillez les éléments visibles avant transmission.",
    localContext:
      "À Draguignan, les maisons, caves, combles, garages, bâtis anciens et charpentes expliquent de nombreuses demandes liées aux termites et insectes xylophages. La qualification doit préserver les indices et distinguer humidité, bois fragilisé et signes actifs.",
    observedSigns: [
      "Bois qui sonne creux, plinthes fragilisées ou huisseries abîmées.",
      "Cordonnets terreux, galeries, poussières ou éléments de bois friables.",
      "Doute dans une cave, un garage, des combles, une charpente ou une dépendance.",
      "Dégradation progressive dans une maison ancienne ou un bâtiment avec zones humides.",
    ],
    concernedPlaces: [
      "Maisons, caves, combles, garages et dépendances.",
      "Charpentes, poutres, plinthes, huisseries et planchers.",
      "Bâtiments anciens, zones humides et annexes peu visitées.",
      "Logements en vente, rénovation ou surveillance après découverte de bois fragilisé.",
    ],
    callbackAdvice: [
      "Ne grattez pas largement les zones suspectes avant avis pour conserver les indices.",
      "Photographiez les traces visibles et indiquez l'âge approximatif du bâtiment.",
      "Précisez cave, combles, charpente, dépendance ou pièce humide concernée.",
      "Signalez si la demande est liée à une vente, une rénovation ou un diagnostic à prévoir.",
    ],
    associatedLinks: [
      { label: "Termites dans le Var", href: "/termites-var/" },
      { label: "Nuisibles à Draguignan", href: "/villes/draguignan/" },
      { label: "Demande de rappel", href: "/demande-devis/" },
    ],
    faq: [
      { question: "Un bois abîmé suffit-il à confirmer des termites ?", answer: "Non. Il faut croiser plusieurs indices et faire vérifier la situation par un professionnel qualifié, surtout en cas de vente ou de rénovation." },
      { question: "Stop Nuisible Var réalise-t-il un diagnostic réglementaire ?", answer: "Non. Le site transmet votre demande ; les obligations formelles doivent être confirmées par un diagnostiqueur ou un professionnel habilité." },
    ],
  },
  {
    slug: "punaises-de-lit-la-seyne-sur-mer",
    serviceSlug: "punaises-de-lit-var",
    citySlug: "la-seyne-sur-mer",
    updatedAt: "2026-06-20T11:09:00+02:00",
    h1: "Punaises de lit à La Seyne-sur-Mer : logement et location",
    title: "Punaises de lit La Seyne-sur-Mer : logement, résidence et location",
    description: "Punaises de lit à La Seyne-sur-Mer : piqûres, traces sur literie, résidence, location ou logement collectif. Demandez un rappel gratuit.",
    promise: "Piqûres au réveil, traces sur matelas ou doute dans un logement à La Seyne-sur-Mer : décrivez les couchages, le contexte et l'urgence avant transmission.",
    localContext:
      "À La Seyne-sur-Mer, les demandes de punaises de lit peuvent venir du centre-ville, des Sablettes, de Tamaris, Mar Vivo, Berthe ou Balaguier. Les logements collectifs, résidences, locations saisonnières et appartements proches du littoral demandent une qualification précise selon les dates d'occupation et les pièces touchées.",
    observedSigns: [
      "Piqûres groupées au réveil ou démangeaisons répétées après la nuit.",
      "Traces sombres sur matelas, sommier, draps, tête de lit ou canapé.",
      "Insecte suspect aperçu près d'un couchage, d'un bagage ou d'un meuble.",
      "Doute après un séjour, un changement d'occupant ou l'arrivée d'un meuble d'occasion.",
      "Signalement dans un logement collectif, une résidence ou une location entre deux séjours.",
    ],
    concernedPlaces: [
      "Appartements, résidences, logements collectifs et locations saisonnières.",
      "Chambres, canapés-lits, sommiers, têtes de lit et linge de lit.",
      "Logements proches du littoral, résidences secondaires et hébergements de passage.",
      "Colocations, logements entre deux occupants et biens gérés par conciergerie.",
    ],
    callbackAdvice: [
      "Indiquez le nombre de chambres, couchages ou logements concernés.",
      "Précisez les dates d'arrivée ou de départ si la demande concerne une location.",
      "Évitez de déplacer matelas, sacs ou linge dans d'autres pièces avant avis.",
      "Ajoutez une photo des traces visibles si elle peut être prise sans exposer de données personnelles.",
      "Mentionnez un retour de voyage, un séjour récent ou un meuble d'occasion si c'est le cas.",
    ],
    associatedLinks: [
      { label: "Punaises de lit dans le Var", href: "/punaises-de-lit-var/" },
      { label: "Nuisibles à La Seyne-sur-Mer", href: "/villes/la-seyne-sur-mer/" },
      { label: "Demande de rappel", href: "/demande-devis/" },
      { label: "Punaises de lit à Toulon", href: "/punaises-de-lit-toulon/" },
      { label: "Punaises de lit à Fréjus", href: "/punaises-de-lit-frejus/" },
      { label: "Identifier les signes d'un nuisible dans le Var", href: "/guides/identifier-un-nuisible-var/" },
    ],
    faq: [
      { question: "Quels signes signaler pour des punaises de lit à La Seyne-sur-Mer ?", answer: "Piqûres au réveil, traces sur literie, insecte visible, retour de voyage, changement d'occupant ou doute dans une location sont utiles à préciser." },
      { question: "Une location saisonnière peut-elle faire une demande ?", answer: "Oui. Indiquez les dates d'occupation, le nombre de couchages et les pièces concernées avant transmission à un partenaire." },
      { question: "Faut-il déplacer le linge ou le matelas ?", answer: "Il vaut mieux éviter de déplacer les textiles ou couchages dans d'autres pièces avant avis, pour ne pas disperser le problème." },
      { question: "Stop Nuisible Var intervient-il directement ?", answer: "Non. La plateforme qualifie la demande puis peut la transmettre à un professionnel partenaire selon le secteur et la situation." },
    ],
    heroImage: {
      src: "/images/local/punaises-lit-local.svg",
      alt: "Illustration d’une demande pour punaises de lit à La Seyne-sur-Mer dans un logement",
    },
    localAreas: ["centre-ville", "Les Sablettes", "Tamaris", "Mar Vivo", "Berthe", "Balaguier"],
  },
  {
    slug: "punaises-de-lit-draguignan",
    serviceSlug: "punaises-de-lit-var",
    citySlug: "draguignan",
    updatedAt: "2026-06-20T11:09:00+02:00",
    h1: "Punaises de lit à Draguignan : logement et literie",
    title: "Punaises de lit Draguignan : piqûres, literie et logement",
    description: "Punaises de lit à Draguignan : piqûres, traces sur matelas, logement, chambre, canapé ou retour de voyage. Demandez un rappel gratuit.",
    promise: "Piqûres au réveil, traces sur literie ou doute dans une chambre à Draguignan : précisez les couchages, le contexte et les signes observés.",
    localContext:
      "À Draguignan, les demandes de punaises de lit concernent surtout des logements occupés, maisons, appartements, résidences et hébergements de passage. Le centre-ville, Les Collettes, Saint-Hermentaire, Chabran, Sainte-Barbe et les zones d'activité peuvent présenter des contextes différents entre chambre familiale, logement loué ou déplacement professionnel.",
    observedSigns: [
      "Piqûres groupées au réveil, démangeaisons répétées ou gêne dans une chambre.",
      "Traces sombres sur matelas, sommier, draps, plinthes ou tête de lit.",
      "Insecte suspect près d'un couchage, canapé, bagage ou meuble récent.",
      "Doute après un déplacement, un séjour, l'accueil de proches ou un meuble d'occasion.",
      "Présence suspectée dans plusieurs couchages ou pièces d'un logement.",
    ],
    concernedPlaces: [
      "Maisons, appartements, chambres, canapés et couchages d'appoint.",
      "Logements occupés, locations, hébergements temporaires et résidences.",
      "Sommiers, matelas, têtes de lit, plinthes et textiles proches du couchage.",
      "Logements après voyage, déménagement ou arrivée d'un nouveau meuble.",
    ],
    callbackAdvice: [
      "Précisez le nombre de couchages concernés et la date d'apparition des signes.",
      "Mentionnez un voyage, un changement d'occupants ou un meuble d'occasion si pertinent.",
      "Évitez de déplacer textiles, valises ou matelas vers d'autres pièces.",
      "Conservez les indices visibles et ajoutez une photo si elle peut aider sans donnée personnelle.",
    ],
    associatedLinks: [
      { label: "Punaises de lit dans le Var", href: "/punaises-de-lit-var/" },
      { label: "Nuisibles à Draguignan", href: "/villes/draguignan/" },
      { label: "Demande de rappel", href: "/demande-devis/" },
      { label: "Punaises de lit à Hyères", href: "/punaises-de-lit-hyeres/" },
      { label: "Punaises de lit à Fréjus", href: "/punaises-de-lit-frejus/" },
    ],
    faq: [
      { question: "Une piqûre suffit-elle à confirmer des punaises de lit ?", answer: "Non. Il faut croiser les piqûres avec des traces sur literie, un insecte visible ou un contexte de voyage ou d'occupation." },
      { question: "Que préciser pour une demande à Draguignan ?", answer: "Indiquez les pièces, couchages, dates d'apparition, déplacements récents et signes visibles sur literie ou canapé." },
      { question: "Puis-je envoyer une photo ?", answer: "Oui, si elle ne contient pas de personne, visage ou document personnel. Une photo des traces peut aider la pré-qualification." },
      { question: "Le rappel est-il sans engagement ?", answer: "Oui. La demande est gratuite et vous restez libre de la suite proposée par le partenaire." },
    ],
    heroImage: {
      src: "/images/local/punaises-lit-local.svg",
      alt: "Illustration d’une demande pour punaises de lit à Draguignan dans une chambre",
    },
    localAreas: ["centre-ville", "Les Collettes", "Saint-Hermentaire", "Chabran", "Sainte-Barbe", "zones d'activité"],
  },
  {
    slug: "deratisation-saint-raphael",
    serviceSlug: "deratisation-var",
    citySlug: "saint-raphael",
    updatedAt: "2026-06-20T11:09:00+02:00",
    h1: "Dératisation à Saint-Raphaël : rats et souris",
    title: "Dératisation Saint-Raphaël : rats, souris, villa et commerce",
    description: "Rats ou souris à Saint-Raphaël : villa, résidence, commerce, garage, jardin ou local poubelle. Décrivez les signes et demandez un rappel.",
    promise: "Bruits, crottes, rongements ou passages près d'un jardin, garage, local poubelle ou commerce à Saint-Raphaël : indiquez les signes et l'accès au lieu.",
    localContext:
      "À Saint-Raphaël, les demandes de dératisation peuvent venir du centre-ville, Valescure, Boulouris, Agay, Le Dramont ou Santa Lucia. Villas, jardins, résidences secondaires, commerces du littoral et garages n'ont pas les mêmes contraintes d'accès ni la même urgence en période d'occupation.",
    observedSigns: [
      "Bruits nocturnes dans les murs, combles, garages, faux plafonds ou dépendances.",
      "Crottes près d'un local poubelle, d'une réserve, d'un cellier ou d'une terrasse.",
      "Rongements sur cartons, sacs, gaines, isolants ou denrées stockées.",
      "Traces grasses, odeur inhabituelle ou passages répétés autour du bâtiment.",
      "Indices dans une villa, résidence secondaire, commerce ou jardin proche du littoral.",
    ],
    concernedPlaces: [
      "Villas, jardins, garages, dépendances et résidences secondaires.",
      "Commerces, restaurants, réserves et locaux poubelles.",
      "Appartements, résidences, caves, locaux techniques et parties communes.",
      "Logements occupés par des vacanciers ou entre deux séjours.",
    ],
    callbackAdvice: [
      "Précisez si les traces sont à l'intérieur, à l'extérieur ou dans un local technique.",
      "Indiquez si le logement est occupé, loué ou entre deux séjours.",
      "Conservez les indices visibles sans manipuler les déjections à mains nues.",
      "Mentionnez les accès possibles depuis jardin, garage, vide sanitaire ou local poubelle.",
    ],
    associatedLinks: [
      { label: "Dératisation dans le Var", href: "/deratisation-var/" },
      { label: "Nuisibles à Saint-Raphaël", href: "/villes/saint-raphael/" },
      { label: "Demande de rappel", href: "/demande-devis/" },
      { label: "Dératisation à Fréjus", href: "/deratisation-frejus/" },
      { label: "Dératisation à Draguignan", href: "/deratisation-draguignan/" },
    ],
    faq: [
      { question: "Quels signes signaler pour des rats ou souris à Saint-Raphaël ?", answer: "Bruits nocturnes, crottes, rongements, traces grasses, odeur inhabituelle et passages près des poubelles ou garages sont utiles." },
      { question: "Une résidence secondaire peut-elle faire une demande ?", answer: "Oui. Précisez si le logement est occupé, les dates importantes et les contraintes d'accès." },
      { question: "Le site intervient-il directement ?", answer: "Non. Stop Nuisible Var transmet une demande qualifiée à un partenaire selon le secteur et la disponibilité." },
      { question: "Faut-il nettoyer avant le rappel ?", answer: "Limitez les risques, mais conservez les indices visibles si possible et évitez de manipuler les déjections à mains nues." },
    ],
    heroImage: {
      src: "/images/local/deratisation-local.svg",
      alt: "Illustration d’une demande de dératisation à Saint-Raphaël dans une villa avec garage",
    },
    localAreas: ["centre-ville", "Valescure", "Boulouris", "Agay", "Le Dramont", "Santa Lucia"],
  },
  {
    slug: "cafards-saint-raphael",
    serviceSlug: "cafards-blattes-var",
    citySlug: "saint-raphael",
    updatedAt: "2026-06-20T11:09:00+02:00",
    h1: "Cafards à Saint-Raphaël : blattes en logement ou commerce",
    title: "Cafards Saint-Raphaël : blattes, résidence et commerce",
    description: "Cafards à Saint-Raphaël : blattes en cuisine, résidence, location, commerce ou restaurant. Demandez un rappel gratuit sans engagement.",
    promise: "Cafards en cuisine, salle d'eau, résidence, commerce ou location à Saint-Raphaël : décrivez les zones touchées et le contexte d'occupation.",
    localContext:
      "À Saint-Raphaël, les cafards peuvent être signalés dans des résidences, locations, commerces, restaurants et logements proches du littoral. Le centre-ville, Valescure, Boulouris, Agay, Le Dramont et Santa Lucia présentent des situations différentes entre résidence secondaire, cuisine professionnelle, logement loué ou parties communes.",
    observedSigns: [
      "Blattes visibles dans une cuisine, salle d'eau, réserve, buanderie ou arrière-cuisine.",
      "Petits insectes près des plinthes, gaines, évacuations ou appareils électroménagers.",
      "Odeur inhabituelle, traces sombres ou insectes morts dans les placards.",
      "Présence répétée dans une résidence, un commerce, une location ou plusieurs pièces.",
      "Signalements en parties communes, local poubelle ou logement voisin.",
    ],
    concernedPlaces: [
      "Résidences, appartements, locations saisonnières et résidences secondaires.",
      "Restaurants, commerces, réserves, snacks et cuisines professionnelles.",
      "Salles d'eau, cuisines, gaines, locaux poubelles et parties communes.",
      "Logements occupés par des vacanciers ou entre deux séjours.",
    ],
    callbackAdvice: [
      "Indiquez si les cafards sont vus de jour, de nuit ou après nettoyage.",
      "Précisez les pièces touchées et si des parties communes sont concernées.",
      "Mentionnez les dates d'occupation pour une location ou résidence secondaire.",
      "Évitez les traitements dispersés qui peuvent déplacer les blattes avant qualification.",
    ],
    associatedLinks: [
      { label: "Cafards et blattes dans le Var", href: "/cafards-blattes-var/" },
      { label: "Nuisibles à Saint-Raphaël", href: "/villes/saint-raphael/" },
      { label: "Demande de rappel", href: "/demande-devis/" },
      { label: "Cafards à Fréjus", href: "/cafards-frejus/" },
      { label: "Cafards à Draguignan", href: "/cafards-draguignan/" },
      { label: "Identifier les signes d'un nuisible dans le Var", href: "/guides/identifier-un-nuisible-var/" },
    ],
    faq: [
      { question: "Que préciser pour des cafards à Saint-Raphaël ?", answer: "Indiquez les pièces touchées, la fréquence, les parties communes éventuelles, le type de logement et les contraintes d'occupation." },
      { question: "Un restaurant peut-il faire une demande ?", answer: "Oui. Précisez les zones touchées, horaires de rappel et contraintes d'ouverture au public." },
      { question: "Les cafards viennent-ils forcément d'un manque d'hygiène ?", answer: "Non. Les blattes peuvent circuler par gaines, livraisons, cartons, parties communes et logements voisins." },
      { question: "La demande est-elle sans engagement ?", answer: "Oui. La demande de rappel est gratuite et sans engagement." },
    ],
    heroImage: {
      src: "/images/local/cafards-local.svg",
      alt: "Illustration d’une demande pour cafards à Saint-Raphaël dans une résidence ou un commerce",
    },
    localAreas: ["centre-ville", "Valescure", "Boulouris", "Agay", "Le Dramont", "Santa Lucia"],
  },
  {
    slug: "guepes-frelons-frejus",
    serviceSlug: "guepes-frelons-var",
    citySlug: "frejus",
    updatedAt: "2026-06-20T11:09:00+02:00",
    h1: "Guêpes et frelons à Fréjus : nid et demande de rappel",
    title: "Guêpes et frelons Fréjus : nid, jardin, camping et terrasse",
    description: "Nid de guêpes ou frelons à Fréjus : jardin, toiture, terrasse, camping, commerce ou résidence. Décrivez l'emplacement et demandez un rappel.",
    promise: "Nid sous toiture, allers-retours près d'une terrasse, d'un jardin, d'un camping ou d'un commerce à Fréjus : décrivez l'accès sans prendre de risque.",
    localContext:
      "À Fréjus, les demandes guêpes et frelons peuvent venir du centre historique, de Fréjus-Plage, Port-Fréjus, Saint-Aygulf, Tour de Mare ou Caïs. Campings, résidences, jardins, terrasses, commerces et hébergements touristiques imposent de bien préciser l'accès, la hauteur et les passages exposés.",
    observedSigns: [
      "Allers-retours répétés au même point d'une toiture, haie, volet, arbre ou cabanon.",
      "Nid visible près d'une terrasse, piscine, entrée, sanitaire collectif ou hébergement.",
      "Présence de guêpes ou frelons près d'enfants, animaux, clients ou vacanciers.",
      "Insectes nombreux dans un camping, une résidence, un commerce ou une zone de passage.",
      "Activité en hauteur sous une avancée de toit, dans un arbre ou sur une façade.",
    ],
    concernedPlaces: [
      "Campings, résidences, jardins, terrasses et piscines.",
      "Toitures, volets, haies, arbres, cabanons et dépendances.",
      "Commerces, restaurants, hébergements touristiques et zones de passage.",
      "Maisons, appartements, résidences secondaires et espaces collectifs.",
    ],
    callbackAdvice: [
      "Décrivez la hauteur, le support du nid et l'accès possible depuis la rue ou le jardin.",
      "Ne tentez pas de décrocher, arroser ou brûler le nid.",
      "Indiquez si des enfants, animaux, vacanciers ou clients sont exposés.",
      "Ajoutez une photo prise à distance seulement si elle ne vous met pas en danger.",
    ],
    associatedLinks: [
      { label: "Guêpes et frelons dans le Var", href: "/guepes-frelons-var/" },
      { label: "Nuisibles à Fréjus", href: "/villes/frejus/" },
      { label: "Demande de rappel", href: "/demande-devis/" },
      { label: "Guêpes et frelons à Saint-Raphaël", href: "/guepes-frelons-saint-raphael/" },
      { label: "Guêpes et frelons à Hyères", href: "/guepes-frelons-hyeres/" },
    ],
    faq: [
      { question: "Que préciser pour un nid à Fréjus ?", answer: "Indiquez l'emplacement, la hauteur, les accès possibles, les passages exposés et si le lieu reçoit du public." },
      { question: "Un camping peut-il faire une demande ?", answer: "Oui. Il faut préciser les zones collectives, hébergements concernés, contraintes d'occupation et sécurité des clients." },
      { question: "Faut-il s'approcher du nid ?", answer: "Non. Décrivez à distance et ajoutez une photo uniquement si elle peut être prise sans risque." },
      { question: "Stop Nuisible Var détruit-il directement le nid ?", answer: "Non. La plateforme transmet une demande qualifiée à un professionnel partenaire." },
    ],
    heroImage: {
      src: "/images/local/guepes-frelons-local.svg",
      alt: "Illustration d’un nid de guêpes ou frelons à Fréjus près d’un jardin ou camping",
    },
    localAreas: ["centre historique", "Fréjus-Plage", "Port-Fréjus", "Saint-Aygulf", "Tour de Mare", "Caïs"],
  },
  {
    slug: "guepes-frelons-draguignan",
    serviceSlug: "guepes-frelons-var",
    citySlug: "draguignan",
    updatedAt: "2026-06-20T11:09:00+02:00",
    h1: "Guêpes et frelons à Draguignan : nid et jardin",
    title: "Guêpes et frelons Draguignan : nid, jardin et toiture",
    description: "Nid de guêpes ou frelons à Draguignan : jardin, toiture, arbre, cabanon, commerce ou maison. Décrivez l'emplacement et demandez un rappel.",
    promise: "Allers-retours près d'un arbre, d'une toiture, d'un cabanon ou d'un jardin à Draguignan : indiquez la hauteur, l'accès et les passages exposés.",
    localContext:
      "À Draguignan, les demandes liées aux guêpes et frelons concernent souvent les maisons, jardins, restanques, dépendances, commerces et bâtiments avec accès en hauteur. Le centre-ville, Les Collettes, Saint-Hermentaire, Chabran, Sainte-Barbe et les zones d'activité peuvent présenter des accès très différents.",
    observedSigns: [
      "Allers-retours au même point d'une toiture, haie, arbre, volet ou cabanon.",
      "Nid visible dans un jardin, une dépendance, une façade ou une avancée de toit.",
      "Présence près d'enfants, animaux, clients, entrée de maison ou commerce.",
      "Insectes nombreux sur une terrasse, une cour, un passage ou une zone de travail.",
      "Activité en hauteur ou dans une zone difficile d'accès.",
    ],
    concernedPlaces: [
      "Maisons, jardins, restanques, terrasses, garages et dépendances.",
      "Toitures, volets, haies, arbres, cabanons et façades.",
      "Commerces, ateliers, zones d'activité et espaces fréquentés.",
      "Cours, entrées, parkings, locaux techniques et parties communes.",
    ],
    callbackAdvice: [
      "Indiquez la hauteur approximative et le support du nid.",
      "Ne tentez pas de traiter ou déplacer le nid vous-même.",
      "Précisez si des enfants, animaux, clients ou salariés passent à proximité.",
      "Mentionnez les contraintes d'accès si le nid est en hauteur, dans un arbre ou sur une toiture.",
    ],
    associatedLinks: [
      { label: "Guêpes et frelons dans le Var", href: "/guepes-frelons-var/" },
      { label: "Nuisibles à Draguignan", href: "/villes/draguignan/" },
      { label: "Demande de rappel", href: "/demande-devis/" },
      { label: "Guêpes et frelons à Fréjus", href: "/guepes-frelons-frejus/" },
      { label: "Guêpes et frelons à Saint-Raphaël", href: "/guepes-frelons-saint-raphael/" },
    ],
    faq: [
      { question: "Que faire si le nid est en hauteur ?", answer: "Ne tentez pas d'intervenir. Décrivez le support, la hauteur, l'accès et les passages exposés." },
      { question: "Une entreprise ou un commerce peut-il faire une demande ?", answer: "Oui. Indiquez les zones touchées, horaires, contraintes d'accès et exposition du public ou des salariés." },
      { question: "La photo est-elle obligatoire ?", answer: "Non. Elle est facultative et doit être prise uniquement à distance, sans risque." },
      { question: "Le rappel est-il gratuit ?", answer: "Oui. La demande de rappel est gratuite et sans engagement." },
    ],
    heroImage: {
      src: "/images/local/guepes-frelons-local.svg",
      alt: "Illustration d’un nid de guêpes ou frelons à Draguignan près d’un jardin",
    },
    localAreas: ["centre-ville", "Les Collettes", "Saint-Hermentaire", "Chabran", "Sainte-Barbe", "zones d'activité"],
  },
  {
    slug: "deratisation-brignoles",
    serviceSlug: "deratisation-var",
    citySlug: "brignoles",
    updatedAt: "2026-06-20T11:09:00+02:00",
    h1: "Dératisation à Brignoles : rats et souris",
    title: "Dératisation Brignoles : rats, souris, maison et garage",
    description: "Rats ou souris à Brignoles : bruits, crottes, rongements, maison, garage, combles, commerce ou dépendance. Demandez un rappel gratuit.",
    promise: "Bruits dans les combles, crottes près d'un garage ou traces dans une dépendance à Brignoles : décrivez les accès, les indices et le niveau d'urgence.",
    localContext:
      "À Brignoles, les demandes de dératisation concernent souvent maisons, jardins, garages, combles, dépendances, locaux agricoles, commerces et zones commerciales. Le centre-ville, La Tour, Les Censies, Nicopolis et les quartiers résidentiels n'ont pas les mêmes accès ni les mêmes contraintes entre habitat, stockage et activité professionnelle.",
    observedSigns: [
      "Bruits nocturnes dans les combles, cloisons, garages, caves ou dépendances.",
      "Crottes près d'un local poubelle, d'une réserve, d'un cellier ou d'un stockage.",
      "Rongements sur cartons, gaines, isolants, sacs, portes ou denrées stockées.",
      "Traces grasses, odeur inhabituelle ou passages répétés autour du bâti.",
      "Indices dans un jardin, une annexe, un local agricole ou une zone commerciale.",
    ],
    concernedPlaces: [
      "Maisons, garages, combles, caves, jardins et dépendances.",
      "Commerces, réserves, zones commerciales et locaux techniques.",
      "Locaux agricoles, stockages, ateliers et bâtiments annexes.",
      "Quartiers résidentiels, copropriétés, locaux poubelles et vides sanitaires.",
    ],
    callbackAdvice: [
      "Précisez les zones touchées et les accès possibles : jardin, garage, combles, cave ou local technique.",
      "Conservez les traces visibles sans manipuler les déjections à mains nues.",
      "Mentionnez si la demande concerne un commerce, un stockage ou une dépendance.",
      "Indiquez depuis quand les signes reviennent et si plusieurs zones sont concernées.",
    ],
    associatedLinks: [
      { label: "Dératisation dans le Var", href: "/deratisation-var/" },
      { label: "Nuisibles à Brignoles", href: "/villes/brignoles/" },
      { label: "Demande de rappel", href: "/demande-devis/" },
      { label: "Dératisation à Draguignan", href: "/deratisation-draguignan/" },
      { label: "Dératisation à Hyères", href: "/deratisation-hyeres/" },
      { label: "Identifier les signes d'un nuisible dans le Var", href: "/guides/identifier-un-nuisible-var/" },
    ],
    faq: [
      { question: "Quels signes de rats ou souris signaler à Brignoles ?", answer: "Bruits nocturnes, crottes, rongements, traces grasses, odeurs et passages près des garages, combles ou dépendances." },
      { question: "Une dépendance ou un local agricole peut-il être concerné ?", answer: "Oui. Décrivez les accès, le stockage, les zones touchées et la fréquence des signes." },
      { question: "Stop Nuisible Var intervient-il directement ?", answer: "Non. La plateforme transmet votre demande à un professionnel partenaire selon le secteur et la situation." },
      { question: "La demande est-elle sans engagement ?", answer: "Oui. La demande de rappel est gratuite et vous restez libre de la suite proposée." },
    ],
    heroImage: {
      src: "/images/local/deratisation-local.svg",
      alt: "Illustration d’une demande de dératisation à Brignoles dans une maison avec garage",
    },
    localAreas: ["centre-ville", "La Tour", "Les Censies", "Nicopolis", "zones commerciales", "quartiers résidentiels"],
  },
  {
    slug: "cafards-brignoles",
    serviceSlug: "cafards-blattes-var",
    citySlug: "brignoles",
    updatedAt: "2026-06-20T11:09:00+02:00",
    h1: "Cafards à Brignoles : blattes en logement ou commerce",
    title: "Cafards Brignoles : blattes, maison, commerce et réserve",
    description: "Cafards à Brignoles : blattes en cuisine, salle d'eau, commerce, réserve, logement ou local technique. Demandez un rappel gratuit.",
    promise: "Blattes dans une cuisine, salle d'eau, commerce, réserve ou logement à Brignoles : indiquez les pièces touchées et la fréquence d'observation.",
    localContext:
      "À Brignoles, les cafards peuvent être signalés dans des maisons, appartements, commerces, réserves, locaux techniques et zones commerciales. Le centre-ville, La Tour, Les Censies, Nicopolis, les zones commerciales et quartiers résidentiels impliquent des contextes différents entre logement occupé, commerce alimentaire ou stockage.",
    observedSigns: [
      "Cafards visibles dans une cuisine, salle d'eau, cave, buanderie ou réserve.",
      "Petites blattes près des plinthes, évacuations, gaines ou appareils électroménagers.",
      "Odeur inhabituelle, traces sombres ou insectes morts dans les placards.",
      "Présence répétée en plein jour, après nettoyage ou dans plusieurs pièces.",
      "Signalement dans un commerce, une réserve, un local poubelle ou un logement voisin.",
    ],
    concernedPlaces: [
      "Maisons, appartements, cuisines, salles d'eau, caves et buanderies.",
      "Commerces, restaurants, réserves, arrière-boutiques et zones commerciales.",
      "Locaux techniques, gaines, évacuations, celliers et espaces de stockage.",
      "Quartiers résidentiels, copropriétés, locaux poubelles et parties communes.",
    ],
    callbackAdvice: [
      "Indiquez si les cafards sont vus de jour, de nuit ou après nettoyage.",
      "Précisez les pièces touchées, les zones humides et les locaux de stockage.",
      "Mentionnez si le lieu est un commerce alimentaire ou un logement occupé.",
      "Évitez les traitements dispersés qui peuvent déplacer les blattes avant qualification.",
    ],
    associatedLinks: [
      { label: "Cafards et blattes dans le Var", href: "/cafards-blattes-var/" },
      { label: "Nuisibles à Brignoles", href: "/villes/brignoles/" },
      { label: "Demande de rappel", href: "/demande-devis/" },
      { label: "Cafards à Draguignan", href: "/cafards-draguignan/" },
      { label: "Cafards à Fréjus", href: "/cafards-frejus/" },
    ],
    faq: [
      { question: "Que préciser pour des cafards à Brignoles ?", answer: "Indiquez les pièces touchées, la fréquence, les zones humides, les gaines et si le lieu est un commerce ou un logement." },
      { question: "Un commerce peut-il faire une demande ?", answer: "Oui. Mentionnez le type d'activité, les zones touchées, les horaires de rappel et les contraintes d'ouverture." },
      { question: "Voir des cafards en plein jour est-il important ?", answer: "Oui. Cela peut indiquer une présence installée. Précisez les zones et la fréquence." },
      { question: "Le formulaire est-il sans engagement ?", answer: "Oui. La demande de rappel est gratuite et sans engagement." },
    ],
    heroImage: {
      src: "/images/local/cafards-local.svg",
      alt: "Illustration d’une demande pour cafards à Brignoles dans un commerce ou logement",
    },
    localAreas: ["centre-ville", "La Tour", "Les Censies", "Nicopolis", "zones commerciales", "quartiers résidentiels"],
  },
];

const legacyLocalLandingCities = ["toulon", "hyeres", "frejus", "draguignan", "saint-raphael", "la-seyne-sur-mer"];

const activeLocalLandingSlugs = new Set(localLandings.map((landing) => landing.slug));
const localLandingDestination = (slug: string, fallback: string) => (activeLocalLandingSlugs.has(slug) ? `/${slug}/` : fallback);

const legacyLocalLandingRedirectCandidates: LegacyLocalLandingRedirect[] = [
  ...legacyLocalLandingCities
    .filter((citySlug) => citySlug !== "toulon")
    .map((citySlug) => ({ source: `deratisation-${citySlug}`, destination: "/deratisation-var/" })),
  ...legacyLocalLandingCities
    .filter((citySlug) => citySlug !== "toulon")
    .map((citySlug) => ({ source: `punaises-de-lit-${citySlug}`, destination: "/punaises-de-lit-var/" })),
  ...legacyLocalLandingCities.map((citySlug) => ({
    source: `traitement-cafards-${citySlug}`,
    destination: localLandingDestination(`cafards-${citySlug}`, "/cafards-blattes-var/"),
  })),
  ...legacyLocalLandingCities.map((citySlug) => ({
    source: `destruction-nid-frelons-${citySlug}`,
    destination: localLandingDestination(`guepes-frelons-${citySlug}`, "/guepes-frelons-var/"),
  })),
  { source: "deratisation-restaurant-var", destination: "/deratisation-var/" },
  { source: "prix-deratisation-var", destination: "/deratisation-var/" },
];

export const legacyLocalLandingRedirects: LegacyLocalLandingRedirect[] = legacyLocalLandingRedirectCandidates.filter(
  (redirect) => !activeLocalLandingSlugs.has(redirect.source),
);

export function getLocalLanding(slug: string) {
  return localLandings.find((landing) => landing.slug === slug);
}

export function getLegacyLocalLandingRedirect(slug: string) {
  return legacyLocalLandingRedirects.find((redirect) => redirect.source === slug);
}
