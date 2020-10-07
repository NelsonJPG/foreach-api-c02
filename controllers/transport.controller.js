
import * as TransportRepo from '../repositories/transport.repo';
import {transportSchema} from '../services/validations'
class TransportController {

    async create(req, res, next){
        try {
            
            let schema =  await transportSchema.validate(req.body); 
            let transport = await TransportRepo.save(schema);
            if(!transport){
                return res.status(400).json({
                    message: "error",
                    status: "Bad Request",
                    code: 400
                })
            }
    
            return res.status(201).json({message: "transport has been created", status:"OK", code: 201 ,transport});
            
            
        } catch (error) {
            
            let custom_error = new Error(error.message);
            custom_error.status = 422;
            custom_error.errors = error.errors;
            return next(custom_error);     
        }
    }
    
    async index(req, res, next){
        
        try {
            let transports = await TransportRepo.getAll();
            return res.status(200).json({message: "transport has been found", status:"OK", code: 200 ,transports});
        } catch (error) {
            let custom_error = new Error(error.message);
            custom_error.status = 400;
            return next(custom_error);    
        }
    }
}

export default new TransportController;


