import localFont from "next/font/local";
import { Inter } from 'next/font/google'
import "@/styles/globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from "@/components/shared/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider>
          <main>
            <Header />
            <div className="customContainer">
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
