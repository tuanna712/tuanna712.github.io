<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1-c6LdRME10wsZLQH470Xa0ZP4s2lHuc9

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to GitHub Pages

The site is built with Vite (`npm run build` → `dist/`). Pushes to `master` run [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml), which uploads `dist/` and publishes it with GitHub Pages.

**One-time repository setup**

1. On GitHub: **Settings → Pages → Build and deployment**.
2. Under **Source**, choose **GitHub Actions** (not “Deploy from a branch”). This must match the workflow: the live site is the artifact from the workflow, not the copy of `index.html` / `assets/` at the repo root.
3. After the first workflow run, open the **Actions** tab and confirm the deploy job succeeded. If prompted, approve the `github-pages` environment for first use.

Updates usually appear within a few minutes after a successful deploy (build time plus GitHub’s CDN). Use a hard refresh or a private window if you still see a cached page.
