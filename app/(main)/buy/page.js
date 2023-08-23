import Buy from "./components/Buy";

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
      <Buy coinData={data} />
    </div>
  );
};

export default Main;
