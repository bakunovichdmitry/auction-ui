import React from 'react';
import LotList from "./LotList/LotList";
import './auction.scss'


const Auction = () => {

  return (
      <section className="auction_section">
        <LotList />
    </section>
  );
};

export default Auction;