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
| Google Analytics 4 | Property "DukaanLens" 564831513, stream G-Q7QZZ1J18C on `…/dukaanlens/`, INR, India time, in the owner's "Growth OS Test" account (data is kept per property); generate_lead is a key event |
| Search Console | Its own property `https://khushboo02verma.github.io/dukaanlens/` (owner), verified at once through the root property |
| Leads sheet | Created "DukaanLens · Leads (Growth OS)" |
| Weekly check | On, Mondays 09:00 |
| Form → leads sheet | Live (a674845, written by Growth OS's website editor): every field lands in its own column, with Source/Medium/Campaign/gclid from the landing address. Tested end to end |
| GA4 tag | Live on all 16 pages (947c4ce + 789e9c5); a test enquiry showed as generate_lead in GA4's real-time report |
| AI cost of the website changes | $0.05 each (form, GA4) |
| Google Ads | Test manager "DukaanLens (test)" 963-000-5249 made by the owner; setup then created the company's own test account 376-793-3146 under it. Nothing is shown or charged. The company is locked to test Ads accounts |
| GA4 ↔ Google Ads link | Not possible: Google does not link Analytics to Ads test accounts. Leads are counted from the sheet and GA4 meanwhile |

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
| 14 | Search Console used the host's root property, which also holds the searches of every other site on that host | The company's analysis would include another site's data | Fixed (d7677a1): its own property for its folder, verified through the root |
| 15 | Running setup again replaced the first run's results, so the sheet script to paste was no longer shown anywhere | The person loses the one thing they must do | Not fixed |
| 16 | The leads sheet's columns (Message, Source, Medium, Campaign) do not match the form's field names (need, utm_source, utm_campaign) | Enquiries reach the sheet with empty columns | To check when the form change runs |
| 17 | Waiting website changes run oldest first, and the form change cannot run before the sheet script is deployed | The quick GA4 change waits behind a blocked one | Not fixed |
| 18 | The website editor was asked to wire the form "via env LEADS_SHEET_WEBHOOK" but never given the address, and a plain HTML site has no environment variables | The form could not be wired without a person | Fixed (d0c3fed): the editor gets the web app address, the sheet's columns and the GA4 id |
| 19 | The website pipeline's design check started only Next.js ("the site is not built in this folder") | No design check on any HTML site | Fixed (9f56a4b) |
| 20 | **The editor tagged 16 generated pages, the site's build rewrote them, the build "passed", and the change went up for approval with the tag on no page** | A broken change approved as working | Fixed (bb7365e): the editor edits the template, and a change the build undoes stops before approval. Declined by hand this time |
| 21 | After approval the push stopped ("unstaged changes"): the build's rewritten pages were never committed | Approved changes never go live | Fixed (62706b7): the build's pages are committed with the change |
| 22 | A declined or failed change is marked "done", so Growth OS never tries it again | The GA4 tag had to be asked for twice more by hand | Not fixed |
| 23 | The live check looks for text in the page HTML, so a change inside a script file shows "not live yet" for a minute | Confusing status | Not fixed |
| 24 | The thank-you message waits for the sheet to answer (several seconds) | The visitor may think the form is stuck | Not fixed |
| 25 | The build step added an unrelated package-lock.json to the change | Noise in the review | Not fixed |
| 26 | Growth OS's Ads settings say "Explorer" access, but Google says the Cloud project is approved for test accounts only | Setup would try live accounts and fail with a Google error | Not fixed |
| 27 | The sign-in sees a live Ads account (8101455344) that is not DukaanLens's; setup could pick it | Ads for the wrong company | Not used; DukaanLens gets its own test manager account |
| 28 | A Google Ads test manager account can only be made with a Google account not linked to a live manager account, from a special link (ads.google.com/nav/selectaccount?sf=mt) | Hard to find; a person may need a second Google account | Done by the owner in about 2 minutes (it needs a reCAPTCHA, so software cannot do it) |
| 29 | The Growth OS sign-in expired when the server restarted | The person has to sign in again mid-setup | Not fixed |

## How setup could be easier (ideas from this run)
- **One screen of "only you can do this" steps**, kept until done (not replaced by a re-run), each with a link, the exact clicks, and a "Check again" button.
- **Leads sheet without Apps Script:** Growth OS could receive the form itself (a small endpoint) and write to the sheet with the owner's Google sign-in, so nobody deploys a script.
- **Ask, don't guess, for shared accounts:** when a sign-in sees several Analytics accounts, show them and let the person pick (with the ones used by other companies greyed out).
- **Name the form fields once:** the sheet's columns should come from the site's form (or the form from the sheet), checked by a test enquiry at the end of setup.
- **Independent changes run independently:** a blocked change (waiting for the sheet URL) should not hold up the GA4 tag.
- **A failed or declined change goes back to the queue** with the reason, instead of being marked done.
- **End setup with a test enquiry:** Growth OS sends one through the live form and shows it arriving in the sheet and in GA4 real time, so the owner sees the chain work.

## Steps only a person can do (for the "make setup easy" work)
1. Sign in to Google once (done).
2. Deploy the leads sheet's Apps Script web app once (done: about 3 minutes, including Google's "unverified app" warning, which is frightening for a non-technical owner).
3. Create a Google Ads manager account (a test manager account for testing) (done).
4. Optional: create a Tag Manager account.
