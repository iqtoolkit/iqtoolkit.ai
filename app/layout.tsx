import type { Metadata } from "next";
import "./globals.css";

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
    type: "website",
    locale: "en_US",
    url: "https://iqtoolkit.ai",
    title: "iqtoolkit.ai - Advanced AI Tools & Solutions",
    description:
      "Official portfolio website showcasing cutting-edge AI tools and innovative technology solutions.",
    siteName: "iqtoolkit.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "iqtoolkit.ai - Advanced AI Tools & Solutions",
    description:
      "Official portfolio website showcasing cutting-edge AI tools and innovative technology solutions.",
    creator: "@iqtoolkit",
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
  verification: {
    google: "your-google-verification-code",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
