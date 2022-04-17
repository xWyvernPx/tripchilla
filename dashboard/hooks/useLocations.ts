import axios from 'axios'
import React, {useState,useEffect,useCallback,useMemo} from 'react'

const useLocations = () => {
    const [provinces, setProvinces] = useState([])
    const [districts, setDistricts] = useState([])
    const [wards, setWards] = useState([])
    const getProvince = useCallback(async() => {
        const url = "http://provinces.open-api.vn/api/p";
        await axios.get(url,{
            headers : {
                "Content-Type" : "application/json",
                // 
            }
        }).then(res => {
            setProvinces(res.data)
        })
    } 
    ,[])
    useEffect(() => {
      getProvince();
    }, [getProvince])
    
    return ({
        provinces,
        districts,
        wards,
    })
}

export default useLocations