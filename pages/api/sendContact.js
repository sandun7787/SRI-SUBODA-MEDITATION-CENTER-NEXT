import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    try {
      // Nodemailer transport setup
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,  // Add this to .env.local
          pass: process.env.EMAIL_PASS,  // Add this to .env.local
        },
      });

      // Email options
      const mailOptions = {
        from: email,
        to: process.env.RECEIVER_EMAIL,  // Add this to .env.local
        subject: `New Contact Form Submission: ${subject}`,
        text: `
          You have a new message from:
          Name: ${name}
          Email: ${email}
          Subject: ${subject}
          
          Message:
          ${message}
        `,
      };

      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send email." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
