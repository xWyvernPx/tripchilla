import { DataTypes } from "sequelize";
import sequelize from "../../database";
import { IWard } from "../../types/ModelingEntity";

const Ward = sequelize.define<IWard>('Ward', {
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
    district_code :{
        type: DataTypes.SMALLINT,
        references:{
            model : 'District',
            key : 'code',
        }
    }
}, {
    modelName: 'Ward',
    tableName: 'ward',
    timestamps: false
})
export default Ward;