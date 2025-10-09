// Utility to get cookie value
export function getCookieValue(cookieName: string): string | null {
    const match = document.cookie.match(new RegExp('(^| )' + cookieName + '=([^;]+)'));
    return match && typeof match[2] === 'string' ? match[2] : null;
}
