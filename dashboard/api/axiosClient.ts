import axios from 'axios'
import qs from "query-string"
import https from 'https'
export const axiosClient = axios.create( {baseURL :"https://localhost:4000/api",
    httpsAgent : new https.Agent({
        rejectUnauthorized: false
    }),

headers :{
        "Content-Type" : "application/json" ,
    },
    paramsSerializer: params => qs.stringify({...params})})
axiosClient.interceptors.request.use(async config => config);
axiosClient.interceptors.response.use( res=>{
    if(res && res.data) {
        return res.data;
    }
    return res;
})

export default axiosClient;