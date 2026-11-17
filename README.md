# DukaanLens (test venture)

A **test company** for trying Growth OS on a website other than a live one (PredCo).
DukaanLens is a made-up shelf-audit AI for FMCG sales teams. It has no customers and sells nothing;
every page says so.

## Folder layout
```
data/pages.mjs        every page's words (solutions, industries, guides, FAQ)
build.mjs             `node build.mjs` writes all HTML, sitemap.xml and robots.txt from data/pages.mjs
index.html            home                     contact.html   enquiry form (generate_lead)
solutions/*.html      4 solution pages         about.html     "a test company, on purpose"
industries/*.html     3 industry pages         try.html       sample shelf demo (assets/try.js, demo_read event)
blog/*.html           4 guides + index         growth/approved-claims.md  what the site may claim
assets/               style.css, site.js (form), try.js (demo)
```
Edit `data/pages.mjs`, run `node build.mjs`, commit both. Plain HTML out, no build on GitHub, so Pages serves it as is.

## How it fits with Growth OS
- This folder is its **own git repository**. It is separate from `~/Desktop/GrowthOs3` (Growth OS code) and
  from PredCo's website, so nothing here can change either of them.
- In Growth OS, DukaanLens is added as a new company through the app. Company profiles, the database and
  workspaces are not in Growth OS's git (see its `.gitignore`), so adding it does not touch any Growth OS branch.
- Growth OS code changes made while testing (for example easier setup) go on their own Growth OS branch.

## Branches here
- `main` is what GitHub Pages publishes.
- Changes Growth OS proposes go on `growth/<date>-<slug>` branches, the same rule as PredCo.

## Tools to connect (testing only)
| Tool | How | Done by |
|---|---|---|
| GitHub Pages | public repo `dukaanlens`, Pages from `main` | the owner (sign-in) |
| Google Analytics 4, Tag Manager, Search Console, Sheets | Growth OS "Set everything up" with the owner's Google account | the owner signs in; Growth OS does the rest |
| Microsoft Clarity | free project, then its id in Growth OS | the owner (sign-in) |
| Google Ads | a **test** account under a manager test account: no real ads, no spend | the owner (sign-in) |
