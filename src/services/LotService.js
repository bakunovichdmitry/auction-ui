import {api} from "../api";

export default class LotService {
    static getLots(page = 1) {
        console.log(page)
        return api.get(`lots/`, {
            params: {
                page: page
            }
        })
    }

    static getLot(lot_uuid) {
        return api.get(`lots/${lot_uuid}/`, {})
    }
}
