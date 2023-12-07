import React from "react";
import { IpolistType } from "../../../utils/types";

export default function IpoList(props: {
  data: IpolistType[] | undefined;
  populateData: (id: string) => void;
}) {
  return (
    <div className="text-center">
      {props.data &&
        props.data.map((item, index) => {
          return <IpoCard key={item.id} index={index} name={item.name} id={item.id} populateData={props.populateData} />;
        })}
    </div>
  );
}

function IpoCard(props: { name: string; id: string; index: number; populateData: (id: string) => void }) {
  return (
      <button className="w-[90%] mx-auto my-1" onClick={() => {
          props.populateData(props.id)
    }}>
      <div className="text-left bg-white h-[60px] hover:border-primary flex justify-start p-2 items-center border border-gray-300 rounded-sm m-1 cursor-pointer">
        <h1>{ props.index + " " + props.name}</h1>
      </div>
    </button>
  );
}
