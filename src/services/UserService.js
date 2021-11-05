import http from '../http-common'

export default class UserService {
    static loginUser(username = '', password = '') {
        return http.post(`users/jwt/token/`, {
                username: username,
                password: password,
            }
        ).then(response => response.data)
    }
}