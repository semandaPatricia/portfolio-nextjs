
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Navbar";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lama Dev Portfolio App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        <div>
          <NavBar/>
          {children}
        </div>
       
      </body>
    </html>
  );
}
