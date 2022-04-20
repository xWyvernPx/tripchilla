import sequelize from "../../database";
import { DataTypes, Optional } from "sequelize";
import { Model } from "sequelize";
import { IAddress } from "../../types/ModelingEntity";
import Joi from "joi";

interface AddressCreationAttributes extends Optional<IAddress, "id"> {}
export interface AddressInstance
  extends Model<IAddress, AddressCreationAttributes>,
    IAddress {}
const Address = sequelize.define<AddressInstance>(
  "Address",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    province: {
      type: DataTypes.SMALLINT,
      references: {
        model: "Province",
        key: "code",
      },
    },
    district: {
      type: DataTypes.SMALLINT,
      references: {
        model: "District",
        key: "code",
      },
    },
    ward: {
      type: DataTypes.SMALLINT,
      references: {
        model: "Ward",
        key: "code",
      },
    },
    detail: {
      type: DataTypes.STRING(150),
    },
  },
  {
    modelName: "Address",
    tableName: "address",
    timestamps: false,
  }
);

export const AddressSchemas = {
  AddressSchema: Joi.object().keys({
    province: Joi.number().integer().required(),
    district: Joi.number().integer().required(),
    ward: Joi.number().integer().required(),
    detail: Joi.string().max(150),
  }),
};

export default Address;
