const loadTemplate = require("./templates/template");
const nodemailer = require("nodemailer");

const gerencia = async (req, res) => {
  const { emailTo, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    port: 587,
    host: "us2.smtp.mailhostbox.com",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    secure: false,
    requireTLS: true,
    ignoreTLS: true,
  });

  let mailOptions = {
    from: `Gerencia - Labmeta S.A. <${process.env.EMAIL_USER}>`,
    to: emailTo,
    subject: subject,
    // text: message,
    html: await loadTemplate({ message }),
    attachments: [
      {
        filename: "attachment.png",
        path: __dirname + "/assets/attachment.png",
      },
    ],
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        msm: `${err}`,
      });
    } else {
      return res.status(200).json({
        ok: true,
        msm: "Email sent",
      });
    }
  });
};

module.exports = {
  gerencia,
};
