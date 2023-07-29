function onOpen() {
 var properties = PropertiesService.getScriptProperties();
 properties.deleteProperty("displayedRows");
}


function showForm() {
 var html = HtmlService.createHtmlOutputFromFile('UI')
   .setWidth(400)
   .setHeight(300);
 SpreadsheetApp.getUi().showModalDialog(html, 'Add Entry');
}


function processForm(form) {
 var sheet = SpreadsheetApp.getActive().getSheetByName("Entries");
 var lastRow = sheet.getLastRow();
 var values = [form.name || "", form.recipient, form.kindness];
 sheet.getRange(lastRow + 1, 1, 1, values.length).setValues([values]);
 SpreadsheetApp.getUi().alert("Successfully added your Fish of Thanks. Thanks!");

}

function getRandomKindness() {
 var sheet = SpreadsheetApp.getActive().getSheetByName("Entries");
 var lastRow = sheet.getLastRow();

 // Check if the sheet has a header row
 var headerRow = 1;
 if (lastRow < headerRow) {
   SpreadsheetApp.getUi().alert("The sheet doesn't have a header row. Please add a header row in row 1.");
   return;
 }

 // Check if there are any entries
 var numRows = lastRow - headerRow;
 if (numRows < 1) {
   SpreadsheetApp.getUi().alert("There are no active Fish of Thanks...add the first one!");
   return;
 }

 var properties = PropertiesService.getScriptProperties();
 var displayedRows = properties.getProperty("displayedRows");
 if (!displayedRows) {
   displayedRows = [];
 } else {
   displayedRows = JSON.parse(displayedRows);
 }

 if (displayedRows.length == numRows) {
   SpreadsheetApp.getUi().alert("You have read all of the Fish of Thanks messages!");
   return;
 }

 var randomRow;
 do {
   randomRow = Math.floor(Math.random() * numRows) + 2;
 } while (displayedRows.indexOf(randomRow) != -1);

 displayedRows.push(randomRow);
 properties.setProperty("displayedRows", JSON.stringify(displayedRows));

 var name = sheet.getRange(randomRow, 1).getValue();
 var recipient = sheet.getRange(randomRow, 2).getValue();
 var kindness = sheet.getRange(randomRow, 3).getValue();

 var template = HtmlService.createTemplateFromFile('message');
 template.recipient = recipient;
 template.kindness = kindness;
 template.name = name;

 var htmlOutput = template.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME);
 SpreadsheetApp.getUi().showModalDialog(htmlOutput, "message");
}