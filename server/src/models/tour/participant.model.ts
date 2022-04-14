import sequelize from "../../database"
import { DataTypes, Model } from "sequelize"
export interface IParicipant extends Model {
    tourId : string , 
    userId  : string ,
    date_join : Date
}
const Participant = sequelize.define<IParicipant>("Participant", {
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
    date_join : {
        type: DataTypes.DATE,
    }
},{
    modelName: "Participant",
    tableName:"participants",
    timestamps: false,
})

export default Participant;