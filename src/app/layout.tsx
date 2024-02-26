import type { Metadata } from "next";
import { Roboto_Condensed, Play } from "next/font/google";
import "./globals.css";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
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
    <html lang="en" className={`${roboto_condensed.variable} ${play.variable}`}>
      <body>{children}</body>
    </html>
  );
}
