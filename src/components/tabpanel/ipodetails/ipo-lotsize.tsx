import React from "react";
import Input from "./input-field";
import { IpoLotSizeType } from "../../../types";

export default function IpoLotSize(props: {
  data: IpoLotSizeType;
  callback: (data: IpoLotSizeType) => void;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.callback({
      ...props.data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className="grid grid-cols-1 gap-0 border-r-2 
    w-[100%] h-[50vh]"
    >
      <label className="text-[1.2rem] bg-gray-200 text-primary px-[10px] h-[30px] border-b-2">
        IPO Lot Sizes
      </label>
      <div className="overflow-scroll custom-scrollbar overflow-x-hidden overflow-y-scroll ">
      <Input
        value={props.data.retail_amount_max}
        function={handleChange}
        text="Retail(Max) Amount"
        name="retail_amount_max"
      />
      <Input
        value={props.data.retail_amount_min}
        function={handleChange}
        text="Retail(Min) Amount"
        name="retail_amount_min"
      />
      <Input
        value={props.data.retail_lots_max}
        function={handleChange}
        text="Retail(Max) Lots"
        name="retail_lots_max"
      />
      <Input
        value={props.data.retail_lots_min}
        function={handleChange}
        text="Retail(Min) Lots"
        name="retail_lots_min"
      />
      <Input
        value={props.data.retail_shares_max}
        function={handleChange}
        text="Retail(Max) Shares"
        name="retail_shares_max"
      />
      <Input
        value={props.data.retail_shares_min}
        function={handleChange}
        text="Retail(Min) Shares"
        name="retail_shares_min"
      />

      <Input
        value={props.data.shni_amount_max}
        function={handleChange}
        text="S HNI(Max) Amount"
        name="shni_amount_max"
      />
      <Input
        value={props.data.shni_amount_min}
        function={handleChange}
        text="S HNI(Min) Amount"
        name="shni_amount_min"
      />
      <Input
        value={props.data.shni_lots_max}
        function={handleChange}
        text="S HNI(Max) Lots"
        name="shni_lots_max"
      />
      <Input
        value={props.data.shni_lots_min}
        function={handleChange}
        text="S HNI(Min) Lots"
        name="shni_lots_min"
      />
      <Input
        value={props.data.shni_shares_max}
        function={handleChange}
        text="S HNI(Max) Shares"
        name="shni_shares_max"
      />
      <Input
        value={props.data.shni_shares_min}
        function={handleChange}
        text="S HNI(Min) Shares"
        name="shni_shares_min"
      />

      <Input
        value={props.data.bhni_amount_max}
        function={handleChange}
        text="B HNI(Max) Amount"
        name="bhni_amount_max"
      />
      <Input
        value={props.data.bhni_amount_min}
        function={handleChange}
        text="B HNI(Min) Amount"
        name="bhni_amount_min"
      />
      <Input
        value={props.data.bhni_lots_max}
        function={handleChange}
        text="B HNI(Max) Lots"
        name="bhni_lots_max"
      />
      <Input
        value={props.data.bhni_lots_min}
        function={handleChange}
        text="B HNI(Min) Lots"
        name="bhni_lots_min"
      />
      <Input
        value={props.data.bhni_shares_max}
        function={handleChange}
        text="B HNI(Max) Shares"
        name="bhni_shares_max"
      />
      <Input
        value={props.data.bhni_shares_min}
        function={handleChange}
        text="B HNI(Min) Shares"
        name="bhni_shares_min"
        />
        </div>
    </div>
  );
}
