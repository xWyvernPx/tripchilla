import { Model } from "sequelize/types";

export interface IDistrict extends Model {
    code : number,
    name : string,
    division_type : string,
    codename : string ,
    province_code : number,
}

export interface IWard extends Model {
    code : number,
    name : string,
    division_type : string,
    codename : string ,
    district_code : number,
}

export interface IProvince extends Model{
    code : number;
    name : string;
    division_type : string,
    codename : string,
}