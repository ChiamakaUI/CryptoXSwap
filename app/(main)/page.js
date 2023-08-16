import Link from 'next/link';
import Banner from "../components/Banner";
import Chart from "../components/Chart";

export default function Home() {
  return (
    <main>
      <Banner
        heading={"The most trusted Cryptocurrency exchange"}
        subTitle={
          "Transactions here are very secured as we are trusted globally."
        }
        imageSrc={"./banner/first.svg"}
        styles={"flex flex-col md:flex-row lg:flex-row"}
        cta={"Get Started"}
        ctaPage={"/signup"}
      />
      <Chart />
      <Banner
        heading={"Crypto transactions just got easier"}
        subTitle={
          "Start swapping your coins for any other coin and get the same value."
        }
        imageSrc={"./banner/third.svg"}
        styles={"flex flex-col md:flex-row-reverse lg:flex-row-reverse"}
        cta={"Swap Coins"}
        ctaPage={"/swap"}
      />
      <div className="bg-gradient-to-r from-[#862CBA] via-[#6329B6] to-[#3927B3] w-full text-center p-5 my-5">
        <p className="text-xl lg:text-3xl font-semibold">Want to contact us or give us a review?</p>
        <p className="lg:text-lg my-3.5">Your reviews are very important to us.</p>
        <div>
          <Link href="/contact">
            <button className="bg-primary p-3 uppercase font-semibold text-white rounded">Contact Us</button>
          </Link>
        </div>
      </div>
      <Banner
        heading={"Join over 100 other users and open a wallet"}
        subTitle={
          "No more waiting. Get your coins directly into your wallet immediately it gets confirmed."
        }
        imageSrc={"./banner/fourth.svg"}
        styles={"flex flex-col-reverse md:flex-row lg:flex-row"}
        cta={"Get Started"}
        ctaPage={"/signup"}
      />
    </main>
  );
}
