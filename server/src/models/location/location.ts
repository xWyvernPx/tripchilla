import axiosClient from "../../utils/axiosClient";
import District from "./district.model";
import Province from "./province.model";
import Ward from "./ward.model";
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

export const provincesLoad = new Promise(async (resolve, reject) => {
    const count = await Province.count({});
    if (count > 60) {
        console.log("already loaded");
        resolve(true);
    } else {
        const data: Array<IProvince> = (await axiosClient.get("https://provinces.open-api.vn/api/p")).data;
        data.forEach(async (item: IProvince) => {
            const { code, name, division_type, codename } = item;
            Province.upsert({
                code,
                name,
                division_type,
                codename
            }).then(() => {
                console.log("successed")
            }).catch(err => {
                console.log(err)
            })
        })
    }
})

export const wardsLoad = new Promise(async (resolve, reject) => {
    const count = await Ward.count({});
    if (count > 5000) {
        console.log("already loaded");
        resolve(true);
    } else {

        const wards = (await axiosClient.get("https://provinces.open-api.vn/api/w")).data;
        wards.forEach(async (item: IWard) => {
            const { code, name, division_type, codename, district_code } = item;
            try {

                Ward.upsert({
                    code,
                    name,
                    division_type,
                    codename,
                    district_code
                })
            }
            catch (error) {
                reject(error);
            }
        })
        resolve(true);
    }
})

export const districtsLoad = new Promise(async (resolve, reject) => {
    const count = await District.count({});
    if (count > 500) {
        console.log("already loaded");
        resolve(true);
    } else {

        const districts = (await axiosClient.get("https://provinces.open-api.vn/api/d")).data;
        districts.forEach(async (item: IDistrict) => {
            const { code, name, division_type, codename, province_code } = item;
            try {
                District.upsert({
                    code,
                    name,
                    division_type,
                    codename,
                    province_code
                })
            }
            catch (error) {
                reject(error);
            }

        }
        )
    }
})