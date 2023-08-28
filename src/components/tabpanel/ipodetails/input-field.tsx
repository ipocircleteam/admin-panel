import React from "react";

export default function Input(props: {
  value: string | number;
  function: (e: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
  name: string;
}) {
  return (
    <div
      className=" flex justify-between items-center rounded-md w-[auto] h-[30px] 
        border-gray-400 overflow-hidden"
    >
      <label className="mx-1 text-[0.9rem]">{props.text}</label>
      <input
        name={props.name}
        type="text"
        autoComplete="off"
        className="mx-1 px-1 border"
        value={props.value}
        onChange={props.function}
      />
    </div>
  );
}
