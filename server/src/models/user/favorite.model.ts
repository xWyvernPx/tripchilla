import sequelize from "../../database"
import { DataTypes, Model } from "sequelize"
export interface IFavorite extends Model {
    tourId : string ,
    userId : string,
    active :  boolean
}

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