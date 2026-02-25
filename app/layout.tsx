import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vibuddha Vidarshana | Portfolio",
  description:
    "Portfolio of Vibuddha Vidarshana, full-stack developer focused on modern web applications.",
  metadataBase: new URL("https://vibuddha.me"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        <script src="https://cdn.tailwindcss.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
