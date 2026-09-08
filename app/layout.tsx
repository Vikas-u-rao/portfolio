import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export const metadata: Metadata = {
  title: "Vikas U Rao — Software Developer",
  description: "Software developer building backend services, full-stack applications, automation tools, and AI-enabled systems. MCA candidate at Bangalore Institute of Technology.",
  metadataBase: new URL("https://vikasurao.dev"),
  openGraph: {
    title: "Vikas U Rao — Software Developer",
    description: "Software developer building backend services, full-stack web applications, automation tools, and AI-enabled systems.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} antialiased`} suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#fafafa] dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 min-h-screen flex flex-col font-sans transition-colors duration-200 bg-grid-pattern selection:bg-zinc-800 selection:text-white dark:selection:bg-zinc-200 dark:selection:text-zinc-950">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main className="flex-grow w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-10 md:py-16">
            {children}
          </main>
          <footer className="border-t border-zinc-200 dark:border-zinc-800/80 py-8 text-center text-xs font-mono text-zinc-500">
            <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>Vikas U Rao &copy; {new Date().getFullYear()}</div>
              <div className="flex items-center gap-4">
                <a href="https://github.com/Vikas-u-rao" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/vikas-u-rao" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
                  LinkedIn
                </a>
                <a href="mailto:vikasurao2004@gmail.com" className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
                  Email
                </a>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
