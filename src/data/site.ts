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
      "Demande de rappel pour une suspicion de punaises de lit dans un logement, hotel, location saisonniere ou residence du Var.",
    hero:
      "Les punaises de lit demandent une reaction methodique : identification des signes, evaluation des pieces touchees et orientation vers un professionnel partenaire habitue aux logements occupes comme aux hebergements touristiques.",
    risks: ["Piqures groupees au reveil", "Taches sombres sur matelas ou sommier", "Bagages et textiles exposes apres voyage"],
    contexts: ["Appartements en centre-ville", "Hotels et locations saisonnieres", "Residences secondaires du littoral"],
    advice: [
      "Eviter de deplacer les matelas ou sacs de linge dans d'autres pieces avant avis professionnel.",
      "Photographier les traces visibles aide a qualifier la demande sans manipulation inutile.",
      "Prevenir le gestionnaire ou le syndic lorsqu'un logement collectif peut etre concerne.",
    ],
    faq: [
      {
        question: "Une piqure suffit-elle a confirmer des punaises de lit ?",
        answer:
          "Non. Les piqures orientent le diagnostic, mais il faut croiser plusieurs signes : traces sur literie, insectes visibles, contexte de voyage ou voisinage.",
      },
      {
        question: "Stop Nuisible Var envoie-t-il un technicien ?",
        answer:
          "Non, la plateforme recueille votre demande et la transmet a un professionnel partenaire adapte au secteur et au type de probleme.",
      },
    ],
  },
  {
    slug: "deratisation-var",
    name: "Deratisation rats et souris",
    shortName: "Deratisation",
    icon: "rodent",
    title: "Deratisation dans le Var : rats et souris",
    description:
      "Mise en relation pour rats, souris, bruits dans les combles, traces de passage et demandes de deratisation dans le Var.",
    hero:
      "Entre habitat dense, jardins, ports, restaurants et zones rurales, les rongeurs trouvent des acces tres varies. Une demande bien qualifiee permet d'orienter rapidement vers un professionnel anti nuisibles du bon secteur.",
    risks: ["Bruits nocturnes dans cloisons ou combles", "Crottes pres des reserves alimentaires", "Gaines, cartons ou isolants ronges"],
    contexts: ["Maisons avec jardin", "Restaurants et commerces alimentaires", "Caves, garages et locaux techniques"],
    advice: [
      "Conserver les traces visibles pour faciliter le diagnostic, sans manipuler les dejections a mains nues.",
      "Limiter l'acces a la nourriture et fermer les sacs de dechets en attendant le rappel.",
      "Signaler les acces probables : vide sanitaire, toiture, local poubelle, terrasse ou canalisation.",
    ],
    faq: [
      {
        question: "Faut-il demander une deratisation des les premiers signes ?",
        answer:
          "Oui, surtout lorsque des traces reviennent plusieurs jours. Une intervention nuisibles bien ciblee evite souvent que la situation s'installe.",
      },
      {
        question: "Le devis peut-il etre fixe sans visite ?",
        answer:
          "Un ordre d'idee peut parfois etre donne, mais un devis fiable depend du site, des acces, de la surface et du niveau d'infestation.",
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
      "Les blattes se propagent vite dans les cuisines, gaines techniques, reserves et parties communes. La priorite est de localiser les zones actives et de coordonner la demande avec le type de batiment concerne.",
    risks: ["Insectes visibles la nuit", "Odeurs persistantes en cuisine", "Presence dans les gaines ou parties communes"],
    contexts: ["Appartements et coproprietes", "Restaurants, snacks et boulangeries", "Locaux avec reserves ou points d'eau"],
    advice: [
      "Nettoyer les surfaces alimentaires, mais garder une photo des insectes si possible.",
      "Mentionner si les voisins ou parties communes sont aussi concernes.",
      "Eviter les traitements disperses qui peuvent compliquer le diagnostic.",
    ],
    faq: [
      {
        question: "Les cafards viennent-ils toujours d'un manque d'hygiene ?",
        answer:
          "Non. L'hygiene compte, mais les blattes circulent aussi par les gaines, livraisons, cartons, parties communes et logements voisins.",
      },
      {
        question: "Une copropriete doit-elle agir collectivement ?",
        answer:
          "Souvent oui lorsque les parties communes, colonnes ou plusieurs logements sont touches. La demande doit alors preciser le contexte.",
      },
    ],
  },
  {
    slug: "guepes-frelons-var",
    name: "Guepes, frelons et frelon asiatique",
    shortName: "Guepes et frelons",
    icon: "wasp",
    title: "Nid de guepes ou frelons dans le Var",
    description:
      "Orientation vers un professionnel partenaire pour nid de guepes, frelons europeens ou suspicion de frelon asiatique dans le Var.",
    hero:
      "Un nid proche d'une terrasse, d'un passage, d'une toiture ou d'un lieu recevant du public doit etre traite avec prudence. La demande aide a evaluer l'urgence, la hauteur et l'accessibilite.",
    risks: ["Allers-retours au meme point", "Nid sous toiture ou dans une haie", "Presence proche d'enfants, clients ou animaux"],
    contexts: ["Villas avec jardin", "Campings et restaurants", "Toitures, volets, cabanons et haies"],
    advice: [
      "Ne pas tenter de decrocher ou bruler un nid.",
      "Observer a distance l'emplacement et la hauteur approximative.",
      "Signaler les allergies connues ou l'exposition d'un public fragile.",
    ],
    faq: [
      {
        question: "Qui contacter pour un nid de frelon asiatique ?",
        answer:
          "Un professionnel equipe peut evaluer le type de nid, son acces et les precautions necessaires. Stop Nuisible Var transmet la demande a un partenaire adapte.",
      },
      {
        question: "Le nid est-il plus dangereux en ete ?",
        answer:
          "L'activite augmente souvent avec la saison. La dangerosite depend surtout de l'emplacement, des passages proches et du type d'insecte.",
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
      "Demande de rappel pour signes de termites, bois fragilise, charpente, plinthes creuses ou diagnostic xylophage dans le Var.",
    hero:
      "Dans le Var, les constructions anciennes, maisons avec jardin et zones boisees demandent une vigilance particuliere. L'enjeu est de faire examiner les signes sans detruire les indices utiles.",
    risks: ["Bois qui sonne creux", "Galeries ou cordonnets terreux", "Plinthes, huisseries ou charpente fragilisees"],
    contexts: ["Maisons anciennes", "Charpentes et combles", "Annexes, caves et pieces humides"],
    advice: [
      "Ne pas gratter largement les zones suspectes avant diagnostic.",
      "Photographier les elements visibles et preciser l'age du batiment.",
      "Verifier les obligations locales ou de vente avec un professionnel habilite si besoin.",
    ],
    faq: [
      {
        question: "Un traitement termites est-il toujours necessaire ?",
        answer:
          "Il faut d'abord confirmer la presence et l'etendue. Un professionnel peut distinguer termites, vrillettes, capricornes ou simple humidite.",
      },
      {
        question: "Le site etablit-il un diagnostic reglementaire ?",
        answer:
          "Non. Stop Nuisible Var transmet les demandes ; un diagnostiqueur ou professionnel qualifie doit etre sollicite pour les obligations formelles.",
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
      "Mise en relation pour invasion de moustique tigre, jardins, terrasses, piscines, campings et locations saisonnieres.",
    hero:
      "Le moustique tigre est tres present dans les zones habitees du Var. Les demandes concernent souvent des jardins, terrasses, piscines et hebergements ou le confort des occupants est prioritaire.",
    risks: ["Piqures en journee", "Petits moustiques noirs rayes", "Eaux stagnantes autour du logement"],
    contexts: ["Jardins et villas", "Locations et campings", "Terrasses, piscines et patios"],
    advice: [
      "Supprimer les eaux stagnantes reste le premier reflexe utile.",
      "Lister les zones humides : coupelles, regards, gouttieres, baches, jeux d'enfants.",
      "Pour un site touristique, preciser les periodes d'occupation et contraintes de discretion.",
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
          "Oui, beaucoup de demandes portent sur jardins, terrasses, piscines, campings ou locations saisonnieres.",
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
      "Demande de rappel pour nids de chenilles processionnaires, pins, jardins, coproprietes et espaces frequentes par enfants ou animaux.",
    hero:
      "Les pins du Var peuvent abriter des nids de chenilles processionnaires. Les poils urticants imposent une approche prudente, notamment pres des chiens, enfants et espaces collectifs.",
    risks: ["Nids blancs dans les pins", "Processions au sol", "Chiens ou enfants exposes dans un jardin"],
    contexts: ["Jardins avec pins", "Coproprietes et lotissements", "Ecoles, campings et espaces verts"],
    advice: [
      "Eloigner enfants et animaux des zones suspectes.",
      "Ne pas toucher les chenilles, nids ou branches contaminees.",
      "Preciser la hauteur des pins et l'accessibilite du terrain.",
    ],
    faq: [
      {
        question: "Les chenilles processionnaires sont-elles dangereuses pour les chiens ?",
        answer:
          "Oui, elles peuvent provoquer des reactions graves. En cas de contact suspect, il faut contacter rapidement un veterinaire.",
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
    name: "Pigeons, goelands et depigeonnage",
    shortName: "Depigeonnage",
    icon: "bird",
    title: "Depigeonnage dans le Var",
    description:
      "Mise en relation pour pigeons, goelands, fientes, balcons, toitures, enseignes, commerces et coproprietes dans le Var.",
    hero:
      "Sur le littoral comme en ville, pigeons et goelands peuvent salir les facades, bloquer des gouttieres et gener les occupants. La demande doit tenir compte du batiment, de l'acces et des contraintes de voisinage.",
    risks: ["Fientes recurrentes", "Nids sur balcon ou toiture", "Gouttieres, enseignes ou climatiseurs touches"],
    contexts: ["Immeubles et coproprietes", "Commerces de centre-ville", "Batiments proches du littoral"],
    advice: [
      "Ne pas obstruer un acces sans verifier la presence de nids actifs.",
      "Photographier les zones touchees depuis un endroit sur.",
      "Mentionner les contraintes de hauteur, nacelle, copropriete ou commerce ouvert.",
    ],
    faq: [
      {
        question: "Le depigeonnage est-il adapte aux goelands ?",
        answer:
          "Les solutions different selon l'espece et le site. Un professionnel doit tenir compte des regles applicables et de la periode.",
      },
      {
        question: "Une copropriete peut-elle faire une demande ?",
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
    zone: "Metropole toulonnaise",
    intro:
      "A Toulon, les demandes concernent souvent des appartements, immeubles anciens, restaurants, commerces et logements proches du port ou des axes tres denses.",
    buildingTypes: ["appartements", "immeubles", "restaurants", "locaux commerciaux", "coproprietes"],
    pests: ["punaises de lit", "rats et souris", "cafards", "pigeons"],
    neighbours: ["La Seyne-sur-Mer", "La Valette-du-Var", "Ollioules", "Le Pradet"],
    localAdvice: [
      "Preciser l'etage, la presence d'un local poubelle et l'eventuel role du syndic.",
      "Pour les commerces, indiquer les horaires de rappel et les contraintes d'ouverture.",
      "En logement collectif, signaler si d'autres occupants ont observe les memes signes.",
    ],
    angle: "densite urbaine, port, restauration et coproprietes",
  },
  {
    slug: "hyeres",
    name: "Hyeres",
    zone: "Littoral et iles d'Hyeres",
    intro:
      "A Hyeres, villas avec jardins, locations saisonnieres, campings et zones proches du littoral generent des demandes variees, notamment moustiques, guepes et punaises de lit.",
    buildingTypes: ["villas", "jardins", "locations saisonnieres", "campings", "residences"],
    pests: ["moustique tigre", "guepes et frelons", "punaises de lit", "chenilles processionnaires"],
    neighbours: ["La Londe-les-Maures", "Carqueiranne", "La Crau", "Le Pradet"],
    localAdvice: [
      "Lister les points d'eau exterieurs et la presence d'une piscine ou d'arrosage.",
      "Pour une location, indiquer la date d'arrivee des prochains occupants.",
      "Pour un nid en hauteur, decrire l'acces depuis le jardin ou la rue.",
    ],
    angle: "jardins mediterraneens, tourisme et confort exterieur",
  },
  {
    slug: "frejus",
    name: "Frejus",
    zone: "Est Var",
    intro:
      "Frejus combine residences principales, hebergements touristiques, campings et commerces. Les demandes arrivent souvent avant ou pendant une periode d'occupation.",
    buildingTypes: ["campings", "residences secondaires", "appartements", "hotels", "maisons"],
    pests: ["punaises de lit", "moustique tigre", "guepes", "cafards"],
    neighbours: ["Saint-Raphael", "Puget-sur-Argens", "Roquebrune-sur-Argens", "Le Muy"],
    localAdvice: [
      "Signaler si la demande concerne un sejour en cours ou une arrivee imminente.",
      "Pour punaises de lit, decrire les chambres et canapes exposes.",
      "Pour moustiques, mentionner les terrasses, espaces verts et sanitaires collectifs.",
    ],
    angle: "tourisme, campings, residences secondaires et delais courts",
  },
  {
    slug: "draguignan",
    name: "Draguignan",
    zone: "Centre Var",
    intro:
      "A Draguignan, les maisons, caves, combles, garages et batiments anciens expliquent de nombreuses demandes de deratisation, termites ou insectes xylophages.",
    buildingTypes: ["maisons", "caves", "combles", "garages", "batiments anciens"],
    pests: ["rats et souris", "termites", "guepes", "chenilles processionnaires"],
    neighbours: ["Trans-en-Provence", "Lorgues", "Le Muy", "Vidauban"],
    localAdvice: [
      "Decrire les bruits nocturnes, traces dans les combles et acces visibles.",
      "Pour le bois, eviter de retirer les elements suspects avant avis.",
      "Mentionner les dependances, restanques, caves ou zones peu visitees.",
    ],
    angle: "maisons, combles, caves, bois et nuisibles de jardin",
  },
  {
    slug: "saint-raphael",
    name: "Saint-Raphael",
    zone: "Littoral de l'Esterel",
    intro:
      "A Saint-Raphael, residences, hebergements touristiques, commerces du littoral et jardins exposent a des demandes ou discretion et rapidite de rappel comptent beaucoup.",
    buildingTypes: ["residences", "hotels", "locations", "commerces", "villas"],
    pests: ["punaises de lit", "moustique tigre", "guepes et frelons", "pigeons"],
    neighbours: ["Frejus", "Puget-sur-Argens", "Roquebrune-sur-Argens", "Sainte-Maxime"],
    localAdvice: [
      "Preciser si le logement est occupe par des vacanciers ou entre deux sejours.",
      "Pour depigeonnage, indiquer balcon, toiture, enseigne ou climatisation touchee.",
      "Pour guepes, decrire la proximite des terrasses et passages clients.",
    ],
    angle: "littoral, hebergement touristique, discretion et terrasses",
  },
  {
    slug: "la-seyne-sur-mer",
    name: "La Seyne-sur-Mer",
    zone: "Rade de Toulon",
    intro:
      "La Seyne-sur-Mer melange habitat collectif, maisons de quartier, activite portuaire et zones littorales. Les demandes portent souvent sur cafards, rongeurs, punaises de lit et pigeons.",
    buildingTypes: ["immeubles", "maisons", "commerces", "locaux techniques", "residences"],
    pests: ["cafards", "rats et souris", "punaises de lit", "depigeonnage"],
    neighbours: ["Toulon", "Six-Fours-les-Plages", "Ollioules", "Sanary-sur-Mer"],
    localAdvice: [
      "Indiquer si les signes viennent d'un local poubelle, d'une cave ou d'une colonne technique.",
      "Pour les punaises de lit, preciser chambre, canape et dernier deplacement.",
      "Pour un commerce, decrire les contraintes de discretions et d'horaires.",
    ],
    angle: "habitat collectif, rade, commerces et locaux techniques",
  },
  {
    slug: "brignoles",
    name: "Brignoles",
    zone: "Provence Verte",
    intro:
      "A Brignoles et en Provence Verte, les demandes viennent souvent de maisons, jardins, garages, combles et terrains arborés.",
    buildingTypes: ["maisons", "jardins", "garages", "combles", "locaux agricoles"],
    pests: ["chenilles processionnaires", "termites", "rats et souris", "guepes"],
    neighbours: ["Garéoult", "Flassans-sur-Issole", "Le Luc", "Saint-Maximin-la-Sainte-Baume"],
    localAdvice: ["Preciser la presence de pins.", "Decrire les dependances.", "Mentionner les animaux domestiques."],
    angle: "jardins, pins, maisons et dependances",
  },
  {
    slug: "saint-tropez",
    name: "Saint-Tropez",
    zone: "Golfe de Saint-Tropez",
    intro:
      "A Saint-Tropez, discretion, delai de rappel et contraintes de locations ou hotels sont souvent au coeur de la demande.",
    buildingTypes: ["villas", "hotels", "locations saisonnieres", "restaurants", "residences"],
    pests: ["punaises de lit", "guepes et frelons", "moustique tigre", "cafards"],
    neighbours: ["Sainte-Maxime", "Cogolin", "Ramatuelle", "Gassin"],
    localAdvice: ["Indiquer l'urgence d'occupation.", "Preciser les acces discrets.", "Mentionner les espaces exterieurs."],
    angle: "locations haut de gamme, hotels et discretion",
  },
  {
    slug: "six-fours-les-plages",
    name: "Six-Fours-les-Plages",
    zone: "Ouest toulonnais",
    intro: "Six-Fours-les-Plages combine habitat littoral, maisons avec jardins et residences de vacances.",
    buildingTypes: ["maisons", "residences", "campings", "commerces"],
    pests: ["moustique tigre", "guepes", "punaises de lit", "pigeons"],
    neighbours: ["La Seyne-sur-Mer", "Sanary-sur-Mer", "Ollioules"],
    localAdvice: ["Decrire terrasses et jardins.", "Signaler occupation saisonniere.", "Preciser hauteur du nid."],
    angle: "littoral, jardins et residences",
  },
  {
    slug: "la-garde",
    name: "La Garde",
    zone: "Aire toulonnaise",
    intro: "A La Garde, habitat residentiel, zones commerciales et coproprietes generent des besoins varies.",
    buildingTypes: ["coproprietes", "maisons", "commerces", "bureaux"],
    pests: ["cafards", "rats et souris", "guepes", "punaises de lit"],
    neighbours: ["Toulon", "La Valette-du-Var", "Le Pradet"],
    localAdvice: ["Mentionner les parties communes.", "Indiquer local poubelle.", "Preciser type d'activite commerciale."],
    angle: "coproprietes et zones commerciales",
  },
];

export const extensionCities = [
  "Bandol",
  "Saint-Cyr-sur-Mer",
  "Le Beausset",
  "Sollies-Pont",
  "Sollies-Ville",
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
  "Gareoult",
  "Gonfaron",
  "Le Luc",
  "Flassans-sur-Issole",
  "Fayence",
];

export const guides: Guide[] = [
  {
    slug: "prix-traitement-punaises-de-lit-var",
    title: "Prix d'un traitement contre les punaises de lit dans le Var",
    description: "Comprendre les elements qui influencent un devis punaises de lit dans le Var, sans promesse de prix fixe.",
    serviceSlug: "punaises-de-lit-var",
    published: "2026-06-13",
    sections: [
      {
        heading: "Pourquoi les prix varient autant",
        body:
          "Le cout depend surtout du nombre de pieces, du niveau de suspicion, de l'accessibilite, du type de logement et de la necessite de passages complementaires. Dans un appartement occupe a Toulon, la contrainte n'est pas la meme que dans une location saisonniere entre deux sejours a Frejus.",
      },
      {
        heading: "Ce qu'il faut decrire avant le rappel",
        body:
          "Indiquez les pieces touchees, les signes observes, la date des premieres piqures et le contexte : voyage, achat de mobilier, logement voisin ou arrivee de locataires. Plus la demande est precise, plus le professionnel partenaire peut orienter le devis.",
      },
      {
        heading: "Eviter les faux bons plans",
        body:
          "Un prix tres bas annonce sans diagnostic peut cacher une prestation incomplete. Le bon reflexe consiste a demander ce qui est inclus, les precautions avant passage et les conditions d'un eventuel suivi.",
      },
    ],
    faq: [
      { question: "Stop Nuisible Var affiche-t-il un tarif fixe ?", answer: "Non. Le site transmet la demande pour permettre un devis adapte au logement et a la situation." },
      { question: "Le devis est-il utile meme en cas de doute ?", answer: "Oui, une suspicion bien decrite permet deja d'etre oriente vers le bon interlocuteur." },
    ],
  },
  {
    slug: "reconnaitre-infestation-punaises-de-lit",
    title: "Comment reconnaitre une infestation de punaises de lit ?",
    description: "Signes utiles, erreurs a eviter et informations a transmettre pour une suspicion de punaises de lit.",
    serviceSlug: "punaises-de-lit-var",
    published: "2026-06-13",
    sections: [
      { heading: "Les signes a croiser", body: "Piqures groupees, taches noires sur la literie, traces pres des coutures et insectes visibles doivent etre observes ensemble. Une piqure isolee ne suffit pas a confirmer." },
      { heading: "Les lieux a regarder prudemment", body: "Matelas, sommier, tete de lit, canape et bagages sont les zones les plus parlees dans les demandes. Il faut regarder sans secouer les textiles dans tout le logement." },
      { heading: "Quand demander un avis", body: "Si les signes reviennent plusieurs nuits ou concernent un logement loue, une demande de rappel evite de perdre du temps avec des gestes disperses." },
    ],
    faq: [
      { question: "Faut-il jeter le matelas ?", answer: "Pas sans avis. Le deplacement d'un matelas peut propager le probleme." },
      { question: "Une photo aide-t-elle ?", answer: "Oui, si elle est prise sans manipulation risquee." },
    ],
  },
  {
    slug: "rats-souris-maison-signes-solutions",
    title: "Rats ou souris dans une maison : signes et solutions",
    description: "Bruits, traces, acces possibles et reflexes utiles avant une deratisation dans le Var.",
    serviceSlug: "deratisation-var",
    published: "2026-06-13",
    sections: [
      { heading: "Les indices les plus fiables", body: "Bruits nocturnes, crottes, traces grasses, emballages ronges et odeurs inhabituelles indiquent souvent une activite de rongeurs." },
      { heading: "Les acces frequents", body: "Vide sanitaire, toiture, canalisation, porte de garage, local poubelle ou vegetation proche peuvent faciliter les passages." },
      { heading: "Ce que la demande doit contenir", body: "Precisez la piece, la frequence, les acces suspectes, la presence d'enfants ou animaux et le type de batiment." },
    ],
    faq: [
      { question: "Les souris peuvent-elles passer dans les cloisons ?", answer: "Oui, elles utilisent souvent les vides, gaines et combles." },
      { question: "Peut-on attendre ?", answer: "Mieux vaut demander conseil rapidement lorsque les signes se repetent." },
    ],
  },
  {
    slug: "cafards-appartement-que-faire",
    title: "Cafards dans un appartement : que faire ?",
    description: "Comprendre l'origine possible des blattes en appartement et preparer une demande claire.",
    serviceSlug: "cafards-blattes-var",
    published: "2026-06-13",
    sections: [
      { heading: "Identifier le contexte", body: "Les blattes peuvent venir d'un logement, d'une gaine, d'un local poubelle ou de cartons. Le contexte collectif compte autant que l'appartement." },
      { heading: "Informer sans accuser", body: "En copropriete, il est utile de signaler calmement les observations au syndic si plusieurs logements ou parties communes semblent touches." },
      { heading: "Preparer le rappel", body: "Indiquez la piece, l'horaire d'apparition, la frequence et les actions deja tentees." },
    ],
    faq: [
      { question: "Une seule blatte est-elle grave ?", answer: "Pas toujours, mais une observation repetee doit etre prise au serieux." },
      { question: "Le voisinage compte-t-il ?", answer: "Oui, surtout en immeuble avec gaines techniques partagees." },
    ],
  },
  {
    slug: "nid-guepes-frelons-que-faire",
    title: "Nid de guepes ou de frelons : que faire et qui contacter ?",
    description: "Les bons reflexes face a un nid pres d'une maison, terrasse, toiture ou commerce.",
    serviceSlug: "guepes-frelons-var",
    published: "2026-06-13",
    sections: [
      { heading: "Garder ses distances", body: "Un nid ne doit pas etre secoue, brule ou bouche. Il faut limiter les passages a proximite et observer a distance." },
      { heading: "Decrire l'emplacement", body: "Haie, toiture, volet, cabanon, sol ou facade : l'emplacement et la hauteur conditionnent l'intervention possible." },
      { heading: "Evaluer l'urgence", body: "La proximite d'enfants, clients, animaux ou personnes allergiques rend la demande plus urgente." },
    ],
    faq: [
      { question: "Les pompiers interviennent-ils toujours ?", answer: "Non, cela depend des communes et situations. Une mise en relation professionnelle est souvent necessaire." },
      { question: "Dois-je approcher pour prendre une photo ?", answer: "Non si cela expose a une piqure. La securite prime." },
    ],
  },
  {
    slug: "termites-var-signes-risques-traitement",
    title: "Termites dans le Var : signes, risques et traitement",
    description: "Comprendre les signes de termites ou xylophages et organiser un avis professionnel.",
    serviceSlug: "termites-var",
    published: "2026-06-13",
    sections: [
      { heading: "Les signes a surveiller", body: "Bois creux, cordonnets terreux, plinthes fragiles et traces pres de zones humides peuvent justifier une demande." },
      { heading: "Ne pas detruire les indices", body: "Il vaut mieux photographier et limiter les manipulations afin de faciliter l'identification." },
      { heading: "Traitement ou diagnostic", body: "Selon le contexte, il peut falloir un avis technique, un diagnostic reglementaire ou un traitement par professionnel qualifie." },
    ],
    faq: [
      { question: "Le Var est-il concerne par les termites ?", answer: "Oui, certaines zones demandent une vigilance particuliere, surtout sur maisons anciennes ou bois humides." },
      { question: "Stop Nuisible Var realise-t-il le diagnostic ?", answer: "Non, la plateforme transmet la demande a un interlocuteur adapte." },
    ],
  },
];

export const globalPages = {
  "traitement-nuisibles-var": {
    title: "Traitement nuisibles Var : demande de rappel locale",
    description: "Hub local pour trouver une solution contre les nuisibles dans le Var : deratisation, desinsectisation, termites, moustiques, guepes et plus.",
    heading: "Traitement des nuisibles dans le Var",
  },
  "zones-intervention": {
    title: "Zones d'intervention nuisibles dans le Var",
    description: "Consultez les communes couvertes par Stop Nuisible Var pour transmettre votre demande a un partenaire local.",
    heading: "Couverture locale dans le Var",
  },
  "comment-ca-marche": {
    title: "Comment fonctionne Stop Nuisible Var",
    description: "Comprendre les trois etapes : description du probleme, qualification, transmission a un professionnel partenaire.",
    heading: "Comment ca marche",
  },
  partenaires: {
    title: "Partenaires anti-nuisibles dans le Var",
    description: "Critères de mise en relation et fonctionnement partenaire pour les demandes de traitement nuisibles dans le Var.",
    heading: "Professionnels partenaires et mise en relation",
  },
  confidentialite: {
    title: "Politique de confidentialite",
    description: "Donnees collectees, finalites, destinataires, duree de conservation et droits des personnes.",
    heading: "Politique de confidentialite",
  },
  "mentions-legales": {
    title: "Mentions legales",
    description: "Mentions legales du site Stop Nuisible Var, plateforme de demande de devis et de mise en relation.",
    heading: "Mentions legales",
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
    promise: "Rats, souris, bruits dans les combles ou traces dans un local : decrivez la situation et soyez oriente vers un partenaire adapte au secteur.",
  },
  "punaises-de-lit-var": {
    prefix: "traitement-punaises-de-lit",
    label: "Traitement punaises de lit",
    promise: "Piqures au reveil, traces sur literie ou doute apres un sejour : envoyez les signes observes pour obtenir un rappel qualifie.",
  },
  "cafards-blattes-var": {
    prefix: "cafards",
    label: "Traitement cafards",
    promise: "Blattes en cuisine, parties communes ou commerce alimentaire : precisez le lieu et l'urgence pour une mise en relation rapide.",
  },
  "guepes-frelons-var": {
    prefix: "guepes-frelons",
    label: "Nid de guepes ou frelons",
    promise: "Nid sous toiture, haie, volet ou terrasse : signalez l'emplacement sans prendre de risque et demandez un rappel.",
  },
};

export const localLandings: LocalLanding[] = priorityCities.slice(0, 6).flatMap((city) =>
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
      description: `${config.label} a ${city.name} : demande de rappel locale pour ${service?.shortName.toLowerCase() ?? "nuisibles"}, devis clair et transmission a une entreprise partenaire.`,
      promise: `${config.promise} A ${city.name}, les demandes concernent souvent ${city.buildingTypes.slice(0, 3).join(", ")}.`,
      reassurance: [
        "Demande courte et mobile-first",
        "Transmission uniquement avec consentement RGPD",
        "Pas de promesse impossible ni faux avis",
      ],
      faq: [
        {
          question: `Comment demander un devis a ${city.name} ?`,
          answer: "Remplissez le formulaire court avec le nuisible, la ville, l'urgence et votre telephone. Votre demande pourra etre transmise a une entreprise partenaire specialisee.",
        },
        {
          question: "Le rappel est-il une intervention garantie ?",
          answer: "Non. Stop Nuisible Var facilite la mise en relation. Le partenaire vous recontacte pour confirmer la situation, expliquer les options et proposer un devis si possible.",
        },
      ],
    };
  }),
);

export function getLocalLanding(slug: string) {
  return localLandings.find((landing) => landing.slug === slug);
}
