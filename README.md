# 🌟 PEPCI Web — Documentation du Projet

> **Plateforme web officielle de PEPCI (Premium Energies Partners Côte d’Ivoire)**  
> Conçue et développée en collaboration avec **ODACE Consulting**.

---

## 📋 Sommaire
1. [Contexte et Genèse du Projet](#-contexte-et-genèse-du-projet)
2. [Objectifs & Vision](#-objectifs--vision)
3. [Stack Technique](#-stack-technique)
4. [Guide de Démarrage Rapide (Comment lancer le projet)](#-guide-de-démarrage-rapide-comment-lancer-le-projet)
5. [Arborescence & Structure du Projet](#-arborescence--structure-du-projet)
6. [Fonctionnalités Implémentées (Front-Office)](#-fonctionnalités-implémentées-front-office)
7. [Feuille de Route & Prochaines Évolutions](#-feuille-de-route--prochaines-évolutions)
8. [Espace Back-Office (Processus de concertation)](#-espace-back-office-processus-de-concertation)
9. [Règles de Contribution & Maintien de ce Document](#-règles-de-contribution--maintien-de-ce-document)

---

## 📖 Contexte et Genèse du Projet

À la suite d'un incident technique sur l'ancienne infrastructure d'hébergement et des opérations de récupération d'urgence, environ **30 % des données historiques** ont pu être restaurées. 

Face à ce constat et en accord avec la direction (**ODACE Consulting** / Direction Générale) :
- **Acquisition d’un nouveau serveur VPS sur 3 ans** : Mise en place d’un environnement d’hébergement dédié, sécurisé et évolutif pour le site et ses services applicatifs.
- **Option retenue : Refonte globale du site** : Plutôt que de tenter de colmater un site incomplet, le choix s'est porté sur une refonte moderne, performante et adaptée aux besoins stratégiques actuels de PEPCI.
- Les données récupérées pertinentes sont réintégrées et enrichies au fil des ateliers de cadrage.

---

## 🎯 Objectifs & Vision

1. **Vitrine Institutionnelle & Commerciale Premium** : Valoriser l'image de marque de PEPCI en Côte d'Ivoire (Stations-service, BtoB, Lubrifiants, Gaz domestique).
2. **Expérience Utilisateur Mobile-First** : Navigation fluide, ergonomique et accessible sur tous les formats d'écrans.
3. **Transparence & Proximité** : Mettre en avant le réseau de stations (+30 stations), les engagements HSE (Hygiène, Sécurité, Environnement) et les actualités.
4. **Services Interactifs à Forte Valeur Ajoutée** :
   - Formulaires d'appels d'offres, candidatures et demandes de partenariat.
   - Recherche et localisation de stations.
   - Assistant conversationnel intelligent (IA) basé sur les données et services PEPCI.

---

## 🛠 Stack Technique

- **Framework Web** : [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **UI & Rendu** : [React 19](https://react.dev/), TypeScript
- **Styles** : CSS Vanilla moderne & utilitaires TailwindCSS
- **Gestionnaire de paquets** : [pnpm](https://pnpm.io/) (v12.x)
- **Hébergement cible** : Serveur VPS dédié (Infogérance & sauvegardes automatisées)

---

## 🚀 Guide de Démarrage Rapide (Comment lancer le projet)

### 1. Prérequis
- **Node.js** : Version 20+ ou 24+ recommandée (`node -v`)
- **pnpm** : Version 10+ ou 12+ (`pnpm -v`)

> 💡 **Note Windows (Résolution d'incident pnpm)** :  
> Si vous rencontrez l'erreur Windows `Une stratégie de contrôle d'application a bloqué ce fichier (spawnSync UNKNOWN)` lors du lancement de pnpm, exécutez une seule fois dans PowerShell :
> ```powershell
> Get-ChildItem -Path "C:\Users\$env:USERNAME\AppData\Roaming\npm" -Recurse | Unblock-File
> ```

---

### 2. Installation des dépendances

```bash
pnpm install
```

---

### 3. Lancer le serveur de développement

```bash
pnpm dev
```

L'application sera accessible sur :
- **Local** : [http://localhost:3000](http://localhost:3000)
- **Réseau local** : `http://<VOTRE_IP>:3000`

---

### 4. Commandes utiles

| Commande | Action |
| :--- | :--- |
| `pnpm dev` | Démarre le serveur local de développement avec rechargement à chaud (Turbopack). |
| `pnpm build` | Compile l'application pour la production. |
| `pnpm start` | Lance le serveur Next.js en mode production après un build. |

---

## 📁 Arborescence & Structure du Projet

```text
site-web-pepci/
├── app/
│   ├── layout.tsx           # Layout racine HTML, polices et métadonnées
│   ├── page.tsx             # Page d'accueil principale (Hero, Services, Carte, Actus)
│   ├── globals.css          # Thème global, variables et styles de base
│   ├── enterprise-page.tsx  # Page détaillée de présentation de l'entreprise PEPCI
│   ├── enterprise.css       # Styles associés à la page entreprise
│   ├── article-page.tsx     # Page détaillée de lecture d'un article / communiqué
│   └── article.css          # Styles associés aux articles
├── components/
│   └── ui/                  # Composants graphiques réutilisables (Boutons, Cards, etc.)
├── public/                  # Assets statiques (logos, images locales, icônes)
├── package.json             # Dépendances et scripts NPM
├── README.md                # Documentation de référence du projet (ce fichier)
└── next.config.mjs          # Configuration Next.js
```

---

## ✨ Fonctionnalités Implémentées (Front-Office)

- [x] **En-tête & Navigation responsive** : Menu dynamique avec burger menu mobile.
- [x] **Bannière d'accueil (Hero Carrousel Dynamique)** :
  - Intégration des photographies réelles de terrain PEPCI ajoutées dans `public/` (`480566325_...jpg` et `481080979_...jpg`).
  - Carrousel interactif avec rotation automatique (6s), boutons de navigation précédent/suivant et indicateurs cliquables.
  - Messages et boutons d'appel à l'action contextuels selon la slide affichée.
- [x] **Mot du Directeur Général** : Prise de parole institutionnelle sur la vision d'avenir et les priorités de PEPCI.
- [x] **Vitrine des Produits & Services** :
  - Stations-service
  - Offre Consommateurs / BtoB
  - Lubrifiants haute performance
  - Gaz domestique
  - Moyens de paiement & cartes carburant
- [x] **Section Engagements & Chiffres clés** : Mise en valeur du réseau (+30 stations en Côte d'Ivoire) et charte HSE.
- [x] **Carte interactive de proximité** : Visualisation du maillage territorial ivoirien.
- [x] **Section Actualités & Communiqués** : Filtres par thématique (Hydrocarbures, Actualité, Engagement).
- [x] **Pied de page institutionnel** : Liens d'accès rapide, mentions légales et réseaux sociaux.
- [x] **Pages dédiées intégrées** :
  - Vue détaillée *Notre Entreprise* (`enterprise-page.tsx`)
  - Vue de lecture d'article (`article-page.tsx`)

---

## 🧭 Feuille de Route & Prochaines Évolutions

- [ ] **Formulaires interactifs** :
  - Formulaire de contact général
  - Demande de devis BtoB & approvisionnement pro
  - Dépôt de candidatures spontanées & réponses aux offres d'emploi
  - Demande de carte carburant / moyen de paiement
- [ ] **Localisateur avancé de stations** : Recherche par commune, itinéraire et services disponibles (lavage, boutique, gaz).
- [ ] **Assistant conversationnel IA** : Chatbot intelligent entraîné sur la FAQ et les offres PEPCI pour assister les visiteurs 24/7.
- [ ] **SEO & Performance** : Optimisation des balises OpenGraph, métadonnées sitemap et temps de chargement des visuels.

---

## 🔒 Espace Back-Office (Processus de concertation)

> ⚠️ **Règle fondamentale** :  
> Le développement et l'architecture du **Back-Office** feront l'objet d'une **discussion et d'une validation préalables** entre l'équipe technique et la direction avant toute implémentation de code.

### Points à aborder lors de la phase de cadrage :
1. **Besoins métiers & Utilisateurs** :
   - Qui administrera la plateforme ? (Service communication, service commercial, RH).
   - Quels rôles et permissions sont nécessaires ? (Admin global, rédacteur actualités, gestionnaire de candidatures).
2. **Contenus à piloter** :
   - Gestion des articles d'actualité et communiqués.
   - Gestion de l'annuaire des stations-service (adresses, horaires, services).
   - Réception et traitement des formulaires (leads BtoB, recrutements).
3. **Choix d'architecture technique** :
   - Option A : CMS Headless (Strapi, Payload CMS, etc.)
   - Option B : Espace d'administration sur-mesure intégré Next.js avec base de données (PostgreSQL / Supabase / Prisma)
   - Option C : Solution CMS hébergée avec API.
4. **Sécurité & Sauvegardes** :
   - Authentification 2FA / SSO
   - Politique de sauvegarde automatique sur le nouveau VPS.

---

## 📝 Règles de Contribution & Maintien de ce Document

Ce fichier `README.md` est un **document vivant**.  
À chaque nouvelle fonctionnalité, modification d'architecture ou décision validée :
1. Mettre à jour la section correspondante.
2. Cocher les éléments réalisés dans la feuille de route.
3. Consigner les nouvelles décisions techniques.
