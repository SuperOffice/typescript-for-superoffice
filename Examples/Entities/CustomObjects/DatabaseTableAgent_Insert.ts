import { soApi } from '../../../Helpers/webApiHelper';
import { context } from '../../../Helpers/logHelper';

var databaseTableAgent = soApi.getDatabaseTableAgent();

/*
* https://docs.superoffice.com/en/api/netserver/web-services/howto/custom-objects/rest-add-custom-object-row.html?tabs=DatabaseTableAgent
*/
var newTableRow = 
{
    "tableName": "y_equipment",
    "values": {
        "x_company": "1",
        "x_name": "printer",
        } 
};

var result = await databaseTableAgent.insertRowAsync(newTableRow); 
const obj = JSON.stringify(result, null, 2);
context.result.body = obj;