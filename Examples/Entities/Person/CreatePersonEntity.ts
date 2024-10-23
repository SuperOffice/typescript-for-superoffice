
import { soApi } from '../../../Helpers/webApiHelper';
import { context } from '../../../Helpers/logHelper';
    
//Variables
const firstname = "NewFirstname";
const lastname = "NewLastname";

const agent = soApi.getPersonAgent();
let entity = await agent.createDefaultPersonEntityAsync();
entity.firstname = firstname;
entity.lastname = lastname;
entity = await agent.savePersonEntityAsync(entity);
context.result.body = JSON.stringify(entity);
