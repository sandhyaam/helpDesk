import { Router } from 'express'

import {
    adminlogin,
    forgetpassword,
    changepassword,
    showstudent,
    viewstudent,
    addstudent,
    deletestudent,
    editstudent,
    updatestudent,
    joinstudents,
    showentrolledstudent,
    notintrestedstudents,
    shownotintrestedstudents,
    viewupnotintrestedstudemts,
    updatenotintrestedstudent,
    deletenotintrestedstudents,
    addbatch,
    showbatch,
    viewbatch,
    updatebatch,
    viewrunningbatches,
    viewcompletedbatches,
    noofstudents,
    addpayments,
    paymentdetails,
    duepayments,
    updatepayment,
    getAmount,
    addincome,
    addexpenses,
    showreports,
    searchdetails,
    showemployees,
    addemployee,
    viewemployees,
    employeeprofile,
    updateemployees,
    deleteemployee,
    getemail,
    showspecialization,
    sendmail,


    // searchstudent,
    // batchdetailssearch,
    // searchbatch,
    // searchrunninghbatch,
    // searchnotintrestedstudent,
    // searchentrolledstudent,
    // searchduepayments,
    // searchemployee,
    // searchimcomedetails


    
} from './controller'

const router = new Router();

router.get('/adminlogin', adminlogin);

router.get('/forgetpassword', forgetpassword);

router.put('/changepassword/:id', changepassword);

router.get('/showstudent', showstudent);

router.get('/viewstudent', viewstudent);

router.post('/addstudent', addstudent);

router.delete('/deletestudent', deletestudent);

router.get('/editstudent', editstudent);

router.put('/updatestudent/:id', updatestudent);


router.post('/joinstudents', joinstudents);

router.get('/showentrolledstudent', showentrolledstudent);

router.post('/notintrestedstudents', notintrestedstudents);

router.get('/shownotintrestedstudents', shownotintrestedstudents);

router.get('/viewupnotintrestedstudemts', viewupnotintrestedstudemts);

router.put('/updatenotintrestedstudent/:id', updatenotintrestedstudent);

router.delete('/deletenotintrestedstudents', deletenotintrestedstudents);

router.post('/addbatch', addbatch);

router.get('/showbatch', showbatch);

router.get('/viewbatch', viewbatch);

router.put('/updatebatch/:id', updatebatch);

router.get('/viewrunningbatches', viewrunningbatches);

router.get('/viewcompletedbatches', viewcompletedbatches);

router.get('/noofstudents', noofstudents);

router.post('/addpayments', addpayments);

router.get('/paymentdetails', paymentdetails);

router.get('/duepayments', duepayments);

router.put('/updatepayment/:id', updatepayment);

router.get('/getAmount/:id', getAmount);

router.post('/addincome', addincome);

router.post('/addexpenses',addexpenses);

router.get('/showreports', showreports);

router.get('/searchdetails', searchdetails);

router.post('/addemployee', addemployee);

router.get('/showemployees', showemployees);

router.get('/viewemployees', viewemployees);

router.get('/employeeprofile', employeeprofile);

router.put('/updateemployees/:id', updateemployees);

router.delete('/deleteemployee/:id', deleteemployee);

router.get('/getemail', getemail);

router.get('/showspecialization', showspecialization);

router.post('/sendmail', sendmail);


// router.get('/searchstudent', searchstudent);

// router.get('/batchdetailssearch', batchdetailssearch);

// router.get('/searchbatch', searchbatch);

// router.get('/searchrunninghbatch', searchrunninghbatch);

// router.get('/searchnotintrestedstudent', searchnotintrestedstudent);

// router.get('/searchentrolledstudent', searchentrolledstudent);

// router.get('/searchduepayments', searchduepayments);

// router.get('/searchemployee', searchemployee);

// router.get('/searchimcomedetails', searchimcomedetails);











































export default router;