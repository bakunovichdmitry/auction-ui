import {api} from '../api'
import {removeFromLS} from "../utils/storage";

export default class UserService {
    static login(username = '', password = '') {
        return api.post(`users/jwt/token/`, {
                username: username,
                password: password,
            }
        )
    }

    static logout() {
        removeFromLS('isAuth');
        removeFromLS('token');
    }
}