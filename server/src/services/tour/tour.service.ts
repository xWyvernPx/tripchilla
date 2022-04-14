import Tour, { ITour, TourInstance } from "../../models/tour/tour.model";
import bcrypt from "bcrypt"
import { PaginationQuery, PaginationResponse } from "../../utils/pagination";

export interface ITourService {
    getTourBytourId(tourId: string): Promise<TourInstance>;
    createNewTour(tour: ITour) : Promise<TourInstance>;
    // updateTour( tour: ITour) : Promise<TourInstance>;
    // deactiveTour(tourId: string) : Promise<boolean>;
    // getAllTours(pagination:Object) : Promise<PaginationResponse<TourInstance>>;
}

class TourService {
    public getTourBytourId(tourId: string): Promise<TourInstance> {
        try {
            const rs = Tour.findOne({
                where: {
                    tourId: tourId
                }
            });
            if(rs) return rs;
            else throw new Error("Tour not found");
        }
        catch(err:any) {
            return null;
        }
    }

    public async createNewTour(tour: ITour) : Promise<TourInstance> {
        try{console.log(tour.tourId)
        tour.tourId = await bcrypt.hash( Date.now().toString(), 10);
        const rs = await  Tour.create(tour);
        if(rs ) return rs;
        else return null;}
        catch(err:any){
            console.log(err)
            return null;
        }
    }

    // public updateTour( tour: ITour) : Promise<TourInstance> {
    //     return Tour.update(tour, {
    //         where: {
    //             tourId: tour.tourId
    //         }
    //     });
    // }

    // public deactiveTour(tourId: string) : Promise<boolean> {
    //     return Tour.update({
    //         isActive: false
    //     }, {
    //         where: {
    //             tourId: tourId
    //         }
    //     });
    // }

    public async getAllTours(pagination:PaginationQuery) : Promise<PaginationResponse<TourInstance>> {
         const rs  = await Tour.findAndCountAll({
            limit: pagination.limit,
            offset: (pagination.page-1) * pagination.limit,
            order: [
                [pagination.order ? pagination.order : "id", 'ASC'] // default by id
            ]
        });
        const response: PaginationResponse<TourInstance> = {
            pagination :{
                page: pagination.page,
                limit: pagination.limit,
                total: rs.count,
                order: pagination.order
            },
            data : rs ? rs.rows : []
        }
        return response;
    }
}
export default new TourService();