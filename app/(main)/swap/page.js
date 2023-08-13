async function getData() {
  const res = await fetch("https://api.changenow.io/v2/exchange/currencies");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const Main = async () => {
  const data = await getData();

  return (
    <div className="w-[88%] mx-auto my-8 lg:w-[50%]">
     {/* <h2 className="text-center text-2xl lg:text-3xl font-semibold my-3">
          Swap Coins
        </h2> */}
      <form className="w-full bg-white p-6 rounded-md">
        <h2 className="text-center text-2xl lg:text-3xl font-semibold my-3 text-black">
          Exchange Crypto
        </h2>
        <div className="text-black w-full my-2 border border-gray-400 rounded">
          <input type="text" className="w-[75%] focus:outline-none  p-2" />
          <select className="w-[25%] border py-2.5">
            {data.map((coin, i) => (
              <option key={i} value={coin.ticker}>
                {coin.ticker}-{coin.name}
              </option>
            ))}
          </select>
        </div>
        <div className="text-black w-full my-3 border border-gray-400 rounded">
          <input type="text" className="w-[75%] focus:outline-none  p-2" />
          <select className="w-[25%] border py-2.5 ">
            {data.map((coin, i) => (
              <option key={i} value={coin.ticker}>
                {coin.ticker}-{coin.name}
              </option>
            ))}
          </select>
        </div>
        <div className="my-2 w-full">
        <button className="border py-2.5 rounded bg-primary text-white w-full">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default Main;
