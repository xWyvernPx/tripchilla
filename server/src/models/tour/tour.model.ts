import joi from "joi";
import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../database";
import { ITour } from "../../types/ModelingEntity";

interface TourCreationAttributes extends Optional<ITour, "id"> {}
export interface TourInstance
  extends ITour,
    Model<ITour, TourCreationAttributes> {}
const Tour = sequelize.define<TourInstance>(
  "Tour",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    tourid: {
      type: DataTypes.STRING(150),
      primaryKey: true,
      field: "tourid",
    },
    name: {
      type: DataTypes.STRING(150),
    },
    location: {
      type: DataTypes.SMALLINT,
      references: {
        model: "Province",
        key: "code",
      },
    },
    created_by: {
      type: DataTypes.STRING(150),
      references: {
        model: "User",
        key: "userid",
      },
    },
    price_per_day: {
      type: DataTypes.INTEGER,
    },
    start: {
      type: DataTypes.DATE,
    },
    end: {
      type: DataTypes.DATE,
    },
    rating: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    limit_participants: {
      type: DataTypes.INTEGER,
    },
  },
  {
    modelName: "Tour",
    tableName: "tour",
    timestamps: false,
  }
);

export default Tour;

export const TourSchemas = {
  tourBodySchema: joi.object().keys({
    name: joi.string().required().max(150),
    location: joi.number().required(),
    price_per_day: joi.number().required(),
    created_by: joi.string().required(),
    limit_participants: joi.number().required().min(0),
    start: joi.date().required(),
    end: joi.date().required(),
    rating: joi.number().min(0).max(5),
  }),
  tourIdSchema: joi.object().keys({
    tourId: joi.string().required().max(150),
  }),
  tourOptionalBodySchema: joi.object().keys({
    name: joi.string().max(150),
    location: joi.number(),
    price_per_day: joi.number(),
    created_by: joi.string(),
    limit_participants: joi.number().min(0),
    start: joi.date(),
    end: joi.date(),
    rating: joi.number().min(0).max(5),
  }),
};
