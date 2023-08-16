import Image from "next/image";
import { BsInstagram, BsFacebook, BsApple } from "react-icons/bs";
import { BiLogoPlayStore } from "react-icons/bi";
import Link from "next/link";

const Footer = () => {
  //#343895 #AD36E4
  return (
    <div className="bg-[#363F9F] p-5 lg:p-8 w-full mt-20">
      <div className="flex flex-row justify-between items-center">
        <Image
          src="/logo.png"
          alt="logo"
          height={180}
          width={180}
          className=""
        />
        <div className="flex flex-row justify-between items-center text-2xl lg:text-3xl">
          <a href="https://www.instagram.com/cryptoxswap2021/">
            <BsInstagram className="mx-2.5" />
          </a>
          <a href="http://www.web.facebook.com/cryptoxswap2021">
            <BsFacebook />
          </a>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col lg:w-[18%]">
          <p className="text-lg uppercase font-semibold lg:text-xl">Menu</p>
          <hr className="my-2 w-full" />
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col lg:text-lg">
              <Link href="/swap">Swap</Link>
              <Link href="/login">Sign In</Link>
              <Link href="/signup">Sign Up</Link>
              <Link href="/vendors">Vendors</Link>
            </div>
            <div className="hidden lg:flex flex-col lg:text-lg  ">
              <Link href="/contact">Contact us</Link>
              <Link href="/login">Sign In</Link>
              <Link href="/signup">Sign Up</Link>
              <Link href="/vendors">Vendors</Link>
            </div>
          </div>
        </div>
        <div className="w-[60%] lg:w-[25%] rounded p-3 bg-[#312B82]">
          <p className="lg:text-lg ml-2 font-semibold">Download our App</p>
          <p className="text-sm lg:text-base ml-2">To easily access your wallet, and get notifications on our promos</p>
          <div className="flex flex-col lg:flex-row w-[68%] lg:w-full lg:mt-4">
            <button className="bg-primary rounded-full flex flex-row items-center py-2 px-3.5 my-2.5 lg:my-0 lg:mr-2 lg:text-lg">
              {" "}
              <BsApple /> App Store
            </button>
            <button className="bg-primary rounded-full flex flex-row items-center py-2 px-3.5 lg:text-lg">
              {" "}
              <BiLogoPlayStore /> PlayStore
            </button>
          </div>
        </div>
      </div>
      <hr className="mt-5" />
      <p className="text-center text-lg my-2">© CryptoXswap | 2023</p>
    </div>
  );
};

export default Footer;
