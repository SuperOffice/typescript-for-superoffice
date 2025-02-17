
import { soApi } from '../../../Helpers/webApiHelper';
import { context } from '../../../Helpers/logHelper';
    
//Variables
const name = "NewName";
const entityId = 2;

const agent = soApi.getContactAgent();
let entity = await agent.getContactEntityAsync(entityId);
entity.name = name;
entity = await agent.saveContactEntityAsync(entity);
context.result.body = JSON.stringify(entity);
