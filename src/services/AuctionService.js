import {api} from "../api";

export default class AuctionService {
    static buyItNow(auction_uuid) {
        api.post(`auctions/${auction_uuid}/buy-it-now/`,
            {},
        )
    }

    static makeOffer(auction_uuid, raise_price) {
        api.post(`auctions/${auction_uuid}/make-offer/`,
            {
                "raise_price": raise_price,
            },
        )
    }
}