import React from "react";
import Input from "./input-field";
import { AdditionalDetailsType } from "../../../types";

export default function AdditionalDetails(props: {
  data: AdditionalDetailsType;
  callback: (data: AdditionalDetailsType) => void;
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
    w-[100%] h-[80vh] overflow-x-hidden overflow-y-scroll "
    >
      <label className="text-[1.2rem] bg-gray-200 text-primary px-[10px] h-[30px] border-b-2">
        IPO Additional Details
      </label>

      <Input
        value={props.data.company_logo}
        function={handleChange}
        text="Company Logo URL"
        name="company_logo"
      />

      <div
        className=" flex flex-col justify-start items-start rounded-md w-[auto] h-[35vh] 
        border-gray-400 overflow-hidden"
      >
        <label className="mx-1 text-[0.9rem]">Ipo Details Para</label>
        <textarea
          name="ipo_details_para"
          className="mx-auto px-1 border w-[95%]"
          rows={11}
          placeholder="start typing ..."
          value={props.data.ipo_details_para}
          onChange={(e) => {
            props.callback({
              ...props.data,
              [e.target.name]: e.target.value,
            });
          }}
        />
      </div>

      <div
        className=" flex flex-col justify-start items-start rounded-md w-[auto] h-[35vh] 
        border-gray-400 overflow-hidden"
      >
        <label className="mx-1 text-[0.9rem]">Object of the issue</label>
        <textarea
          name="object_of_the_issue"
          className="mx-auto px-1 border w-[95%]"
          rows={10}
          placeholder="start typing ..."
          value={props.data.object_of_the_issue}
          onChange={(e) => {
            props.callback({
              ...props.data,
              [e.target.name]: e.target.value,
            });
          }}
        />
      </div>
    </div>
  );
}
