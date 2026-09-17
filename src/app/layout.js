import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Enquiries from "@/components/Enquiries";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shobhit University | Best Private University in UP & Delhi NCR",
  description:
    "Shobhit, the best private university in UP & Delhi NCR, offers top-ranked programs in Engineering, Management, Law, and Sciences with excellent placements.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Enquiries />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
