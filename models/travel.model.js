import {Schema, model, Types } from 'mongoose';

const TravelSchema = new Schema({
    startAddress: String,
    endAddress: String,
    kmTraveled: Number,
    nameOfPerson: Array,
    roundtrip: Boolean,
    transport: {type: Types.ObjectId, ref: 'transport'} // trasnport
}, {
    timestamps: true, 
    versionKey: false
});


export default model('travel', TravelSchema);