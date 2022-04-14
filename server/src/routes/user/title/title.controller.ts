import { Request, Response } from "express";
import titleService from "../../../services/title.service";

class TitleController {
    async createUpdateTitle(req : Request,res : Response) {
    //  TODO:  validate body 
        const {...payload } = req.body;
        const rs =  await titleService.createUpdateTitle(payload);
        res.json(rs);
    }
}
export default new TitleController();