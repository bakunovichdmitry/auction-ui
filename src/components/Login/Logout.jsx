import React from "react";
import {useHistory} from "react-router-dom";


import {useDispatch, useSelector} from "react-redux";

import LogoutIcon from "../../assets/logout.png";
import {actionCreator} from "../../store/actions";


export default function Logout() {
  let history = useHistory();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(
      actionCreator.logout()
    )
    history.push('/');
  }

  return (
    <img
      onClick={logout}
      className="logout-icon"
      src={LogoutIcon}
      alt="Logout"
    />
  )
}