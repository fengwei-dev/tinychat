import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TinyChat",
  description: "A simple chat app powered by OpenRouter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
