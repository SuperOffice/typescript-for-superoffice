// Function to get the base URL of the parent window
export function getParentBaseUrl(): string | null {
    try {
        const parentUrl = new URL(window.parent.location.href); // Parse the parent URL
        const pathnameParts = parentUrl.pathname.split('/'); // Split the pathname into parts
        const basePath = pathnameParts.slice(0, 2).join('/'); // Keep only the first three parts
        const baseUrl = `${parentUrl.origin}${basePath}/`; // Combine origin and base path
        return baseUrl; // Return the base URL
    } catch (error) {
        return null;
    }
}
