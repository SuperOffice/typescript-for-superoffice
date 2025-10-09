import { ContactAgentMock } from './contactAgentMock';
import { soApi } from './WebApi';
import type { IContactAgent } from '@superoffice/webapi/ContactAgent.js';

// Returns a Mocked contactAgent in development mode, otherwise the real one
export function getContactAgent(): IContactAgent {
    return import.meta.env.MODE === 'development'
        ? new ContactAgentMock()
        : soApi.getContactAgent();
}
