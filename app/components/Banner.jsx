import Image from "next/image";
const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between w-[88%] mx-auto lg:w-[82%] lg:my-8 items-center">
      <div className="w-full lg:w-[48%] text-center lg:text-left">
        <h2 className="text-2xl lg:text-4xl font-bold capitalize">The most trusted Cryptocurrency exchange</h2>
        <p className="text-lg lg:text-xl my-4 lg:my-6">Transactions here are very secured as we are trusted globally.</p>
        <div className="my-3">
        <button className="bg-[#65E1FB] p-3 uppercase">Get Started</button>
        </div>
        
      </div>
      <div className="w-full lg:w-[45%]">
        <Image
          src="./banner/first.svg"
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
