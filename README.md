# Fridge & Fork

An installable recipe web app: https://julianyoww.github.io/Fridge-Fork/

- Explore 40 independently written Filipino and international recipe drafts.
- Enter fridge ingredients and optional quantities; distinguish missing ingredients, unknown quantities, and enough stock.
- Keep cooked rice separate from uncooked rice and choose a specific minced meat type.
- Find complementary dishes with shared ingredient quantities added together.
- Adjust servings, measurement display, cuisine, food preference, and time filters.
- Save, like, and mark recipes cooked; add missing amounts to a grocery list.
- Choose Light, Dark, or System appearance; install and use the cached app offline.

## Recipe quality and sourcing

These are AI-assisted original drafts, **not kitchen-tested recipes**. Review and cooking validation are still required. No third-party recipe prose or recipe photos are included. See [sourcing-policy.md](sourcing-policy.md) and [recipe-provenance.json](recipe-provenance.json) for origin, review requirements, and limitations. Independent drafting is not a guarantee of worldwide legal clearance.

Matching does not guess ingredient densities or treat optional extras as requirements. Food preferences check required ingredients, not packaged-product allergens. Method text describes the base two-serving batch; timing and water need judgment when scaling.

## Run and verify

Serve the `dist` directory with any static web server:

```sh
python3 -m http.server 4173 --directory dist
```

Open http://localhost:4173. No package installation, API key, or backend is required.

Regenerate the collection and provenance after editing the recipe source:

```sh
python3 scripts/build-recipes.py
node --test tests/*.cjs
```

The automated tests check recipe structure and matching logic; they do not validate cooking results.

## Publishing and privacy

GitHub Actions publishes `dist` on pushes to `main`. Pages must use GitHub Actions as its source. Updates to installed copies may require closing and reopening the app.

Fridge entries and quantities are saved on this browser, with a last-updated date. Saved recipes, cooking history, shopping plans, grocery lists, and appearance are stored in this browser, without account synchronization. Clearing browser data removes them. GitHub feedback is voluntary and opens an external issue form; the app does not upload fridge entries automatically. Google Fonts may be requested when online.

## Shopping trips and region

The Shopping list tab uses the existing notebook storage, so previous groceries remain available. Add to Google Calendar opens an all-day event draft with unchecked items for the selected date; the user must save it in Google Calendar. This is a one-time snapshot, not account linking or synchronization. No Google tokens are stored. Calendar links need an internet connection.

Choose Your region under More options. Outside the US is the default; US recipe measurements and ounce/pound entry options appear only when United States is selected. Region is stored on this browser and is not detected from IP or language.

## Lightweight refresh

The interface keeps the green palette and both appearance modes, uses eight initial recipe rows with Show more, and puts quick-add ingredients and optional settings in disclosures. No build framework or runtime dependency was added.

Add meal to shopping list creates a combined plan. Planned recipes share available fridge stock once; updating a plan replaces obsolete shortages and preserves manual entries. Use Planned meals → Update from fridge after inventory changes. Checked or removed planned items may return when their required amount changes or the plan is explicitly recalculated. Calendar exports include the combined amount to buy.

Notebook edits read the latest browser state and use the browser Web Locks API when available to serialize writes across tabs; storage events refresh other tabs. Older browsers without Web Locks use a best-effort latest-state update. This is browser-local storage, not account synchronization.

The deployment workflow runs the tests before publishing. Recipes remain drafts; real kitchen validation is still required. The banana porridge method now uses proportional wording, but other base-batch cooking instructions still require judgment when scaling.
