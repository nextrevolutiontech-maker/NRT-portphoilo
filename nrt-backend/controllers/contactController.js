const transporter = require('../config/emailConfig');

exports.sendContactEmail = async (req, res) => {
    console.log('Received contact request:', req.body);
    const { name, email, company, phone, whatsapp, message } = req.body;

    // Support both phone and whatsapp fields
    const contactPhone = phone || whatsapp || 'N/A';

    if (!name || !email || !message) {
        console.error('Missing required fields:', { name: !!name, email: !!email, message: !!message });
        return res.status(400).json({ 
            message: 'Name, Email, and Message are required',
            received: { name: !!name, email: !!email, message: !!message }
        });
    }

    try {
        const mailOptions = {
            from: `"NRT Contact" <${process.env.EMAIL_USER}>`, // authenticated user
            to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
            replyTo: email,
            subject: `New Inquiry from ${name} - ${company || 'Portfolio Website'}`,
            text: `
        Name: ${name}
        Email: ${email}
        Company: ${company || 'N/A'}
        Phone/WhatsApp: ${contactPhone}
        
        Message:
        ${message}
      `,
            html: `
        <h3>New Contact or Inquiry</h3>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Company:</strong> ${company || 'N/A'}</li>
          <li><strong>Phone/WhatsApp:</strong> ${contactPhone}</li>
        </ul>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);

        res.status(200).json({ message: 'Email sent successfully!' });

    } catch (error) {
        console.error('Email Error:', error);
        res.status(500).json({ message: 'Failed to send email', error: error.message });
    }
};
