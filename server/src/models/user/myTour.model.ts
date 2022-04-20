import { DataTypes } from "sequelize";
import sequelize from "../../database";
import { IMyTour } from "../../types/ModelingEntity";

const MyTour = sequelize.define<IMyTour>("MyTour", {
    tourId :{
        type: DataTypes.STRING(150),
        primaryKey : true ,
        references : {
            model : "Tour",
            key : "tourId"
        }

    },
    userId : {
        type: DataTypes.STRING(150),
        primaryKey : true ,
        references : {
            model : "User",
            key : "userId"
        }
    },
    active :{
        type: DataTypes.BOOLEAN,
    }
},{
    modelName: "MyTour",
    tableName:"my_tour",
    timestamps: false,
})

export default MyTour;