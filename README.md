# SAMIEE GAME STUDIO — Website

A static, responsive, bilingual (English/Persian) studio website prepared for GitHub Pages. No build step or paid service is required.

## Publish

1. Create a **public** repository named exactly `YOUR-USERNAME.github.io`.
2. Upload the *contents* of this folder to the repository root (the `index.html` file must be at the root).
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **main** and folder **/(root)**, then click **Save**.
6. Your site will be at `https://YOUR-USERNAME.github.io/`.

## Before launch

- Add your own logo as `assets/images/logo.png`. If it is not present, a text fallback is shown.
- Edit `assets/js/config.js` and replace `REPLACE_WITH_YOUR_EMAIL` with the studio email.
- Replace demo projects, placeholder descriptions and sample news with verified studio information.
- Update social links if you add them.

## Contact form limitation

The contact form opens the visitor's email application using `mailto:`. It does not send or store messages on a server. A static GitHub Pages site cannot run PHP or a private database by itself.

## Language

Use the **FA / EN** control in the navigation. The selection is saved in the visitor's browser.

## Notes

This project uses HTML, CSS and JavaScript only. The Google Fonts import is optional; the site has system-font fallbacks if the fonts are unavailable.
