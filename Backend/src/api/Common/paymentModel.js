import mongoose from 'mongoose'

const regSchema = new mongoose.Schema({
    batchname:{
        type: String
    },
    studentname:{
        type: String
    },
    mobile:{
        type: String
    },
    amount:{
        type: String
    },
    date:{
        type: String
    }
},
{
    timestamps:true
})

const paymentModel=mongoose.model('payments', regSchema)

export default paymentModel;