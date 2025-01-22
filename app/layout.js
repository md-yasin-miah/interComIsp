import localFont from "next/font/local";
import { Poppins, Rajdhani } from 'next/font/google'
import "@/styles/globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import ScrollToTop from "@/components/shared/ScrollToTop";
import Provider from "@/contexts";
import { Metadata } from "./metadata";

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
const rajdhani = Rajdhani({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rajdhani',
  weight: ['300', '400', '500', '600', '700',],
});
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-poppins",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});


export const metadata = Metadata()

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rajdhani.variable} ${poppins.variable} antialiased`}
        suppressHydrationWarning
      >
        <Provider>
          <main>
            <Header />
            <div>
              {children}
            </div>
            <Footer />

            <ScrollToTop />
            {/* <ScrollLine /> */}
          </main>
        </Provider>
      </body>
    </html>
  );
}
