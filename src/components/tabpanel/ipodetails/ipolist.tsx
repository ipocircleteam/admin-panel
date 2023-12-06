import React from "react";
import { IpolistType } from "../../../types";

export default function IpoList(props: {
  data: IpolistType[] | undefined;
  populateData: (id: string) => void;
}) {
  return (
    <div className="overflow-x-hidden overflow-y-scroll h-[75vh]">
      {props.data &&
        props.data.map((item, index) => {
          return <IpoCard key={item.id} name={item.name} id={item.id} populateData={props.populateData} />;
        })}
    </div>
  );
}

function IpoCard(props: { name: string; id: string; populateData: (id: string) => void }) {
  return (
      <button className="w-[100%]" onClick={() => {
          props.populateData(props.id)
    }}>
      <div className="text-center hover:border-primary flex justify-center items-center border border-gray-300 rounded-sm m-1 cursor-pointer">
        <h1>{props.name}</h1>
      </div>
    </button>
  );
}
