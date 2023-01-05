import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import {useSelector} from "react-redux";

function PrivateRoute({component: Component, ...rest}) {
  const isAuthenticated = useSelector((state) => state.authReducer.isAuthenticated)

  return (
    <Route {...rest} render={(props) => (
      isAuthenticated
        ? <Component {...props} />
        : <Redirect to={{
          pathname: '/sign-in',
          state: {url: rest.location.pathname}
        }}/>
    )}/>
  )
}

export default PrivateRoute;