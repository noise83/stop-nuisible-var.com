# AGENTS.md — Stop Nuisible Var

## Mission du projet
## Règle prioritaire pour Codex
## Mode strict — règle prioritaire

Quand une demande commence par “MODE STRICT”, cette demande est prioritaire sur les objectifs généraux du projet.

Dans ce mode :
- ne pas élargir le périmètre ;
- ne pas refaire tout le site ;
- ne pas modifier des fichiers non nécessaires ;
- ne pas reformuler les textes exacts demandés ;
- ne pas remplacer une consigne par une variante approximative ;
- ne pas toucher au backend sauf demande explicite ;
- vérifier que chaque point demandé est visible dans le rendu final.

Si le prompt dit “home uniquement”, modifier uniquement la page d’accueil et les styles nécessaires.

Avant commit :
- vérifier que les textes exacts demandés sont présents ;
- lancer npm run lint si disponible ;
- lancer npm run typecheck si disponible ;
- lancer npm run build si disponible.

Réponse finale obligatoire :
- fichiers modifiés ;
- commandes lancées ;
- résultat lint/typecheck/build ;
- URL vérifiée ;
- points non faits, s’il y en a.
Quand une tâche précise est donnée, elle passe avant les objectifs généraux du projet.

Ne pas élargir le périmètre.
Si la tâche dit “home uniquement”, modifier uniquement la home et les styles nécessaires.
Si la tâche donne des textes exacts, les reprendre exactement, sans reformulation.
Ne pas considérer la tâche terminée tant que tous les points demandés ne sont pas visibles dans le rendu.

Avant commit :
- vérifier que les textes exacts demandés sont présents
- lancer npm run lint si disponible
- lancer npm run typecheck si disponible
- lancer npm run build si disponible

Réponse finale obligatoire :
- fichiers modifiés
- commandes lancées
- résultat des tests/build
- URL vérifiée
- points non faits s’il y en a
Créer un site internet complet, moderne, rapide et très optimisé SEO pour l’URL : `https://stop-nuisible-var.com`.

Le site doit générer des prospects qualifiés dans le département du Var pour le traitement des nuisibles, puis permettre leur transmission par email à un acteur/intermédiaire qui gère les leads. Le site n’est pas une entreprise d’intervention directe : il doit se présenter clairement comme une plateforme locale de demande de rappel/devis et de mise en relation avec des professionnels partenaires.

Objectif business principal : capter des leads locaux qualifiés.
Objectif SEO principal : ranker sur les requêtes locales anti-nuisibles dans le Var.
Objectif UX principal : transformer rapidement un visiteur inquiet en demande de rappel/devis.

---

## Règles générales pour Codex

- Agir comme un lead developer senior, un intégrateur frontend, un expert SEO local et un product designer.
- Commencer par inspecter le dépôt existant. S’il est vide, créer le projet depuis zéro.
- Avant de coder, produire brièvement le plan technique choisi dans le terminal ou dans un fichier `IMPLEMENTATION_PLAN.md`.
- Si une décision n’est pas précisée, prendre la décision la plus simple, robuste, SEO-friendly et maintenable.
- Ne pas poser de questions bloquantes sauf si une information empêche totalement d’avancer.
- Ne pas utiliser de faux avis, fausses adresses, faux techniciens, fausses certifications ou fausses promesses.
- Ne jamais écrire que le site intervient directement si ce n’est pas vrai. Préférer : “nous transmettons votre demande à un professionnel partenaire qualifié”.
- Le contenu doit être en français naturel, local, utile, différent d’une page à l’autre et non reconnaissable comme du texte IA générique.
- Tout contenu doit pouvoir être publié sans lorem ipsum.
- Le site doit être responsive, rapide, accessible et prêt à être déployé.

---

## Stack technique recommandée

Utiliser une stack moderne, simple et SEO-friendly :

- Framework : Next.js avec App Router.
- Langage : TypeScript.
- Styling : Tailwind CSS.
- Contenu : données structurées en fichiers TypeScript/JSON/MDX selon ce qui est le plus maintenable.
- Formulaire : API route Next.js avec validation Zod.
- Email : prévoir une intégration via Resend, Nodemailer ou un provider équivalent, avec fallback propre en développement.
- Déploiement cible : Vercel ou tout hébergeur compatible Next.js.
- Analytics : prévoir des emplacements propres pour Google Analytics 4, Search Console, Pixel éventuel et tracking d’événements.
- SEO : génération automatique du sitemap, robots.txt, metadata, Open Graph, canonical, JSON-LD.

Dépendances :

- Garder les dépendances légères.
- Ne pas installer de librairie lourde inutile.
- Éviter les templates UI génériques qui donnent un rendu “site IA”.
- Si des composants prêts à l’emploi sont utilisés, les personnaliser fortement.

Scripts attendus :

- `pnpm dev` ou `npm run dev`
- `pnpm build` ou `npm run build`
- `pnpm lint` ou `npm run lint`
- `pnpm typecheck` si possible

Créer un `.env.example` documentant toutes les variables nécessaires.

---

## Positionnement éditorial

Nom du site : Stop Nuisible Var.
URL : `stop-nuisible-var.com`.

Promesse principale :

> Besoin d’un traitement contre les nuisibles dans le Var ? Décrivez votre problème en moins d’une minute et soyez recontacté par un professionnel partenaire adapté à votre secteur.

Ton :

- Professionnel, rassurant, clair et local.
- Pas de dramatisation excessive.
- Pas de jargon technique inutile.
- Pas de promesses impossibles comme “éradication garantie en 1h”.
- Mettre l’accent sur l’urgence, la confidentialité, la clarté du devis et la mise en relation rapide.

Le site doit expliquer qu’il aide les habitants, propriétaires, locataires, syndics, commerces, restaurants, hôtels, campings, conciergeries et collectivités à trouver une solution adaptée.

---

## Nuisibles prioritaires à couvrir

Créer l’architecture autour de ces 8 familles principales :

1. Punaises de lit
2. Dératisation : rats et souris
3. Cafards et blattes
4. Guêpes, frelons et frelon asiatique
5. Termites et insectes xylophages
6. Moustique tigre et démoustication
7. Chenilles processionnaires
8. Pigeons, goélands et dépigeonnage

Chaque famille doit avoir une page silo principale, des pages locales prioritaires et des contenus de soutien.

---

## Couverture géographique du Var

Le site doit couvrir l’ensemble du Var progressivement. Pour le MVP, créer la structure pour les villes principales et prévoir une génération maintenable des pages locales.

Villes prioritaires de lancement :

- Toulon
- La Seyne-sur-Mer
- Hyères
- Fréjus
- Draguignan
- Saint-Raphaël
- Six-Fours-les-Plages
- La Garde
- La Valette-du-Var
- Brignoles
- Saint-Maximin-la-Sainte-Baume
- Sanary-sur-Mer
- Ollioules
- La Crau
- Sainte-Maxime
- Cuers
- Le Pradet
- Le Muy
- Cogolin
- Saint-Tropez

Autres zones à prévoir dans les données pour extension :

- Bandol
- Saint-Cyr-sur-Mer
- Le Beausset
- Solliès-Pont
- Solliès-Ville
- Carqueiranne
- La Londe-les-Maures
- Bormes-les-Mimosas
- Le Lavandou
- Pierrefeu-du-Var
- Vidauban
- Roquebrune-sur-Argens
- Puget-sur-Argens
- Lorgues
- Trans-en-Provence
- Garéoult
- Gonfaron
- Le Luc
- Flassans-sur-Issole
- Fayence

Ne pas créer des pages locales copiées-collées. Chaque page ville doit contenir des éléments différents : contexte urbain/littoral/rural, nuisibles fréquents, communes voisines, types de bâtiments, conseils spécifiques et CTA adaptés.

---

## Architecture de pages demandée

Créer au minimum ces routes :

### Pages globales

- `/` : accueil très orientée conversion.
- `/traitement-nuisibles-var/` : page hub générale.
- `/demande-devis/` : formulaire principal.
- `/zones-intervention/` : couverture du Var.
- `/partenaires/` : explication de la mise en relation.
- `/comment-ca-marche/` : fonctionnement en 3 étapes.
- `/confidentialite/` : politique de confidentialité.
- `/mentions-legales/` : mentions légales.

### Silos nuisibles

- `/punaises-de-lit-var/`
- `/deratisation-var/`
- `/cafards-blattes-var/`
- `/guepes-frelons-var/`
- `/termites-var/`
- `/moustique-tigre-var/`
- `/chenilles-processionnaires-var/`
- `/depigeonnage-var/`

### Pages locales prioritaires

Créer des pages locales SEO pour les principales villes. Deux options acceptées :

Option A, recommandée pour démarrer :
- `/deratisation-toulon/`
- `/punaises-de-lit-toulon/`
- `/cafards-toulon/`
- `/guepes-frelons-toulon/`
- puis équivalents pour Hyères, Fréjus, Draguignan, Saint-Raphaël, La Seyne-sur-Mer.

Option B, si l’architecture est plus propre :
- `/villes/toulon/`
- `/villes/hyeres/`
- `/villes/frejus/`
- avec sections internes par nuisible.

Idéalement, prévoir une architecture scalable permettant ensuite de générer :
`/{nuisible}-{ville}/` ou `/nuisibles/{slug-nuisible}/{slug-ville}/`.

Si un doute existe, choisir l’architecture qui maximise la lisibilité SEO et la facilité de maillage interne.

---

## Exigences SEO on-page

Chaque page importante doit avoir :

- Un seul H1 clair.
- Des H2 utiles, pas des titres génériques.
- Une balise title unique.
- Une meta description unique orientée clic.
- Une URL courte, lisible et sans accent.
- Un contenu original, non dupliqué.
- Des liens internes vers la page silo, les pages voisines et le formulaire.
- Un bloc FAQ unique.
- Un CTA au-dessus de la ligne de flottaison.
- Un CTA final.
- Des données structurées adaptées.
- Un fil d’Ariane.
- Une canonical propre.

Longueur indicative :

- Accueil : 900 à 1 400 mots utiles.
- Page silo : 1 000 à 1 800 mots utiles.
- Page locale principale : 800 à 1 300 mots utiles.
- Article conseil : 700 à 1 200 mots utiles.

Important : ne pas remplir pour remplir. La priorité est l’utilité et la conversion.

---

## Règles de rédaction SEO

Pour chaque page, le texte doit être différent. Ne jamais changer seulement le nom de la ville.

Inclure naturellement des variantes sémantiques :

- traitement nuisibles Var
- entreprise anti nuisible Var
- désinsectisation Var
- dératisation Var
- exterminateur nuisibles Var, avec prudence car terme plus courant mais moins naturel en France
- intervention nuisibles
- demande de devis nuisibles
- professionnel anti nuisibles
- urgence nuisibles

Pour les pages locales, intégrer naturellement :

- le nom de la ville ;
- les communes proches ;
- le département du Var ;
- le type d’habitat local ;
- le type de demande le plus probable.

Exemples de différenciation :

- Toulon : appartements, commerces, restaurants, immeubles, port, forte densité urbaine.
- Hyères : villas, jardins, zones littorales, moustiques, guêpes/frelons, locations saisonnières.
- Fréjus / Saint-Raphaël : tourisme, résidences secondaires, campings, punaises de lit, moustiques, guêpes.
- Draguignan : maisons, caves, combles, rongeurs, termites, charpentes.
- Brignoles / Provence Verte : maisons, jardins, chenilles processionnaires, termites, rongeurs.
- Saint-Tropez / Sainte-Maxime / Cogolin : locations saisonnières, hôtels, résidences, discrétion, rapidité.

Ne pas donner de dosage de produits biocides, de procédure dangereuse ou de conseil risqué. Rester sur diagnostic, prévention, orientation vers des professionnels qualifiés.

---

## Design attendu

Créer un design moderne, crédible et distinctif. Le site ne doit pas ressembler à un design IA générique.

Direction artistique :

- Moderne, local, premium mais accessible.
- Ambiance Var / Méditerranée sans cliché touristique excessif.
- Couleurs possibles : bleu nuit, vert pin, sable clair, blanc cassé, accent orange/terracotta pour l’urgence.
- Typographie lisible, robuste, sérieuse.
- Layouts asymétriques subtils, cartes propres, espaces respirants.
- Éviter les grands dégradés violets/bleus trop IA.
- Éviter les illustrations 3D génériques.
- Éviter les photos stock trop parfaites.

Créer si nécessaire des visuels originaux :

- Icônes SVG personnalisées pour chaque nuisible.
- Illustration abstraite du Var ou carte simplifiée.
- Motifs de fond discrets inspirés du littoral, des pins, des toitures, des jardins.
- Petits pictogrammes utiles : urgence, devis, rappel, maison, restaurant, hôtel, copropriété.

Les images doivent être locales ou abstraites, pas mensongères. Ne pas générer de fausses photos de techniciens. Si une photo est nécessaire, utiliser un placeholder propre ou une illustration SVG locale.

---

## Expérience utilisateur et conversion

Le site doit être conçu pour convertir.

CTA principal :

> Décrire mon problème

CTA secondaires possibles :

- Recevoir un rappel
- Demander un devis gratuit
- Trouver un professionnel dans le Var
- Être recontacté rapidement

Le CTA doit apparaître :

- dans le hero ;
- après les symptômes ;
- dans une barre sticky mobile ;
- en fin de page ;
- sur les pages locales.

Formulaire principal :

Champs recommandés :

- Nom ou prénom
- Téléphone
- Email optionnel mais recommandé
- Commune
- Type de nuisible
- Type de lieu : maison, appartement, commerce, restaurant, hôtel/location, copropriété, jardin, autre
- Niveau d’urgence : aujourd’hui, cette semaine, simple renseignement
- Message libre
- Possibilité d’ajouter une photo si simple à implémenter
- Case de consentement RGPD non précochée

Texte de consentement :

> J’accepte que mes informations soient transmises à un professionnel ou partenaire spécialisé dans le traitement des nuisibles afin d’être recontacté au sujet de ma demande.

Après envoi :

- Message de confirmation clair.
- Ne pas promettre une intervention immédiate.
- Dire que la demande a été transmise ou enregistrée et qu’un partenaire pourra recontacter le demandeur.

Tracking conversion :

Prévoir des événements :

- `lead_form_view`
- `lead_form_submit`
- `cta_click`
- `nuisible_select`
- `city_page_view`

Même si GA4 n’est pas encore configuré, créer un helper prêt à brancher.

---

## Gestion des leads par email

Au démarrage, le site doit fonctionner simplement par email.

Créer une API route de formulaire qui :

- valide les champs ;
- bloque les soumissions spam évidentes ;
- applique un honeypot invisible ;
- peut inclure un simple rate limiting si possible ;
- envoie un email à une adresse configurée dans `.env` ;
- envoie éventuellement une copie interne à l’administrateur ;
- ne casse pas le site si l’envoi email n’est pas configuré en développement.

Variables d’environnement à prévoir :

- `LEADS_RECIPIENT_EMAIL`
- `ADMIN_EMAIL`
- `RESEND_API_KEY` ou équivalent
- `NEXT_PUBLIC_SITE_URL=https://stop-nuisible-var.com`
- `NEXT_PUBLIC_GA_ID` optionnel

Format de l’email de lead :

Sujet :

> Nouveau lead nuisibles Var — [Nuisible] — [Ville]

Corps :

- Date
- Nuisible
- Ville
- Nom/prénom
- Téléphone
- Email
- Type de lieu
- Urgence
- Message
- URL de la page d’origine
- Consentement RGPD : oui/non

Ne jamais transmettre un lead si le consentement obligatoire n’est pas coché.

---

## Pages de confiance obligatoires

Créer des pages ou sections claires pour éviter l’impression de site anonyme.

### Page “Comment ça marche”

Expliquer en 3 étapes :

1. Le visiteur décrit son problème.
2. La demande est qualifiée et transmise à un partenaire adapté.
3. Le professionnel recontacte le visiteur pour proposer une solution ou un devis.

### Page “Partenaires”

Expliquer que Stop Nuisible Var travaille avec ou a vocation à travailler avec des professionnels/intermédiaires spécialisés. Ne pas citer de partenaires réels si aucun accord n’est signé.

Critères affichables :

- zone d’intervention dans le Var ;
- capacité de rappel ;
- clarté du devis ;
- expérience sur le nuisible concerné ;
- assurance et conformité quand applicable.

### Mentions RGPD

Créer une politique de confidentialité simple et propre :

- données collectées ;
- finalité : traitement de la demande et mise en relation ;
- base légale : consentement ou demande précontractuelle selon la rédaction ;
- destinataires : administrateur du site et partenaires de mise en relation ;
- durée de conservation indicative ;
- droits des personnes ;
- contact.

Ne pas faire de conseil juridique définitif, mais produire une base propre à faire relire si nécessaire.

---

## Données structurées SEO

Implémenter les JSON-LD suivants lorsque pertinent :

- `Organization` pour le site.
- `WebSite` avec SearchAction si utile.
- `Service` pour les services nuisibles.
- `BreadcrumbList` sur toutes les pages profondes.
- `FAQPage` quand il y a une FAQ visible.
- `Article` pour les guides.

Important : ne pas utiliser `LocalBusiness` avec une fausse adresse. Si aucune adresse réelle n’existe, utiliser `Organization` ou `Service` sans inventer de localisation physique.

---

## Maillage interne

Prévoir un maillage interne solide :

- Accueil vers les 8 silos.
- Chaque silo vers les villes prioritaires liées.
- Chaque page ville vers les silos pertinents.
- Chaque article conseil vers un silo et une page devis.
- Bloc “À lire aussi” contextualisé.
- Breadcrumb sur toutes les pages.
- Footer avec liens vers silos, villes principales, confidentialité et mentions légales.

Exemples :

- Page “Punaises de lit Var” → pages Toulon, Hyères, Fréjus, Saint-Raphaël, guide prix, guide piqûres.
- Page “Dératisation Toulon” → dératisation Var, rats/souris, cafards Toulon si pertinent, demande de devis.
- Page “Moustique tigre Var” → Hyères, Fréjus, campings, jardins, piscine, démoustication.

---

## Contenus à créer dans le MVP

Créer du contenu suffisant pour un site publiable.

Minimum attendu :

- Accueil complète.
- Page hub “Traitement nuisibles Var”.
- 8 pages silos.
- Page “Zones d’intervention”.
- Page “Demande de devis”.
- Page “Comment ça marche”.
- Page “Partenaires”.
- Mentions légales.
- Politique de confidentialité.
- Au moins 6 pages locales très travaillées : Toulon, Hyères, Fréjus, Draguignan, Saint-Raphaël, La Seyne-sur-Mer.
- Au moins 6 guides SEO de soutien.

Guides SEO recommandés :

- Prix d’un traitement contre les punaises de lit dans le Var
- Comment reconnaître une infestation de punaises de lit ?
- Rats ou souris dans une maison : signes et solutions
- Cafards dans un appartement : que faire ?
- Nid de guêpes ou de frelons : que faire et qui contacter ?
- Termites dans le Var : signes, risques et traitement
- Moustique tigre dans le jardin : comment limiter l’invasion ?
- Chenilles processionnaires et chiens : risques et précautions

Si le temps est limité, privilégier la qualité des pages principales plutôt que la quantité.

---

## Composants UI à prévoir

Créer une base de composants réutilisables :

- Header responsive
- Footer complet
- Hero de conversion
- CTA band
- Formulaire lead
- ServiceCard
- CityCard
- FAQ accordion accessible
- Breadcrumb
- TrustBar
- ProcessSteps
- EmergencyPanel
- PriceRangeCard
- RelatedLinks
- StickyMobileCTA
- SEOJsonLd component

Les composants doivent être propres, typés et faciles à réutiliser.

---

## Performance et accessibilité

Objectifs :

- Site rapide sur mobile.
- Pas de JavaScript inutile.
- Images optimisées.
- Fonts optimisées.
- Contrastes corrects.
- Labels de formulaire accessibles.
- Navigation clavier correcte.
- Boutons avec états focus/hover.
- Pas de CLS important.
- Metadata Open Graph complète.

Utiliser `next/image` si des images bitmap sont utilisées. Pour les SVG décoratifs, les intégrer proprement.

---

## Sécurité et anti-spam

Pour le formulaire :

- Validation côté client et serveur.
- Honeypot invisible.
- Ne pas exposer les clés API côté client.
- Nettoyer les entrées utilisateur.
- Limiter les messages trop longs.
- Prévoir un message d’erreur propre.
- Ne pas afficher les détails techniques au visiteur.

---

## Ce qu’il ne faut pas faire

- Ne pas créer un design générique de landing page IA.
- Ne pas utiliser de faux témoignages.
- Ne pas inventer d’entreprise locale physique.
- Ne pas dire “nos techniciens interviennent” si le site transmet seulement des leads.
- Ne pas dupliquer les textes entre villes.
- Ne pas créer 100 pages pauvres juste pour couvrir des mots-clés.
- Ne pas utiliser des images d’insectes choquantes partout.
- Ne pas promettre un prix fixe sans devis.
- Ne pas donner d’instructions dangereuses de traitement chimique.
- Ne pas bloquer le build si le provider email n’est pas configuré en développement.

---

## Critères de fin de tâche

La tâche est terminée quand :

- Le site se lance localement.
- Le build production fonctionne.
- Le lint/typecheck passe ou les limites sont documentées.
- Les pages principales existent.
- Le formulaire fonctionne en mode développement et est prêt pour l’envoi email en production.
- Le sitemap et robots.txt existent.
- Les metadata sont uniques.
- Le design est responsive et moderne.
- Les textes sont publiables et différents.
- Les CTAs sont visibles et efficaces.
- Le README explique comment installer, configurer, lancer et déployer.
- Les variables `.env.example` sont présentes.
- Les choix techniques sont documentés.

---

## Première tâche à exécuter par Codex

1. Inspecter le dépôt.
2. Si aucun projet n’existe, créer une application Next.js TypeScript avec Tailwind CSS.
3. Mettre en place l’architecture, les composants, les données SEO, les pages principales et le formulaire.
4. Créer les contenus MVP en français pour Stop Nuisible Var.
5. Créer les visuels SVG originaux nécessaires.
6. Ajouter sitemap, robots, metadata, JSON-LD et README.
7. Lancer lint/build/typecheck.
8. Corriger les erreurs.
9. Fournir un résumé final des fichiers créés, des commandes exécutées et des prochaines améliorations recommandées.
