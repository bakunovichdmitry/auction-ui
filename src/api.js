import axios from "axios";

export const API_URL = "https://itechart-auction.herokuapp.com"

export const api = axios.create({
    baseURL: API_URL,
    mode: "cors",
    headers: {
        "Content-type": "application/json"
    }
});


const checkTokenInterceptor = (config) => {
    const token = localStorage.getItem('token');
    const isAuth = localStorage.getItem('isAuth');
    if (isAuth && token) {
        const decodedJwt = JSON.parse(atob(token.split('.')[1]));
        if (decodedJwt.exp * 1000 < Date.now()) {
            localStorage.clear();
            return config;
        }
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
};

api.interceptors.request.use(checkTokenInterceptor);