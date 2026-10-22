# Agent IA Agri-Bénin

Agent de **formation et sensibilisation** agricole au Bénin.

## Fonctionnalités

- **Veille journalière** (tous les matins à 7h UTC via Vercel Cron)
- Analyse des tendances mondiales et béninoises
- Décision spontanee de sujets pertinents
- Production d'analyses / rapports
- Rédaction de posts Facebook (ton mixte, public mixte) — à copier-coller manuellement
- Interface de chat + dashboard

## Stack

- Next.js 15 (App Router)
- Vercel AI SDK + **Google Gemini**
- Vercel Cron Jobs
- Tailwind CSS

## Clé API Gemini

1. Va sur [Google AI Studio](https://aistudio.google.com/apikey)
2. Crée une clé API
3. Ajoute-la dans Vercel : `GOOGLE_GENERATIVE_AI_API_KEY`

## Démarrage local

```bash
npm install
cp .env.example .env.local
# Ajoute ta GOOGLE_GENERATIVE_AI_API_KEY
npm run dev
```

## Déploiement Vercel

1. Importe le repo `kingkoffi/agent-agri-benin`
2. Variables d'environnement :
   - `GOOGLE_GENERATIVE_AI_API_KEY`
   - `CRON_SECRET` (optionnel mais recommandé)
3. Déploie

La veille tourne automatiquement tous les jours à 7h UTC.
