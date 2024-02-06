import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/ui/header";
import {clsx} from "clsx";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Sovereign Engine",
    description: "Sovereign Engine 2D MMORPG Engine",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={clsx(
                inter.className,
                "bg-gradient-to-br from-zinc-900 to-zinc-700 text-white",
            )}
        >
        <Header/>
        <main className="flex min-h-screen flex-col items-center py-16 md:p-24">
            {children}
        </main>
        </body>
        </html>
    );
}
