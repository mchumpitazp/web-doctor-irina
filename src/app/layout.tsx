import type { Metadata } from "next";
import { Raleway, Mulish } from "next/font/google";
import "./globals.css";

// Configure Raleway
const raleway = Raleway({
    subsets: ["latin", "cyrillic"],
    weight: ["400", "600", "700"],
    variable: "--font-header",
});

// Configure Mulish
const mulish = Mulish({
    subsets: ["latin", "cyrillic"],
    weight: ["400", "500", "700"],
    variable: "--font-body",
});

export const metadata: Metadata = {
    title: "Ирина Николаевна",
    description:
        "Невролог, цефалголог - специалист по головной боли. Много обучаюсь, учусь у лучших, регулярно повышаю квалификацию. Изучала курс доказательной медицины для врачей, постоянно читаю профессиональную литературу на русском и английском языке.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="ru"
            className={`${mulish.variable} ${raleway.variable} bg-neutral`}
        >
            <head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
            </head>
            <body>{children}</body>
        </html>
    );
}
