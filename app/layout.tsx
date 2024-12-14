import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Home, PencilRuler } from "lucide-react";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Sakura Console",
    description: "Hosting for lazy devs",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <div className="flex flex-row w-full h-screen overflow-hidden">
                    <nav className="flex flex-col p-4 gap-4 h-full bg-neutral-200 text-neutral-900">
                        <h1 className="text-2xl font-bold">桜</h1>
                        <Link href="/">
                            <Home size={22}/>
                        </Link>
                        <Link href="/projects">
                            <PencilRuler size={22}/>
                        </Link>
                    </nav>
                    <div className="w-full h-full text-neutral-900">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
