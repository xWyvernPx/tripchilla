import { ProvinceType } from "./location"
import { UserType } from "./user";

export interface TourType {
    id ?: number ,
    tourId:string,
    name:string,
    location : number,
    price_per_day:number,
    created_by : string,
    start : Date,
    end : Date ,
    rating : number,
    limit_participants : number,   
    tour_photo?: TourPhotoType[] | null,
    participants?: ParticipantType[] | null,
    location_detail?: ProvinceType | null,
}
export interface ParticipantType  {
    tourId : string , 
    userId  : string ,
    date_join : Date,
    Tour?: TourType | null,
    User?: UserType | null,
}
export interface TourPhotoType {
    id : number,
    tourId : string , 
    photo : Blob   ,
    Tour ? :TourType | null,
}