import React from "react";

export default function Input(props: {
  value: string | number | string[];
  function: (e: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
  name: string;
}) {
  return (
    <div
      className=" flex justify-between items-center w-[auto] h-[50px] 
        border-gray-200 overflow-hidden border"
    >
      <label className="mx-1 text-[0.9rem] font-bold">{props.text} : </label>
      <input
        name={props.name}
        type="text"
        autoComplete="off"
        className="mx-1 px-1 borde border-gray-300"
        value={props.value}
        onChange={props.function}
      />
    </div>
  );
}
