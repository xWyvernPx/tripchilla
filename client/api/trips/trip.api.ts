import axiosClient from "api/axiosClient";
import { PaginationQuery } from "types/common.type";

class TripAPI {
    async getTrips(pagination:PaginationQuery) {
        const url="/tour";
        const data = await axiosClient.get(url,{params:pagination});
        return data;
    }
    async createTrips(payload : any) {
        const url = "/tour";
        const data = await axiosClient.post(url,payload)
        return data;
    }
    async getTripById (tripId: string ) {
        const url = `/tour/${tripId}` ;
        const data = await axiosClient.get(url);
        return data;
    }
}
export default new TripAPI();