import { RTL } from "../../../Helpers/extensionMethods";
import { context } from "../../../Helpers/logHelper";
//Variables
const newName = "SaleName";
const entityId = 2;
const agent = new RTL.SaleAgent();
let entity = await agent.GetSaleEntity(entityId);
entity.Heading = newName;
entity = await agent.saveSaleEntityAsync(entity);
context.result.body = JSON.stringify(entity);