"use client";
import Select, { components } from "react-select";
import { CoinAvatar, CoinAvatarLabel } from "./CoinAvatar";

const CustomUserOption = (props) => {
  const { data } = props;
  return (
    <components.Option {...props}>
      <CoinAvatar
        src={data?.extra?.image}
        name={data?.extra?.name}
        shortName={data?.extra?.ticker}
      />
    </components.Option>
  );
};

const CustomSingleValueLabel = (props) => {
  const { data } = props;
  return (
    <components.SingleValue {...props}>
      <CoinAvatarLabel
        src={data?.extra?.image}
        name={data?.extra?.name}
        shortName={data?.extra?.ticker}
      />
    </components.SingleValue>
  );
};
const SelectComponent = ({ data, setCurrentCoin }) => {
  return (
    <div className="text-black w-full my-2 border border-gray-400 rounded">
      <Select
        isSearchable={true}
        options={data?.map((item) => ({
          label: item?.ticker,
          value: item?.name,
          extra: item,
        }))}
        components={{
          Option: CustomUserOption,
          SingleValue: CustomSingleValueLabel,
        }}
        onChange={(val) => setCurrentCoin(val.extra)}
      />
    </div>
  );
};

export default SelectComponent;
