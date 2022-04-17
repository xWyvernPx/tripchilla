export interface IProvince {
    code: number,
    name: string,
    division_type: string,
    codename: string,
    phone_code: number,
    districts: Array<IDistrict>
}

export interface IDistrict {

    code: number,
    name: string,
    division_type: string,
    codename: string,
    province_code: number,
    wards: Array<any>
}
export interface IWard {
    code: number,
    name: string,
    division_type: string,
    codename: string,
    district_code: number,


}