import { Carousel } from "./Material.jsx";
import Image from "next/image";
const CarouselBanner = () => {
  const bannerItems = [
    {
      heading: "Crypto transactions just got easier",
      imageLink: "./banner/first.svg",
      subText:
        "Start swapping your coins for any other coin and get the same value. Sell your coins and get cash",
    },
    {
      heading: "Swap your coins very fast",
      imageLink: "./banner/second.svg",
      subText:
        "No more waiting. Get your coins directly into your wallet immediately it gets confirmed .",
    },
    {
      heading: "The most trusted Cryptocurrency exchange",
      imageLink: "./banner/third.svg",
      subText: "Transactions here are very secured as we are trusted globally.",
    },
  ];
  return (
    <Carousel className="rounded-xl" transition={{ duration: 2 }} autoplay={true} autoplayDelay={5000}>
      {bannerItems.map((item, index) => (
        <div key={index} className="relative h-full w-full">
          <div className="flex flex-row w-[96%] mx-auto items-center">
            <div className="w-full lg:w-[55%]">
              <h2 className="text-5xl">{item?.heading}</h2>
              <p>{item?.subText}</p>
            </div>
            <Image
              src={item?.imageLink}
              alt=""
              height={150}
              width={150}
              className="lg:w-[40%] h-[550px hidden lg:block"
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselBanner;
