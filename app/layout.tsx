import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "100","200","300","400","500",
    "600","700","800","900"
  ],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Sasindu Malshan",
  description: "Software Engineer | Full Stack Developer",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Sasindu Malshan" }],
  creator: "Sasindu Malshan",
  publisher: "Sasindu Malshan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sasindumalshan.com",
    title: "Sasindu Malshan",
    description: "Software Engineer | Full Stack Developer",
    siteName: "Sasindu Malshan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} antialiased`}
        data-theme="dark"
      >
        {children}
      </body>
    </html>
  );
}
