import http from '../http-common'

export default class LotService {
    static getLots() {
        return http.get(`lots/`, {
        })
    }

    static getLot(uuid = null) {
        if (uuid)
            return http.get(`lots/${uuid}/`, {})
    }

    static BuyItNow(uuid = null) {
        if (uuid)
            return http.post(`lots/${uuid}/buy-it-now/`, {})
    }

    static MakeOffer(uuid = null) {
        if (uuid)
            return http.post(`lots/${uuid}/make-offer/`, {
                
            })
    }
}

// export function getLot(lot_uuid) {
//     return API.get(`lots/${lot_uuid}/`);
// }
//
// export function buyItem(auction_uuid) {
//     return API.post(`auctions/${auction_uuid}/buy-it-now/`, {
//         headers: {
//             'Authorization': `Bearer ${getToken()}`,
//             'Content-Type': 'application/json',
//         }
//     });
// }
//
// export async function makeOffer(auction_uuid) {
//     return API.post(`auctions/${auction_uuid}/make-offer/`, {
//         headers: {
//             'Authorization': `Bearer ${getToken()}`,
//             'Content-Type': 'application/json',
//         }
//     });
// }