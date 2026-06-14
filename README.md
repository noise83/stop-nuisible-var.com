# Stop Nuisible Var

Site Next.js SEO local pour `stop-nuisible-var.com`.

Le site capte des demandes de rappel/devis dans le Var et les transmet a un professionnel ou partenaire specialise. Il ne se presente pas comme une entreprise d'intervention directe.

## Ce que contient le projet

- Next.js avec App Router, TypeScript et Tailwind CSS.
- Pages SEO locales, silos nuisibles, guides, sitemap et robots.txt.
- Formulaire de lead avec validation, consentement RGPD, honeypot et email via Resend.
- Fallback de developpement : si Resend n'est pas configure, le formulaire ne bloque pas et un log serveur indique que l'email n'a pas ete envoye.

## Variables d'environnement

Ces variables sont listees dans `.env.example` et doivent etre ajoutees dans Vercel :

- `NEXT_PUBLIC_SITE_URL` : `https://stop-nuisible-var.com`
- `NEXT_PUBLIC_GA_ID` : identifiant GA4, optionnel au debut.
- `LEADS_RECIPIENT_EMAIL` : adresse qui recoit les demandes.
- `ADMIN_EMAIL` : adresse de copie interne, optionnelle.
- `RESEND_API_KEY` : cle API Resend pour envoyer les emails.
- `LEADS_FROM_EMAIL` : expediteur valide, par exemple `Stop Nuisible Var <leads@stop-nuisible-var.com>`.

Sans `RESEND_API_KEY` ou sans `LEADS_RECIPIENT_EMAIL`, le build fonctionne quand meme. Le formulaire peut afficher un succes, mais aucun email reel ne sera envoye. Les logs serveur afficheront `[lead:dev] Email non envoye...`.

## Mise en ligne sans terminal

### 1. Envoyer le projet sur GitHub

1. Ouvrir [github.com](https://github.com).
2. Creer un nouveau depot, par exemple `stop-nuisible-var.com`.
3. Garder le depot en prive si le site n'est pas encore pret publiquement.
4. Depuis GitHub Desktop ou l'interface GitHub, ajouter tous les fichiers du dossier projet.
5. Verifier que `.env.local`, `.env` et `node_modules` ne sont pas envoyes. Le fichier `.gitignore` les exclut.
6. Valider les fichiers avec un message simple, par exemple `Initial site`.
7. Publier ou synchroniser le depot sur GitHub.

### 2. Connecter le projet a Vercel

1. Ouvrir [vercel.com](https://vercel.com).
2. Se connecter avec le compte GitHub.
3. Cliquer sur `Add New...`, puis `Project`.
4. Choisir le depot `stop-nuisible-var.com`.
5. Laisser Vercel detecter Next.js automatiquement.
6. Garder les reglages par defaut :
   - Framework Preset : Next.js.
   - Build Command : `npm run build`.
   - Install Command : `npm install`.
   - Output Directory : laisser vide.
7. Ne pas lancer le deploiement final avant d'avoir ajoute les variables ci-dessous si vous voulez tester le formulaire email tout de suite.

### 3. Ajouter les variables d'environnement dans Vercel

1. Dans le projet Vercel, ouvrir `Settings`.
2. Aller dans `Environment Variables`.
3. Ajouter les variables une par une :
   - `NEXT_PUBLIC_SITE_URL` avec `https://stop-nuisible-var.com`
   - `NEXT_PUBLIC_GA_ID` si vous avez deja Google Analytics, sinon laisser vide ou ne pas l'ajouter.
   - `LEADS_RECIPIENT_EMAIL` avec votre adresse de reception.
   - `ADMIN_EMAIL` avec votre adresse de copie, si utile.
   - `RESEND_API_KEY` avec la cle fournie par Resend.
   - `LEADS_FROM_EMAIL` avec un expediteur valide.
4. Appliquer les variables aux environnements `Production`, `Preview` et `Development` si Vercel le propose.
5. Enregistrer.

### 4. Deployer sur Vercel

1. Revenir sur l'onglet `Deployments`.
2. Lancer ou relancer un deploiement.
3. Attendre que Vercel affiche un statut `Ready`.
4. Ouvrir l'URL temporaire fournie par Vercel pour verifier le site.

### 5. Ajouter le domaine `stop-nuisible-var.com`

1. Dans Vercel, ouvrir le projet.
2. Aller dans `Settings`, puis `Domains`.
3. Ajouter `stop-nuisible-var.com`.
4. Ajouter aussi `www.stop-nuisible-var.com` si vous voulez que le `www` fonctionne.
5. Suivre les instructions DNS affichees par Vercel chez votre registrar.
6. Attendre la validation DNS. Cela peut prendre quelques minutes, parfois plus.
7. Verifier que Vercel indique le domaine comme valide.

### 6. Tester apres deploiement

Ouvrir ces pages :

- `https://stop-nuisible-var.com/`
- `https://stop-nuisible-var.com/demande-devis/`
- `https://stop-nuisible-var.com/traitement-nuisibles-var/`
- `https://stop-nuisible-var.com/sitemap.xml`
- `https://stop-nuisible-var.com/robots.txt`

Tester le formulaire :

1. Aller sur `/demande-devis/`.
2. Remplir les champs obligatoires.
3. Cocher le consentement RGPD.
4. Envoyer la demande.
5. Verifier le message de confirmation.
6. Verifier que l'email arrive sur `LEADS_RECIPIENT_EMAIL`.
7. Si aucun email n'arrive, ouvrir les logs du deploiement Vercel et chercher `[lead:dev]` ou une erreur Resend.

## Commandes utiles, seulement si vous utilisez un terminal plus tard

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm run build
```

## Structure technique

- `src/app` : pages, API de formulaire, sitemap et robots.
- `src/components` : composants d'interface.
- `src/data/site.ts` : contenus SEO, services, villes et guides.
- `src/lib` : validation, email, tracking et JSON-LD.
- `.env.example` : modele des variables d'environnement.
- `.gitignore` : fichiers a ne pas envoyer sur GitHub.

## Points a completer avant lancement officiel

- Completer les mentions legales avec les informations reelles de l'editeur.
- Configurer Resend et verifier l'expediteur `LEADS_FROM_EMAIL`.
- Ajouter Google Analytics si souhaite.
- Faire un test complet du formulaire apres deploiement.
