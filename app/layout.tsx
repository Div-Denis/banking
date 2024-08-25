import type { Metadata } from "next";
// 字体， 添加IBMplexserif字体
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

// 字体， 添加IBMplexserif字体
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// 指定字体， 指定字体加粗
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif",
});

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is a modern banking platform for everyone",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
    </html>
  );
}
