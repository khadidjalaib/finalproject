import  mongoose from 'mongoose';

const serviceSchema= mongoose.Schema({
    nomService: String,
    description: String,
    nom: String,
    prenom:String,
    Age: Number,
    photo: String,
    wilaya: String,
    tél: String,
})

const serviceMessage =mongoose.model('serviceMessage',serviceSchema);

export default serviceMessage;