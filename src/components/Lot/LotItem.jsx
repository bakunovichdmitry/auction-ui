import React from 'react';
import {Link} from "react-router-dom";

const LotItem = (props) => {

    return (
        <Link to={`lots/${props.unique_id}`}>
            <div style={{border: "1px solid black", width: "100px", height: "200px"}}>
            <p>{props.item.title}</p>
            <p>{props.item.description}</p>
            <p>{props.auction.status}</p>
            </div>
        </Link>

    );
};

export default LotItem;