export const setToLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
}

export const getFromLocalStorage = (key) => {
    localStorage.getItem(key);
}
