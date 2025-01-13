import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    const sender = process.env.NODEMAILER_SENDER;
    const password = process.env.NODEMAILER_PASSWORD;
    const recipient = process.env.NODEMAILER_RECIPIENT;

    // Validate environment variables
    if (!sender || !password || !recipient) {
        return NextResponse.json(
            { message: "Error: Missing email configurations." },
            { status: 500 }
        );
    }

    try {
        // Parse form data
        const formData = await request.formData();
        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const message = formData.get("message");

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { message: "Error: Missing required fields." },
                { status: 400 }
            );
        }

        // Configure the transporter
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: sender,
                pass: password,
            },
        });

        // Construct the email content
        const emailContent = `
            <h3>Новое сообщение от клиента!</h3>
            <p><strong>Имя:</strong> ${name} </p>
            <p><strong>Почта:</strong> ${email} </p>
            <p><strong>Телефон:</strong> ${phone} </p>
            <p><strong>Сообщение:</strong> ${message} </p>
        `;

        // Send the email
        await transporter.sendMail({
            from: sender,
            to: recipient,
            subject: `Новое сообщение от клиента!`,
            html: emailContent,
        });

        return NextResponse.json({ message: "Success: Email was sent" });
    } catch (error) {
        console.error("Form API Error:" + error);
        NextResponse.json(
            { message: "Error: Message could not send." },
            { status: 500 }
        );
    }
}
