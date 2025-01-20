import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
    const body = (await request.json()) as HandleUploadBody;

    try {
        const jsonResponse = await handleUpload({
            body,
            request,
            onBeforeGenerateToken: async () => {
                // Optionally authenticate users here
                return {
                    allowedContentTypes: [
                        "application/pdf",
                        "image/jpeg",
                        "image/png",
                    ],
                    tokenPayload: JSON.stringify({}), // You can pass additional metadata
                };
            },
            onUploadCompleted: async ({ blob }) => {
                console.log("Upload completed:", blob);
                // You can add any logic after upload completion here, such as saving the blob URL to a database
            },
        });

        return NextResponse.json(jsonResponse);
    } catch (error) {
        return NextResponse.json(
            { error: (error as Error).message },
            { status: 400 } // The webhook will retry 5 times for a non-200 status
        );
    }
}
