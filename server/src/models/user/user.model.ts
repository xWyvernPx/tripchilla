import sequelize from "../../database"
import { DataTypes, Model, Optional } from "sequelize"
import Joi from "joi";
import { join } from "path";
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

export const userSchema =  {
    userBodySchema : Joi.object().keys({
        name : Joi.string().required().max(150),
        username : Joi.string().required().max(150),
        email : Joi.string().required().email(),
        bod : Joi.date().required(),
        level : Joi.number().required(),
        infoId : Joi.string().max(150).required(),
        ava  : Joi.string(),
        province : Joi.number().required(),
        district : Joi.number().required(),
        ward : Joi.number().required(),
        detail : Joi.string(),
    }),
    userIdSchema :  Joi.object().keys({
        userId : Joi.string().required(),
    }),
    userOptionalSchema :  Joi.object().keys({
        name : Joi.string().max(150),
        username : Joi.string().max(150),
        email : Joi.string().email(),
        bod : Joi.date(),
        level : Joi.number(),
        infoId : Joi.string().max(150),
        ava  : Joi.string(),
        province : Joi.number(),
        district : Joi.number(),
        ward : Joi.number(),
        detail : Joi.string(),
    })
}