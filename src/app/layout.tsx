import type { Metadata } from "next";
import { Roboto_Condensed, Play, Josefin_Slab } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
  display: "swap",
});

const josefin_slab = Josefin_Slab({
  subsets: ["latin"],
  variable: "--font-josefin-slab",
  display: "swap",
});

const play = Play({
  subsets: ["latin"],
  variable: "--font-play",
  display: "swap",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Travel agency",
  description: "Travel for your enjoyment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto_condensed.variable} ${play.variable} ${josefin_slab.variable}`}
    >
      <head>
        <link rel="icon" href="/public/favicon.svg" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
