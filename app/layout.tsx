import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "iqtoolkit.ai - Advanced AI Tools & Solutions",
    template: "%s | iqtoolkit.ai",
  },
  description:
    "Official portfolio website for iqtoolkit - Showcasing cutting-edge AI tools, machine learning solutions, and innovative technology projects.",
  keywords: [
    "AI",
    "Machine Learning",
    "Artificial Intelligence",
    "Tools",
    "Technology",
    "Portfolio",
    "iqtoolkit",
  ],
  authors: [{ name: "iqtoolkit" }],
  creator: "iqtoolkit",
  publisher: "iqtoolkit",
  metadataBase: new URL("https://iqtoolkit.ai"),
  openGraph: {
    title: "iqtoolkit.ai",
    description: "Open-source tools to diagnose, explain, and prevent database incidents.",
    url: "https://iqtoolkit.ai",
    siteName: "iqtoolkit.ai",
    images: [
      {
        url: "/img/iqtoolkitai-high-resolution-logo-transparent.png",
        width: 1200,
        height: 630,
        alt: "iqtoolkit.ai logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/img/wordmark-favicon.ico", sizes: "any" },
      { url: "/img/wordmark-favicon.ico", type: "image/x-icon" },
    ],
    shortcut: ["/img/wordmark-favicon.ico"],
    apple: ["/img/wordmark-favicon.ico"],
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
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
