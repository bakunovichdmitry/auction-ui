export const setUserSession = (token, tokenRefresh) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('tokenRefresh', tokenRefresh);
}

export function getToken() {
    return sessionStorage.getItem('token') || null;
}
