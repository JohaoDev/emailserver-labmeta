const env = require("dotenv").config(),
  app = require("./app"),
  port = process.env.PORT || 5001,
  fs = require("fs"),
  httpsOptions = {
    key: fs.readFileSync("./security/cert.key"),
    cert: fs.readFileSync("./security/cert.pem"),
    // requestCert: false,
    // rejectUnauthorized: false,
  };

let https = require("https").Server(httpsOptions, app);

https.listen(port, (err) => {
  !err
    ? console.log(`The server is running on https://localhost:${port}/`)
    : console.log(`The server is not working`);
});
