// DukaanLens test site. The enquiry form sends a generate_lead event to the data layer (Google Tag Manager reads it
// once it is installed) and, when LEADS_URL is set, posts the enquiry to the leads sheet. Nothing else is tracked here.
window.dataLayer = window.dataLayer || [];
const LEADS_URL = "https://script.google.com/macros/s/AKfycbxrVfHhIYi5SBFLlAWGxFde5afWZ-xmjogMq77rQ933a9B7h7mr3dXWSS-9VskgLTzWog/exec"; // the leads sheet's web-app address

document.querySelectorAll("form.lead").forEach((form) => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(form).entries());
    const params = new URLSearchParams(location.search);
    const data = {
      Name: f.name || "",
      Email: f.email || "",
      Company: f.company || "",
      Phone: f.phone || "",
      Role: f.role || "",
      Sites: f.sites || "",
      Message: f.need || "",
      Source: params.get("utm_source") || "",
      Medium: params.get("utm_medium") || "",
      Campaign: params.get("utm_campaign") || "",
      Page: location.pathname,
      gclid: params.get("gclid") || "",
    };
    window.dataLayer.push({ event: "generate_lead", form_name: form.dataset.form || "contact" });
    if (LEADS_URL) {
      try { await fetch(LEADS_URL, { method: "POST", mode: "no-cors", body: JSON.stringify(data) }); } catch (err) { /* the thank-you still shows */ }
    }
    form.style.display = "none";
    const done = form.parentElement.querySelector(".done");
    if (done) done.style.display = "block";
  });
});
