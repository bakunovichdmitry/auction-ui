import React from 'react';
import {Link} from "react-router-dom";

import './lotItem.scss'

const LotItem = (props) => {
  const { photo, title, description } = props.item;
  const { status } = props.auction

  const auctionStatus = () => {
    if (status === 1) {
      return "IN PROGRESS"
    } else if (status === 2) {
      return "CLOSED"
    } else {
      return "PENDING"
    }
  }

  return (
    <Link to={`/lots/${props.unique_id}`} className="lot__link">
      <div className="lot__item">
        <img src={photo} width="100%" height="300" alt="Lot item"/>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <div className="status btn">
          {auctionStatus()}
        </div>
      </div>
    </Link>

  );
};

export default LotItem;