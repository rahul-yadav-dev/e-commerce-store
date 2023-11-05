import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className=" top-0 left-0 right-0">
          <Header />
        </header>
        <main className="mb-60">{children}</main>
        <footer className=" bottom-0 left-0 right-0 bg-gray-800 text-white p-4">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
