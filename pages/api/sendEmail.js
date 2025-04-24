// pages/api/sendEmail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    // Create a transporter object using Gmail's SMTP details
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Correct SMTP host for Gmail
      port: 587, // Use port 587 for TLS
      secure: false, // False for TLS, true for SSL (use 465 for SSL)
      auth: {
        user: "sandunwarnasooreya345@gmail.com", // Your Gmail address
        pass: "wdxv sybs rcrw oald", // Your Gmail password or App Password if using 2FA
      },
    });

    // Define the email options
    const mailOptions = {
      from: email, // Sender's email (provided in the form)
      to: "sandunwarnasooreya345@gmail.com", // Your email address (recipient)
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send email" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
