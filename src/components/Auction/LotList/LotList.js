import React, {useEffect, useState} from 'react';

import Pagination from "@mui/material/Pagination";
import LotService from "../../../services/LotService";
import LotItem from "./LotItem/LotItem";

import './lotList.scss'

const LotList = () => {
  const [lots, setLots] = useState([])
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const getLots = () => {
    LotService.getLots(page).then(response => {
        setPageCount(Math.round(response.data.count/3 + 1))
        setLots(response.data.results);
      }
    )
  }

  useEffect(() => {
      getLots();
    }, [page]
  )

  return (
    <div className="lot-list__wrapper">
        <div className="logo">Auction</div>
        <div className="flex">
          {lots.map((lot) =>
            <LotItem
              key={lot.unique_id}
              auction={lot.auction}
              item={lot.item}
              unique_id={lot.unique_id}/>
          )}
        </div>
        <Pagination className="pagination" shape="rounded"  color="primary" count={pageCount} page={page} onChange={handleChange} />
    </div>
  );
};

export default LotList;