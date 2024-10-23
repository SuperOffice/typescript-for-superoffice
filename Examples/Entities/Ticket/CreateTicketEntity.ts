
import { soApi } from '../../../Helpers/webApiHelper';
import { context } from '../../../Helpers/logHelper';
    
//Variables
const title = "NewTitle";

const agent = soApi.getTicketAgent();
let entity = await agent.createDefaultTicketEntityAsync();
entity.title = title;
entity = await agent.saveTicketEntityAsync(entity);
context.result.body = JSON.stringify(entity);
