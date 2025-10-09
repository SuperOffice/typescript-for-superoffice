import { getCookieValue } from '@/utils/cookieUtils';
import { getParentBaseUrl } from '@/utils/urlUtils';
import { WebApi, type ContactEntity } from '@superoffice/webapi';
import type { AxiosRequestConfig } from 'axios';

let soApi: WebApi;

// Function to configure the WebApi instance with the XSRF token and base URL
export function configureWebApi() {
    const xsrfToken: string = getCookieValue("XSRF-TOKEN") || "Not found, local development";
    const baseUrl: string = getParentBaseUrl() || "https://api.superoffice.com";

    //Debug purposes
    console.log("XSRF-TOKEN:", xsrfToken);
    console.log("Base URL:", baseUrl);

    if (xsrfToken) {
        const config: AxiosRequestConfig = {
            headers: {
                'X-XSRF-TOKEN': xsrfToken,
            }
        };
        soApi = new WebApi(`${baseUrl}api`, config);
    }
}

// Export the configured WebApi instance
export { soApi };
