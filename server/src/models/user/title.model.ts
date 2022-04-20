import { DataTypes } from "sequelize";
import sequelize from "../../database";
import { ITitle } from "../../types/ModelingEntity";

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