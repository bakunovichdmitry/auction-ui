import React, {useEffect, useState} from 'react';
import LotService from "../../services/LotService";
import {
    useParams
} from "react-router-dom";
import AuctionService from "../../services/AuctionService";
import {IN_PROGRESS} from "../../common/AuctionStatus";
import {ENGLISH} from "../../common/AuctionType";


export default function LotDetail() {
    const {uuid} = useParams()
    const [auction, setAuction] = useState([]);
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);

    function buyNow() {
        AuctionService.buyItNow(auction.unique_id)
    }

    function makeOffer() {
        AuctionService.makeOffer(auction.unique_id, auction.step)
    }

    useEffect(() => {
            if (!loading) {
                const socket = new WebSocket(
                    'wss://'
                    + 'itechart-auction.herokuapp.com/'
                    + 'ws/auctions/' + auction.unique_id + '/'
                );
                socket.onmessage = function (e) {
                    const json = JSON.parse(e.data);
                    setAuction(prevState => {
                            return {...prevState, ...json.data};
                        }
                    );
                };
            } else {
                LotService.getLot(uuid).then(response => {
                        setAuction(response.data.auction);
                        setItem(response.data.item);
                        setLoading(false);
                    }
                )
            }


        }, [loading]
    )

    const {current_price, step, closing_date, buy_now_price} = auction
    const {photo} = item


    return (
        <div className="lot-detail__wrapper">
            <div style={{width: "60%", display: "flex"}}>
                <img src={photo} height="100%" alt="" className="lot-detail__image"/>
                <div style={{marginLeft: "30px"}}>
                    <div style={{color: "black", margin: "12px 0 2px 0", fontSize: "22px", fontWeight: "bold"}}
                         className="lot-detail__label">{item.title}</div>
                    <div style={{color: "#C5C5C5", fontSize: "18px"}}>{item.description}</div>
                    <div>
                        <div className="lot-detail__label">
                            Current price
                        </div>
                        <div className="lot__property">
                            {current_price}
                        </div>
                    </div>
                    <div>
                        <div className="lot-detail__label">
                            Step
                        </div>
                        <div className="lot__property">
                            {step}
                        </div>
                    </div>
                    <div>
                        <div className="lot-detail__label">
                            Deadline for application
                        </div>
                        <div className="lot__property">
                            {new Date(closing_date).toUTCString()}
                        </div>
                    </div>
                    <div>
                        <div className="lot-detail__label">
                            Buy now price
                        </div>
                        <div className="lot__property">
                            {buy_now_price}
                        </div>
                    </div>
                    {(auction.status === IN_PROGRESS) ?
                        <div style={{display: "flex"}}>
                            <button className="lot_submit submit btn" onClick={makeOffer}>
                                Make Offer
                            </button>
                            <button className="lot_submit submit btn" onClick={buyNow}>
                                Buy it now
                            </button>
                        </div> : null
                    }
                </div>
            </div>
        </div>
    )
}