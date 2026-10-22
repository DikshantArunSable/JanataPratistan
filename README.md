# Janata Pratisthan — website + no-code publishing CMS

This is a starter website built with Astro and Pages CMS. It uses the requested palette:
- Primary blue `#2373F4`
- Soft blue `#578EF5`
- Sky cyan `#65D0F4`
- Lemon yellow `#F2F7A0`

## What is included
- Responsive homepage with featured event carousel and latest stories
- Events archive with search, year filter, and category filter
- Individual, shareable event pages generated from Markdown content
- Pages CMS configuration for a visual editor, image uploads, featured posts, galleries, and drafts
- Sample event content that must be replaced with real information

## Important
The dashboard is not connected until you push this project to a GitHub repository and connect that repository to Pages CMS. Hosting/deployment also needs to be configured. No passwords or tokens belong in this project.

## Publish setup (recommended)
1. Create a GitHub repository named `janata-pratisthan`.
2. Upload/push all files in this folder to the repository root.
3. Sign in to Pages CMS at https://pagescms.org/ and connect your GitHub account/repository. It reads `pagescms.yaml` from the repository root.
4. In Pages CMS, open **Events & Blog Posts**. Create an event, upload its cover photo and gallery photos, add the full story, and save/commit. Set **Feature on homepage carousel** to Yes for featured stories. Keep **Keep as draft** enabled until the story is ready.
5. Deploy the GitHub repository to Netlify (or another Astro-compatible static host). Build command: `npm run build`; publish directory: `dist`.
6. Every CMS commit triggers the hosting provider to rebuild the site. Event archive and individual event URLs update automatically.

## Preview locally
Install Node.js (LTS), then in this folder run:

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal. To test a production build:

```bash
npm run build
npm run preview
```

## Before going live
- Replace sample event post and sample photo URLs with approved real content.
- Replace `https://example.org/donate` and `contact@example.org` with official details.
- Confirm your organisation's legal name, contact details, privacy policy, and any donation/payment requirements.
- Keep sensitive personal information out of event posts unless you have permission to publish it.
