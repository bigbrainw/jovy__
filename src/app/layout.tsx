import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jovy's Line",
  description: "Where tolerance meets its limit - things Jovy can and can't deal with",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
