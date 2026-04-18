# Project Overview

This project is a Figma-imported React landing page running on Replit with an Express server.

## Structure

- `client/` contains the Vite React frontend and imported Figma assets.
- `server/` contains the Express server that serves the API and frontend.
- `shared/` contains shared Drizzle schema definitions.
- `script/build.ts` builds the client and server for deployment.

## Run Configuration

- Development command: `npm run dev`
- Server port: `5000`
- Production build command: `npm run build`
- Production start command: `node ./dist/index.cjs`

## Migration Notes

- Dependencies were installed with npm.
- The workflow is configured to run the Express/Vite app on port 5000.
- The Tailwind CSS setup was adjusted to be compatible with Vite/Replit module loading.
- Imported Figma assets are served from `client/public/figmaAssets`.

## Pages

- `/` renders the uploaded landing page reference image with clickable navigation overlays.
- `/bodycare`, `/skincare`, `/grooming`, `/haircare`, and `/giftsets` render the uploaded full-page category design references with clickable navigation overlays.
- `/shop` renders the uploaded Shop Now reference sections as one continuous page with clickable navigation overlays.
