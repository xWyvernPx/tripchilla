import { NextFunction,Response,Request } from 'express';
import joi,{Schema} from 'joi';
import { PaginationQuery } from './pagination';
const paginationScheme = joi.object().keys({
    page: joi.number().integer().min(1).default(1),
    limit: joi.number().integer().min(1).max(100).default(10),
    order : joi.string()
}); 

export const validateBody = (schema: Schema) => {
    return (req:Request,res:Response,next:NextFunction) => {
        const resultValidation = schema.validate(req.body)
        console.log(resultValidation);
        if(resultValidation.error){
            return res.status(400).json({
                status : 400,
                message : resultValidation.error.details[0].message
            });
        }
        else {
         next();
        }
    }
}
export const validatePagination = (req:Request,res:Response,next:NextFunction) => {
    const resultValidation = paginationScheme.validate(req.query);
    if(resultValidation.error){
        return res.status(400).json({
            status : 400,
            message : resultValidation.error.details[0].message
        });
    }
    else {
        next();
    }
}
export const validateParams = (schema: Schema,name : string ) => {
    return (req : Request,res :Response,next : NextFunction)=> {
        const resultValidation = schema.validate({[name]:req.params[name]});
        console.log(resultValidation);
        if( resultValidation.error) {
            return res.status(400).json({
                status : 400,
                message : resultValidation.error.details[0].message
            });
        }
        else {
            next();
        }
    }

}
