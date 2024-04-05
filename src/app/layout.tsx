import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/utils/next-theme-provider";
const SpaceMono = Space_Mono({ weight: "400", subsets: ["latin"] });
import { cn } from "@/lib/utils"
export const metadata: Metadata = {
  title: "Ashwin KV",
  description: "Portfolio of Ashwin KV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={SpaceMono.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
