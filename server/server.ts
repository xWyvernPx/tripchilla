import fs from "fs";
import { createServer } from "https";
import app from "./src/app";
import sequelize, { graph } from "./src/database";

import {
  districtsLoad,
  provincesLoad,
  wardsLoad,
} from "./src/models/location/location";
import { syncUsersToGraph } from "./src/models/user/user.model";
const port = process.env.PORT || 4000;

const server = createServer(
  {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem"),
  },
  app
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection with postgre has been established successfully.");
    graph.driver.verifyConnectivity({ database: "tripchilla" }).then(() => {
      console.log("Connection with neo4j has been established succesfullly.");
    });
    server.listen(port, () => {
      console.log(`server is running on : https://localhost:${port}`);
    });
    loadProvince();
    syncUsersToGraph();
  })
  .catch((err) => {
    console.error("Unable to connect to the postgres database:", err);
  });

const loadProvince = async () => {
  await Promise.all([provincesLoad, districtsLoad, wardsLoad]);
  console.log("load data success");
};
