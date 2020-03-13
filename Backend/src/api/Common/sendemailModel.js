import mongoose from 'mongoose'

const regSchema = new mongoose.Schema({
   
    specialization:{
        type: String
    },
    subject:{
        type: String
    },
    email:{
        type:String
    },
    message:{
        type: String
    },
    image:{
        type:String
    }
},
{
    timestamps:true
})

const emailModel=mongoose.model('sendemails', regSchema)

export default emailModel;