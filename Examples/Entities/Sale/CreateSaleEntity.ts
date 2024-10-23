
import { soApi } from '../../../Helpers/webApiHelper';
import { context } from '../../../Helpers/logHelper';
    
//Variables
const heading = "NewHeading";

const agent = soApi.getSaleAgent();
let entity = await agent.createDefaultSaleEntityAsync();
entity.heading = heading;
entity = await agent.saveSaleEntityAsync(entity);
context.result.body = JSON.stringify(entity);
