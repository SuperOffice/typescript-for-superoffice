import { type Address, type Contact, type ContactActivity, type ContactEntity, type ContactSummary, type DuplicateEntry, type DuplicateRule, type Person, type PersonEntity, type PreviewContact, type StringDictionary, type WebApiRequestOptions } from '@superoffice/webapi';
import type { IContactAgent } from '@superoffice/webapi/ContactAgent.js';

// A mock implementation of IContactAgent for development and testing purposes
export class ContactAgentMock implements IContactAgent {
    async getContactEntityAsync(contactId: number): Promise<ContactEntity> {
        return {
            contactId: contactId,
            name: 'Mock Customer',
            emails: [{ value: 'mock@example.com' }],
            tableRight: { mask: 0, reason: "yes" }
        };
    }
    async createDefaultContactEntityAsync(): Promise<ContactEntity> {
        console.warn('MockContactAgent: createDefaultContactEntityAsync not implemented.');
        return Promise.resolve({ contactId: -1, name: 'Not Implemented', emails: [] });
    }
    async saveContactEntityAsync(entity: ContactEntity): Promise<ContactEntity> {
        console.warn('MockContactAgent: saveContactEntityAsync not implemented.');
        return Promise.resolve(entity);
    }
    async deleteContactEntityAsync(ContactEntityId: number): Promise<void> {
        console.warn('MockContactAgent: deleteContactEntityAsync not implemented.');
        return Promise.resolve();
    }
    async createDefaultPreviewContactAsync(): Promise<PreviewContact> {
        console.warn('MockContactAgent: createDefaultPreviewContactAsync not implemented.');
        return Promise.resolve({ contactId: -1, name: 'Not Implemented', emails: [] });
    }
    async getContactAsync(contactId: number): Promise<Contact> {
        console.warn('MockContactAgent: getContactAsync not implemented.');
        return Promise.resolve({ contactId, name: 'Not Implemented', emails: [] });
    }
    async getMyActiveContactsAsync(activityStartTime: unknown, contactCategories?: unknown, actionType?: unknown, webapi_options?: unknown): Promise<ContactActivity[]> {
        console.warn('MockContactAgent: getMyActiveContactsAsync not implemented.');
        return Promise.resolve([]);
    }
    async undeleteAsync(id: unknown, webapi_options?: unknown): Promise<void> {
        console.warn('MockContactAgent: undeleteAsync not implemented.');
        return Promise.resolve();
    }
    async getPersonsAsync(contactId: unknown, webapi_options?: unknown): Promise<Person[]> {
        console.warn('MockContactAgent: getPersonsAsync not implemented.');
        return Promise.resolve([]);
    }
    async getContactWithPersonsAsync(contactId: unknown, webapi_options?: unknown): Promise<ContactEntity> {
        console.warn('MockContactAgent: getContactWithPersonsAsync not implemented.');
        return Promise.resolve({ contactId: -1, name: 'Not Implemented', emails: [] });
    }
    async getMyContactAsync(webapi_options?: WebApiRequestOptions): Promise<ContactEntity> {
        console.warn('MockContactAgent: getMyContactAsync not implemented.');
        return Promise.resolve({ contactId: -1, name: 'Not Implemented', emails: [] });
    }
    async getMyBizCardAsync(webapi_options?: WebApiRequestOptions): Promise<ContactEntity> {
        console.warn('MockContactAgent: getMyBizCardAsync not implemented.');
        return Promise.resolve({ contactId: -1, name: 'Not Implemented', emails: [] });
    }
    async changeCountryAsync(contactEntity: unknown, toCountryId?: unknown, webapi_options?: unknown): Promise<ContactEntity> {
        console.warn('MockContactAgent: changeCountryAsync not implemented.');
        return Promise.resolve({ contactId: -1, name: 'Not Implemented', emails: [] });
    }
    async getAddressAsync(contactId: unknown, webapi_options?: unknown): Promise<Address> {
        console.warn('MockContactAgent: getAddressAsync not implemented.');
        return Promise.resolve({});
    }
    async getAddressByCountryAsync(contactId: unknown, countryId?: unknown, webapi_options?: unknown): Promise<Address> {
        console.warn('MockContactAgent: getAddressByCountryAsync not implemented.');
        return Promise.resolve({});
    }
    async addPersonAsync(contactId: unknown, newPersonEntity?: unknown, webapi_options?: unknown): Promise<PersonEntity> {
        console.warn('MockContactAgent: addPersonAsync not implemented.');
        return Promise.resolve({ personId: -1, name: 'Not Implemented', emails: [] });
    }
    async getDuplicatesAsync(name: unknown, webapi_options?: unknown): Promise<DuplicateEntry[]> {
        console.warn('MockContactAgent: getDuplicatesAsync not implemented.');
        return Promise.resolve([]);
    }
    async createNewEntryAsync(duplicate: unknown, webapi_options?: unknown): Promise<number> {
        console.warn('MockContactAgent: createNewEntryAsync not implemented.');
        return Promise.resolve(-1);
    }
    async getDuplicateRulesAsync(webapi_options?: WebApiRequestOptions): Promise<DuplicateRule[]> {
        console.warn('MockContactAgent: getDuplicateRulesAsync not implemented.');
        return Promise.resolve([]);
    }
    async setDuplicateRulesStatusAsync(rules: unknown, webapi_options?: unknown): Promise<void> {
        console.warn('MockContactAgent: setDuplicateRulesStatusAsync not implemented.');
        return Promise.resolve();
    }
    async mergeAsync(sourceContactId: unknown, destinationContactId?: unknown, mergeIdenticalPersons?: unknown, replaceEmptyFieldsOnDestination?: unknown, webapi_options?: unknown): Promise<void> {
        console.warn('MockContactAgent: mergeAsync not implemented.');
        return Promise.resolve();
    }
    async copyAsync(sourceContactId: unknown, destinationContactName?: unknown, destinationContactDepartment?: unknown, copyPersons?: unknown, webapi_options?: unknown): Promise<number> {
        console.warn('MockContactAgent: copyAsync not implemented.');
        return Promise.resolve(-1);
    }
    async getNameDepartmentDuplicatesAsync(name: unknown, department?: unknown, webapi_options?: unknown): Promise<DuplicateEntry[]> {
        console.warn('MockContactAgent: getNameDepartmentDuplicatesAsync not implemented.');
        return Promise.resolve([]);
    }
    async getDomainDuplicatesAsync(domain: unknown, webapi_options?: unknown): Promise<DuplicateEntry[]> {
        console.warn('MockContactAgent: getDomainDuplicatesAsync not implemented.');
        return Promise.resolve([]);
    }
    async isNumberValidAsync(contactId: unknown, number?: unknown, webapi_options?: unknown): Promise<boolean> {
        console.warn('MockContactAgent: isNumberValidAsync not implemented.');
        return Promise.resolve(false);
    }
    async getQuoteVersionAddressesAsync(quoteVersionId: unknown, webapi_options?: unknown): Promise<Address[]> {
        console.warn('MockContactAgent: getQuoteVersionAddressesAsync not implemented.');
        return Promise.resolve([]);
    }
    async saveQuoteVersionAddressAsync(quoteVersionId: unknown, address?: unknown, addressType?: unknown, countryId?: unknown, webapi_options?: unknown): Promise<Address> {
        console.warn('MockContactAgent: saveQuoteVersionAddressAsync not implemented.');
        return Promise.resolve({});
    }
    async deleteExpiredAsync(webapi_options?: WebApiRequestOptions): Promise<void> {
        console.warn('MockContactAgent: deleteExpiredAsync not implemented.');
        return Promise.resolve();
    }
    async getContactSummaryAsync(contactId: unknown, limit?: unknown, webapi_options?: unknown): Promise<ContactSummary> {
        console.warn('MockContactAgent: getContactSummaryAsync not implemented.');
        return Promise.resolve({} as import("@superoffice/webapi").ContactSummary);
    }
    async validateContactEntityAsync(contactEntity: unknown, webapi_options?: unknown): Promise<StringDictionary> {
        console.warn('MockContactAgent: validateContactEntityAsync not implemented.');
        return Promise.resolve({});
    }
    async enrichContactEntityAsync(contactEntity: unknown, enrichId?: unknown, webapi_options?: unknown): Promise<ContactEntity> {
        console.warn('MockContactAgent: enrichContactEntityAsync not implemented.');
        return Promise.resolve({});
    }
    async getContactListAsync(contactIds: number[]): Promise<Contact[]> {
        console.warn('MockContactAgent: getContactListAsync not implemented.');
        return Promise.resolve([]);
    }
    async getMyContactsAsync(webapi_options?: WebApiRequestOptions): Promise<Contact[]> {
        console.warn('MockContactAgent: getMyContactsAsync not implemented.');
        return Promise.resolve([]);
    }
    async getMyRecentContactsAsync(sourceType: unknown, webapi_options?: unknown): Promise<Contact[]> {
        console.warn('MockContactAgent: getMyRecentContactsAsync not implemented.');
        return Promise.resolve([]);
    }
    async getPreviewContactAsync(contactId: unknown, webapi_options?: unknown): Promise<PreviewContact> {
        console.warn('MockContactAgent: getPreviewContactAsync not implemented.');
        return Promise.resolve({} as PreviewContact);
    }
    async getPreviewEnrichContactAsync(enrichId: unknown, webapi_options?: unknown): Promise<PreviewContact> {
        console.warn('MockContactAgent: getPreviewEnrichContactAsync not implemented.');
        return Promise.resolve({} as PreviewContact);
    }
}
