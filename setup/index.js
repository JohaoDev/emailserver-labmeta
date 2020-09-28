const env = require("dotenv").config(),
  app = require("./app"),
  port = process.env.PORT || 5001;

app.listen(port, (err) => {
  !err
    ? console.log(`The server is running on http://localhost:${port}/`)
    : console.log(`The server is not working`);
});
