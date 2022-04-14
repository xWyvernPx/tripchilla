import sequelize from "../../database"; 
import { DataTypes, Model } from "sequelize";
export interface IProvince extends Model{
    code : number;
    name : string;
    division_type : string,
    codename : string,
}
const Province = sequelize.define<IProvince>('Province', {
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
    }

}, {
    modelName: 'Province',
    tableName: 'province',
    timestamps: false
})

export default Province;