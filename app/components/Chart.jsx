"use client";

import dynamic from "next/dynamic";
const AdvancedRealTimeChart = dynamic(
  () =>
    import("react-ts-tradingview-widgets").then((w) => w.AdvancedRealTimeChart),
  {
    ssr: false,
  }
);
const Chart = () => {
  return (
    <>
      <h2 className="text-center text-xl lg:text-3xl font-semibold uppercase mt-4">
        Market Chart
      </h2>
      <div className="h-[500px] w-[94%] mx-auto mb-10 mt-4 bg-white p-8">
        <AdvancedRealTimeChart
          theme="light"
          autosize
          symbol="BINANCE:BTCUSDT"
        ></AdvancedRealTimeChart>
      </div>
    </>
  );
};

export default Chart;
