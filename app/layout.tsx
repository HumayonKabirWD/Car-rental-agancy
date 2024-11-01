import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Fotter from "@/components/Fotter";


export const metadata: Metadata = {
  title: "Car Rent",
  description: "A Car rental app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="relative"
      >
        <Navbar/>
        {children}
        <Fotter/>
      </body>
    </html>
  );
}
