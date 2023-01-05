import {api} from '../api'

export default class UserService {
  static signIn(value) {
    return api.post(`users/auth/jwt-token/`, {
        username: value.username,
        password: value.password
      }
    )
  }

  static signUp(value) {
    return api.post(`users/sign-up/`, {
        username: value.username,
        password: value.password,
        confirmPassword: value.confirmPassword,
        email: value.email
      }
    )
  }
}