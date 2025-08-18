# Artist Site – Starter Plus (React + Next.js + GSAP + MDX)

Un squelette de site vitrine pour artistes, **sans CMS**, basé sur des fichiers de contenu (`/content`) :
- `artist.json`, `events.json`, `videos.json`, `news.mdx`

## 🚀 Démarrer
```bash
npm install
npm run dev
# puis ouvre http://localhost:3000
```

## 📁 Contenu
- `content/artist.json` – bio, citations presse, réseaux, contacts
- `content/events.json` – dates (ISO `YYYY-MM-DD`), autres lieux sans date
- `content/videos.json` – URLs YouTube (l’ID est extrait automatiquement)
- `content/news.mdx` – quelques actus au format MDX

## 🧱 Composants
- `Hero` – titre + baseline (GSAP)
- `About` – bio + quotes presse
- `VideoGrid` – grilles de vidéos YouTube responsives
- `EventList` – split **À venir / Passés / Autres** (+ tri date-fns)
- `NewsFeed` – rendu MDX (server, via `next-mdx-remote/rsc`)

## 🎛️ Personnalisation
- Styles globaux dans `app/styles/globals.css`
- Animations : voir `components/Hero.tsx` (exemples GSAP)

## 📦 Déploiement
- Recommandé : **Vercel**
- Build statique par défaut (App Router Next 14)

## 🛠️ Remarques
- Pas de base de données. Pour mettre à jour, modifie `/content/*` puis redéploie.
- Si tu veux plus d’autonomie pour l’artiste plus tard : branche un **Git-based CMS** (Decap/Netlify CMS), ou migre vers Builder/Sanity.
