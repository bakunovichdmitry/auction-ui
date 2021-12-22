import React from "react";
import UserService from "../../services/UserService";
import {useHistory} from "react-router-dom";

export default function Logout() {
    let history = useHistory();

    const logout = () => {
        UserService.logout()
        history.push('/lots');
    }

    return (
        <div style={{position: "absolute", right: "5px" }}>
            <button className="logout-btn" onClick={logout}>
                Logout
            </button>
        </div>
    )
}