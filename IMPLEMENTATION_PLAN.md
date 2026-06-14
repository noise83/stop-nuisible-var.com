# Plan d'implementation - Stop Nuisible Var

## Choix technique

- Application Next.js App Router en TypeScript, avec Tailwind CSS et contenus pilotes dans des fichiers TypeScript.
- Pages SEO majoritairement statiques pour la performance : accueil, hub, silos nuisibles, zones, confiance, mentions, confidentialite, villes et guides.
- Formulaire de lead sur `/demande-devis/` avec composant client, validation serveur via Zod, honeypot, rate limiting memoire et envoi email Resend charge paresseusement.
- JSON-LD par page : Organization, WebSite, Service, BreadcrumbList, FAQPage et Article selon le contexte.
- Architecture extensible : nouvelles villes, services et guides ajoutables dans `src/data/site.ts`.

## Design

- Direction premium locale : bleu nuit, vert pin, blanc casse, sable clair et accent terracotta.
- Visuels SVG originaux : carte abstraite du Var, pictogrammes nuisibles et motifs discrets.
- CTA visibles dans les zones hautes, les blocs de contenu, le footer et la barre mobile sticky.

## Verification prevue

- Lancer `npm run lint`, `npm run typecheck` et `npm run build` si Node/npm sont disponibles.
- Si l'environnement local ne fournit pas de package manager, documenter clairement la limite et verifier les fichiers par inspection statique.
