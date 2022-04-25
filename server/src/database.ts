import { Sequelize, Options, Error } from "sequelize";

const config: Options = {
  host: `sql.bsite.net\\MSSQL2016`,
  dialect: "mssql",
  username: "wyvernp_tripchill",
  password: "1234",
  database: "wyvernp_tripchill",
  dialectOptions: {
    ssl: true,
    rejectUnauthorized: false,
  },
};
const config2: Options = {
  host: "ec2-52-203-118-49.compute-1.amazonaws.com",
  dialect: "postgres",
  username: "vephedgwtgqvoq",
  password: "4826410d746e44c1175ef5b6108ee7dd501505e38f47a940cde352482c2453b1",
  database: "dct948bhb0e9us",
  port: 5432,
  // native:true ,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // <<<<<<< YOU NEED THIS
    },
  },
  pool: {
    acquire: 10000000,
  },
};
const config3: Options = {
  host: "localhost",
  dialect: "postgres",
  username: "su",
  password: "123456",
  database: "tripchilla",
  port: 5432,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // <<<<<<< YOU NEED THIS
    },
  },
  pool: {
    acquire: 10000000,
  },
};
const sequelize = new Sequelize(config3);

export default sequelize;
