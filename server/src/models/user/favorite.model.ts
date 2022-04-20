import { DataTypes } from "sequelize";
import sequelize from "../../database";
import { IFavorite } from "../../types/ModelingEntity";

const Favorite = sequelize.define<IFavorite>("Favorite", {
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
    modelName: "Favorite",
    tableName:"favorite",
    timestamps: false,
})

export default Favorite;