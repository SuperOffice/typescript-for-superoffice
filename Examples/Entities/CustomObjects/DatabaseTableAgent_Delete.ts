import { soApi } from '../../../Helpers/webApiHelper';
import { context } from '../../../Helpers/logHelper';

var databaseTableAgent = soApi.getDatabaseTableAgent();

/*
* https://docs.superoffice.com/en/api/netserver/web-services/howto/custom-objects/rest-delete-custom-object-row.html?tabs=DatabaseTableAgent
*/
var tableRow = 
{
    "tableName": "y_equipment",
    "id": 2
};

var result = await databaseTableAgent.deleteRowAsync(tableRow); 
const obj = JSON.stringify(result, null, 2);
context.result.body = obj;