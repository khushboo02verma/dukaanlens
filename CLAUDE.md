# DukaanLens: notes for Claude

A **test company** (a made-up shelf-audit AI for FMCG sales teams) used to test Growth OS on a venture other than PredCo.
The user's own repo; commits, pushes and PRs here are fine without asking. Live at
https://khushboo02verma.github.io/dukaanlens/ (GitHub Pages publishes `main`).

- **Never claim** customers, results, prices or numbers; every page keeps its "Test company" notice
  (`growth/approved-claims.md`).
- **Pages are generated:** edit `data/pages.mjs` or the template in `build.mjs`, run `npm run build`, commit both.
  Never edit the generated `.html` by hand. `assets/site.js` holds the form (posts to the leads sheet) and GA4 events.
- **Gaps found in Growth OS:** `docs/problems-table.md` (before, now, status) and `docs/growth-os-setup-notes.md`.
  Update the table when a gap is fixed in Growth OS.
- **Branch `growth-os-data`:** a snapshot of what Growth OS stored for DukaanLens; not published.
- The Growth OS side (how to run it, rules, accounts, what to do next) is in `~/Desktop/GrowthOs3/CLAUDE.md`.
