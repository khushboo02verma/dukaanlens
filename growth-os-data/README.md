# What Growth OS stored for DukaanLens (snapshot, 18 Nov 2026)

Everything Growth OS's database holds for the company `dukaanlens`, exported so it can be looked at without Growth OS.
DukaanLens is a test company: the leads are test enquiries and nothing here is a real customer. Sign-in tokens and keys
are not in this export. This branch is not published by GitHub Pages (only `main` is).

## tables/ (one CSV per table, only DukaanLens's rows)
| File | What it is |
|---|---|
| `intel_queries.csv` | Every buyer search and question Growth OS found, with its stage and where it came from (autocomplete, typed, Search Console) |
| `intel_serp.csv` / `intel_serp_history.csv` | Google's top results for each search, and how they changed day by day |
| `intel_pages.csv` | Pages read from those results, with the brands each one names |
| `intel_threads.csv` | Forum threads and videos (YouTube, Hacker News, Quora) found for the searches |
| `intel_events.csv` | Every internet read, minute by minute: time, source, search, site, region, from cache or not, how long |
| `intel_sim_runs.csv` / `intel_sim_steps.csv` | Each buyer simulation run, and what each buyer role searched, opened and met in it |
| `intel_model_history.csv` | The simulation's result by day and by role |
| `intel_jobs.csv` | Each data refresh, with its progress log |
| `crm_rows.csv` | Leads read from the Leads Sheet (test enquiries) |
| `live_snapshots.csv`, `latest.csv`, `records.csv`, `events.csv`, `log.csv` | GA4 and sheet readings, run results and the activity log |
| `llm_usage.csv` | Every AI call: stage, model, cost |

## state/ (JSON)
`brief.json` (buyer persona: roles, triggers, evidence), `needs.json` (buyer needs grouped by meaning), `roleMap.json`,
`meta.json`, `profile.json` (the company profile and its connections), `setup.json` (the result of "Set everything up").

## plan/
`report.md` and `plan.json`: the plan and ads Growth OS drafted on 18 Nov 2026 (campaign, ad groups, keywords, headlines,
negatives, blockers before spend). Saved as a draft: no spend was approved and nothing was created in Google Ads.

`counts.json` has the number of rows per table at export time.
