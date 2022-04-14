import sequelize from "../../database"
import { DataTypes, Optional } from "sequelize"
import { Model } from "sequelize";
export interface IAddress {
    id : number ,
    province : number,
    district: number ,
    ward : number ,
    detail :  string 
}
interface AddressCreationAttributes extends Optional<IAddress, "id"> { }
export interface AddressInstance extends Model<IAddress, AddressCreationAttributes>,IAddress { }
const Address = sequelize.define<AddressInstance>("Address", {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    province: {
        type: DataTypes.SMALLINT,
        references: {
            model : "Province",
            key: "code"
        }
    },
    district: {
        type: DataTypes.SMALLINT,
        references: {
            model : "District",
            key: "code"
        }
    },
    ward : {
        type: DataTypes.SMALLINT,
        references: {
            model : "Ward",
            key: "code"
        }
    },
    detail : {
        type: DataTypes.STRING(150),
    }
   
},{
    modelName: "Address",
    tableName:"address",
    timestamps: false,
})

export default Address;