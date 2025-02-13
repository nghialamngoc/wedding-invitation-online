import type { Metadata } from "next";
import { Roboto_Mono, Italianno, Agbalumo, Andika } from "next/font/google";

import "./globals.css";

const andika = Andika({
  variable: "--font-andika",
  subsets: ["latin"],
  weight: ["400", "700"],
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
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      <body
        className={`${andika.variable} ${robotoMono.variable} ${italianno.variable} ${agbalumo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
