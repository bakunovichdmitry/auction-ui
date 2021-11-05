import React, {useEffect, useState} from 'react';
import LotService from "../../services/LotService";
import {
  useParams
} from "react-router-dom";


export default function LotDetail() {
    let { uuid } = useParams()
    let [auction, setAuction] = useState([]);
    let [item, setItem] = useState([]);

    function getLot() {
        LotService.getLot(uuid).then(response => {
                setAuction(response.data.auction);
                setItem(response.data.item)
            }
        )
    }

    useEffect(() => {
            getLot();
        }, []
    )


    return (
        <div>

            <h3>ID: {uuid}</h3>
            <img src={item.photo} width="200" height="200"/>
            <h1>{item.title}</h1>
            <h2>{item.description}</h2>


            <p>{auction.status}</p>
            <p>{auction.curreny_price}</p>
            <p>{auction.step}</p>
            <p>{auction.closing_date}</p>
            <p>{auction.opening_date}</p>
            <p>{auction.type}</p>

            <button>
                Make Offer
            </button>


            <button>
                Buy it now
            </button>

        </div>
    )
}