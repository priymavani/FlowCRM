import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FlowCRM | The 360° Business Management Platform",
  description: "Unified operations workspace built for modern businesses to manage leads, track workforce attendance shifts, and automate invoices.",
  metadataBase: new URL("https://flow-crm.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FlowCRM | The 360° Business Management Platform",
    description: "Unified operations workspace built for modern businesses to manage leads, track workforce attendance shifts, and automate invoices.",
    url: "https://flow-crm.vercel.app",
    siteName: "FlowCRM",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowCRM | The 360° Business Management Platform",
    description: "Unified operations workspace built for modern businesses to manage leads, track workforce attendance shifts, and automate invoices.",
    creator: "@flowcrm",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0D14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-background text-foreground antialiased`}
      >
        <SmoothScroll>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pt-24">
              {children}
            </main>
            <Footer />
          </div>
        </SmoothScroll>
        <Toaster theme="dark" position="bottom-right" closeButton richColors />
      </body>
    </html>
  );
}
