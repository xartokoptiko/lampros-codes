import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const passw = process.env.PASS;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email, // Replace with your Gmail email
    pass: passw, // Replace with your Gmail app password
  },
});

export const mailOptions = {
  from: email,
  to: "lamproskarachristos@yahoo.com",
};

export default transporter;