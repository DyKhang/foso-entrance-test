import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";

const font = Lexend_Deca({
  variable: "--font-lexend-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "300", "600"],
});

export const metadata: Metadata = {
  title: "FOSO",
  description: "FOSO entrance test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className}  antialiased`}>{children}</body>
    </html>
  );
}
