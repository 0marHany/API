const nodemailer = require("nodemailer");
const sendEmail = async (listEmail, content, attachment) => {
    let attch = []
    if (attachment) {
        attch = attachment;
    }
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.SENDER, // generated ethereal user
            pass: process.env.SENDER_PASSWORD, // generated ethereal password
        },
    });
    try {
        let info = await transporter.sendMail({
            from: `" STA 👻" <${process.env.SENDER}>`, // sender address
            to: listEmail.join(","), // list of receivers
            attachments: attch,
            subject: "Testing Web ✔", // Subject line
            html: content, // html body
        });
        return info;
    } catch (error) {
        console.log(error);
    }
};
module.exports = sendEmail;

