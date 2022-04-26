import axiosClient from "api/axiosClient";
import { PaginationQuery } from "types/common.type";
import { ParticipantType } from "../../../types/GeneralEntity";

class TripAPI {
  async getTrips(pagination: PaginationQuery) {
    const url = "/tour";
    const data = await axiosClient.get(url, { params: pagination });
    return data.data;
  }
  async createTrips(payload: any) {
    const url = "/tour";
    const data = await axiosClient.post(url, payload);
    return data;
  }
  async getTripById(tripId: string) {
    const url = `/tour/${tripId}`;
    const data = await axiosClient.get(url);
    return data;
  }
  async addNewParticipant(payload: ParticipantType) {
    const url = "/tour/new_participant";
    const data: any = await axiosClient.post(url, payload);
    return data.status === "success";
  }
  async memberChecking(payload: { tourid: string; userid: string }) {
    return await axiosClient.post("/tour/member_checking", payload);
  }
}
export default new TripAPI();
