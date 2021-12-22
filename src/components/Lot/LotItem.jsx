import React from 'react';
import {Link} from "react-router-dom";

export default function LotItem(props) {

    function status() {
        if (props.auction.status === 1) {
            return "IN PROGRESS"
        } else if (props.auction.status === 2) {
            return "CLOSED"
        } else {
            return "PENDING"
        }
    }

    return (
        <Link to={`/lots/${props.unique_id}`} style={{ width: "100%", textDecoration: "none", height: "max-content" }} className="lot__link">
            <div>
            <img src={props.item.photo} width="100%" height="300" alt="test" style={{ borderRadius: "20px", objectFit: "cover" }}/>
            <div style={{ color: "black", margin: "12px 0 2px 0", fontSize: "22px", fontWeight: "bold" }}>{props.item.title}</div>
            <div style={{ color: "#C5C5C5", fontSize: "18px" }}>{props.item.description}</div>
            <div className="lot__status btn">
                {status()}
            </div>
            </div>
        </Link>

    );
};
