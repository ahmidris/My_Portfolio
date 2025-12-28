const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// POST /api/contact
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !name.trim()) {
        return res.status(400).json({
            success: false,
            error: 'Name is required'
        });
    }

    if (!email || !email.trim()) {
        return res.status(400).json({
            success: false,
            error: 'Email is required'
        });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            error: 'Please provide a valid email address'
        });
    }

    if (!message || !message.trim()) {
        return res.status(400).json({
            success: false,
            error: 'Message is required'
        });
    }

    try {
        // Create transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                // Remove any spaces from the app password
                pass: process.env.GMAIL_PASS.replace(/\s+/g, '')
            }
        });

        // Email options
        const mailOptions = {
            from: email,
            to: process.env.GMAIL_USER,
            subject: `New Portfolio Message from ${name}`,
            text: `
Name: ${name}
Email: ${email}
Message: ${message}
            `,
            html: `
<h3>New Contact Message</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong></p>
<p>${message}</p>
            `
        };

        // Send email
        await transporter.sendMail(mailOptions);

        console.log('=== New Contact Message Sent ===');
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);

        res.json({ success: true, message: 'Message sent successfully!' });

    } catch (error) {
        console.error('Email send error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to send message. Please try again later.'
        });
    }
});

module.exports = router;
