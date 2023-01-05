import {AUTHENTICATION_SUCCESS, LOGOUT} from "../../constants/actionTypes";


export const authenticateSuccess = (userInfo) => {
  return {
    type: AUTHENTICATION_SUCCESS,
    payload: {
      user: userInfo,
    },
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};