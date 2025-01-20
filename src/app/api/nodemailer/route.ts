import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { Attachment } from "nodemailer/lib/mailer";
import { del } from "@vercel/blob";

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
        const fileUrls = formData.getAll("fileUrls") as string[];

        // Validate required fields
        if (!name || !email || !phone || !message) {
            return NextResponse.json(
                { message: "Error: Missing required fields." },
                { status: 400 }
            );
        }

        // Fetch files from URLs and prepare attachments
        const processedAttachments: Attachment[] = [];
        for (const fileUrl of fileUrls) {
            try {
                const response = await fetch(fileUrl);

                if (!response.ok) {
                    throw new Error(
                        `Failed to fetch file from URL: ${fileUrl}`
                    );
                }

                const contentType = response.headers.get("content-type");
                const buffer = await response.arrayBuffer();

                if (!contentType) {
                    throw new Error(
                        `Could not determine content type for file: ${fileUrl}`
                    );
                }

                processedAttachments.push({
                    filename: fileUrl.split("/").pop() || "attachment",
                    content: Buffer.from(buffer),
                    contentType,
                });
            } catch (error) {
                console.error(`Error fetching file: ${fileUrl}`, error);
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

        // Delete files from Vercel Blob after successful email
        for (const fileUrl of fileUrls) {
            try {
                await del(fileUrl);
                console.log(`Successfully deleted blob: ${fileUrl}`);
            } catch (error) {
                console.error(`Failed to delete blob: ${fileUrl}`, error);
            }
        }

        // Return successful response
        return NextResponse.json({
            message: "Success: Email was sent and files deleted",
        });
    } catch (error) {
        console.error("Form API Error:" + error);
        NextResponse.json(
            { message: "Error: Message could not send." },
            { status: 500 }
        );
    }
}
