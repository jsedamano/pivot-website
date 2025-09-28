import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "src/app/components/theme-provider";
import Navbar from "src/app/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PIVOT @ VT",
  description:
    "Physics Infused Vision for Onward Thinking — student-led org at Virginia Tech.",
  metadataBase: new URL("https://pivot.example.org"),
  openGraph: {
    title: "PIVOT @ VT",
    description:
      "Physics Infused Vision for Onward Thinking — student-led org at Virginia Tech.",
    url: "https://pivot.example.org",
    siteName: "PIVOT @ VT",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          {children}
          <footer className="border-t border-black/5 dark:border-white/10 mt-16">
            <div className="container-max py-8 text-sm text-gray-500">
              © {new Date().getFullYear()} PIVOT @ Virginia Tech. All rights reserved.
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
