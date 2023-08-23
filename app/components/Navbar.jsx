import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center w-[84%] mx-auto ">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          height={150}
          width={150}
          className=""
        />
      </Link>
      <div className="hidden lg:flex flex-row justify-between items-center w-[38%]">
        <Link href="/buy">Buy Crypto</Link>
        <Link href="/sell">Sell Crypto</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/login">Sign In</Link>
        <Link href="/signup">
          <button className="bg-white text-primary py-1.5 px-3.5 rounded">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
