import Image from "next/image";
import { Lora } from "next/font/google";
import "../globals.css";

const lora = Lora({ subsets: ["latin"] });

export const metadata = {
  title: "CryptoXswap",
  description:
    "Swap your coins instantly with CryptoXswap. You are anonymous, no registration required. Get your coins instantly without delays with this fast and reliable platform.",
};
export default function RootLayout({
  children, // will be a page or nested layout
}) {
  return (
    <html lang="en">
      <body className={`${lora.className} bg-primary`}>
        <div className="w-[55%] lg:w-[15%] mx-auto">
          <Image
            src="/logo.png"
            alt="logo"
            height={200}
            width={200}
            className=""
          />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
