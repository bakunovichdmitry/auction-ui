import React, {useEffect, useState} from "react";
import {
    Route,
    Switch
} from 'react-router-dom';


import LotList from "./components/Lot/LotList";
import LotService from "./services/LotService";
import Login from "./components/Login/Login";
import useToken from "./utils/user";
import LotDetail from "./components/Lot/LotDetail";

export default function App() {
    const [lots, setLots] = useState([])
    const {token, setToken} = useToken();

    // const [isLotsLoading,]

    function getLots() {
        LotService.getLots().then(response => {
                setLots(response.data);
            }
        )
    }

    useEffect(() => {
            // getLots();
        }, []
    )

    if (!token) {
        return <Login setToken={setToken}/>
    }

    if (token) {
        // console.log(token);
        // const decodedJwt = JSON.parse(atob(token.split('.')[1]));
        // console.log(decodedJwt.exp * 1000, Date.now())
        // if (decodedJwt.exp * 1000 < Date.now()) {
        //     setToken(false);
        // }
        return (
            <div>
                <Switch>

                    <Route exact path="/">
                        <LotList lots={lots}/>
                    </Route>
                    <Route path="/lots/:uuid">
                        <LotDetail/>
                    </Route>
                </Switch>
            </div>
        )
    }
}
