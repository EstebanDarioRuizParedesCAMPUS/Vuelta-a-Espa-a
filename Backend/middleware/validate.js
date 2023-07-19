import {validationResult} from "express-validator"

const validateDocument = (req,res,next) =>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors);
        return res.status(400).json(errors)
    }
    next()
}

export default validateDocument