import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/dark-mode-toggle";
import { NavMenubar } from "@/components/navmenubar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Produce Cost Calculator",
  description: "A cost estimator tool to help stay within weekly budget",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <body className="">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="flex flex-col justify-between p-2">
            <Link className="" href="/">
              <h1 className="text-2xl mb-2">
                Natty G&apos;s Produce Order Tracker
              </h1>
            </Link>

            <nav className="flex gap-1">
              <ModeToggle />
              <NavMenubar />
            </nav>
          </header>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
