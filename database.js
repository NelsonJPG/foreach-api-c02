import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost/foreach", {
    useNewUrlParser: true ,
    useUnifiedTopology: true 
})
.then( db => console.log("Database connected successfully....")) 
.catch( error => console.log(error)) 