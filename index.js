var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
var cors = require("cors");
const creds = require("./config");

var transport = {
    host: "smtp.mailtrap.io", // Don’t forget to replace with the SMTP host of your provider
    port: 2525,
    auth: {
        user: creds.USER,
        pass: creds.PASS,
    },
    secure: false, // true for 465, false for other ports
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
    },
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take messages");
    }
});

router.post("/send", (req, res, next) => {
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;
    var content = `name: ${name} \n email: ${email} \n message: ${message} `;

    var mail = {
        from: name,
        to: "redfern-3522cf@inbox.mailtrap.io", // We need to change this into the customer's email address
        subject: "New Message from Customers",
        text: content,
    };
    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: "fail",
            });
        } else {
            res.json({
                status: "success",
            });
            transporter.sendMail(
                {
                    from: "<your email address>",
                    to: email,
                    subject: "Submission was successful",
                    text: `Thank you for contacting us!\n\nForm details\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
                },
                function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log("Message sent: " + info.response);
                    }
                }
            );
        }
    });
});

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3002);
