import { RTL } from "../../Helpers/extensionMethods";
import { context } from "../../Helpers/logHelper";

//Variables
const entityId: number = 25;

const agent = new RTL.ProjectAgent();
await agent.deleteProjectEntityAsync(entityId);
context.result.body = 'EntityId '+ entityId.toString() + 'deleted'; 