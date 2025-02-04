
import { soApi } from '../../Helpers/webApiHelper';
import { context } from '../../Helpers/logHelper';

const agent = soApi.getArchiveAgent();
var result = await agent.getArchiveListByColumns2Async(
                "dynamic",
                "contact.contact_id,contact.name,contact.category_idx",
                "contact.name",
                "contact.contact_id eq 5",
                "",
                0,
                10
            );

const obj = JSON.stringify(result, null, 2);
context.result.body = obj;