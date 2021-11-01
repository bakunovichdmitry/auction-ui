import React from 'react';
import LotItem from "./LotItem";

const LotList = ({lots}) => {

    return (
        <div>
            {lots.map((lot) =>
                <LotItem key={lot.unique_id} auction={lot.auction} item={lot.item}/>
            )}
        </div>
    );
};

export default LotList;