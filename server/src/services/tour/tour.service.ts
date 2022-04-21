import bcrypt from "bcrypt";
import { Op, Sequelize } from "sequelize";
import { TourType } from "../../../../types/GeneralEntity";
import { Province, Tour } from "../../models";
import { TourInstance } from "../../models/tour/tour.model";
import { ITour } from "../../types/ModelingEntity";
import { PaginationQuery, PaginationResponse } from "../../utils/pagination";
export interface ITourService {
  getTourBytourId(tourId: string): Promise<TourInstance>;
  createNewTour(tour: ITour): Promise<TourInstance>;
  updateTour(tour: ITour): Promise<TourInstance>;
  // deactiveTour(tourId: string) : Promise<boolean>;
  // getAllTours(pagination:Object) : Promise<PaginationResponse<TourInstance>>;
}

class TourService {
  public getTourBytourId(tourId: string): Promise<TourType> {
    try {
      const rs = Tour.findOne({
        where: {
          tourId: tourId,
        },
        include: [Province],
      }).then((tourInstance: any) => {
        if (tourInstance) {
          const {
            id,
            tourId,
            name,
            location,
            created_by,
            price_per_day,
            start,
            end,
            rating,
            limit_participants,
          } = tourInstance.dataValues;
          const tourResponse: TourType = {
            id,
            tourId,
            name,
            location,
            created_by,
            price_per_day,
            start,
            end,
            rating,
            limit_participants,
            location_detail: tourInstance.dataValues.Province.dataValues
              ? tourInstance.dataValues.Province.dataValues
              : null,
          };
          return tourResponse;
        } else return null;
      });
      if (rs) return rs;
      else throw new Error("Tour not found");
    } catch (err: any) {
      return null;
    }
  }

  public async createNewTour(tour: ITour): Promise<TourInstance> {
    try {
      console.log(tour.tourId);
      tour.tourId = await bcrypt.hash(Date.now().toString(), 10);
      const rs = await Tour.create(tour);
      if (rs) return rs;
      else return null;
    } catch (err: any) {
      console.log(err);
      return null;
    }
  }
  public async getAllTours(
    pagination: PaginationQuery
  ): Promise<PaginationResponse<TourType>> {
    const rs = await Tour.findAndCountAll({
      limit: pagination.limit,
      offset: (pagination.page - 1) * pagination.limit,
      order: [
        pagination.order
          ? [pagination.order, pagination.sort ? pagination.sort : "DESC"]
          : ["id", "ASC"],
      ],
      where: {
        name: { [Op.like]: `%${pagination.query ? pagination.query : ""}%` },
      },
      include: [{ model: Province }],
    });
    const rsMapped: TourType[] = rs.rows.map((tour: any) => {
      const {
        id,
        tourId,
        name,
        location,
        created_by,
        price_per_day,
        start,
        end,
        rating,
        limit_participants,
      } = tour.dataValues;
      const tourResponse: TourType = {
        id,
        tourId,
        name,
        location,
        created_by,
        price_per_day,
        start,
        end,
        rating,
        limit_participants,
        location_detail: tour.dataValues.Province.dataValues
          ? tour.dataValues.Province.dataValues
          : null,
      };
      return tourResponse;
    });
    const response: PaginationResponse<TourType> = {
      pagination: {
        page: pagination.page,
        limit: pagination.limit,
        total: rs.count,
        order: pagination.order,
      },
      data: rsMapped ? rsMapped : [],
    };
    return response;
  }

  public async suggestTours(): Promise<TourType[]> {
    return await Tour.findAll({
      order: Sequelize.literal("random()"),
      include: [Province],
      limit: 10,
    }).then((result) => {
      const rsMapped: TourType[] = result.map((tour: any) => {
        const {
          id,
          tourId,
          name,
          location,
          created_by,
          price_per_day,
          start,
          end,
          rating,
          limit_participants,
        } = tour.dataValues;
        const tourResponse: TourType = {
          id,
          tourId,
          name,
          location,
          created_by,
          price_per_day,
          start,
          end,
          rating,
          limit_participants,
          location_detail: tour.dataValues.Province.dataValues
            ? tour.dataValues.Province.dataValues
            : null,
        };
        return tourResponse;
      });
      console.log(rsMapped);
      return rsMapped;
    });
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
}
export default new TourService();
