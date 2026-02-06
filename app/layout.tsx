import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import {Sidebar, SidebarNav, SidebarLink} from "./ui/sidebar";

const geistSans = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "siaeNFC",
  description: "Hola mundo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}> 

      

        <main className="fixed overflow-y-auto left-width-sidebar top-height-header bg-red-500 w-width-main h-height-main grid grid-cols-3 gap-2.5">


        </main>

      </body>
    </html>
  );
}
