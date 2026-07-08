import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Florensia Gaciela Nainggolan | Portofolio",
  description:
    "Portofolio Florensia Gaciela Nainggolan — Software Engineering student, UI/UX & web/mobile development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Montserrat:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}