import { context } from "../../Helpers/logHelper";

// Documentation: https://docs.superoffice.com/en/automation/crmscript/datatypes/eventdata-type.html
let eventData = context.eventData;

// Get an input value.
const sale_id = eventData.inputValues["SaleEntity.SaleId"];

// Print the event data to the result body
context.result.body = JSON.stringify(eventData);
