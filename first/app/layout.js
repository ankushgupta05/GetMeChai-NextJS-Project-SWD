import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get me a chai - fun yours project",
  description: "this website is a co",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="min-h-[86vh] bg-gray-800">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
