import {Schema, model} from 'mongoose';

const TransportSchema = new Schema({
    name: String,
    factor: Number,
    active: Boolean
}, {
    timestamps: true, 
    versionKey: false
});


export default model('transport', TransportSchema);