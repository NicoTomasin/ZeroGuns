import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
const Akira = localFont({
  src: "../fonts/Akira.otf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zero Guns",
  description: "Gracias por tu compra en Zero Guns",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Akira.className} bg-primary`}>{children}</body>
    </html>
  );
}
