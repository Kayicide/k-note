import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { ThemeProvider } from "~/components/theme-provider";
import { cn } from "~/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "K-Note",
  description: "Simple Note Taking App",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body  className={cn(
            "min-h-screen bg-background font-sans antialiased",
            `font-sans ${inter.variable}`
          )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TRPCReactProvider>
            <div className="relative flex min-h-screen flex-col bg-background">
              {/* header */}
              <main className="flex-1">
                {children}
              </main>
              {/* footer */}
            </div>
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
