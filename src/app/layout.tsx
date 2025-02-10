import type { Metadata } from "next";
import {
  Dancing_Script,
  Roboto_Mono,
  Italianno,
  Agbalumo,
} from "next/font/google";
import "./globals.css";

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const italianno = Italianno({
  variable: "--font-italianno",
  subsets: ["vietnamese"],
  weight: "400",
});

const agbalumo = Agbalumo({
  variable: "--font-agbalumo",
  subsets: ["vietnamese"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Nghĩa - Huyền Wedding Invitation",
  description: "Nghĩa - Huyền Wedding Invitation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dancingScript.variable} ${robotoMono.variable} ${italianno.variable} ${agbalumo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
