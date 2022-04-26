import { ProvinceType } from "./location";
import { UserType } from "./user";

export interface TourType {
  id?: number;
  tourid: string;
  name: string;
  location: number;
  price_per_day: number;
  created_by: string;
  start: Date;
  end: Date;
  rating: number;
  limit_participants: number;
  tour_photo?: TourPhotoType[] | null;
  participants?: ParticipantType[] | null;
  location_detail?: ProvinceType | null;
}
export interface ParticipantType {
  tourid: string;
  userid: string;
  date_join: Date;
  Tour?: TourType | null;
  User?: UserType | null;
}
export interface TourPhotoType {
  id: number;
  tourid: string;
  photo: Blob;
  Tour?: TourType | null;
}
