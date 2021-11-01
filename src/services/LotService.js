import http from '../http-common'

export default class LotService {
    static getLots(limit = 10) {
        return http.get(`lots/`, {
            params: {
                limit: limit,
            }
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