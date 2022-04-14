import sequelize from "../../database"
import { DataTypes, Model, Optional } from "sequelize"
export interface ITour {
    id ?: number ,
    tourId:string,
    name:string,
    location: number ,
    price_per_day:number,
    created_by : string,
    start : Date,
    end : Date ,
    rating : number
     
}
interface TourCreationAttributes extends Optional<ITour, "id"> { }
export interface TourInstance extends ITour, Model<ITour, TourCreationAttributes> { }
const Tour = sequelize.define<TourInstance>("Tour", {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
    },
    tourId:{
        type :DataTypes.STRING(150),
        primaryKey: true,
        field :"tourid"
    },
    name  : {
        type: DataTypes.STRING(150),
    },
    location: {
        type: DataTypes.SMALLINT,
        references : {
            model : "Province",
            key:"code"
        }
    },
    created_by : {
        type: DataTypes.STRING(150),
        references:{
            model : "User",
            key : "userid"
        }
    },
    price_per_day:{
        type: DataTypes.INTEGER,

    },
    start: {
        type: DataTypes.DATE,
    },
    end : {
        type: DataTypes.DATE,
    },
    rating : {
        type: DataTypes.FLOAT,
        defaultValue: 0
    }
},{
    modelName: "Tour",
    tableName:"tour",
    timestamps: false,
})

export default Tour;