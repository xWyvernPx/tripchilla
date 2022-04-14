import sequelize from "../../database"
import { DataTypes, Model, Optional } from "sequelize"
export interface IUser {
    id : number ,
    userid : string,
    username : string ,
    password : string ,
    ava : Blob,
    email: string,
    infoid : number ,
    level : number

}
interface UserCreationAttributes extends Optional<IUser,"id">{}
export interface UserInstance extends Model<IUser,UserCreationAttributes>,IUser{}
const User = sequelize.define<UserInstance>("User", {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
    },
    userid : {
        type: DataTypes.STRING(150),
        primaryKey: true,
    },
    username : {
        type: DataTypes.STRING(150),
        unique : true,
    },
    password : {
        type: DataTypes.STRING(150),
    },
    ava : {
        type: DataTypes.BLOB,
    },
    email : {
        type: DataTypes.STRING(50),
        unique : true,
    },
    infoid : {
        type: DataTypes.INTEGER,
        references: {
            model: "UserInfo",
            key: "id",
        }
    },
    level : {
        type: DataTypes.INTEGER,
        references : {
            model: "Title",
            key: "level",
        }
    },

},{
    modelName: "User",
    tableName:"user",
    timestamps: false,
})

export default User;