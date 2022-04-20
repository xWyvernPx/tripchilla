import { Request, Response } from "express";

import addressService from "../../../services/user/address.service";
import { IAddress } from "../../../types/ModelingEntity";

export interface IAddressController {
    // getAddress(req: Request, res: Response): Promise<Response>;
    getAddressById(req: Request, res: Response): Promise<Response>;
    createAddress(req: Request, res: Response): Promise<Response>;
    updateAddress(req: Request, res: Response): Promise<Response>;
    deleteAddress(req: Request, res: Response): Promise<Response>;
}
class AddressController implements IAddressController {
    public async getAddressById(req: Request, res: Response): Promise<Response> {
        try {

            const {id} = req.params;
            const address = await addressService.getAddressById(+id);
            if (address)
            return res.status(200).json(address);
            else return res.status(400).json({message: "Address not found!"});
        }
        catch (err :any) {
            return res.status(400).json({message: err.message});
        }
    }   
    public async createAddress(req: Request, res: Response): Promise<Response> {
        try {

            const address: IAddress = req.body;
            const createdAddress = await addressService.createAddress(address);
            if (createdAddress)
                return res.status(201).json(createdAddress);
            else return res.status(400).json({message: "Address not created!"});
        }
        catch (err :any) {
            return res.status(400).json({message: err.message});
        }
        }
    public async updateAddress(req: Request, res: Response): Promise<Response> {
        try {
            
            const address: IAddress = req.body;
            const updatedAddress = await addressService.updateAddress( address);
            if (updatedAddress)
            return res.status(200).json(updatedAddress);
            else return res.status(400).json({
                error: "Bad request",
                message: "Address not updated!"});
            }
            catch(err : any ) {
                return res.status(400).json({message: err.message});
            }
            }
    public async deleteAddress(req: Request, res: Response): Promise<Response> {
        const {id} = req.params;
        const deletedAddress = await addressService.deleteAddress(+id);
        if (deletedAddress)
        return res.status(200).json({message: "Address deleted!"});
        else return res.status(400).json({message: "Address not deleted!"});
    }
}
export default new AddressController();