import axios  from "axios";

const axiosClient = axios.create({

});
// axiosClient.interceptors.request.use((config) => {})
// axiosClient.interceptors.response.use((response) => {
//     return response ? response.data : response;
// })

export default axiosClient;