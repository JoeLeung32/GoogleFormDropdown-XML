# Google Form, Google Sheet, Google Script integration with external XML data
## You need
* Google Form
* Google Sheet
* Google Script
* External XML (Available public access, [example](https://github.com/JoeLeung32/google_form_sheet_script_integration_with_xml/blob/master/xml/event_date.xml))

## Let's Go
1. Build your Google Form and setup some questions for dorpdown (select-options).
1. Get your Google Form ID from URL.
    1. Example: `https://docs.google.com/forms/d/1D8XX9-dcEpJtft5MXmWDlRZKw71u4gXfJPrEjvuyJTM/edit`,
    1. Your form id is `1D8XX9-dcEpJtft5MXmWDlRZKw71u4gXfJPrEjvuyJTM`
1. Get droupdown `data-item-id` in your form.
    1. For example `data-item-id="453749969" data-observe-id="453749969"`, 
    1. The `data-item-id` is `453749969`
1. Access your form sheet.
    1. You can create a new Google Sheet for your form, it will been connected automatically.
1. Create a new sheets named `SimpleDropdowns`
1. Add your code in **Script editor**
    1. On your computer, open a spreadsheet at [sheets.google.com](sheets.google.com).
    1. Click Tools and then Script editor.
    1. Paste our [code.gs](https://github.com/JoeLeung32/google_form_sheet_script_integration_with_xml/blob/master/googeScript/code.gs).
    1. Fill up your collected data: formId, data-item-id and XML URL.
    1. Click Save.
1. Setup your Project Triggers
    1. Click Edit and then Current project triggers.
    1. Add 2 trigger for run `updateForm` and `updateXML`.
    1. For my settings there are base on `Head`, `Time-driven`, `Hour timer` and `Every Hour`.
    1. Click Save.
1. Finished :-)
    1. Your can control your dropdown options by XML data.
