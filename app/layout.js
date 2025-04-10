import "./globals.css";
import { josefinsans } from "./font";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

export const metadata = {
  title: "Running Amp nutrition",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefinsans.className} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
