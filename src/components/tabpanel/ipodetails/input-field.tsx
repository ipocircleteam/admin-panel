import React from "react";

export default function Input(props: {
  value: string | number | string[];
  function: (e: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
  name: string;
}) {
var element
  if (typeof props.value === 'number') {
    element = <input
      name={props.name}
      type="number"
      autoComplete="off"
      className="mx-1 px-1 border border-gray-300 w-[200px] "
      value={props.value}
      onChange={props.function}
    />
  }
  else {
    element = <input
      name={props.name}
      type="text"
      autoComplete="off"
      className="mx-1 px-1 border border-gray-300 w-[200px] "
      value={props.value}
      onChange={props.function}
    />
  }

  return (
    <div
      className=" flex justify-between items-center w-[auto] h-[60px] 
        border-gray-200 overflow-hidden border"
    >
      <label className="mx-1 text-[0.9rem] font-bold ">{props.text} : </label>
      
{element}
    </div>
  );
}
