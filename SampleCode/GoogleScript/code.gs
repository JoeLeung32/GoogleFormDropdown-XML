var __formID__ = '<-Your Form ID->';
var __dropDownIDListOne__ = '<-Your Dropdown data-item-id->';
var __dropDownIDListTwo__ = '<-Your Dropdown data-item-id->';
var __sheetName__ = 'SimpleDropdowns';
var __xmlA1__ = 'https://example.com/branch.xml';
var __xmlC1__ = 'https://example.com/event_date.xml';

function onOpen(e) {
  updateForm();
  updateXML();
}

function onEdit(e) {
  updateForm();
  updateXML();
}

function onChange(e) {
  updateForm();
  updateXML();
}

function onInstall(e) {
  onOpen(e);
}

function setOptions($method,sheetData,$chi,$en) {
  var options = [];
  switch($method){
    case 'row_with_lang' :
      var sheetValues = sheetData.getRange(1, $chi, sheetData.getMaxRows()).getDisplayValues();
      var sheetValues_en = sheetData.getRange(1, $en, sheetData.getMaxRows()).getDisplayValues();
      for (var row in sheetValues) {
        for (var col in sheetValues[row]) {
          if(sheetValues[row][col].length && sheetValues[row][col] != '') {
            options[row] = sheetValues[row][col] + ' ' + sheetValues_en[row][col];
          }
        }
      }
      break;
    case 'row' :
      var sheetValues = sheetData.getRange(1, $chi, sheetData.getMaxRows()).getDisplayValues();
      for (var row in sheetValues) {
        for (var col in sheetValues[row]) {
          if(sheetValues[row][col].length && sheetValues[row][col] != '') {
            options[row] = sheetValues[row][col];
          }
        }
      }
      break;
  }
  return options;
}

function updateForm() {
  var form = FormApp.openById(__formID__);
  var sheetData = SpreadsheetApp.getActive().getSheetByName(__sheetName__)
  
  var listOne = form.getItemById(__dropDownIDListOne__).asListItem();
  listOne.setChoiceValues(setOptions('row',sheetData,1,2));
  
  var listTwo = form.getItemById(__dropDownIDListTwo__).asListItem();
  listTwo.setChoiceValues(setOptions('row',sheetData,3,0));
}

function updateXML() {
  var newDate = new Date();
  var refSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("SimpleDropdowns");
  refSheet.getRange('A1:Z100').setValue('');
  refSheet.getRange('A1').setFormula('=IMPORTXML(__xmlA1__, "/root/item")');
  refSheet.getRange('C1').setFormula('=IMPORTXML(__xmlC1__, "/root/item")');
  SpreadsheetApp.flush();
}
