const transporter = require('../config/emailConfig');

exports.sendEstimateEmail = async (req, res) => {
    const { selections, total, email, name, phone, whatsapp, company } = req.body;

    const contactPhone = phone || whatsapp || 'N/A';

    if (!email || !selections) {
        console.error('Missing required fields for estimate:', { email: !!email, selections: !!selections });
        return res.status(400).json({ 
            message: 'Email and selections are required',
            received: { email: !!email, selections: !!selections }
        });
    }

    try {
        // Format selections for email
        let detailsHtml = '<ul>';
        let detailsText = '';

        Object.entries(selections).forEach(([stepId, optionIds]) => {
            detailsHtml += `<li><strong>Step ${stepId}:</strong> ${optionIds.join(', ')}</li>`;
            detailsText += `Step ${stepId}: ${optionIds.join(', ')}\n`;
        });
        detailsHtml += '</ul>';

        const mailOptions = {
            from: `"NRT Estimator" <${process.env.EMAIL_USER}>`,
            to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
            subject: `New Project Estimate Request ($${total}) - ${name}`,
            replyTo: email,
            text: `
        New Estimate Request
        Name: ${name}
        Email: ${email}
        Phone/WhatsApp: ${contactPhone}
        Company: ${company || 'N/A'}
        Estimated Cost: $${total}
        
        Details:
        ${detailsText}
      `,
            html: `
        <h3>New Project Estimate Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone/WhatsApp:</strong> ${contactPhone}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Estimated Cost:</strong> $${total}</p>
        
        <h4>Project Details:</h4>
        ${detailsHtml}
      `,
        };

        // Send generic auto-reply to user
        const userMailOptions = {
            from: `"Next Revolution Tech" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `Your Project Estimate - Next Revolution Tech`,
            html: `
        <h3>Hi ${name},</h3>
        <p>Thanks for your interest in Next Revolution Tech!</p>
        <p>We received your project estimate request.</p>
        <p><strong>Your Estimated Range:</strong> $${total} - $${total * 1.5}</p>
        <p>Our team will review your requirements and get back to you with a formal proposal shortly.</p>
        
        <br>
        <p>Best regards,<br>The NRT Team</p>
      `
        };

        await transporter.sendMail(mailOptions);
        await transporter.sendMail(userMailOptions);

        res.status(200).json({ message: 'Estimate sent successfully!' });

    } catch (error) {
        console.error('Email Error:', error);
        res.status(500).json({ message: 'Failed to send estimate email', error: error.message });
    }
};
