import {api} from "../api";

export default class LotService {
    static getLots() {
        return api.get(`lots/`, {})
    }

    static getLot(lot_uuid) {
        return api.get(`lots/${lot_uuid}/`, {})
    }
}
