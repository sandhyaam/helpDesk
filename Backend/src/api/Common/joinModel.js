import mongoose from 'mongoose'

const regSchema = new mongoose.Schema({
    batch:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"batches"
    },
    batchname:{
        type: String
    },
    studentname:{
        type: String
    },
    mobile:{
        type: String
    },
    email:{
        type: String
    },
    seeking:{
        type:String
    },
    trainingtype:{
        type:String
    },
    duration:{
        type: String
    },
    totalamount:{
        type:String
    },
    advanceamount:{
        type:String
    },
    dueamount:{
        type:String
    },
    date:{
        type: String
    }},
{
    timestamps:true
})

const joinModel=mongoose.model('joinStudents', regSchema)

export default joinModel;