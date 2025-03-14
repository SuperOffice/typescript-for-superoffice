
import { soApi } from '../../../Helpers/webApiHelper';
import { context } from '../../../Helpers/logHelper';
    
//Variables
const title = "NewTitle";
const entityId = 2;

const agent = soApi.getTicketAgent();
let entity = await agent.getTicketEntityAsync(entityId);
entity.title = title;
entity = await agent.saveTicketEntityAsync(entity);
context.result.body = JSON.stringify(entity);
