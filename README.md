# erenata-portfolio

Personal portfolio site for **Eren Ata**: selected projects, professional experience, and contact links. The public build highlights work in **LLMOps**, **MLOps**, and generative AI (LLM fine-tuning, evaluation, and production-oriented workflows).

**Live site:** [erenata16.github.io/erenata-portfolio](https://erenata16.github.io/erenata-portfolio/)

This repository contains only the static frontend (HTML, CSS, and JavaScript). There is no application server or build step; GitHub Pages serves the files as-is.

## Contents

The site is a single-page layout: navigation sections for about, projects, experience, and contact, plus links to GitHub, Hugging Face, and other profiles.

## Tech stack

Static HTML5, CSS3, and vanilla JavaScript. Typography uses Google Fonts (Fraunces, Geist, JetBrains Mono). A web app manifest is included for installable PWA metadata; `robots.txt` and `sitemap.xml` are present for crawlers.

## Deployment

Pushes to `main` trigger [GitHub Actions](.github/workflows/static.yml), which deploys the repository root to GitHub Pages.

## Local preview

Open `index.html` in a browser, or from the repository root:

```bash
npx --yes serve .
```

## License

MIT
