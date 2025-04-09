import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import Providers from "./providers";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});
export const metadata: Metadata = {
  title: "Codechitra - Your Coding University!",
  description: "Learn, code, and grow together with Codechitra!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Providers>
        <body className={`${dmSans.className}`}>{children}</body>
      </Providers>
    </html>
  );
}
