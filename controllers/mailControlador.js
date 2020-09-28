const nodemailer = require("nodemailer"),
  smtpTransport = require("nodemailer-smtp-transport");

const gerencia = (req, res) => {
  let { data } = req.body,
    example = require("./bodiesEmails/example")

  const transporter = nodemailer.createTransport(
    smtpTransport({
      port: 587,
      host: "us2.smtp.mailhostbox.com",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      secure: false,
      requireTLS: true,
      ignoreTLS: true,
    })
  );

  let mailOptions = {
    from: `Gerencia - Labmeta S.A. <${process.env.EMAIL_USER}>`,
    to: data.email,
    subject: "Nuevo Mensaje",
    html: example,
    attachments: [
      {
        filename: "example.jpg",
        path: __dirname + "/assets/example.jpg",
        cid: "example",
      },
    ],
  };

  transporter.verify((error, success) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Server is ready to send messages");
    }
  });

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        msm: `${err}`,
      });
    } else {
      return res.status(200).json({
        ok: true,
        msm: "Email OK",
      });
    }
  });
};

module.exports = {
  gerencia,
};
