// Extensions → Apps Script in the Leads sheet → paste → Deploy → New deployment → Web app → Anyone → copy the URL.
// The website form then POSTs its fields (JSON or form data) to that URL.
function doPost(e) {
  var sheet = SpreadsheetApp.getActive().getSheetByName('Leads');
  var head = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  var data = {};
  try { data = JSON.parse(e.postData.contents); } catch (err) { data = e.parameter || {}; }
  data.Timestamp = data.Timestamp || new Date().toISOString();
  var row = head.map(function (h) { return data[h] || data[String(h).toLowerCase()] || ''; });
  sheet.appendRow(row);
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}