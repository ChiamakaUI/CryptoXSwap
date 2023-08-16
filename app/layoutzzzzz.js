import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Lora } from "next/font/google";


const lora = Lora({ subsets: ["latin"] });


export const metadata = {
  title: "CryptoXswap",
  description: "Swap your coins instantly with CryptoXswap. You are anonymous, no registration required. Get your coins instantly without delays with this fast and reliable platform.",
};

export default function RootLayout({ children }) {
  //{inter.className}
  return (
    <html lang="en">
      <body className={lora.className}>
        <Navbar />
        <div className=''>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
