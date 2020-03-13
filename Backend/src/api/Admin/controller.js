
import login from './adminModel';

import students from '../Common/studentsModel';

import batch from '../Common/batchModel';

import payments from '../Common/paymentModel';

import joinstudent from '../Common/joinModel';

import income from '../Common/incomeModel';

import employees from '../Common/employeeModel';

import sendemail from '../Common/sendemailModel';

import notintrestedstudent from '../Common/notintrestedModel';



import { sendEmail } from '../Common/email'


export const adminlogin = (req, res) => {
    login.findOne({"username":req.query.username,"password":req.query.password}, (err, result) => {
        if (err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    })
}
export const forgetpassword = (req, res) => {
    login.findOne({ "email": req.query.email }, (err, result) => {
        if (err)
            res.send(err);
        else {
            const subject = 'File Received';
            const body = `Your Username & Password <br><br>Admin Name: ${result.username}<br>Password: ${result.password}<br>Please Login Using this Credentials <br>Thank You.`;
            sendEmail(req.query.email, subject, body);
            res.send(result);
        }
    })
}
export const changepassword = (req, res) => {
    login.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, result) => {
        if (err)
            res.send(err);
        else{
            const subject = 'File Received';
            const body = `Your New Password is<br><br>Admin Name: ${req.body.email}<br>Password: ${req.body.password}<br>Please Login Using this Credentials <br>Thank You.`;
            sendEmail(req.body.email, subject, body);
            res.send(result);
        }
           
    })
}
export const showstudent = (req, res) => {
    students.find((err, result) => {
        if (err) {
            res.send(err);
        }
        else
            res.send(result);
    })
}
export const viewstudent = (req, res) => {
    students.findOne({"_id":req.query.id},(err, result) => {
        if (err) {
            res.send(err);
        }
        else
            res.send(result);
    })
}
export const addstudent = (req, res) => {
    students.create(req.body, (err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}

export const deletestudent = (req, res) => {
    students.findByIdAndRemove({"_id":req.query.id}, (err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);

    })
}
export const editstudent = (req, res) => {
    students.findById(req.params.id, (err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}

export const updatestudent = (req, res) => {
    students.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}

export const joinstudents = (req, res) => {
    joinstudent.create(req.body, (err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}
export const showentrolledstudent = (req, res) => {
    joinstudent.find((err, result) => {
        if (err) {
            res.send(err);
        }
        else
            res.send(result);
    })
}


export const notintrestedstudents = (req, res) => {
    notintrestedstudent.create(req.body, (err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}
export const shownotintrestedstudents = (req, res) => {
    notintrestedstudent.find((err, result) => {
        if (err) {
            res.send(err);
        }
        else
            res.send(result);
    })
}
export const viewupnotintrestedstudemts = (req, res) => {
    notintrestedstudent.findOne({"_id":req.query.id},(err, result) => {
        if (err) {
            res.send(err);
        }
        else
            res.send(result);
    })
}
export const updatenotintrestedstudent = (req, res) => {
    notintrestedstudent.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}
export const deletenotintrestedstudents = (req, res) => {
    notintrestedstudent.findByIdAndRemove({"_id":req.query.id}, (err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);

    })
}

export const showbatch = (req, res) => {
    batch.find((err, result) => {
        if (err) {
            res.send(err);
        }
        else
            res.send(result);
    })
}
export const addbatch = (req, res) => {
    batch.create(req.body, (err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}
export const viewbatch = (req, res) => {
    batch.findOne({"_id":req.query.id},(err, result) => {
        if (err) {
            res.send(err);
        }
        else
            res.send(result);
    })
}
export const updatebatch = (req, res) => {
    batch.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}
export const viewrunningbatches = (req, res) => {
    batch.find({ "todate": { "$gte": new Date() } }, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    });
}
export const viewcompletedbatches = (req, res) => {
    batch.find({ "todate": { "$lte": new Date() } }, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    });
}
export const noofstudents = (req, res) => {
    joinstudent.find({"batchname":req.query.batchname}, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    });
} 

export const addpayments = (req, res) => {
    payments.create(req.body, (err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}
export const paymentdetails = (req, res) => {
    payments.find({"batchname":req.query.batchname}, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    });
}


export const duepayments = (req, res) => {
    joinstudent.find({}).populate('batch').exec((err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            const ress = result.map(data => {
                return { id: data._id, batch: data.batch.batch,fromdate:data.batch.fromdate,todate:data.batch.todate,technology:data.batch.technology, studentname: data.studentname, mobile: data.mobile,email:data.email, seeking: data.seeking, trainingtype: data.trainingtype, duration: data.duration, totalamount: data.totalamount,advanceamount:data.advanceamount,dueamount:data.dueamount,date:data.date }
            })
            res.send(ress);
        }
    })
}



export const getAmount = (req, res) => {
    joinstudent.findById(req.params.id, (err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}
export const updatepayment = (req, res) => {
    joinstudent.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}
export const addincome = (req, res) => {
    income.create(req.body, (err, result) => {
        if (err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    })
}
export const addexpenses = (req, res) => {
    income.create(req.body, (err, result) => {
        if (err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    })
}
export const showreports = (req, res) => {
    income.find((err, result) => {
        if (err) {
            res.send(err);
        }
        else
            res.send(result);
    })
}
export const searchdetails=(req, res) =>{
    income.find({"type":req.query.type, "date":req.query.date  } , (err, result) => {
     if (err) {
         res.send(err);
     }
     else{
        res.send(result);
     }
 })
}
export const addemployee = (req, res) => {
    employees.create(req.body, (err, result) => {
        if (err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    })
}
export const showemployees = (req, res) => {
    employees.find((err, result) => {
        if (err) {
            res.send(err);
        }
        else{
            res.send(result);
        }
    })
}
export const viewemployees = (req, res) => {
    employees.findOne({"_id":req.query.id},(err, result) => {
        if (err) {
            res.send(err);
        }
        else{
            res.send(result);
        }
    })
}
export const employeeprofile = (req, res) => {
    employees.findOne({"_id":req.query.id},(err, result) => {
        if (err) {
            res.send(err);
        }
        else{
            res.send(result);
        }
    })
}
export const updateemployees = (req, res) => {
    employees.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, result) => {
        if (err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    })
}
export const deleteemployee = (req, res) => {
    employees.findByIdAndRemove(req.params.id, (err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);

    })
}
export const getemail = (req, res) => {
    employees.findOne({"_id":req.query.id},(err, result) => {
        if (err) {
            res.send(err);
        }
        else{
            res.send(result);
        }
    })
}
export const showspecialization = (req, res) => {
    employees.find({"specialization":req.query.specialization},(err, result) => {
        if (err) {
            res.send(err);
        }
        else{
            res.send(result);
        }
    })
}
export const sendmail = (req, res) => {
        sendemail.create(req.body, (err, result) => {
        if (err)
            res.send(err);
        else {
            const subject = 'File Received';
            const body = `Email ID:${req.body.email}<br>Subject: ${req.body.subject}<br>Message: ${req.body.message} <br>File: ${req.body.image} <br>Thank You.`;
            sendEmail(req.body.email, subject, body);
            res.send(result);
        }
    })
}









// export const batchdetailssearch=(req, res) =>{
//     joinstudent.find({"studentname":req.query.studentname}, (err, result) => {
//      if (err) {
//          res.send(err);
//      }
//      else{
//         res.send(result);
//      }
//  })
// }
// export const searchbatch = (req, res) => {
//     batch.find({ "batch": req.query.batch }, (err, result) => {
//         if (err) {
//             res.send(err);
//         }
//         else {
//             res.send(result);
//         }
//     })
// }
// export const searchrunninghbatch = (req, res) => {
//     batch.find({ "batch": req.query.batch }, (err, result) => {
//         if (err) {
//             res.send(err);
//         }
//         else {
//             res.send(result);
//         }
//     })
// }
// export const searchemployee = (req, res) => {
//     employees.find({ "fullname": req.query.fullname }, (err, result) => {
//         if (err) {
//             res.send(err);
//         }
//         else {
//             res.send(result);
//         }
//     })
// }
// export const searchimcomedetails = (req, res) => {
//     income.find({ "payeename": req.query.payeename }, (err, result) => {
//         if (err) {
//             res.send(err);
//         }
//         else {
//             res.send(result);
//         }
//     })
// }
// export const searchduepayments=(req, res) =>{
//     joinstudent.find({"studentname":req.query.studentname}).populate('batch').exec((err, result) => {
//  if (err) {
//      res.send(err);
//  }
//  else{
//     const ress = result.map(data => {
//         return { id: data._id, batch: data.batch.batch,fromdate:data.batch.fromdate,todate:data.batch.todate,technology:data.batch.technology, studentname: data.studentname, mobile: data.mobile,email:data.email, seeking: data.seeking, trainingtype: data.trainingtype, duration: data.duration, totalamount: data.totalamount,advanceamount:data.advanceamount,dueamount:data.dueamount,date:data.date }
//     })
//     res.send(ress);
//  }
// })
// }
// export const searchnotintrestedstudent=(req, res) =>{
//     notintrestedstudent.find({"studentname":req.query.studentname}, (err, result) => {
//      if (err) {
//          res.send(err);
//      }
//      else{
//         res.send(result);
//      }
//  })
// }
// export const searchstudent=(req, res) =>{
//     students.find({"studentname":req.query.studentname}, (err, result) => {
//      if (err) {
//          res.send(err);
//      }
//      else{
//         res.send(result);
//      }
//  })
// }
// export const searchentrolledstudent=(req, res) =>{
//     joinstudent.find({"studentname":req.query.studentname}, (err, result) => {
//      if (err) {
//          res.send(err);
//      }
//      else{
//         res.send(result);
//      }
//  })
// }