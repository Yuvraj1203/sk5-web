import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SK5 Marketing",
  description: "Your HVAC Marketing Partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Analytics Script (async external script) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SBPDDF7FH1"
          strategy="afterInteractive"
        />
        {/* ✅ Inline configuration for Google Analytics */}
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SBPDDF7FH1');
          `}
        </Script>
      </head>
      <body className={` ${poppins.variable} scroll-smooth antialiased`}>
        <Providers>
          <Header />
          <main className="grow flex flex-col">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
