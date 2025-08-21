# Patch "Concerts à venir" (Builder.io)

Ce patch contient **seulement** les fichiers nécessaires pour ajouter le backoffice Builder.io et les pages `events`.

## Application

1. **Dézipper** ce fichier **à la racine de ton projet** (là où se trouve `package.json`).  
   - Les fichiers tomberont dans les bons dossiers (`lib/`, `types/`, `components/`, `app/…`, etc.)

2. **(Optionnel) Mise à jour auto des dépendances**
   ```bash
   node scripts/patch-builder-deps.mjs
   ```

   > À la main, ajoute dans `dependencies` :
   > ```json
   > "@builder.io/react": "^3.0.0",
   > "@builder.io/sdk": "^3.0.0"
   > ```

3. **Variables d’environnement**
   - Ajoute dans `.env.local` :
     ```
     NEXT_PUBLIC_BUILDER_API_KEY=YOUR_BUILDER_PUBLIC_API_KEY
     BUILDER_WEBHOOK_SECRET=supersecret
     REVALIDATE_SECONDS=300
     ```

4. **Importer le modèle dans Builder.io**
   - Builder → *Data Models* → *New* → *Import JSON*
   - Fichier : `builder-models/event.model.json`

5. **Installer et lancer**
   ```bash
   npm install
   npm run dev
   ```
   Visite `/events`.
