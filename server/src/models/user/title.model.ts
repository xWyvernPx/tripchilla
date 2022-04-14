import sequelize from "../../database"
import { DataTypes, Model } from "sequelize"
export interface ITitle extends Model{
    level: number,
    name : string ,
    slug : string ,
}
const Title = sequelize.define<ITitle>("Title", {
    level : {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name  : {
        type: DataTypes.STRING(150),
    },
    slug : {
        type: DataTypes.STRING(150),
    }
},{
    modelName: "Title",
    tableName:"title",
    timestamps: false,
})

export default Title;