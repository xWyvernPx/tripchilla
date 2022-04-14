import sequelize from "../../database"
import { DataTypes, Model } from "sequelize"
export interface IMyTour extends Model{
    tourId : string ,
    userId : string ,
    active : boolean
}
const MyTour = sequelize.define<Model>("MyTour", {
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