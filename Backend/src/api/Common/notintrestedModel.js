import mongoose from 'mongoose'

const regSchema = new mongoose.Schema({
   
    studentname:{
        type: String
    },
    collegename:{
        type: String
    },
    fathername:{
        type: String
    },
    fatheroccupation:{
        type:String
    },
    rollno:{
        type: String
    },
    branch:{
        type:String
    },
    parsuing:{
        type:String
    },
    gender:{
        type: String
    },
    mobile:{
        type: String
    },
    altmobile:{
        type: String
    },
    dob:{
        type:String
    },
    email:{
        type: String
    },
    address:{
        type:String
    },
    seeking:{
        type:String
    },
    date:{
        type:String
    },
    followup:{
        type:String
    },
    reason:{
        type: String
    }
},
{
    timestamps:true
})

const notintrestedModel=mongoose.model('notintrestedStudents', regSchema)

export default notintrestedModel;