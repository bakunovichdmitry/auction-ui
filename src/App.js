import React, {useEffect, useState} from "react";
import LotList from "./components/lot/LotList";
import LotService from "./services/LotService";

function App() {
    const [lots, setLots] = useState([])

    // const [isLotsLoading,]

    function getLots() {
        LotService.getLots().then(response =>
            setLots(response.data.results)
        )
    }

    useEffect(() => {
            getLots();
        }, []
    )

    return (
        <div>
            <LotList lots={lots}/>
        </div>
    )

}

export default App;