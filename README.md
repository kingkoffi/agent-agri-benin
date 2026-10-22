# Agent IA Agri-Bénin

Agent de **formation et sensibilisation** agricole au Bénin.

## Fonctionnalités

- **Veille journalière** (tous les matins à 7h UTC via Vercel Cron)
- Analyse des tendances mondiales et béninoises
- Décision spontanee de sujets pertinents
- Production d'analyses / rapports
- Rédaction de posts Facebook (ton mixte, public mixte)
- Interface de chat + dashboard

## Stack

- Next.js 15 (App Router)
- Vercel AI SDK
- Vercel Cron Jobs
- Tailwind CSS

## Démarrage local

```bash
npm install
cp .env.example .env.local
# Ajoute ta OPENAI_API_KEY
npm run dev
```

## Création de la page Facebook

1. Va sur [facebook.com/pages/create](https://www.facebook.com/pages/create)
2. Choisis **Entreprise ou marque**
3. Nom suggéré : **Agri-Bénin Sensibilisation** ou **AgriVeille Bénin**
4. Catégorie : Agriculture / Formation / Organisation à but non lucratif
5. Une fois créée, note l'ID de la page et génère un **Page Access Token** (via Meta for Developers)

## Déploiement

Connecte le repo à Vercel et ajoute les variables d'environnement.
