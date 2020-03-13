import mongoose from 'mongoose'

const regSchema = new mongoose.Schema({
    employeeid:{
        type: String
    },
    specialization:{
        type: String
    },
    fullname:{
        type: String
    },
    fathername:{
        type:String
    },
    designation:{
        type: String
    },
    mobile:{
        type:String
    },
    email:{
        type:String
    },
    dob:{
        type: String
    },
    dateofjoin:{
        type: String
    },
    bloodgroup:{
        type: String
    },
    image:{
        type: String
    },
    address:{
        type:String
    },
    status:{
        type:String
    }
},
{
    timestamps:true
})

const employeeModel=mongoose.model('employees', regSchema)

export default employeeModel;