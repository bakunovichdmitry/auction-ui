import {useState} from 'react';

// export function setToken(token) {
//     return sessionStorage.setItem('tokenAccess', token);
// }
//
// export function getToken() {
//     return sessionStorage.getItem('tokenAccess') || null;
// }

export default function useToken() {

    const getToken = () => {
        return sessionStorage.getItem('tokenAccess') || null;
    };

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        sessionStorage.setItem('tokenAccess', userToken);
        setToken(userToken);
    };

    return {
        setToken: saveToken,
        token
    }
}