import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";
import { Description } from "@mui/icons-material";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Uifry",
  description:"Dental Medical Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Nav/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
