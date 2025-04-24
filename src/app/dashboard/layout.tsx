import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Inter, Poppins } from "next/font/google";
import type { ReactNode } from 'react';

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "600"],
    variable: "--font-inter",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"],
    variable: "--font-poppins",
});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});



export default async function DashboardLayout({ children }: { children: ReactNode }) {


    return (
        <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
                    integrity="sha512-K6BlahBlah..."
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
            </head>
            <body className="noheaderfooter">
                {children}
            </body>
        </html>
    );
}
