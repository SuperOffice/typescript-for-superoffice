import { RTL } from "../../../Helpers/extensionMethods";
import { context } from "../../../Helpers/logHelper";
//Variables
const Name = "NewName";
const entityId = 2;
const agent = new RTL.ProjectAgent();
let entity = await agent.getProjectEntityAsync(entityId);
entity.Name = Name;
entity = await agent.saveProjectEntityAsync(entity);
context.result.body = JSON.stringify(entity);