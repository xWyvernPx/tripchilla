import Joi from "joi";
import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../database";
import { IUser } from "../../types/ModelingEntity";
import { UserInfoSchemas } from "./info.model";
import bcrypt from "bcrypt";

interface UserCreationAttributes extends Optional<IUser, "id"> {}
export interface UserInstance
  extends Model<IUser, UserCreationAttributes>,
    IUser {}
const User = sequelize.define<UserInstance>(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    userid: {
      type: DataTypes.STRING(150),
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(150),
      unique: true,
    },
    password: {
      type: DataTypes.STRING(150),
    },
    ava: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING(50),
      unique: true,
    },
    infoid: {
      type: DataTypes.INTEGER,
      references: {
        model: "UserInfo",
        key: "id",
      },
    },
    level: {
      type: DataTypes.INTEGER,
      references: {
        model: "Title",
        key: "level",
      },
    },
  },
  {
    modelName: "User",
    tableName: "User",
    timestamps: false,
  }
);
User.beforeSave(async (user: UserInstance, options) => {
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
});

export async function isCorrectPassord(
  hashedPassword: string,
  password: string
) {
  return await bcrypt.compare(password, hashedPassword);
}
export default User;

export const userSchema = {
  userBodySchema: Joi.object().keys({
    username: Joi.string().required().max(150),
    email: Joi.string().required().email(),
    password: Joi.string().max(150).required().min(8),
    ava: Joi.string(),
    infoId: Joi.string().max(150),
    level: Joi.number(),
    information: UserInfoSchemas.UserInfoSchema,
  }),
  userIdSchema: Joi.object().keys({
    userId: Joi.string().required(),
  }),
  userOptionalSchema: Joi.object().keys({
    name: Joi.string().max(150),
    username: Joi.string().max(150),
    email: Joi.string().email(),
    bod: Joi.date(),
    level: Joi.number(),
    infoId: Joi.string().max(150),
    ava: Joi.string(),
    province: Joi.number(),
    district: Joi.number(),
    ward: Joi.number(),
    detail: Joi.string(),
  }),
};
