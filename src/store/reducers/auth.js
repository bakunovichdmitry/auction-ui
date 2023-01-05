import {AUTHENTICATION_SUCCESS, LOGOUT} from "../../constants/actionTypes";

const initialState = {
  isAuthenticated: localStorage.getItem('token') || false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATION_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
