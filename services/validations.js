import * as Yup from 'yup';

export const transportSchema = Yup.object().shape({
    name: Yup.string().trim().required(),
    factor: Yup.number().required(),
    active: Yup.bool().optional()
})

export const travelSchema = Yup.object().shape({
    startAddress: Yup.string().trim().required(),
    endAddress: Yup.string().trim().required(),
    kmTraveled: Yup.number().required(),
    nameOfPerson: Yup.array(Yup.string()),
    roundtrip: Yup.bool().required(),
    transport: Yup.string().required()
})
