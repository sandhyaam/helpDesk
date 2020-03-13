import mongoose from 'mongoose'

const regSchema = new mongoose.Schema({
    batch:{
        type: String
    },
    timings:{
        type: String
    },
    fromdate:{
        type: String
    },
    todate:{
        type:Date
    },
    trainername:{
        type: String
    },
    technology:{
        type:String
    }
},
{
    timestamps:true
})

const batchModel=mongoose.model('batches', regSchema)

export default batchModel;