import type { Metadata } from "next";
import { Oswald, Inter, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const GA_MEASUREMENT_ID = "G-VF5J0C3WS9";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono-ibm",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Dynabrade Việt Nam - Dụng Cụ Khí Nén Chính Hãng | Nhất Quán",
    template: "%s | Nhất Quán",
  },
  description:
    "Nhất Quán - nhà phân phối chính hãng Dynabrade tại Việt Nam. Dụng cụ khí nén chà nhám, mài, đánh bóng cho ngành sơn sửa ô tô, hàng không và gia công kim loại.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="vi"
      className={`${oswald.variable} ${inter.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Header />
        {children}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
