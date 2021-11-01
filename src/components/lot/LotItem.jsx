import React from 'react';

const LotItem = (props) => {
    return (
        <div style={{ border: "1px solid black", width: "100px"}}>
            <p>{props.item.title}</p>
            <p>{props.item.description}</p>
            <p>{props.auction.status}</p>
        </div>
    );
};

export default LotItem;