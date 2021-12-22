import React, {useEffect, useState} from 'react';
import LotItem from "./LotItem";
import LotService from "../../services/LotService";

const LotList = () => {

    const [lots, setLots] = useState([])

    function getLots() {
        LotService.getLots().then(response => {
                console.log(response.data.results)
                setLots(response.data.results);
            }
        )
    }

    useEffect(() => {
            getLots();
        }, []
    )
    return (
        <div className="lot-list__wrapper">
            <div>
                <div className="logo">Auctions</div>
                <div className="flex">
                    {lots.map((lot) =>
                        <LotItem key={lot.unique_id} auction={lot.auction} item={lot.item} unique_id={lot.unique_id}/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LotList;