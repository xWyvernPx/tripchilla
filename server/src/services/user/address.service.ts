import Address, { AddressInstance, IAddress } from "../../models/user/address.model";

export interface IAddressService {
    getAddressById(id: number): Promise<AddressInstance |null >; 
    createAddress(address: IAddress): Promise<AddressInstance>;
    updateAddress(address: IAddress): Promise<number[]>;
    deleteAddress(id: number): Promise<boolean>;
}

class AddressService implements IAddressService{
    public async getAddressById(id: number): Promise<AddressInstance> {
        const rs = await Address.findOne({
            where: {
                id: id
            }
        });
        if(rs) return rs;
        else throw new Error("Address not found");
    }
    public async createAddress(address: IAddress): Promise<AddressInstance> {
        try {
            const rs = await Address.create(address);
            if(rs) return rs;
            else throw new Error("Address not created");
        }
        catch(err :any) {
            throw new Error(err.message);
        }
    }
    public async updateAddress(address: IAddress): Promise<number[]> {
        try {
            const rs = await Address.update(address, {
                where: {
                    id: address.id
                }
            });
            if(rs) return rs;
            else throw new Error("Address not updated");
        }
        catch(err :any) {
            throw new Error(err.message);
        }
    }
    public async deleteAddress(id: number): Promise<boolean> {
        try {
            const rs = await Address.destroy({
                where: {
                    id: id
                }
            });
            if(rs) return true;
            throw new Error("Address not deleted");
        }
        catch(err :any) {
            throw new Error(err.message);
        }
    }
}

export default new AddressService();