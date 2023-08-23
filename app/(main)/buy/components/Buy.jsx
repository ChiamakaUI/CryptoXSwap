"use client";
import { useState } from "react";
import SelectComponent from "./Select";

const Buy = ({ coinData }) => {
  const [amount, setAmount] = useState();
  const [coin, setCoin] = useState({});

  const Amounts = [5000, 10000, 20000, 25000, 30000];

  return (
    <form className="w-full bg-white p-6 rounded-md">
      <h2 className="text-center text-2xl lg:text-3xl font-semibold my-3 text-black">
        Buy <span className="uppercase">{coin?.ticker ?? "BTC"}</span>
      </h2>
      <div className="text-black w-full my-3 border border-gray-400 rounded flex flex-row items-center">
        <input
          type="text"
          className="w-[85%] focus:outline-none p-2"
          placeholder="0"
          defaultValue={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <p className="font-semibold lg:text-lg">NGN</p>
      </div>
      <SelectComponent data={coinData} setCurrentCoin={setCoin} />
      <div className="flex flex-row flex-wrap w-full lg:w-[55%] justify-between items-center my-4">
        {Amounts.map((amount, i) => (
          <button
            key={i}
            className="bg-primary rounded p-2 my-1"
            onClick={(e) => {
              e.preventDefault();
              setAmount(amount);
            }}
          >
            {amount}
          </button>
        ))}
      </div>
      <div className="my-2 w-full">
        <button className="border py-2.5 rounded bg-primary text-white w-full">
            Continue
          </button>
        </div>
    </form>
  );
};

export default Buy;
