import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { Attachment } from "nodemailer/lib/mailer";

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
        const attachments = formData.getAll("attachments") as File[];

        // Validate required fields
        if (!name || !email || !phone || !message) {
            return NextResponse.json(
                { message: "Error: Missing required fields." },
                { status: 400 }
            );
        }

        // Validate and process attachments if present
        const allowedMimeTypes = ["application/pdf", "image/png", "image/jpeg"];
        const processedAttachments: Attachment[] = [];

        if (attachments.length > 0) {
            for (const file of attachments) {
                // Skip invalid files (e.g., empty files or unexpected entries)
                if (
                    !file ||
                    file.size === 0 ||
                    file.type === "application/octet-stream"
                ) {
                    continue;
                }

                // Validate file type
                if (!allowedMimeTypes.includes(file.type)) {
                    return NextResponse.json(
                        { message: `Error Invalid file type: ${file.type}` },
                        { status: 400 }
                    );
                }

                // Convert file to buffer
                const buffer = Buffer.from(await file.arrayBuffer());
                processedAttachments.push({
                    filename: file.name,
                    content: buffer,
                });
            }
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

        // Build the email content
        const mailContent = `
            <h3>Новое сообщение от клиента!</h3>
            <p><strong>Имя:</strong> ${name} </p>
            <p><strong>Почта:</strong> ${email} </p>
            <p><strong>Телефон:</strong> ${phone} </p>
            <p><strong>Сообщение:</strong> ${message} </p>
        `;

        // Build the email options
        const mailOptions: {
            from: string;
            to: string;
            subject: string;
            html: string;
            attachments?: Attachment[];
        } = {
            from: sender,
            to: recipient,
            subject: `Новое сообщение от клиента!`,
            html: mailContent,
        };

        // Add attachments if they exist
        if (processedAttachments.length > 0) {
            mailOptions.attachments = processedAttachments;
        }

        // Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Success: Email was sent" });
    } catch (error) {
        console.error("Form API Error:" + error);
        NextResponse.json(
            { message: "Error: Message could not send." },
            { status: 500 }
        );
    }
}
