import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, subject, message } = req.body; // Add phone to the request body

    // Create a transporter using environment variables for email authentication
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", 
      port: 587,
      secure: false, 
      auth: {
        user: process.env.EMAIL_USER,  // Email from environment variable
        pass: process.env.EMAIL_PASS,  // Email password from environment variable
      },
    });

    // Define the mail options including the phone number in the email content
    const mailOptions = {
      from: email, 
      to: process.env.EMAIL_TO,  // Recipient email from environment variable
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    try {
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
