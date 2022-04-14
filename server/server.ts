import  {createServer} from 'https'
import axiosClient from './src/utils/axiosClient';
import fs from "fs"
import app from './src/app'
import sequelize from './src/database';
import { IncomingMessage } from 'http';
import Province from './src/models/location/province';
import axios from 'axios';
import Ward from './src/models/location/ward.model';
import District from './src/models/location/district.model';
import { districtsLoad, provincesLoad, wardsLoad } from './src/models/location/location';
const port = process.env.PORT || 4000;

const  server = createServer({
    key : fs.readFileSync('key.pem'),
    cert : fs.readFileSync('cert.pem')
},app);

sequelize.authenticate().then(()=>{
    console.log("Connection has been established successfully.")
    server.listen(port,()=>{
        console.log(`server is running on : https://localhost:${port}`)
    })
    // loadProvince();
}).catch(err=>{
    console.error("Unable to connect to the database:",err)
})



const loadProvince = async ()=>{
 await Promise.all([provincesLoad,districtsLoad,wardsLoad])
 console.log('load data success')
}