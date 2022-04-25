import { Model } from "sequelize/types";

export interface IAddress {
  id: number;
  province: number;
  district: number;
  ward: number;
  detail: string;
}
export interface IFavorite extends Model {
  tourId: string;
  userId: string;
  active: boolean;
}
export interface IUserInfo {
  id: number;
  name: string;
  bod: Date;
  address: number;
  phone: string;
}
export interface IMyTour extends Model {
  tourId: string;
  userId: string;
  active: boolean;
}
export interface ITitle extends Model {
  level: number;
  name: string;
  slug: string;
}
export interface IUser {
  id: number;
  userid: string;
  username: string;
  password: string;
  ava: string;
  email: string;
  infoid: number;
  level: number;
}
