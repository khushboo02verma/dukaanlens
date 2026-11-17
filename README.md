# DukaanLens (test venture)

A **test company** for trying Growth OS on a website other than a live one (PredCo).
DukaanLens is a made-up shelf-audit AI for FMCG sales teams. It has no customers and sells nothing;
every page says so.

## Folder layout
```
index.html                         home page
contact.html                       enquiry form (sends generate_lead; posts to the leads sheet once LEADS_URL is set)
about.html                         "a test company, on purpose"
blog/shelf-audit-kirana-stores.html  one guide (gives Search Console something to show)
assets/style.css, assets/site.js   styles and the form script
growth/approved-claims.md          what the site may claim (read by Growth OS)
robots.txt
```
Plain HTML, no build step, so it runs on GitHub Pages as it is.

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
