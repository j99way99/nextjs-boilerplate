import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { ApolloWrapper } from "./ApolloWrapper";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className= {cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>

        <ApolloWrapper>
      <header className="flex justify-between p-4">
        <div>
        <Link href = '/'>home</Link>
        </div>
        <div>
        <Link href = '/cart'>cart</Link>
        </div>
        <div>
        <Link href = '/item'>item</Link>
        </div>
      
      </header>
      {children}
      </ApolloWrapper>
      </body>

    </html>
  );
}
