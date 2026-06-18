# AGENTS.md — Stop Nuisible Var

## Projet

Site : https://stop-nuisible-var.com
Stack actuelle : Next.js App Router, TypeScript, Tailwind CSS, Vercel.
Objectif business : générer des leads qualifiés pour les demandes nuisibles dans le Var.
Objectif SEO : progresser sur les requêtes locales à intention forte, surtout “ville + nuisible”.

Stop Nuisible Var est une plateforme locale de mise en relation. Le site ne doit jamais se présenter comme une entreprise d’intervention directe.

Formulations autorisées :
- “votre demande peut être transmise à un professionnel partenaire”
- “selon votre commune, le nuisible concerné et les disponibilités”
- “demande gratuite et sans engagement”

Formulations interdites :
- “nous intervenons”
- “nos techniciens interviennent”
- “intervention garantie”
- “diagnostic certain”
- “identification garantie”
- faux avis, fausse adresse, faux partenaire, fausse certification

---

## Priorité des instructions

Quand une tâche utilisateur est précise, elle passe avant les objectifs généraux de ce fichier.

Ne jamais élargir le périmètre sans demande explicite.
Si la tâche dit “home uniquement”, modifier uniquement la home et les styles nécessaires.
Si la tâche donne des textes exacts, les reprendre exactement, sans reformulation.
Ne pas considérer une tâche terminée tant que les critères de validation demandés ne sont pas tous vérifiés.

---

## MODE STRICT

Quand une demande commence par “MODE STRICT”, appliquer ces règles en priorité :

- ne pas élargir le périmètre ;
- ne pas refaire tout le site ;
- ne pas modifier des fichiers non nécessaires ;
- ne pas toucher au backend sauf demande explicite ;
- ne pas créer de nouveau système si l’existant peut être amélioré ;
- ne pas reformuler les textes exacts demandés ;
- vérifier que chaque point demandé est visible dans le rendu final.

Avant commit :
- vérifier les fichiers réellement modifiés ;
- lancer `npm run lint` si disponible ;
- lancer `npm run typecheck` si disponible ;
- lancer `npm run build` si disponible ;
- corriger les erreurs dans le scope demandé ;
- ne pas corriger hors scope sauf si la tâche l’exige.

Réponse finale obligatoire :
- fichiers modifiés ;
- commandes lancées ;
- résultat lint/typecheck/build ;
- URL Vercel ou production vérifiée ;
- points non faits, s’il y en a.

---

## MODE SEO LOCAL

Quand une demande commence par “MODE SEO LOCAL”, appliquer ces règles en priorité.

Objectif : créer ou modifier des pages SEO locales utiles pour des recherches “ville + nuisible”, sans générer de pages passerelles ou de contenu dupliqué.

### Architecture URL

Pour les pages commerciales “ville + nuisible”, utiliser des URLs courtes à plat :

- `/deratisation-toulon/`
- `/cafards-toulon/`
- `/punaises-de-lit-toulon/`
- `/guepes-frelons-toulon/`
- `/punaises-de-lit-frejus/`

Ne pas créer d’architecture imbriquée `/villes/ville/service/` sauf demande explicite.

### Structure SEO du site

Pages mères services :
- `/deratisation-var/`
- `/cafards-blattes-var/`
- `/punaises-de-lit-var/`
- `/guepes-frelons-var/`
- `/termites-var/`
- `/moustique-tigre-var/`
- `/chenilles-processionnaires-var/`
- `/depigeonnage-var/`

Pages villes :
- `/villes/toulon/`
- `/villes/hyeres/`
- `/villes/frejus/`
- etc.

Pages locales commerciales :
- une seule combinaison ville + nuisible par page ;
- contenu unique ;
- angle local réel ;
- pas de duplication en changeant seulement la ville.

### Contenu obligatoire pour une page ville + nuisible

Chaque page doit inclure :
- un H1 unique ;
- un title unique ;
- une meta description unique ;
- un contexte local concret ;
- les lieux concernés ;
- les signes observés ;
- les informations utiles avant rappel ;
- une FAQ spécifique ;
- un CTA formulaire ;
- un CTA téléphone ;
- un fil d’Ariane ;
- une canonical propre ;
- JSON-LD Breadcrumb + Service + FAQ si FAQ visible.

### Maillage interne obligatoire

Depuis une page service, lier uniquement vers les pages “ville + nuisible” existantes du même service.
Exemple :
- `/deratisation-var/` → `/deratisation-toulon/`
- `/deratisation-var/` → `/deratisation-la-seyne-sur-mer/`

Depuis une page ville, lier uniquement vers les pages “ville + nuisible” existantes de cette ville.
Exemple :
- `/villes/toulon/` → `/deratisation-toulon/`
- `/villes/toulon/` → `/cafards-toulon/`
- `/villes/toulon/` → `/punaises-de-lit-toulon/`

Depuis une page ville + nuisible, lier vers :
- la page service parent ;
- la page ville parent ;
- le formulaire ;
- une ou deux pages locales proches seulement si elles existent et sont pertinentes.

Ne jamais ajouter de lien 404.

### Limite de production SEO

Ne pas créer 50 ou 100 pages d’un coup.
Créer d’abord une petite vague test, puis étendre après validation.

Vague test recommandée :
- `/deratisation-toulon/`
- `/cafards-toulon/`
- `/punaises-de-lit-toulon/`

Vague 1 possible après validation :
- `/guepes-frelons-toulon/`
- `/punaises-de-lit-hyeres/`
- `/deratisation-la-seyne-sur-mer/`
- `/cafards-la-seyne-sur-mer/`
- `/punaises-de-lit-frejus/`
- `/guepes-frelons-saint-raphael/`
- `/termites-draguignan/`

---

## Rédaction SEO locale

Le texte doit être en français naturel, utile et publiable.
Ne pas produire de contenu IA générique.
Ne pas dupliquer les textes entre villes.
Ne pas remplir pour remplir.

Différencier les villes :
- Toulon : appartements, commerces, restaurants, immeubles, port, densité urbaine.
- La Seyne-sur-Mer : copropriétés, habitat collectif, commerces, logements proches du littoral.
- Hyères : villas, jardins, zones littorales, locations saisonnières, moustiques, guêpes/frelons.
- Fréjus / Saint-Raphaël : tourisme, résidences secondaires, campings, punaises de lit, guêpes/frelons.
- Draguignan : maisons, caves, combles, rongeurs, termites, charpentes.
- Brignoles / Provence Verte : maisons, jardins, chenilles processionnaires, termites, rongeurs.
- Saint-Tropez / Sainte-Maxime / Cogolin : locations saisonnières, hôtels, résidences, discrétion.

Ne pas donner de dosage de produits biocides, procédure dangereuse ou conseil chimique risqué.
Rester sur les signes, la prévention simple, la qualification de la demande et l’orientation vers un professionnel.

---

## Design

Style attendu : professionnel, sobre, local, rassurant, propre.
Le site ne doit pas ressembler à une landing page IA générique.

Palette principale :
- vert profond : `#1F4D3A`
- beige clair : `#F6F1E8`
- orange CTA : `#E86A33`
- texte anthracite : `#1F2933`
- jaune discret : `#F2C94C`

Règles :
- contraste lisible ;
- boutons foncés ou orange avec texte blanc ;
- cartes propres ;
- espacements généreux ;
- responsive mobile prioritaire ;
- CTA visibles ;
- pas de fausses photos de techniciens ;
- pas de visuels mensongers.

---

## Formulaire et photo

Le formulaire principal est la conversion prioritaire.
Ne jamais casser l’envoi existant.
Ne pas créer de formulaire parallèle sans demande explicite.

Champ photo :
- facultatif ;
- uniquement JPG, JPEG, PNG, WEBP ;
- taille max 4 Mo ;
- validation front et serveur ;
- pas de promesse d’identification certaine.

Mention photo obligatoire si le champ photo est visible :
“Évitez d’envoyer une photo contenant un visage, une personne, un document personnel ou tout élément permettant de vous identifier inutilement.”

Mention analyse obligatoire si identification ou pré-identification évoquée :
“L’analyse reste indicative et ne remplace pas l’avis d’un professionnel.”

---

## SEO technique

À respecter :
- un seul H1 par page ;
- H2 utiles ;
- title unique ;
- meta description unique ;
- canonical propre ;
- sitemap à jour ;
- robots propre ;
- JSON-LD pertinent ;
- aucun lien 404 ajouté ;
- pas de page pauvre ou quasi dupliquée.

Ne pas utiliser `LocalBusiness` avec une fausse adresse.
Utiliser plutôt `Organization`, `WebSite`, `Service`, `BreadcrumbList`, `FAQPage` et `Article` selon le contexte.

---

## Git, Vercel et validation

Pour chaque tâche :
- travailler sur les fichiers nécessaires uniquement ;
- commit propre avec message clair ;
- push GitHub ;
- vérifier Vercel si disponible ;
- donner l’URL vérifiée.

Avant de terminer, lancer autant que possible :
- `npm run lint`
- `npm run typecheck`
- `npm run build`

Si une commande échoue :
- corriger si c’est dans le scope ;
- sinon signaler clairement que l’erreur est hors scope.

---

## Interdictions permanentes

- Ne pas inventer de partenaire réel.
- Ne pas inventer d’adresse physique.
- Ne pas inventer d’avis client.
- Ne pas promettre une intervention directe.
- Ne pas promettre une urgence garantie.
- Ne pas créer de pages SEO en masse sans valeur locale.
- Ne pas ajouter de liens vers des pages inexistantes.
- Ne pas casser le formulaire ou les routes existantes.
- Ne pas modifier les variables d’environnement sans demande explicite.
