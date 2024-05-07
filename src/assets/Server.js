const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Replace these with your actual email configuration
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'phoshokorr@gmail.com',
    pass: 'aesz xstm myro lhsa',
  },
});

app.post('/api/Contact', (req, res) => {
  const { name, email, contacts, message } = req.body;

  // Validation (you can add more validations as needed)
  if (!name || !email || !contacts || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // Send email
  const mailOptions = {
    from:${email} ,
    to: 'phoshokorr@gmail.com',
    subject: 'New Message from Portfolio Contact Form',
    text: `
      Name: ${name}
      Email: ${email}
      Contacts: ${contacts}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.error('Could not send an email:', error);
      return res.status(500).json({ message: 'Failed to send message.' });
    }
    res.status(200).json({ message: 'Message sent successfully!' });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
