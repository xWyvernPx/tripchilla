import Joi from "joi";
import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../database";
import { IUserInfo } from "../../types/ModelingEntity";
import { AddressSchemas } from "./address.model";

interface UserInfoCreationAttributes extends Optional<IUserInfo, "id"> {}
export interface UserInfoInstance
  extends IUserInfo,
    Model<IUserInfo, UserInfoCreationAttributes> {}
const UserInfo = sequelize.define<UserInfoInstance>(
  "UserInfo",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(150),
    },
    bod: {
      type: DataTypes.DATEONLY,
    },
    address: {
      type: DataTypes.INTEGER,
      references: {
        model: "Address",
        key: "id",
      },
    },
    phone: {
      type: DataTypes.STRING(15),
    },
  },
  {
    modelName: "UserInfo",
    tableName: "userinfo",
    timestamps: false,
  }
);

export const UserInfoSchemas = {
  UserInfoSchema: Joi.object().keys({
    id: Joi.number().integer(),
    name: Joi.string().required(),
    bod: Joi.date().required(),
    address: Joi.number().integer(),
    phone: Joi.string().required(),
    address_detail: AddressSchemas.AddressSchema,
  }),
};

export default UserInfo;
