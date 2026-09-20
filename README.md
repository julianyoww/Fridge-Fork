# Fridge & Fork

Find meals to cook with ingredients you already have.

- Add ingredients individually or as a comma-separated list.
- See matching recipes and missing ingredients.
- Filter for meals you can make now.
- Read quantities and step-by-step instructions for eight starter recipes.
- Choose Light, Dark, or System appearance. Your choice is saved in your browser.

## Run locally

Serve the `dist` directory with any static web server, for example:

```sh
python3 -m http.server 4173 --directory dist
```

Open http://localhost:4173. No package installation, API key, or backend is required.

## GitHub Pages

In the repository's **Settings → Pages**, set **Source** to **GitHub Actions**.
The included workflow publishes `dist` on each push to `main`, and can also be run manually.

Ingredients are held in memory for the current visit. Recipe matching uses the included collection, not a live recipe database. Appearance preferences are stored only on the current browser.

The app loads Google Fonts and a cooking photo by Kevin Wang from Unsplash:
https://unsplash.com/photos/overhead-view-of-chopped-vegetables-and-ingredients-for-cooking-7ffUeEP62no
