import TourPhoto, { ITourPhoto, TourPhotoInstance } from "../../models/tour/tourPhoto.model";
export interface ITourPhotoService {
    getAllTourPhotos(): Promise<ITourPhoto[]>;
    createTourPhoto(tourPhoto: ITourPhoto): Promise<TourPhotoInstance>;
    getTourPhoto(id : number) : Promise<TourPhotoInstance> ;
    deleteTourPhoto(id : number) : Promise<boolean>;
}
class TourPhotoService implements ITourPhotoService {
    async createTourPhoto(photo : ITourPhoto) :Promise<TourPhotoInstance> {
        try {
            const newPhoto = await TourPhoto.create(photo);
            if(!newPhoto) {
                throw new Error("Error creating photo");
            }
            else return newPhoto;
        }
        catch(err :any) {
            return null;
        }
    }
    async getAllTourPhotos() : Promise<TourPhotoInstance[]> {
        try {
            const photos = await TourPhoto.findAll();
            if(!photos) {
                throw new Error("Error getting photos");
            }
            else return photos;
        }
        catch(err:any) {
            return null;
        }
    }
    async getTourPhoto(id : number) : Promise<TourPhotoInstance> { 
        try{
            const photo = await TourPhoto.findByPk(id);
            if(!photo) {
                throw new Error("Error getting photo");
            }
            else return photo;
        }
        catch(err:any) {
            return null;
        }
    }
    async deleteTourPhoto(id : number) : Promise<boolean> {
        try {
            const rs = await TourPhoto.destroy({
                where: {
                    id: id
                }
            });
            if(rs) return true;
            else return false;
        } catch (error) {
            return false;
        }
    }
}