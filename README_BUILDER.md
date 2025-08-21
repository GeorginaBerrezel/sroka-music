
# Builder.io — Backoffice Évènements (Concerts)

Ce dépôt a été enrichi pour **brancher un backoffice via Builder.io** permettant d'ajouter/modifier des concerts à venir.

## Ce qui a été ajouté

- **Modèle `event`** (data model) — JSON prêt à importer : `builder-models/event.model.json`
- **Pages Next.js**
  - Liste : `/events`
  - Détail : `/events/[slug]`
- **API de revalidation** : `app/api/builder-revalidate/route.ts`
- **Lib** : `lib/builder.ts` (init SDK)
- **Types** : `types/event.ts`
- **Composants UI** : `components/events/*`

## Étapes de configuration

1. **Créer un compte Builder.io** (gratuit) et récupérer la clé publique d'API (Public API Key).
2. **Importer le modèle** : Builder.io → *Data Models* → *New* → *Import JSON* → `builder-models/event.model.json`
3. **Créer quelques évènements** (`title`, `slug`, `eventDate`, etc.)
4. **Variables d’environnement** : ajouter dans `.env.local`
   ```
   NEXT_PUBLIC_BUILDER_API_KEY=YOUR_BUILDER_PUBLIC_API_KEY
   BUILDER_WEBHOOK_SECRET=supersecret
   REVALIDATE_SECONDS=300
   ```
5. **(Optionnel) Webhook de publication** : Builder.io → *Webhooks* → `/api/builder-revalidate?secret=VOTRE_SECRET` + header `x-builder-secret`.
6. **Démarrer**
   ```bash
   npm install
   npm run dev
   ```

## Notes techniques

- **Filtrage "à venir"** : `/events` ne montre que `eventDate >= maintenant`.
- **ISR / Revalidate** : `REVALIDATE_SECONDS` (par défaut 300s).
- **Sécurité** : la clé publique peut être exposée côté client.
- **Animations** : composants compatibles Tailwind/GSAP.
