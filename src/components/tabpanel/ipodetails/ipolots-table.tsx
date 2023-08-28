import React from "react";
import Input from "./input-field";
import { IpoLotsType } from "../../../types";

export default function IpoLots(props: {
  data: IpoLotsType;
  callback: (data: IpoLotsType) => void;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.callback({
      ...props.data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className="overflow-scroll custom-scrollbar grid grid-cols-1 gap-0 border-r-2 
    w-[100%] h-[25vh]  overflow-x-hidden overflow-y-scroll"
    >
      <label className="text-[1.2rem] bg-gray-200 text-primary h-[30px] px-[10px] border-b-2">
        IPO Lots
      </label>
      <Input
        value={props.data.ipo_id}
        function={handleChange}
        text="Ipo ID"
        name="ipo_id"
      />

      <Input
        value={props.data.category}
        function={handleChange}
        text="Category"
        name="category"
      />

      <Input
        value={props.data.lots_max}
        function={handleChange}
        text="Lots Max"
        name="lots_max"
      />

      <Input
        value={props.data.lots_min}
        function={handleChange}
        text="Lots Min"
        name="lots_min"
      />
    </div>
  );
}
