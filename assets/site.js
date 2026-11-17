// DukaanLens test site. The enquiry form sends a generate_lead event to the data layer (Google Tag Manager reads it
// once it is installed) and, when LEADS_URL is set, posts the enquiry to the leads sheet. Nothing else is tracked here.
window.dataLayer = window.dataLayer || [];
const LEADS_URL = ""; // the leads sheet's web-app address, set during setup

document.querySelectorAll("form.lead").forEach((form) => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const params = new URLSearchParams(location.search);
    data.page = location.pathname;
    data.utm_source = params.get("utm_source") || "";
    data.utm_campaign = params.get("utm_campaign") || "";
    data.gclid = params.get("gclid") || "";
    window.dataLayer.push({ event: "generate_lead", form_name: form.dataset.form || "contact" });
    if (LEADS_URL) {
      try { await fetch(LEADS_URL, { method: "POST", mode: "no-cors", body: JSON.stringify(data) }); } catch (err) { /* the thank-you still shows */ }
    }
    form.style.display = "none";
    const done = form.parentElement.querySelector(".done");
    if (done) done.style.display = "block";
  });
});
