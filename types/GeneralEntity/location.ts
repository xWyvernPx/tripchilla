
export interface DistrictType  {
    code : number,
    name : string,
    division_type : string,
    codename : string ,
    province_code : number,
}

export interface WardType {
    code : number,
    name : string,
    division_type : string,
    codename : string ,
    district_code : number,
}

export interface ProvinceType {
    code : number;
    name : string;
    division_type : string,
    codename : string,
}