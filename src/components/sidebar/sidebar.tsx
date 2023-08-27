import React from "react";
import IpoDetailsTab from "../tab/ipodetails";

export default function Sidebar(props: { function: (comp: any) => void }) {
  return (
    <div className="flex flex-col justify-start items-start ">
      <button
        onClick={() => {
          props.function(<h1>Admin Overview</h1>);
        }}
        className="text-[1.2rem] my-1 outline-none hover:text-primary font-semibold"
      >
        Overview
      </button>
      <button
        onClick={() => {
          props.function(<IpoDetailsTab />);
        }}
        className="text-[1.2rem] my-1 outline-none hover:text-primary font-semibold"
      >
        Data Entry
      </button>
      <button
        onClick={() => {
          props.function(<h1>Content Overview</h1>);
        }}
        className="text-[1.2rem] my-1 outline-none hover:text-primary font-semibold"
      >
        Content
      </button>
    </div>
  );
}
