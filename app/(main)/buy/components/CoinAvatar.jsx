import Image from "next/image";

export const CoinAvatar = ({ src, name, shortName }) => {
  return (
    <div className="flex flex-row items-center">
      <Image src={src} alt={name} height={50} width={50} />
      <div className="ml-4">
        <p className="capitalize font-semibold">{shortName}</p>
        <p className="text-sm font-semibold">{name}</p>
      </div>
    </div>
  );
};

export const CoinAvatarLabel = ({ src, name, shortName }) => {
  return (
    <div className="flex flex-row items-center">
      <Image src={src} alt={name} height={25} width={25} />
      <p className="ml-2">
        <span className="font-bold uppercase">{shortName}</span> - {name}
      </p>
    </div>
  );
};
