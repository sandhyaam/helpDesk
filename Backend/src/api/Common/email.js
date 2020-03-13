import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",  
  secure: true,
  port: 465,
  auth: {
    user: 'teamworkproject10@gmail.com',
    pass: 'coign@123$'
  },
  tls: {
    rejectUnauthorized: false
  }
});

export const sendEmail = (tomail, subject, body) => {  
  const message = {
    from: 'Coign Consultants & IT Services<info@gmail.com>',
    to: tomail,
    subject: subject,
    html: body
  };





  // export const sendEmail = (tomail, subject, body) => {  
  //   const message = {
  //     from: 'Coign Consultants & IT Services<info@gmail.com>',
  //     to: tomail,
  //     subject: subject,
  //     html: '<img src="cid:/images"/><br>',body,
  //     attachments:[
  //       {
  //         filename:'sem.jpg',
  //         path:__dirname+'/images/sem.jpg',
  //         cid:"images"
  //       },
  //       {
  //         filename:'ram.jpg',
  //         path:__dirname+'/images/ram.jpg',
  //         cid:"images"
  //       },
        
  //     ]
  //   };

  transporter.sendMail(message, (error, info) => {
    if (error) {
      return console.log('in nodemailer transporter',error);
    }
    console.log('Message sent: %s', info.messageId);
  });
};
