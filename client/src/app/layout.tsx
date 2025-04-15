import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import Providers from "./providers";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
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
      <ClerkProvider>
        <Providers>
          <body className={`${dmSans.className}`}>
            <div className="root-layout">{children}</div>
            <Toaster richColors position="top-center" />
          </body>
        </Providers>
      </ClerkProvider>
    </html>
  );
}
