import { Model } from "sequelize/types"

export interface ITour {
    id ?: number ,
    tourId:string,
    name:string,
    location: number ,
    price_per_day:number,
    created_by : string,
    start : Date,
    end : Date ,
    rating : number,
    limit_participants : number,   
}
export interface IParicipant extends Model {
    tourId : string , 
    userId  : string ,
    date_join : Date
}
export interface ITourPhoto {
    id : number,
    tourId : string , 
    photo : Blob    
}