// Writes the DukaanLens site from data/pages.mjs: `node build.mjs`. Plain HTML out, so GitHub Pages serves it as is.
import { writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { SITE, SOLUTIONS, INDUSTRIES, POSTS, FAQ } from "./data/pages.mjs";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const out = (file, html) => { mkdirSync(path.dirname(file), { recursive: true }); writeFileSync(file, html); };
const today = new Date().toISOString().slice(0, 10);
const urls = [];

function page({ file, title, desc, body, type = "website", jsonld = null }) {
  const depth = file.split("/").length - 1, r = depth ? "../".repeat(depth) : "";
  const canon = `${SITE.url}/${file.replace(/index\.html$/, "")}`; urls.push(canon);
  const ld = jsonld ? `\n  <script type="application/ld+json">${JSON.stringify(jsonld)}</script>` : "";
  out(file, `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(desc)}">
  <link rel="canonical" href="${canon}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(desc)}">
  <meta property="og:type" content="${type}">
  <meta property="og:url" content="${canon}">
  <meta name="robots" content="index, follow">
  <link rel="stylesheet" href="${r}assets/style.css">${ld}
  <!-- Google Tag Manager goes here during setup -->
</head>
<body>
  <div class="test-note"><b>Test company.</b> DukaanLens is a demo venture used to test Growth OS. It has no customers and sells nothing.</div>
  <header class="top"><div class="wrap">
    <a class="logo" href="${r || "./"}">Dukaan<span>Lens</span></a>
    <nav><a href="${r || "./"}#solutions">Solutions</a><a href="${r || "./"}#industries">Industries</a><a href="${r}blog/">Guides</a><a href="${r}try.html">Try it</a><a href="${r}about.html">About</a><a class="btn" href="${r}contact.html">Book a demo</a></nav>
  </div></header>
  <main class="wrap">
${body(r)}
  </main>
  <footer><div class="wrap">
    <span>DukaanLens · a test venture for Growth OS · no real customers</span>
    <span>${SOLUTIONS.map((s) => `<a href="${r}solutions/${s.slug}.html">${esc(s.name)}</a>`).join(" · ")}</span>
    <span><a href="${r}about.html">About</a> · <a href="${r}contact.html">Contact</a></span>
  </div></footer>
  <script src="${r}assets/site.js"></script>
</body>
</html>
`);
}

const faqHtml = (items) => items.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("\n      ");
const faqLd = (items) => ({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: items.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) });
const cta = (r, line = "Tell us about your brand and the stores you want to cover.") => `    <section><h2>See it on your own shelves</h2><p class="lede">${esc(line)}</p><div class="cta-row"><a class="btn" href="${r}contact.html">Book a demo</a><a class="btn ghost" href="${r}try.html">Try the sample</a></div></section>`;
const report = `<div class="report" aria-label="Sample shelf report">
        <h4>Shelf report · sample data</h4>
        <div class="row"><span>Glucose biscuits, 6 facings</span><span class="tag ok">On shelf</span></div>
        <div class="row"><span>Cream biscuits</span><span class="tag bad">Out of stock</span></div>
        <div class="row"><span>Rival brand took 2 rows</span><span class="tag warn">Share lost</span></div>
        <div class="row"><span>Price label matches</span><span class="tag ok">Yes</span></div>
        <p class="sample">Illustration with made-up products, not a real store.</p>
      </div>`;

// ---- home
page({ file: "index.html", title: `${SITE.name} | ${SITE.tagline}`, desc: "DukaanLens turns one shelf photo from a kirana store into a shelf report: out-of-stock, share of shelf, planogram and price labels. A test company for Growth OS.",
  jsonld: { "@context": "https://schema.org", "@type": "Organization", name: SITE.name, url: SITE.url, description: "A test company used to try out Growth OS. Not a real business." },
  body: (r) => `    <div class="hero">
      <div>
        <div class="eyebrow">Shelf audit for FMCG sales teams</div>
        <h1>See every shelf in every kirana store, from one photo.</h1>
        <p class="lede">Your salesman takes one photo of the shelf. DukaanLens tells you what is on it: which of your products are there, what is out of stock, and how much space a rival took. No forms to fill, no guessing.</p>
        <div class="cta-row"><a class="btn" href="contact.html">Book a demo</a><a class="btn ghost" href="try.html">Try the sample</a></div>
      </div>
      ${report}
    </div>
    <section>
      <h2>The problem every FMCG sales head knows</h2>
      <div class="grid3">
        <div class="card"><h3>Forms are filled from memory</h3><p>Store visit reports are typed after the visit, often wrong, sometimes made up.</p></div>
        <div class="card"><h3>Out-of-stock is found too late</h3><p>By the time the distributor hears about it, the shopper has bought another brand.</p></div>
        <div class="card"><h3>Rivals buy your space quietly</h3><p>Shelf space moves store by store. Nobody sees it until the monthly numbers drop.</p></div>
      </div>
    </section>
    <section id="solutions">
      <h2>What one photo checks</h2>
      <div class="grid2">${SOLUTIONS.map((s) => `
        <a class="card link" href="solutions/${s.slug}.html"><h3>${esc(s.name)}</h3><p>${esc(s.desc)}</p><span class="more">Read more →</span></a>`).join("")}
      </div>
    </section>
    <section id="how">
      <h2>How it works</h2>
      <div class="grid3">
        <div class="card"><div class="step-n">01</div><h3>One photo</h3><p>The salesman opens the app in the store and photographs the shelf. Only the in-app camera works, with time and place attached.</p></div>
        <div class="card"><div class="step-n">02</div><h3>AI reads the shelf</h3><p>Computer vision finds each product, counts facings, checks the planogram and the price label.</p></div>
        <div class="card"><div class="step-n">03</div><h3>A report the same minute</h3><p>The salesman sees what to fix before leaving. The sales head sees every store, area and distributor on one dashboard.</p></div>
      </div>
    </section>
    <section id="industries">
      <h2>Built for crowded Indian shelves</h2>
      <div class="grid3">${INDUSTRIES.map((x) => `
        <a class="card link" href="industries/${x.slug}.html"><h3>${esc(x.name)}</h3><p>${esc(x.desc)}</p><span class="more">Read more →</span></a>`).join("")}
      </div>
    </section>
    <section id="faq">
      <h2>Questions sales heads ask</h2>
      ${faqHtml(FAQ)}
    </section>
${cta(r)}` });

// ---- solutions
for (const s of SOLUTIONS) page({ file: `solutions/${s.slug}.html`, title: `${s.seoTitle} | ${SITE.name}`, desc: s.desc, jsonld: faqLd(s.faq),
  body: (r) => `    <div class="hero">
      <div>
        <div class="eyebrow"><a href="${r || "./"}#solutions">Solutions</a> / ${esc(s.name)}</div>
        <h1>${esc(s.title)}</h1>
        <p class="lede">${esc(s.desc)}</p>
        <div class="cta-row"><a class="btn" href="${r}contact.html">Book a demo</a><a class="btn ghost" href="${r}try.html">Try the sample</a></div>
        <p class="meta">For: ${esc(s.who)}</p>
      </div>
      ${report}
    </div>
    <section><h2>Why it matters</h2><p class="lede">${esc(s.problem)}</p></section>
    <section><h2>How it works</h2><div class="grid3">${s.how.map(([h, p], i) => `
      <div class="card"><div class="step-n">0${i + 1}</div><h3>${esc(h)}</h3><p>${esc(p)}</p></div>`).join("")}
    </div></section>
    <section><h2>Questions</h2>
      ${faqHtml(s.faq)}
    </section>
    <section><h2>Also checked from the same photo</h2><div class="grid3">${SOLUTIONS.filter((o) => o.slug !== s.slug).map((o) => `
      <a class="card link" href="${o.slug}.html"><h3>${esc(o.name)}</h3><p>${esc(o.desc)}</p></a>`).join("")}
    </div></section>
${cta(r)}` });

// ---- industries
for (const x of INDUSTRIES) page({ file: `industries/${x.slug}.html`, title: `${x.seoTitle} | ${SITE.name}`, desc: x.desc,
  body: (r) => `    <article class="post">
      <div class="eyebrow"><a href="${r || "./"}#industries">Industries</a> / ${esc(x.name)}</div>
      <h1>${esc(x.title)}</h1>
      <p class="lede">${esc(x.desc)}</p>
      <div class="grid1">${x.points.map(([h, p]) => `
        <div class="card"><h3>${esc(h)}</h3><p>${esc(p)}</p></div>`).join("")}
      </div>
      <h2>What gets checked</h2>
      <ul>${SOLUTIONS.map((s) => `<li><a href="${r}solutions/${s.slug}.html">${esc(s.name)}</a>: ${esc(s.desc)}</li>`).join("")}</ul>
    </article>
${cta(r)}` });

// ---- guides
const block = ([t, v]) => (t === "p" ? `<p>${v}</p>` : t === "h2" ? `<h2>${esc(v)}</h2>` : `<${t}>${v.map((x) => `<li>${x}</li>`).join("")}</${t}>`);
for (const p of POSTS) page({ file: `blog/${p.slug}.html`, title: `${p.seoTitle} | ${SITE.name}`, desc: p.desc, type: "article",
  jsonld: { "@context": "https://schema.org", "@type": "Article", headline: p.title, description: p.desc, author: { "@type": "Organization", name: `${SITE.name} (test company)` } },
  body: (r) => `    <article class="post">
      <div class="eyebrow"><a href="${r}blog/">Guides</a></div>
      <h1>${esc(p.title)}</h1>
      <p class="meta">DukaanLens team · ${esc(p.read)} read</p>
      ${p.body.map(block).join("\n      ")}
      <p class="meta">This guide is part of a test site. If you are choosing shelf audit software, compare real vendors with the questions above.</p>
      <div class="cta-row"><a class="btn" href="${r}contact.html">Book a demo</a></div>
    </article>` });
page({ file: "blog/index.html", title: `Guides on shelf audits and retail execution | ${SITE.name}`, desc: "Plain guides for FMCG sales and trade marketing teams: shelf audits, share of shelf, retail execution apps and perfect store checklists.",
  body: () => `    <article class="post">
      <div class="eyebrow">Guides</div>
      <h1>Guides for FMCG sales and trade marketing teams</h1>
      <div class="grid1">${POSTS.map((p) => `
        <a class="card link" href="${p.slug}.html"><h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p><span class="more">${esc(p.read)} read →</span></a>`).join("")}
      </div>
    </article>` });

// ---- try it: a sample shelf, read in the browser (made-up products; nothing is uploaded)
page({ file: "try.html", title: `Try a sample shelf | ${SITE.name}`, desc: "See what a DukaanLens shelf report looks like on three sample shelves. Made-up products; nothing is uploaded.",
  body: (r) => `    <article class="post wide">
      <div class="eyebrow">Try it</div>
      <h1>Pick a sample shelf and read it</h1>
      <p class="lede">Three made-up shelves. Pick one, press "Read the shelf", and see the report a salesman would get. Nothing is uploaded; this runs in your browser.</p>
      <div class="try">
        <div>
          <div class="pick" role="tablist">${["Biscuits", "Beverages cooler", "Personal care"].map((n, i) => `<button class="btn ghost${i ? "" : " on"}" data-shelf="${i}">${n}</button>`).join("")}</div>
          <div id="shelf" class="shelf" aria-label="Sample shelf"></div>
          <div class="cta-row"><button class="btn" id="read">Read the shelf</button></div>
        </div>
        <div class="report" id="result"><h4>Shelf report · sample data</h4><p class="sample">Press "Read the shelf".</p></div>
      </div>
    </article>
${cta(r, "Want this on your own shelves? Book a demo and tell us your categories.")}
  <script src="${r}assets/try.js"></script>` });

// ---- contact and about
page({ file: "contact.html", title: `Book a demo | ${SITE.name}`, desc: "Book a DukaanLens demo: shelf audit from one photo for FMCG sales teams. A test company for Growth OS.",
  body: () => `    <article class="post">
      <div class="eyebrow">Book a demo</div>
      <h1>Tell us about your shelves.</h1>
      <p class="lede">Four short questions. A person reads every enquiry.</p>
      <form class="lead" data-form="contact">
        <label>Your name<input name="name" required autocomplete="name"></label>
        <label>Work email<input name="email" type="email" required autocomplete="email"></label>
        <label>Company<input name="company" required autocomplete="organization"></label>
        <label>Your role<input name="role" placeholder="Sales head, trade marketing…"></label>
        <label class="full">What do you want to solve?<textarea name="need" rows="3" placeholder="e.g. out-of-stock in kirana stores in two states"></textarea></label>
        <div class="full"><button class="btn" type="submit">Send</button></div>
      </form>
      <div class="done"><b>Thank you.</b> This is a test site, so no one will reply, but your test enquiry was recorded.</div>
    </article>` });
page({ file: "about.html", title: `About | ${SITE.name} (test company)`, desc: "DukaanLens is a test company used to try out Growth OS. It has no customers and sells nothing.",
  body: () => `    <article class="post">
      <div class="eyebrow">About</div>
      <h1>A test company, on purpose.</h1>
      <p>DukaanLens is not a real business. It is a demo venture built to test Growth OS, a growth platform, on a company other than a live one. Every tool Growth OS connects to (Google Analytics, Search Console, Tag Manager, a leads sheet, Microsoft Clarity and a Google Ads test account) is set up on this site, so the whole flow can be tried without touching a real company's website.</p>
      <h2>What is real here</h2>
      <p>The problem is real: FMCG brands in India struggle to know what is on the shelf of each kirana store. The product described here is an idea. There are no customers, no results and no prices, and nothing on this site claims otherwise.</p>
      <h2>Why a shelf-audit idea</h2>
      <p>People search for shelf audit and retail execution software, and real companies already sell it. That gives Growth OS real search results, rivals and buyer questions to read, which is what a test needs.</p>
    </article>` });

// ---- sitemap and robots
out("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`).join("\n")}\n</urlset>\n`);
out("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`);
console.log(`${urls.length} pages written, sitemap.xml and robots.txt updated`);
