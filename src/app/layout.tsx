import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Qerun – Web3 Finance Hub",
  description:
    "Official portal for Qerun. Track services, treasury, governance, and verified assets in one place.",
  metadataBase: new URL("https://qerun.com"),
  openGraph: {
    title: "Qerun – Web3 Finance Hub",
    description:
      "Official portal for Qerun. Track services, treasury, governance, and verified assets in one place.",
    url: "https://qerun.com",
    siteName: "Qerun",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qerun – Web3 Finance Hub",
    description:
      "Official portal for Qerun. Track services, treasury, governance, and verified assets in one place.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
