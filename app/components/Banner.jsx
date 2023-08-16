import Image from "next/image";
import Link from 'next/link';
const Banner = ({ heading, subTitle, imageSrc, styles, cta, ctaPage }) => {
  //bg-[#65E1FB] to-[#AD36E4] 
  return (
    <div
      className={`${styles} justify-between w-[88%] mx-auto lg:w-[82%] lg:my-8 items-center`}
    >
      <div className="w-full lg:w-[48%] text-center lg:text-left">
        <h2 className="text-2xl lg:text-4xl font-bold capitalize">{heading}</h2>
        <p className="text-lg lg:text-xl my-4 lg:my-6">{subTitle}</p>
        <div className="my-3">
          <Link href={ctaPage}>
          <button className="bg-gradient-to-r from-[#482DD9] to-cyan-500 hover:from-[#65E1FB] hover:to-[#AD36E4] p-3 uppercase font-semibold rounded">
           {cta}
          </button>         
          </Link>

        </div>
      </div>
      <div className="w-full lg:w-[45%]">
        <Image
          src={imageSrc}
          alt=""
          height={150}
          width={150}
          // className="lg:w-[40%] h-[550px]"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Banner;
