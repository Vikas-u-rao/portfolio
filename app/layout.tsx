import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ModeSwitcher } from "@/components/ModeSwitcher";

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
    { media: "(prefers-color-scheme: light)", color: "#f9fafb" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  title: "Vikas U Rao — Portfolio",
  description: "Portfolio of Vikas U Rao. Software Engineer specializing in Python, REST APIs, backend architectures, and LLM integrations.",
  metadataBase: new URL("https://vikasurao.dev"),
  openGraph: {
    title: "Vikas U Rao — Portfolio",
    description: "Software Engineer | Python, JavaScript, Java",
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
      <body className="bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100 min-h-screen flex flex-col font-sans transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="max-w-4xl w-full mx-auto flex justify-end p-4 md:p-8 pb-0">
            <ModeSwitcher />
            <ThemeToggle />
          </div>
          <main className="flex-grow p-4 md:px-8">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
