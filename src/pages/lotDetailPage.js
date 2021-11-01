import React from 'react';
import Button from "@mui/material/Button";
import {makeOffer, buyItem, getLot} from "../services/LotService"

class LotDetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auction: [],
            item: []
        };
    }

    dutchAuction() {
        return (
            <div>
                <p>END PRICE: {this.state.end_price}</p>
                <p>END PRICE: {this.state.frequency}</p>
            </div>
        )
    }

    englishAuction() {
        return (
            <Button
                onClick={() => makeOffer("http://localhost:8000/auctions/04aecbe5-c9f5-413d-9eeb-dbe813bf5d0a/make-offer/20/")}>
                make offer
            </Button>
        )
    }

    componentDidMount() {
        const result = getLot('72da3db0-e2b5-4beb-85ff-dcb68708d039');
        result.then((value => {
                const data = value.data;
                this.setState({
                    auction: data.auction,
                    item: data.item
                })
            }
        ));
    }


    render() {
        return (
            <div className="lot-detail-wrapper">

                <h1>{this.state.auction.status === 0 ? 'DUTCH' : 'ENGLISH'} AUCTION</h1>
                <p>STATUS: {this.state.auction.status}</p>
                <p>TITLE: {this.state.item.title}</p>
                <p>DESCRIPTION: {this.state.item.description}</p>
                <p>CURRENT PRICE: {this.state.auction.current_price}</p>
                <p>STEP: {this.state.auction.step}</p>
                <p>OPEN DATE: {this.state.auction.opening_date}</p>
                <p>CLOSE DATE: {this.state.auction.closing_date}</p>
                <p>BUY NOW PRICE: {this.state.auction.buy_now_price}</p>
                {this.state.auction.status === 0 ? this.dutchAuction() : this.englishAuction()}
                <Button
                    onClick={() => buyItem("http://localhost:8000/auctions/04aecbe5-c9f5-413d-9eeb-dbe813bf5d0a/buy-it-now/")}>
                    Buy it now
                </Button>
            </div>
        );
    }
}

export default LotDetailPage;