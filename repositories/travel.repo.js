import TravelModel from '../models/travel.model';

export const save = async ({ startAddress, endAddress, kmTraveled, nameOfPerson, roundtrip, transport }) => {
    const travel =  TravelModel({
        startAddress,
        endAddress, 
        kmTraveled, 
        nameOfPerson,
        roundtrip,
        transport 
    });

    return await travel.save();
}

export const getAll = async () => await TravelModel.find({}).sort({createdAt: -1})
.populate({
    path: 'transport'
})
