import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next-Gen Learning Dashboard",
  description: "A Supabase-backed animated student dashboard built with Next.js."
};

export const viewport: Viewport = {
  themeColor: "#06070a",
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
