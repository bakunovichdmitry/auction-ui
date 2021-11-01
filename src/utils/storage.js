export const setToLocalStorage = (key, value) => {
    sessionStorage.setItem(key, value);
}

export const getFromLocalStorage = (key) => {
    sessionStorage.getItem(key);
}
