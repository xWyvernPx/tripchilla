import tripApi from 'api/trips/trip.api'
import { PaginationQuery } from 'types/common.type'
import React, { useCallback,useState,useEffect } from 'react'

const useTrips = () => {
    const [trips, setTrips] = useState([])
    const getAllTrips = useCallback(async(pagination : PaginationQuery)=> {
        const data = (await tripApi.getTrips(pagination))
        data.data.map((trip:any) => {
            trip.start = new Date(trip.start).toDateString()
            trip.end = new Date(trip.end).toDateString()
        })
        // console.log(data);
        setTrips(data.data);
    },[])
    useEffect(() => {
      getAllTrips({page : 1, limit : 10})
    }, [getAllTrips])
    
    const createNewTrip = useCallback(async(payload:any) => {
      //TODO : API to create new trip
      getAllTrips({page:1,limit:10});
    },[getAllTrips])
    const getTourById = useCallback(async(id:string) => {
       return await tripApi.getTripById(id);

    },[getAllTrips ])
  return (
    {trips,
    createNewTrip,
    getTourById}
  )
}

export default useTrips