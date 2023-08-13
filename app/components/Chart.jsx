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
    <div className="h-[450px] w-[88%] mx-auto my-6">
      <AdvancedRealTimeChart
        theme="dark"
        autosize
        symbol="BINANCE:BTCUSDT"
      ></AdvancedRealTimeChart>
    </div>
  );
};

export default Chart;
