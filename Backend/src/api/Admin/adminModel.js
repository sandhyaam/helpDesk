import mongoose from 'mongoose'

const regSchema = new mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type: String
    },
    email:{
        type:String
    }
},
{
    timestamps:true
})

const adminModel=mongoose.model('admins', regSchema);

export default adminModel;