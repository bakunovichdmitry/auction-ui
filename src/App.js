import React from "react";
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from "./routes/PrivateRoute";


import LotList from "./components/Lot/LotList";
import Login from "./components/Login/Login";
import LotDetail from "./components/Lot/LotDetail";
import Logout from "./components/Login/Logout";

export default function App() {
    return (
        <div className="wrapper">
            { localStorage.getItem('isAuth') && <Logout/> }
            <Switch>
                <Route path={["", "/lots"]} component={LotList} exact/>
                <PrivateRoute path="/lots/:uuid" component={LotDetail} exact/>
                <Route path="/login" component={Login} exact/>
            </Switch>
        </div>
    )
}
