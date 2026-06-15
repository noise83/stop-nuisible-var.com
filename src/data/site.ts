export type FAQItem = { question: string; answer: string };

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
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
  sections: Array<{ heading: string; body: string }>;
  faq: FAQItem[];
};

export type LocalLanding = {
  slug: string;
  serviceSlug: string;
  citySlug: string;
  h1: string;
  title: string;
  description: string;
  promise: string;
  reassurance: string[];
  faq: FAQItem[];
};

export const services: Service[] = [
  {
    slug: "punaises-de-lit-var",
    name: "Punaises de lit",
    shortName: "Punaises de lit",
    icon: "bedbug",
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

const landingServiceConfig: Record<string, { prefix: string; label: string; promise: string }> = {
  "deratisation-var": {
    prefix: "deratisation",
    label: "Dératisation rapide",
    promise: "Rats, souris, bruits dans les combles ou traces dans un local poubelle : décrivez la situation et demandez un rappel selon votre secteur.",
  },
  "punaises-de-lit-var": {
    prefix: "punaises-de-lit",
    label: "Traitement punaises de lit",
    promise: "Piqûres au réveil, traces sur literie ou doute après un séjour : envoyez les signes observés pour obtenir un rappel qualifié.",
  },
  "cafards-blattes-var": {
    prefix: "traitement-cafards",
    label: "Traitement cafards",
    promise: "Blattes en cuisine, salle de bain, parties communes ou commerce alimentaire : précisez le lieu et l'urgence pour une mise en relation rapide.",
  },
  "guepes-frelons-var": {
    prefix: "destruction-nid-frelons",
    label: "Destruction nid de frelons",
    promise: "Nid sous toiture, arbre, haie, volet ou terrasse : signalez l'emplacement sans prendre de risque et demandez un rappel.",
  },
};

const generatedLocalLandings: LocalLanding[] = priorityCities.slice(0, 6).flatMap((city) =>
  Object.entries(landingServiceConfig).map(([serviceSlug, config]) => {
    const service = getService(serviceSlug);
    const slug = `${config.prefix}-${city.slug}`;
    const h1 = `${config.label} à ${city.name}`;
    return {
      slug,
      serviceSlug,
      citySlug: city.slug,
      h1,
      title: `${h1} - Rappel et devis nuisibles`,
      description: `${config.label} à ${city.name} : demande de rappel locale pour ${service?.shortName.toLowerCase() ?? "nuisibles"}, téléphone, devis clair et transmission à une entreprise partenaire.`,
      promise: `${config.promise} À ${city.name}, les demandes concernent souvent ${city.buildingTypes.slice(0, 3).join(", ")}.`,
      reassurance: [
        "Demande gratuite et sans engagement",
        "Contact rapide selon disponibilité du partenaire",
        "Données transmises uniquement avec votre consentement",
      ],
      faq: [
        {
          question: `Comment demander un rappel à ${city.name} ?`,
          answer: "Remplissez le formulaire court avec le nuisible, la ville, le code postal, l'urgence et votre téléphone. Votre demande est transmise à une entreprise partenaire spécialisée avec votre consentement.",
        },
        {
          question: "Le rappel est-il une intervention garantie ?",
          answer: "Non. Stop Nuisible Var facilite la mise en relation. Le partenaire confirme la situation, explique les options et propose un devis si possible.",
        },
      ],
    };
  }),
);

const extraLocalLandings: LocalLanding[] = [
  {
    slug: "deratisation-restaurant-var",
    serviceSlug: "deratisation-var",
    citySlug: "toulon",
    h1: "Dératisation restaurant dans le Var",
    title: "Dératisation restaurant Var - Rappel rapide et devis",
    description: "Rats ou souris dans un restaurant du Var : local poubelle, réserve, cuisine, cave, urgence sanitaire, téléphone et demande de rappel gratuite.",
    promise: "Bruits, crottes, traces de rongement ou passage près d'une réserve alimentaire : décrivez votre restaurant, votre commune et l'urgence pour transmettre une demande exploitable.",
    reassurance: ["Demande gratuite et sans engagement", "Contact rapide selon disponibilité du partenaire", "Données transmises uniquement avec votre consentement"],
    faq: [
      { question: "Que préciser pour un restaurant ?", answer: "Indiquez la commune, le type de local, les zones touchées, les horaires de rappel et si le problème concerne la cuisine, la réserve, la salle ou le local poubelle." },
      { question: "Le site affiche-t-il une fausse agence locale ?", answer: "Non. Stop Nuisible Var est une plateforme de demande de rappel et ne prétend pas intervenir directement." },
    ],
  },
  {
    slug: "prix-deratisation-var",
    serviceSlug: "deratisation-var",
    citySlug: "toulon",
    h1: "Prix dératisation dans le Var",
    title: "Prix dératisation Var - Comprendre le devis",
    description: "Prix d'une dératisation dans le Var : facteurs qui influencent le devis, type de lieu, accès, urgence, surface et niveau d'infestation.",
    promise: "Le prix dépend du type de lieu, des accès, de la surface, des traces observées et du niveau d'urgence. Décrivez la situation pour obtenir un rappel et un devis adapté.",
    reassurance: ["Devis avant décision", "Demande gratuite et sans engagement", "Téléphone obligatoire pour qualifier le rappel"],
    faq: [
      { question: "Peut-on donner un prix fixe sans voir le site ?", answer: "Un prix fiable dépend des accès, du type de bâtiment, de la surface et du niveau d'infestation. La demande sert à préparer un devis cohérent." },
      { question: "Quels éléments influencent le tarif ?", answer: "Maison, appartement, restaurant, cave, local poubelle, urgence, fréquence des passages et contraintes d'accès peuvent faire varier le prix." },
    ],
  },
];

export const localLandings: LocalLanding[] = [...generatedLocalLandings, ...extraLocalLandings];

export function getLocalLanding(slug: string) {
  return localLandings.find((landing) => landing.slug === slug);
}
