import sequelize from "../../database"
import { DataTypes, Model, Optional } from "sequelize"
export interface ITourPhoto {
        id : number,
        tourId : string , 
        photo : Blob    
}
interface TourPhotoCreationAttributes extends Optional<ITourPhoto, "id"> { }
export interface TourPhotoInstance extends Model<ITourPhoto, TourPhotoCreationAttributes> , ITourPhoto { }
const TourPhoto = sequelize.define<TourPhotoInstance>("TourPhoto", {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tourId:{
        type: DataTypes.STRING(150),
        references: {
            model: 'Tour',
            key: 'tourId'
        }
    },
    photo:{
        type: DataTypes.BLOB,
    }
},{
    modelName: "TourPhoto",
    tableName:"tour_photo",
    timestamps: false,
})

export default TourPhoto;