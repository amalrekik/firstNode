var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'yahoo',
  auth: {
    user: 'r********@yahoo.com',
    pass: 'q**********'
  }
});

var mailOptions = {
  from: 'r********@yahoo.com',
  to: 'amalrekik53@gmail.com',
  subject: 'hello Mail',
  text: 'hello Me'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});