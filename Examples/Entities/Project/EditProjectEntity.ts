
import { soApi } from '../../../Helpers/webApiHelper';
import { context } from '../../../Helpers/logHelper';
    
//Variables
const name = "NewName";
const entityId = 2;

const agent = soApi.getProjectAgent();
let entity = await agent.getProjectEntityAsync(entityId);
entity.name = name;
entity = await agent.saveProjectEntityAsync(entity);
context.result.body = JSON.stringify(entity);
