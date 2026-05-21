require('dotenv').config();
const Hapi = require('@hapi/hapi');
const path = require('path');
const nodemailer = require('nodemailer');

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    await server.register(require('@hapi/inert'));

    const transporter = nodemailer.createTransport({
        host: 'smtp-relay.brevo.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: path.join(__dirname, 'public'),
                index: true
            }
        }
    });

    server.route({
        method: 'POST',
        path: '/api/contact',
        handler: async (request, h) => {
            const { name, email, subject, message } = request.payload;

            if (!name || !email || !subject || !message) {
                return h.response({ message: 'All fields are required' }).code(400);
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return h.response({ message: 'Incorrect email format' }).code(400);
            }

            try {
                await transporter.sendMail({
                    from: process.env.SENDER_EMAIL,
                    to: process.env.RECEIVER_EMAIL,
                    replyTo: email,
                    subject: `New message from CV: ${subject}`,
                    text: `Ім'я: ${name}\nEmail: ${email}\nmessage:\n${message}`,
                    html: `<h3>New message from ${name}</h3>
                           <p><strong>Email:</strong> ${email}</p>
                           <p><strong>Subject:</strong> ${subject}</p>
                           <p><strong>Message:</strong><br>${message}</p>`
                });

                return h.response({ message: 'The letter was sent successfully' }).code(200);
            } catch (error) {
                console.error('Mail sending error:', error);
                return h.response({ message: 'Server error when sending email' }).code(500);
            }
        }
    });

    await server.start();
    console.log('Server is running on:', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();