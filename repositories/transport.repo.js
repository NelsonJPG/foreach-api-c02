import TransportModel from '../models/transport.model';

export const save = async ({name, factor, active = 1}) => {
    const transport =  TransportModel({
        name, factor, active
    });

    return await transport.save();
}

export const getAll = async () => await TransportModel.find({ active: true }).sort({createdAt: -1});
