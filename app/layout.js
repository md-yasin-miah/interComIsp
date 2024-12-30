import localFont from "next/font/local";
import { Poppins, Rajdhani } from 'next/font/google'
import "@/styles/globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import ScrollLine from "@/components/ui/scroll-line";
import ScrollToTop from "@/components/shared/ScrollToTop";

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


export const metadata = {
  title: "NetCom Internet",
  description: "ISP ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rajdhani.variable} ${poppins.variable} antialiased`}
      >
        <ThemeProvider>
          <main>
            <Header />
            <div>
              {children}
            </div>
            <Footer />
            
            <ScrollToTop />
            {/* <ScrollLine /> */}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
