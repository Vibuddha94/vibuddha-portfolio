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
        <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js" />
        <script
          dangerouslySetInnerHTML={{
            __html:
              'if (window.emailjs) { window.emailjs.init({ publicKey: "ImpPFCrv1ue9LqfC9" }); }',
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
