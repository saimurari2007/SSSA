import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sri Sai Satya Ayurvedhalaya | Premium Ayurvedic & Herbal Medicine Store Ballari",
  description: "Authorized Stockist & Super Stockist of authentic Ayurvedic medicines, powders, oils, syrups, and wellness supplements. Located in Kambli Bazaar, Ballari, Karnataka. Delivering premium natural healing across Karnataka.",
  keywords: "Ayurveda Ballari, Sri Sai Satya Ayurvedhalaya, Ayurvedic medicine store, Dabur stockist Ballari, Baidyanath, Zandu, herbal supplements, immunity products, Ballari organic wellness",
  openGraph: {
    title: "Sri Sai Satya Ayurvedhalaya | Premium Ayurvedic Store",
    description: "Premium Ayurvedic and herbal products from trusted brands like Dabur, Baidyanath, Zandu, and Keva. Authorized stockist in Ballari, Karnataka.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col selection:bg-sage/40 selection:text-forest">
        {children}
      </body>
    </html>
  );
}

