const { Resend } = require('resend');

module.exports = async (req, res) => {
	// Enable CORS
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

	// Handle OPTIONS request for CORS
	if (req.method === 'OPTIONS') {
		return res.status(200).end();
	}

	// Only allow POST requests
	if (req.method !== 'POST') {
		return res.status(405).json({ error: 'Method not allowed' });
	}

	try {
		const { name, email, subject, message } = req.body;

		// Validate required fields
		if (!name || !email || !subject || !message) {
			return res.status(400).json({
				error: 'Missing required fields',
				details: 'name, email, subject, and message are required'
			});
		}

		// Initialize Resend with API key
		const resend = new Resend(process.env.RESEND_API_KEY);

		// Send email using Resend
		const { data, error } = await resend.emails.send({
			from: 'Portfolio Contact <onboarding@resend.dev>',
			to: 'ricardoarsv.2004@gmail.com',
			replyTo: email,
			subject: `Portfolio Contact: ${subject}`,
			html: `
				<!DOCTYPE html>
				<html>
					<head>
						<style>
							body {
								font-family: Arial, sans-serif;
								line-height: 1.6;
								color: #333;
							}
							.container {
								max-width: 600px;
								margin: 0 auto;
								padding: 20px;
								background-color: #f9f9f9;
								border-radius: 10px;
							}
							.header {
								background: linear-gradient(135deg, #6b46c1 0%, #8b5cf6 100%);
								color: white;
								padding: 30px;
								border-radius: 10px 10px 0 0;
								text-align: center;
							}
							.content {
								background: white;
								padding: 30px;
								border-radius: 0 0 10px 10px;
							}
							.field {
								margin-bottom: 20px;
							}
							.label {
								font-weight: bold;
								color: #6b46c1;
								display: block;
								margin-bottom: 5px;
							}
							.value {
								color: #333;
								padding: 10px;
								background-color: #f5f3ff;
								border-radius: 5px;
								word-wrap: break-word;
							}
							.message-content {
								white-space: pre-wrap;
							}
							.footer {
								margin-top: 20px;
								padding-top: 20px;
								border-top: 2px solid #e9d5ff;
								color: #666;
								font-size: 12px;
								text-align: center;
							}
						</style>
					</head>
					<body>
						<div class="container">
							<div class="header">
								<h1>💼 New Portfolio Contact</h1>
							</div>
							<div class="content">
								<div class="field">
									<span class="label">👤 From:</span>
									<div class="value">${name}</div>
								</div>
								
								<div class="field">
									<span class="label">📧 Email:</span>
									<div class="value">
										<a href="mailto:${email}" style="color: #6b46c1; text-decoration: none;">
											${email}
										</a>
									</div>
								</div>
								
								<div class="field">
									<span class="label">📝 Subject:</span>
									<div class="value">${subject}</div>
								</div>
								
								<div class="field">
									<span class="label">💬 Message:</span>
									<div class="value message-content">${message}</div>
								</div>
								
								<div class="footer">
									Sent from your portfolio contact form at www.rickdev.tech
								</div>
							</div>
						</div>
					</body>
				</html>
			`
		});

		// Check for errors
		if (error) {
			console.error('Resend API error:', error);
			return res.status(500).json({
				success: false,
				error: 'Failed to send email',
				details: error.message
			});
		}

		console.log('Email sent successfully:', data);

		return res.status(200).json({
			success: true,
			messageId: data.id,
			message: 'Email sent successfully'
		});
	} catch (error) {
		console.error('Resend send error:', error);

		return res.status(500).json({
			success: false,
			error: 'Failed to send email',
			details: error.message
		});
	}
};
