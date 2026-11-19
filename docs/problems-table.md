# Growth OS on a new company (DukaanLens): problems, before and now

Found while setting up DukaanLens in Growth OS on 17–18 Nov 2026. Growth OS fixes are on its branch `feat/html-sites`
(not merged, not pushed). Details of each are in `growth-os-setup-notes.md`.

**Status:** ✅ fixed · 🟡 worked around (by hand, or a safe fallback) · 👤 only the owner can do it · ❌ still open

## Website
| # | Before | Now | Status |
|---|---|---|---|
| 1 | Growth OS read only Next.js sites; a plain HTML site showed 0 pages | Plain HTML sites are read: all 16 DukaanLens pages, with their titles | ✅ 3695448 |
| 2 | Sites under a folder (`…github.io/dukaanlens/`) showed 0 pages | Read from the site's own folder and sitemap | ✅ 3695448 |
| 3 | Page changes (drafts) worked only on Next.js | Work on HTML sites too, through the site's own build; scripts, styles and the form code are never touched | ✅ 3695448 |
| 4 | The website editor was asked to use "env LEADS_SHEET_WEBHOOK" but never given the address | The editor gets the real sheet address, its columns and the GA4 id | ✅ d0c3fed |
| 5 | The form's fields (need, utm_source) did not match the sheet's columns (Message, Source) | The form sends the sheet's own column names; checked with test enquiries | ✅ a674845 (site) |
| 6 | The design check ran only on Next.js sites | Runs on HTML sites | ✅ 9f56a4b |
| 7 | **A change wiped by the site's build still went up for approval** (GA4 tag on 0 of 16 pages) | The editor changes the template; a change the build undoes stops before approval | ✅ bb7365e |
| 8 | Approved changes failed to push ("unstaged changes") | The build's pages are committed with the change | ✅ 62706b7 |
| 9 | A declined or failed change is marked "done" and never tried again | Shown as "Declined" or "Not done" with the reason and a "Try again" button that puts it back in the queue | ✅ 3a01d6e |
| 10 | The live check looks only at page HTML, so a script change shows "not live yet" for a minute | Same | ❌ |
| 11 | The build added an unrelated `package-lock.json` to a change | Same | ❌ |
| 12 | Pull requests (review-branch mode) not tried on a new company | Switched on for DukaanLens; not yet tried with a change | ❌ to test |

## Company and accounts
| # | Before | Now | Status |
|---|---|---|---|
| 13 | Company id taken from the host: "khushboo02verma" | Taken from the site's folder: "dukaanlens" | ✅ ce2597b |
| 14 | Two sites on one host would share Google sign-ins | Only the same site with its folder is reused | ✅ ce2597b |
| 15 | **Setup tried to create DukaanLens's GA4 inside PredCo's Analytics account** | Accounts used by another company are skipped; a refused one is passed over | ✅ c31db55 |
| 16 | GA4 matched by host only, so it would reuse an older test property | Matched by the site with its folder: DukaanLens got its own property | ✅ 325ef6e |
| 17 | Search Console used the host's root property (other sites' searches mixed in) | Its own property for the folder, verified at once | ✅ d7677a1 |
| 18 | The sign-in sees PredCo's live Ads account; setup could pick it | DukaanLens is locked to test Ads accounts (a flag set by hand) | 🟡 needs a rule, not a hand-set flag |
| 19 | Ads settings say "Explorer" access; Google says test accounts only | Same | ❌ |
| 20 | Google results for a new company come through Bing (the Serper key is saved per company) | Same; works, but a different source than PredCo's | ❌ |

## Setup screens and owner steps
| # | Before | Now | Status |
|---|---|---|---|
| 21 | The AI profile listed competitors from memory, one by mistake | Corrected by hand | 🟡 |
| 22 | The AI wrote "every enquiry is a test" into Not a fit (every lead would score as not a fit) | Corrected by hand | 🟡 |
| 23 | After removing a chip, the profile form's inputs lose their names | Same (data is kept) | ❌ |
| 24 | Running setup again erases the first run's instructions (the script to paste) | Same | ❌ |
| 25 | A blocked change (waiting for the sheet) holds up the next one (GA4 tag) | Same | ❌ |
| 26 | The sheet needs an Apps Script deployed by hand, with Google's "unsafe app" warning | Done by the owner in ~3 minutes | 👤 idea: Growth OS receives the form itself |
| 27 | Google won't let software create a Tag Manager account | GA4 tag goes on the site directly | 👤 / 🟡 |
| 28 | A Google Ads test manager needs a special link and a reCAPTCHA | Done by the owner in ~2 minutes; Growth OS then made the test Ads account | 👤 |
| 29 | Google does not link GA4 to Ads test accounts | Leads counted from the sheet and GA4 | 👤 Google's rule |
| 30 | The Growth OS sign-in expires when the server restarts | Same | ❌ |
| 31 | The thank-you message waits for the sheet (several seconds) | Same | ❌ |

## Totals
✅ fixed: 14 · 🟡 worked around: 3 · 👤 owner or Google step: 4 · ❌ open: 10 (31 in all)

**Next, in order:** 24 (keep the owner's to-do list), 25 (independent changes),
18 (lock a test company to test accounts by rule), 12 (try a pull request), 30 (stay signed in), then the small ones.
