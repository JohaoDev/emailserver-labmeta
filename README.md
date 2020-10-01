An express server was developed and a module for sending e-mails called Nodemailer was implemented.

Connection endpoint: http://localhost:5000/send-email

Steps to set up an express server.

1. Download server from the following link:
   https://github.com/vimhash/emailserver-labmeta

2. Open a terminal in the folder emailserver-labmeta and write:
   \$ npm install

This will cause the necessary dependencies to be installed to run the server.

3. Copy the file ".env example" and rename it to ".env".

And fill in the variables that are in the file.
EMAIL_USER = "e-mail"
EMAIL_PASS = "your email key"

5. And finally in the terminal we execute "npm start" and wait until the server notifies us that it is working.
