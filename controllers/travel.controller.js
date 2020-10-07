
import * as TravelRepo from '../repositories/travel.repo';
import {travelSchema} from '../services/validations'
import {factorEmision} from '../helpers'
import moment from 'moment-timezone';

class TransportController {

    async create(req, res, next){
        try {
            
            let schema =  await travelSchema.validate(req.body); 
            let travel = await TravelRepo.save(schema);
            if(!travel){
                return res.status(400).json({
                    message: "error",
                    status: "Bad Request",
                    code: 400
                })
            }
    
            return res.status(201).json({message: "travel has been created", status:"OK", code: 201 ,travel});

            
        } catch (error) {
            
            let custom_error = new Error(error.message);
            custom_error.status = 422;
            custom_error.errors = error.errors;
            return next(custom_error);     
        }
    }

    async index(req, res, next){
        
        try {
            let travels = await TravelRepo.getAll();
            
            let travelFormated = travels && travels.map( travel => ({
                createdAt: moment.utc(travel.createdAt).local().format('YYYY-MM-DD HH:mma'),
                startAddress: travel.startAddress,
                endAddress: travel.startAddress,
                kmTraveled: travel.kmTraveled,
                qtyPerson: travel.nameOfPerson.length,
                roundtrip: travel.roundtrip? "VERDADERO": "FALSO",
                totalPerPerson: factorEmision(travel.transport.factor, travel.kmTraveled, travel.roundtrip) /// travel.nameOfPerson.length
            }));

            return res.status(200).json({message: "travels has been found", status:"OK", code: 200, travel: travelFormated});
        } catch (error) {
            let custom_error = new Error(error.message);
            custom_error.status = 400;
            return next(custom_error);    
        }
    }
    
}

export default new TransportController;


