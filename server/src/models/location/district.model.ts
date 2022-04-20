import { DataTypes } from "sequelize";
import sequelize from "../../database";
import { IDistrict } from "../../types/ModelingEntity";



const District =sequelize.define<IDistrict>('District', {
    code :{
        type: DataTypes.SMALLINT,
        primaryKey: true,
    },
    name : {
        type: DataTypes.STRING(150),
    },
    division_type : {
        type: DataTypes.STRING(50),
    },
    codename :{
        type: DataTypes.STRING(150),
    },
    province_code :{
        type: DataTypes.SMALLINT,
        references:{
            model : 'Province',
            key : 'code',
        }
    }
}, {
    modelName: 'District',
    tableName: 'district',
    timestamps: false
})
export default District;