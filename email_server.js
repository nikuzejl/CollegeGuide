const http = require('http');

const hostname = '127.0.0.1';

//const hostname = 'https://nikuzejl.github.io/CollegeGuide'
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/*
    How to run this server code:
    run on the terminal "node server.js"
*/

// //import modules installed at the previous step. We need them to run Node.js server and send emails
// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const nodemailer = require("nodemailer");

// // create a new Express application instance 
// const app = express();

// //configure the Express middleware to accept CORS requests and parse request body into JSON
// app.use(cors({origin: "*" }));
// app.use(bodyParser.json());

// //start application server on port 3000
// app.listen(3000, () => {
//   console.log("The server started on port 3000");
// });

// // define a sendmail endpoint, which will send emails and response with the corresponding status
// app.post("/sendmail", (req, res) => {
//   console.log("request came");
//   let data = req.body;
//   sendMail(data, (err, info) => {
//     if (err) {
//       console.log(err);
//       res.status(400);
//       res.send({ error: "Failed to send email" });
//     } else {
//       console.log("Email has been sent");
//       res.send(info);
//     }
//   });
// });

// app.post("/confirmEmail", (req, res) => {
//   console.log("starting to send confirmation email");
//   let data = req.body;
//   confirmEmail(data, (err, info) => {
//     if (err) {
//       console.log(err);
//       res.status(400);
//       res.send({ error: "Failed to send email" });
//     } else {
//       console.log("Confirmation email sent");
//       res.send(info);
//     }
//   });
// });

// const sendMail = (data, callback) => {
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 587,
//       secure: false,
//       auth: {
//         user: "trinidoffice@gmail.com",    //no plain email and password on a real life product
//         pass: "est1823bantams"           
//       }
//     }); 

//     const mailOptions = {
//         from: `"ID Office", "trinidoffice@gmail.com"`,
//         to: 'trinidoffice@gmail.com',
//         subject: data.subject,
//         html: data.message
//       };
      
//       transporter.sendMail(mailOptions, callback);
//   }

//   const confirmEmail = (data, callback) => {
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 587,
//       secure: false,
//       auth: {
//         user: "trinidoffice@gmail.com",    //no plain email and password on a real life product
//         pass: "est1823bantams"           
//       }
//     }); 

//     const mailOptions = {
//         from: `"ID Office", "trinidoffice@gmail.com"`,
//         to: data.subject,
//         subject: data.subject,
//         html: data.message
//       };
      
//       transporter.sendMail(mailOptions, callback);
//   }