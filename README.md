# Agent IA Agri-Bénin

Agent de **formation et sensibilisation** orienté **innovation technique moderne** et transformation agricole au Bénin, propulsé par **Grok (xAI)**.

Aligné sur le skill [agriculture-benin](https://github.com/kingkoffi/skill-agriculture-benin).

## Fonctionnalités

- **Veille journalière** (tous les matins à 7h UTC via Vercel Cron)
- Focus fort sur les innovations techniques et organisationnelles
- Analyse d'applicabilité au contexte béninois + estimation des retombées (revenus, genre, pénibilité, résilience)
- Rotation ouverte des thèmes (interdiction de rester trop longtemps sur les cultures classiques)
- Production d'analyses / rapports courts
- Rédaction de posts Facebook (ton pédagogique + concret) — à copier-coller manuellement
- Interface de chat + dashboard

## Stack

- Next.js 15 (App Router)
- Vercel AI SDK + **Grok (xAI)**
- Vercel Cron Jobs
- Tailwind CSS

## Clé API Grok

1. Va sur [console.x.ai](https://console.x.ai)
2. Crée un compte / connecte-toi
3. Génère une clé API
4. Ajoute-la dans Vercel : `XAI_API_KEY`

## Démarrage local

```bash
npm install
cp .env.example .env.local
# Ajoute ta XAI_API_KEY
npm run dev
```

## Déploiement Vercel

1. Importe le repo `kingkoffi/agent-agri-benin`
2. Variables d'environnement :
   - `XAI_API_KEY`
   - `CRON_SECRET` (optionnel mais recommandé)
3. Déploie

La veille tourne automatiquement tous les jours à 7h UTC.
