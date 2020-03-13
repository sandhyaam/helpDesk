const express = require("express");

const app = express();

var image = require('path').join(__dirname, '/Images');

app.use(express.static(image));

app.get("/", index);

app.get("/adminlogin", adminlogin);

app.get("/admin", adminhome);

app.get("/homepage", homepage);

app.get("/admin/coignwalkin", coignwalkin);

app.get("/admin/coignwalkinregistration", coignwalkinregistration);

app.get("/admin/updatecoignwalkin", updatecoignwalkin);

app.get("/admin/joinstudents", joinstudents);

app.get("/admin/addbatch", addbatch);

app.get("/admin/entrolledstudents", entrolledstudents);

app.get("/admin/notintrestedstudents", notintrestedstudents);

app.get("/admin/oldstudents", oldstudents);

app.get("/admin/viewnotintrestedstudents", viewnotintrestedstudents);

app.get("/admin/viewupnotintrestedstudents", viewupnotintrestedstudents);

app.get("/admin/joinnotintrestedstudents", joinnotintrestedstudents);

app.get("/admin/updatebatch", updatebatch);

app.get("/admin/runningbatches", runningbatches);

app.get("/admin/completedbatches", completedbatches);

app.get("/admin/batchdetails", batchdetails);

app.get("/admin/paymentdetails", paymentdetails);

app.get("/admin/duepaymentdetails", duepaymentdetails);

app.get("/admin/income", income);

app.get("/admin/expenses", expenses);

app.get("/admin/reports", reports);

app.get("/admin/employeedetails", employeedetails);

app.get("/admin/addemployee", addemployee);

app.get("/admin/updateemployee", updateemployee);

app.get("/admin/mails", mails);

app.get("/admin/changepassword", changepassword);

app.get("/admin/forgotpassword", forgotpassword);









function index(req, res) {
    res.sendFile("Index.html", { root: __dirname });
}
function adminlogin(req, res) {
    res.sendFile("AdminLogin.html", { root: __dirname });
}
function adminhome(req, res) {
    res.sendFile("Admin/AdminHome.html", { root: __dirname });
}
function coignwalkin(req, res) {
    res.sendFile("Admin/CoignWalkin.html", { root: __dirname });
}
function coignwalkinregistration(req, res) {
    res.sendFile("Admin/CoignWalkRegistration.html", { root: __dirname });
}
function updatecoignwalkin(req, res) {
    res.sendFile("Admin/UpdateCoignWalkin.html", { root: __dirname });
}
function joinstudents(req, res) {
    res.sendFile("Admin/JoinStudents.html", { root: __dirname });
}
function addbatch(req, res) {
    res.sendFile("Admin/AddBatch.html", { root: __dirname });
}
function entrolledstudents(req, res) {
    res.sendFile("Admin/EntrolledStudents.html", { root: __dirname });
}
function notintrestedstudents(req, res) {
    res.sendFile("Admin/NotIntrestedStudents.html", { root: __dirname });
}
function viewnotintrestedstudents(req, res) {
    res.sendFile("Admin/ViewNotIntrestedStudents.html", { root: __dirname });
}
function oldstudents(req, res) {
    res.sendFile("Admin/OldStudents.html", { root: __dirname });
}
function viewupnotintrestedstudents(req, res) {
    res.sendFile("Admin/UpdateNotIntrestedStu.html", { root: __dirname });
}
function joinnotintrestedstudents(req, res) {
    res.sendFile("Admin/JoinNotIntrestedStudents.html", { root: __dirname });
}
function updatebatch(req, res) {
    res.sendFile("Admin/UpdateBatch.html", { root: __dirname });
}
function runningbatches(req, res) {
    res.sendFile("Admin/RunningBatches.html", { root: __dirname });
}
function completedbatches(req, res) {
    res.sendFile("Admin/CompletedBatches.html", { root: __dirname });
}
function batchdetails(req, res) {
    res.sendFile("Admin/BatchDetails.html", { root: __dirname });
}
function paymentdetails(req, res) {
    res.sendFile("Admin/PaymentDetails.html", { root: __dirname });
}
function duepaymentdetails(req, res) {
    res.sendFile("Admin/DuePaymentDetails.html", { root: __dirname });
}
function income(req, res) {
    res.sendFile("Admin/Income.html", { root: __dirname });
}
function expenses(req, res) {
    res.sendFile("Admin/Expenses.html", { root: __dirname });
}
function reports(req, res) {
    res.sendFile("Admin/Reports.html", { root: __dirname });
}
function employeedetails(req, res) {
    res.sendFile("Admin/EmployeeDetails.html", { root: __dirname });
}
function addemployee(req, res) {
    res.sendFile("Admin/AddEmployee.html", { root: __dirname });
}
function updateemployee(req, res) {
    res.sendFile("Admin/UpdateEmployees.html", { root: __dirname });
}
function mails(req, res) {
    res.sendFile("Admin/Mails.html", { root: __dirname });
}
function changepassword(req, res) {
    res.sendFile("Admin/ChangePassword.html", { root: __dirname });
}
function forgotpassword(req, res) {
    res.sendFile("Admin/ForgotPassword.html", { root: __dirname });
}
function homepage(req, res) {
    res.sendFile("Homepage.html", { root: __dirname });
}














app.listen(3000, () => console.log("I am listeing you at port number 3000"));