
import joi from "joi"

const paginationSchema = joi.object().keys({
    page : joi.number().required().min(0).default(1),
    limit : joi.number().required().min(1).default(10),
    order : joi.string()
})
export default paginationSchema;