import sequelize from "../../database";
import { DataTypes, Model } from "sequelize";
export interface IWard extends Model {
    code : number,
    name : string,
    division_type : string,
    codename : string ,
    district_code : number,
}
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