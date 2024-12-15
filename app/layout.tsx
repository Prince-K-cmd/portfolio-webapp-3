import { Inter } from "next/font/google";
import { ThemeProvider } from "@/src/components/theme-provider";
import { Header } from "@/src/components/layout/Header";
import { Footer } from "@/src/components/layout/Footer";
import { ScrollToTop } from "@/src/components/scroll-to-top";
import { Toaster } from "@/src/components/ui/toaster";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prince Kyeremeh - Portfolio",
  description: "Frontend Developer, Android Developer, and Data Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
