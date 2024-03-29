
import { Rubik} from "next/font/google";
import "./globals.css";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";






const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Patcodes Portfolio App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}  >
      
        <div className=" w-screen h-screen ">
          <NavBar/>
          {children}
          <Footer/>
        </div>
        
      </body>
    </html>
  );
}

