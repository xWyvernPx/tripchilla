import tripApi from "api/trips/trip.api";
import { PaginationQuery } from "types/common.type";
import React, { useCallback, useState, useEffect } from "react";
import { ParticipantType } from "../../types/GeneralEntity";
const useTrips = () => {
  const [trips, setTrips] = useState([]);
  const getAllTrips = useCallback(async (pagination: PaginationQuery) => {
    const data = await tripApi.getTrips(pagination);
    data.data.map((trip: any) => {
      trip.start = new Date(trip.start).toDateString();
      trip.end = new Date(trip.end).toDateString();
    });
    setTrips(data.data);
  }, []);
  useEffect(() => {
    getAllTrips({ page: 1, limit: 10 });
  }, [getAllTrips]);
  const addNewParticipant = useCallback(async (payload: ParticipantType) => {
    return await tripApi.addNewParticipant(payload);
  }, []);
  const createNewTrip = useCallback(
    async (payload: any) => {
      //TODO : API to create new trip
      getAllTrips({ page: 1, limit: 10 });
    },
    [getAllTrips]
  );
  const getTourById = useCallback(
    async (id: string) => {
      const data = await tripApi.getTripById(id);
      if (data) return data.data;
    },
    [getAllTrips]
  );
  const searchTrip = useCallback(async (term: string, page: number) => {
    const pagination: PaginationQuery = {
      page,
      limit: 3,
      order: "start",
      sort: "desc",
      query: term,
    };
    const data = await tripApi.getTrips(pagination);
    data.data.map((trip: any) => {
      trip.start = new Date(trip.start).toDateString();
      trip.end = new Date(trip.end).toDateString();
    });
    return data;
  }, []);
  const memberChecking = useCallback(
    async (payload: { tourid: string; userid: string }) => {
      const rs: any = await tripApi.memberChecking(payload);
      if (rs.status === "success") return rs.data;
    },
    []
  );

  return {
    trips,
    createNewTrip,
    getTourById,
    addNewParticipant,
    memberChecking,
    searchTrip,
  };
};

export default useTrips;
