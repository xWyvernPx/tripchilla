import sequelize from "../../database"
import { DataTypes, DateOnlyDataType, Model, Optional } from "sequelize"
import Province, { IProvince } from "../location/province"
export interface IUserInfo  {
    id: number,
    name: string,
    bod : DateOnlyDataType,
    address : IProvince,
    phone : string,
}
interface UserInfoCreationAttributes extends Optional<IUserInfo, "id"> { }
export interface UserInfoInstance extends IUserInfo , Model<IUserInfo, UserInfoCreationAttributes>  { }
const UserInfo = sequelize.define<UserInfoInstance>("UserInfo", {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name  : {
        type: DataTypes.STRING(150),
    },
    bod: {
        type: DataTypes.DATEONLY
    },
    address: {
        type : DataTypes.INTEGER,
        references: {
            model : "Address",
            key : "id"
        }
    },
    phone: {
        type: DataTypes.STRING(15),
    },
},{
    modelName: "UserInfo",
    tableName:"userinfo",
    timestamps: false,
})

export default UserInfo;