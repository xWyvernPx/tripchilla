import { DataTypes, Model } from "sequelize";
import sequelize from "../../database";

export interface IDistrict extends Model {
    code : number,
    name : string,
    division_type : string,
    codename : string ,
    province_code : number,
}

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