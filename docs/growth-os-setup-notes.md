# Setting up a new company in Growth OS: what happened (DukaanLens, 17 Nov 2026)

DukaanLens is a test company on GitHub Pages (`khushboo02verma.github.io/dukaanlens/`). It was added to
Growth OS through the normal "Start a service for a company" wizard, to find where setup is hard for a new
company. Growth OS fixes are on its branch `feat/html-sites`.

## What worked
| Step | Result |
|---|---|
| Read the website | Profile drafted from the live site in about a minute ($0.03) |
| GitHub (website code) | Connected and tested: "Ready: the website loop can change, build and push this site" |
| Google sign-in | One sign-in, stored for this company only; PredCo's sign-in untouched |
| Google Analytics 4 | Property 564831513, stream G-Q7QZZ1J18C, created in the owner's "Growth OS Test" account; generate_lead is a key event |
| Search Console | Uses the existing `https://khushboo02verma.github.io/` property (covers /dukaanlens/) |
| Leads sheet | Created "DukaanLens · Leads (Growth OS)" |
| Weekly check | On, Mondays 09:00 |

## Problems found, and what was done
| # | Problem | Risk | Status |
|---|---|---|---|
| 1 | Growth OS read only Next.js sites; a plain HTML site gave 0 pages, could not be changed, and the duplicate-page check did not work | Most new companies are not Next.js | Fixed (3695448) |
| 2 | The live site reader looked only at the domain root, so a site under a folder (`/dukaanlens/`) gave 0 pages | GitHub Pages, Netlify and similar sites | Fixed (3695448) |
| 3 | The company id came from the host: "khushboo02verma" instead of "dukaanlens" | Confusing ids for every site on shared hosting | Fixed (ce2597b) |
| 4 | "Reuse connections" matched on the host only, so two GitHub Pages sites of one person would share Google sign-ins | Wrong account used for a company | Fixed (ce2597b) |
| 5 | Setup matched a GA4 stream by host only, so DukaanLens would have taken the owner's older "Growth OS test site" property | Two sites' data mixed | Fixed (325ef6e) |
| 6 | **Setup created the new GA4 property in the first account under the sign-in, which was PredCo's.** Only Google's 403 stopped it | A test company's data in a real company's Analytics | Fixed (c31db55): accounts used by another company are skipped |
| 7 | The AI profile draft listed competitors from memory without searching, one of them a mistake it flagged itself | Wrong rivals drive the buyer research | Corrected by hand; not fixed |
| 8 | The AI wrote "every enquiry is a test" into Not a fit | Every lead would score as not a fit | Corrected by hand; not fixed |
| 9 | After removing a chip, the profile form's inputs lose their names | Small UI bug; data kept | Not fixed |
| 10 | Tag Manager: Google does not let software create a Tag Manager account | A person must create it once | Setup falls back to the GA4 tag directly |
| 11 | Leads sheet: the form needs the sheet's Apps Script web app, which only a person can deploy | Leads cannot reach the sheet until then | Needs the owner |
| 12 | Google Ads: no manager account under the sign-in | Ads cannot be connected | Needs the owner (a test manager account is enough for testing) |
| 13 | The queued website requests are written for Next.js ("shared layout head", "env LEADS_SHEET_WEBHOOK") | The website loop must work them out on a plain HTML site | To watch when they run |

## Steps only a person can do (for the "make setup easy" work)
1. Sign in to Google once (done).
2. Deploy the leads sheet's Apps Script web app once.
3. Create a Google Ads manager account (a test manager account for testing).
4. Optional: create a Tag Manager account.
