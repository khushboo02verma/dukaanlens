// Every page's words live here; `node build.mjs` writes the HTML. DukaanLens is a test company: no customers, no
// results, no prices, no accuracy figures. Claims allowed are in growth/approved-claims.md.

export const SITE = {
  name: "DukaanLens",
  url: "https://khushboo02verma.github.io/dukaanlens",
  tagline: "Shelf audit from one photo, for FMCG sales teams",
};

export const SOLUTIONS = [
  {
    slug: "out-of-stock-detection",
    name: "Out-of-stock detection",
    title: "Out-of-stock detection in kirana stores, from one shelf photo",
    seoTitle: "Out-of-Stock Detection for FMCG in Kirana Stores",
    desc: "Find which of your products are missing from each kirana store's shelf the same day, from one photo your salesman already takes.",
    who: "Sales head, area sales manager, distributor manager",
    problem: "A product missing from the shelf is a sale lost to another brand. In kirana stores it is usually found weeks later, in the sales numbers.",
    how: [
      ["The shelf is photographed", "The salesman takes one photo in the in-app camera during his normal visit."],
      ["Your range is checked", "Each product the store should carry is looked for on the shelf."],
      ["Gaps are flagged before he leaves", "Missing products are shown to the salesman, so he can take an order on the spot."],
    ],
    faq: [
      ["How does it know what the store should carry?", "From the list of products you sell to that store or channel, set up once."],
      ["What if the product is in the store's back room?", "The report says it is not on the shelf; the salesman can mark it as in stock behind the counter."],
    ],
  },
  {
    slug: "share-of-shelf",
    name: "Share of shelf",
    title: "Share of shelf, measured store by store instead of guessed",
    seoTitle: "Share of Shelf Measurement for FMCG Brands",
    desc: "Measure how much of each shelf your brand holds next to rivals, in every kirana store your team visits, from shelf photos.",
    who: "Trade marketing manager, category manager",
    problem: "Rivals win shelf space store by store, often with a small incentive to the shopkeeper. Without measurement, it is only noticed when sales fall.",
    how: [
      ["Every facing is counted", "Your products and rivals' products are counted on the shelf in the photo."],
      ["Space is compared", "Your share is worked out per category, per store."],
      ["Changes are shown over time", "Stores where your share dropped since the last visit are listed first."],
    ],
    faq: [
      ["Does it name the rival brands?", "Yes, rival products are recognised as rival brands, so you see who took the space."],
      ["Is share of shelf the same as market share?", "No. It is what a shopper sees on the shelf, which often moves before market share does."],
    ],
  },
  {
    slug: "planogram-compliance",
    name: "Planogram compliance",
    title: "Planogram compliance for kirana and modern trade shelves",
    seoTitle: "Planogram Compliance Check from Shelf Photos",
    desc: "Check whether your products sit where the agreed shelf layout says, without a merchandiser filling a form after the visit.",
    who: "Trade marketing manager, key account manager",
    problem: "Brands pay for shelf position: eye level, next to a hero product, at the front. Whether that position is kept is rarely checked.",
    how: [
      ["The agreed layout is set once", "Upload the planogram for a store type or a paid display."],
      ["Each photo is compared", "The shelf in the photo is compared with the layout, row by row."],
      ["Breaks are listed", "Products out of place are listed with the photo, for the salesman to fix."],
    ],
    faq: [
      ["Do kirana stores even have planograms?", "Usually not a formal one, but paid displays and eye-level deals do. Those are what is checked."],
      ["Can different store types have different layouts?", "Yes, one layout per store type or per paid display."],
    ],
  },
  {
    slug: "price-label-check",
    name: "Price label check",
    title: "Price label check: is the price on the shelf the one you set?",
    seoTitle: "Shelf Price Label Check for FMCG Brands",
    desc: "Find stores where the shelf price label does not match your price or a running scheme, from the same shelf photo.",
    who: "Sales head, pricing and schemes manager",
    problem: "A scheme the shopper never sees does not move sales. Wrong or missing price labels are common and rarely reported.",
    how: [
      ["Labels are read", "Price labels on the shelf are read from the photo."],
      ["Compared with your price list", "Each label is compared with your price or the scheme running that week."],
      ["Mismatches are flagged", "Stores with a wrong or missing label are listed for the next visit."],
    ],
    faq: [
      ["What if there is no label at all?", "A missing label is flagged too; it is often the most common gap."],
      ["Does it read handwritten prices?", "Clear handwritten labels can be read; unclear ones are flagged for a person to check."],
    ],
  },
];

export const INDUSTRIES = [
  {
    slug: "biscuits-and-snacks",
    name: "Biscuits and snacks",
    title: "Shelf audit for biscuit and snack brands",
    seoTitle: "Shelf Audit for Biscuit and Snack Brands in India",
    desc: "Many small packs, crowded shelves and fast rival launches: how biscuit and snack brands can see what is on kirana shelves.",
    points: [
      ["Many SKUs, small packs", "Biscuit and snack shelves hold many similar small packs; each one is counted separately."],
      ["Fast rival launches", "New rival packs appear on shelves quickly; share-of-shelf changes show where."],
      ["Low-price packs sell on visibility", "₹5 and ₹10 packs are bought on sight, so out-of-stock costs sales the same day."],
    ],
  },
  {
    slug: "beverages",
    name: "Beverages",
    title: "Shelf and cooler audit for beverage brands",
    seoTitle: "Shelf and Cooler Audit for Beverage Brands",
    desc: "Shelves and coolers: how beverage brands can check what a kirana store's cooler and shelf actually hold.",
    points: [
      ["Coolers are part of the shelf", "A branded cooler filled with rival drinks is a common gap; the cooler is photographed like a shelf."],
      ["Summer peaks", "Out-of-stock in peak months costs the most; checks can run more often then."],
      ["Many pack sizes", "Each size of each drink is counted, so the right pack can be reordered."],
    ],
  },
  {
    slug: "personal-care",
    name: "Personal care",
    title: "Shelf audit for personal care brands",
    seoTitle: "Shelf Audit for Personal Care Brands in India",
    desc: "Shampoo sachets, soaps and creams: how personal care brands can see shelf presence and price labels in kirana stores.",
    points: [
      ["Sachet strips", "Hanging sachet strips are part of the shelf and are counted too."],
      ["Price labels matter", "Personal care runs many schemes; label checks show whether shoppers see them."],
      ["Premium versus mass", "Premium packs are often kept behind the counter; the report says what was on view."],
    ],
  },
];

// guides: each answers a real buyer search (see the README), so Search Console has something to show
export const POSTS = [
  { slug: "shelf-audit-kirana-stores", title: "Shelf audit in kirana stores: what to measure, and what to ask before you buy software", seoTitle: "Shelf Audit in Kirana Stores: What to Measure", desc: "A plain guide to shelf audits in Indian kirana stores: what to measure, why paper forms fail, and what to ask any shelf audit software.", read: "6 min", body: [
    ["p", "A shelf audit answers one question: when a shopper stands in front of the shelf, can they find your product? In a supermarket that is checked by merchandisers. In a kirana store it usually depends on what a salesman remembers to write down after the visit."],
    ["h2", "Four things worth measuring"],
    ["ul", ["<b>On shelf or not:</b> is each product you sell to this store actually there today?", "<b>Share of shelf:</b> how much of the shelf your brand holds, next to rivals.", "<b>Planogram:</b> are products where the agreed layout says they should be?", "<b>Price label:</b> does the label match the price you set?"]],
    ["h2", "Why paper and app forms fall short"],
    ["p", "Forms are filled after the visit, from memory, and they are easy to fill without looking. They also arrive too late: by the time a missing product shows up in a report, the shopper has already bought another brand."],
    ["h2", "What a photo-based audit changes"],
    ["p", "With a photo taken in the store, the record is the shelf itself, not someone's memory of it. Software can then count products, compare against the planogram, and flag stores where something is wrong, the same day."],
    ["h2", "Questions to ask any shelf audit software"],
    ["ol", ["Does it work on crowded kirana shelves and phone photos, or only in supermarkets?", "How does it stop staged or reused photos (in-app camera only, time and location, surprise re-checks)?", "Can it learn your own product range, including new packs?", "How soon does the salesman see the result: before leaving the store, or the next day?", "Who owns the photos and where are they stored?"]],
  ] },
  { slug: "retail-execution-app-guide", title: "Retail execution apps: what they do, and where shelf photos fit", seoTitle: "Retail Execution App Guide for FMCG Sales Teams", desc: "What a retail execution app does for an FMCG sales team in India, what to look for, and where shelf photo audits fit in.", read: "5 min", body: [
    ["p", "A retail execution app is what a field salesman uses on a store visit: the beat plan, the order, the scheme, and the record of what he saw. Most teams already use one for orders. Fewer use it to see the shelf."],
    ["h2", "What a good one covers"],
    ["ul", ["The beat: which stores to visit today and in what order.", "The order: what the store buys, with the running schemes.", "The shelf: what is on it, what is missing, and what rivals did.", "The record: a visit that can be checked later, with time and place."]],
    ["h2", "Where shelf photos fit"],
    ["p", "Orders tell you what was sold into the store. The shelf tells you what the shopper can buy. A photo in the same visit connects the two: a store that orders but never shows the product on the shelf is a problem an order report will not show."],
    ["h2", "What to ask"],
    ["ol", ["Does the shelf check add time to the visit, and how much?", "Does it work offline in areas with weak network?", "Can the salesman act on the result in the same visit?"]],
  ] },
  { slug: "how-to-measure-share-of-shelf", title: "How to measure share of shelf in kirana stores", seoTitle: "How to Measure Share of Shelf in Kirana Stores", desc: "Share of shelf in plain words: what it is, two ways to count it, and why it moves before market share does.", read: "4 min", body: [
    ["p", "Share of shelf is the part of a category's shelf space your brand holds. It is what the shopper sees, which is why it often moves before sales and market share do."],
    ["h2", "Two ways to count it"],
    ["ul", ["<b>By facings:</b> count the product fronts facing the shopper. Simple and works on photos.", "<b>By shelf length:</b> measure the width your products take. More exact, harder in crowded stores."]],
    ["h2", "Doing it in kirana stores"],
    ["p", "Kirana shelves are crowded and change often, so a count from memory is rarely right. Counting facings from a photo taken in the visit is the practical way: same method every time, in every store."],
    ["h2", "Reading the number"],
    ["p", "One store's share means little; the change across visits and areas matters. A falling share in one area usually points to a rival's push there."],
  ] },
  { slug: "perfect-store-checklist", title: "A perfect store checklist for FMCG sales teams", seoTitle: "Perfect Store Checklist for FMCG Sales Teams", desc: "A short perfect store checklist for kirana and modern trade visits: availability, visibility, price and promotion.", read: "4 min", body: [
    ["p", "A perfect store checklist is the short list a salesman checks in every store. It works best when it is short, the same everywhere, and can be checked from what is in front of him."],
    ["h2", "The checklist"],
    ["ol", ["<b>Availability:</b> every must-have product is on the shelf.", "<b>Visibility:</b> your products are at eye level and facing the shopper.", "<b>Share:</b> your share of the category shelf did not fall since the last visit.", "<b>Price:</b> the label matches your price or the running scheme.", "<b>Promotion:</b> paid displays and posters are where they should be."]],
    ["h2", "Keeping it honest"],
    ["p", "A checklist ticked from memory is the weakest record there is. A photo of the shelf, taken in the visit, lets anyone check the ticks later."],
  ] },
];

export const FAQ = [
  ["What if a salesman arranges the shelf only for the photo?", "One staged photo is easy; staying unnoticed is not. Photos come only from the in-app camera with time and location, the app asks for surprise re-checks, and a store whose shelf always looks perfect while its sales fall is flagged for review."],
  ["Does it work in small kirana stores, not only supermarkets?", "It is designed for crowded, mixed shelves and phone photos in normal store light."],
  ["Do we need new hardware?", "No. It runs on the phones your sales team already carries."],
  ["Is this a real product?", "No. DukaanLens is a test company used to try out Growth OS. It has no customers, and nothing here is for sale."],
];
