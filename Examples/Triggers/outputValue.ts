import { context } from "../../Helpers/logHelper";

// Documentation: https://docs.superoffice.com/en/automation/crmscript/datatypes/eventdata-type.html
let eventData = context.eventData;

// Set an output value.
eventData.outputValues["SaleEntity.UserDefinedFields.SuperOffice:5"] = "21";

// Print the event data to the result body
context.result.body = JSON.stringify(eventData);
