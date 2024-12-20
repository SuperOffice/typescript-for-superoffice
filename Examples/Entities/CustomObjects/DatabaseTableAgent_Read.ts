import { soApi } from '../../../Helpers/webApiHelper';
import { context } from '../../../Helpers/logHelper';

var databaseTableAgent = soApi.getDatabaseTableAgent();

/* 
* https://docs.superoffice.com/en/api/netserver/web-services/howto/custom-objects/rest-get-custom-object-row.html?tabs=DatabaseTableAgent
*/
var result = await databaseTableAgent.readRowAsync("y_equipment", 1);

const obj = JSON.stringify(result, null, 2);
context.result.body = obj;