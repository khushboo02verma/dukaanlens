// "Try it": three made-up shelves read in the browser. Each pack is a coloured box; reading the shelf outlines each
// pack and lists what a report would say. No photo is taken or uploaded.
const OURS = "#e2572b", RIVAL = "#3a6ea5", OTHER = "#9a9384";
const SHELVES = [
  { name: "Biscuits", rows: [
    [["Glucose 100g", OURS, 6], ["Rival cookie", RIVAL, 4], ["Local brand", OTHER, 2]],
    [["Cream biscuit", null, 0], ["Rival cream", RIVAL, 5], ["Marie", OURS, 3]],
    [["Salted crackers", OURS, 4], ["Rival crackers", RIVAL, 4], ["Local brand", OTHER, 3]],
  ], label: { ok: true, text: "Price labels match on 3 of 3 of your products" } },
  { name: "Beverages cooler", rows: [
    [["Cola 250ml", OURS, 3], ["Rival cola", RIVAL, 6]],
    [["Lemon drink", OURS, 2], ["Rival lemon", RIVAL, 5], ["Water", OTHER, 2]],
    [["Juice 200ml", null, 0], ["Rival juice", RIVAL, 4], ["Local soda", OTHER, 3]],
  ], label: { ok: false, text: "Scheme price missing on Cola 250ml" } },
  { name: "Personal care", rows: [
    [["Shampoo sachets", OURS, 8], ["Rival sachets", RIVAL, 6]],
    [["Soap 100g", OURS, 4], ["Rival soap", RIVAL, 4], ["Local soap", OTHER, 2]],
    [["Face cream", OURS, 2], ["Rival cream", RIVAL, 3]],
  ], label: { ok: true, text: "Price labels match on 3 of 3 of your products" } },
];
let pick = 0;
const box = document.getElementById("shelf"), result = document.getElementById("result");

function draw(read) {
  const s = SHELVES[pick], W = 640, H = 300, rowH = H / s.rows.length;
  let svg = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${s.name} sample shelf">`;
  s.rows.forEach((row, ri) => {
    const y = ri * rowH, total = row.reduce((n, p) => n + Math.max(p[2], 2), 0); let x = 8;
    svg += `<rect x="0" y="${y + rowH - 8}" width="${W}" height="8" fill="#8a7a61"/>`;
    for (const [name, color, n] of row) {
      const w = ((W - 16) * Math.max(n, 2)) / total;
      if (!n) { svg += `<rect x="${x + 2}" y="${y + 12}" width="${w - 4}" height="${rowH - 26}" fill="none" stroke="${read ? "#c0392b" : "#d8d2c4"}" stroke-dasharray="6 5" stroke-width="2"/>${read ? `<text x="${x + w / 2}" y="${y + rowH / 2}" text-anchor="middle" font-size="12" fill="#c0392b">gap: ${name}</text>` : ""}`; x += w; continue; }
      const each = w / n;
      for (let i = 0; i < n; i++) svg += `<rect x="${x + i * each + 2}" y="${y + 14}" width="${each - 4}" height="${rowH - 28}" rx="3" fill="${color}"/>`;
      if (read) svg += `<rect x="${x + 1}" y="${y + 10}" width="${w - 2}" height="${rowH - 20}" fill="none" stroke="${color === OURS ? "#1f8a4c" : color === RIVAL ? "#b7791f" : "#6a655a"}" stroke-width="2"/><text x="${x + 4}" y="${y + 9}" font-size="10" fill="#1d1b16">${name} · ${n}</text>`;
      x += w;
    }
  });
  box.innerHTML = svg + "</svg>";
  if (!read) { result.innerHTML = `<h4>Shelf report · sample data</h4><p class="sample">Press "Read the shelf".</p>`; return; }
  const all = s.rows.flat(), mine = all.filter((p) => p[1] === OURS), rival = all.filter((p) => p[1] === RIVAL), gaps = all.filter((p) => !p[1]);
  const facings = (l) => l.reduce((n, p) => n + p[2], 0), share = Math.round((facings(mine) / facings(all)) * 100);
  result.innerHTML = `<h4>Shelf report · ${s.name} · sample data</h4>
    ${mine.map((p) => `<div class="row"><span>${p[0]}, ${p[2]} facings</span><span class="tag ok">On shelf</span></div>`).join("")}
    ${gaps.map((p) => `<div class="row"><span>${p[0]}</span><span class="tag bad">Out of stock</span></div>`).join("")}
    <div class="row"><span>Your share of shelf</span><span class="tag ${share >= 40 ? "ok" : "warn"}">${share}%</span></div>
    <div class="row"><span>Rival facings</span><span class="tag warn">${facings(rival)}</span></div>
    <div class="row"><span>${s.label.text}</span><span class="tag ${s.label.ok ? "ok" : "bad"}">${s.label.ok ? "OK" : "Fix"}</span></div>
    <p class="sample">Made-up shelf and products, worked out in your browser.</p>`;
  window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: "demo_read", shelf: s.name });
}
document.querySelectorAll("[data-shelf]").forEach((b) => b.addEventListener("click", () => {
  pick = Number(b.dataset.shelf); document.querySelectorAll("[data-shelf]").forEach((x) => x.classList.toggle("on", x === b)); draw(false);
}));
document.getElementById("read").addEventListener("click", () => draw(true));
draw(false);
