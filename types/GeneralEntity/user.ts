import { DistrictType, ProvinceType, WardType } from "./location";

import { TourType } from "./tour";
export interface AddressType {
  id: number;
  province: number;
  district: number;
  ward: number;
  detail: string;
  province_detail?: ProvinceType;
  district_detail?: DistrictType;
  ward_detail?: WardType;
}
export interface FavoriteType {
  tourId: string;
  userId: string;
  active: boolean;
  Tour?: TourType;
  User?: UserType;
}
export interface UserInfoType {
  id: number;
  name: string;
  bod: Date;
  address: number;
  phone: string;
  address_detail?: AddressType | null;
}
export interface MyTourType {
  tourId: string;
  userId: string;
  active: boolean;
  Tour?: TourType;
  User?: UserType;
}
export interface TitleType {
  level: number;
  name: string;
  slug: string;
}
export interface UserType {
  id?: number;
  userid?: string;
  username: string;
  password: string;
  ava: Blob;
  email: string;
  infoid?: number;
  level?: number;

  title?: TitleType;
  information?: UserInfoType;
}
