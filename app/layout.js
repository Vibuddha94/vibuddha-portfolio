import './globals.css';

export const metadata = {
  title: 'Vibuddha Vidarshana Portfolio',
  description: 'Next.js wrapper for Vibuddha portfolio website.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
