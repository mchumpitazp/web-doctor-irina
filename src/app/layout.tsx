import { Raleway, Mulish } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

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
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
