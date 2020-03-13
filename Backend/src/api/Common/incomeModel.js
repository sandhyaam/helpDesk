import mongoose from 'mongoose'

const regSchema = new mongoose.Schema({
    category:{
        type: String
    },
    subcategory:{
        type: String
    },
    payeename:{
        type: String
    },
    amount:{
        type: String
    },
    date:{
        type:String
    },
    image:{
        type:String
    },
    description:{
        type: String
    },
    towards:{
        type:String
    },
    payment:{
        type:String
    },
    type:{
        type:String
    }
},
{
    timestamps:true
})

const incomeModel=mongoose.model('incomedetails', regSchema)

export default incomeModel;