// server.js
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../public_html')));


// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: 'mail.wadhwaevents.com',
  port: 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.use('/images', express.static(path.join(__dirname, '../public_html/images')));
// Static image data with associated keywords
const imageKeywordMapping = [
  { filename: 'newevent5.jpg', keywords: ['nature', 'forest', 'trees'] },
  { filename: 'newevent6.jpg', keywords: ['mountain', 'snow', 'nature'] },
  { filename: 'newevent7.jpg', keywords: ['car', 'vehicle', 'sports car'] },
  { filename: 'newevent8.jpg', keywords: ['car', 'luxury', 'sedan'] },
  { filename: 'newevent5.jpg', keywords: ['beach', 'ocean', 'sand'] },
  { filename: 'newevent6.jpg', keywords: ['city', 'skyline', 'buildings'] },
];
// Chatbot endpoint to fetch images
app.post('/api/chatbot', (req, res) => {
  const { keyword } = req.body;

  if (!keyword) {
    return res.status(400).json({ message: 'Keyword is required.' });
  }

  try {
    // Filter images that contain the keyword in their associated keywords array
    const matchedImages = imageKeywordMapping.filter(image =>
      image.keywords.some(k => k.toLowerCase().includes(keyword.toLowerCase()))
    );

    if (matchedImages.length === 0) {
      return res.status(404).json({ message: 'No images found for the given keyword.' });
    }

    // Map matched images to their URLs
    const imageUrls = matchedImages.map(image => `/images/${image.filename}`);
    res.status(200).json({ images: imageUrls });
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ message: 'Error fetching images.' });
  }
});


// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, lastName, email, phone, message } = req.body;
  console.log("Received appointment request:", req.body);
  try {
    // Email to user (confirmation)
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting us!',
      html: `
        <h2>Thank you for reaching out to us, ${name}!</h2>
        <p>We have received your message and will get back to you shortly.</p>
        <h3>Your message details:</h3>
        <p><strong>Name:</strong> ${name} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
        <br>
        <p>Best regards,</p>
        <p>Wadhwa Events and Exhibits</p>
      `
    };

    // Email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    };

    // Send emails
    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(adminMailOptions);

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending message' });
  }
});

// Appointment booking endpoint
app.post('/api/appointment', async (req, res) => {
  const { name, lastName, email, phone, date, from, to, purpose } = req.body;

  try {
    // Email to user (confirmation)
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Appointment Confirmation',
      html: `
        <h2>Thank you for booking an appointment, ${name}!</h2>
        <p>Your appointment has been confirmed for:</p>
        <h3>Appointment details:</h3>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${from} - ${to}</p>
        <p><strong>Purpose:</strong> ${purpose}</p>
        <br>
        <p><strong>Your Information:</strong></p>
        <p>Name: ${name} ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <br>
        <p>We look forward to meeting you!</p>
        <p>Best regards,</p>
        <p>Wadhwa Events and Exhibits</p>
      `
    };

    // Email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Appointment Booking',
      html: `
        <h2>New Appointment Booking</h2>
        <p><strong>Name:</strong> ${name} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${from} - ${to}</p>
        <p><strong>Purpose:</strong> ${purpose}</p>
      `
    };

    // Send emails
    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(adminMailOptions);

    res.status(200).json({ message: 'Appointment booked successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error booking appointment' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// // Catch-all handler for frontend routes
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public_html', 'index.html'));
// });