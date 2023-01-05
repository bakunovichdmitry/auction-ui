import React from "react";
import {Route, Switch} from 'react-router-dom';

import Logout from "./components/Login/Logout";
import SignIn from "./components/Authentication/SignIn/SignIn";
import SignUp from "./components/Authentication/SignUp/SignUp";
import Auction from "./components/Auction/Auction";
import Lot from "./components/Lot/Lot";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./routes/PrivateRoute";

import {useSelector} from "react-redux";


const App = () => {
  const isAuthenticated = useSelector((state) => state.authReducer.isAuthenticated)

  return (
    <div className="wrapper">
      {isAuthenticated && <Logout/>}
      <Switch>
        <Route path={["", "/lots"]} component={Auction} exact/>
        {!isAuthenticated && <Route path="/sign-in" component={SignIn} exact/>}
        {!isAuthenticated && <Route path="/sign-up" component={SignUp} exact/>}
        <PrivateRoute path="/lots/:uuid" component={Lot} exact/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  )
}

export default App;
