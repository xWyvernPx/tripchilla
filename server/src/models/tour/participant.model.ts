import { DataTypes } from "sequelize";
import sequelize from "../../database";
import { IParicipant } from "../../types/ModelingEntity";

const Participant = sequelize.define<IParicipant>(
  "Participant",
  {
    tourid: {
      type: DataTypes.STRING(150),
      primaryKey: true,
      references: {
        model: "Tour",
        key: "tourid",
      },
    },
    userid: {
      type: DataTypes.STRING(150),
      primaryKey: true,
      references: {
        model: "User",
        key: "userid",
      },
    },
    date_join: {
      type: DataTypes.DATE,
    },
  },
  {
    modelName: "Participant",
    tableName: "participants",
    timestamps: false,
  }
);

export default Participant;
