import React from "react";
import { IpolistType } from "../../../types";

export default function IpoList(props: {
  data: IpolistType[] | undefined;
  populateData: (id: string) => void;
}) {
  return (
    <div className="overflow-x-hidden overflow-y-scroll h-[75vh] flex flex-col justify-center items-center">
      {props.data &&
        props.data.map((item, index) => {
          return <IpoCard key={item.id} name={item.name} id={item.id} populateData={props.populateData} />;
        })}
    </div>
  );
}

function IpoCard(props: { name: string; id: string; populateData: (id: string) => void }) {
  return (
      <button className="w-[90%] mx-auto" onClick={() => {
          props.populateData(props.id)
    }}>
      <div className="text-center h-[60px] hover:border-primary flex justify-center items-center border border-gray-300 rounded-sm m-1 cursor-pointer">
        <h1>{props.name}</h1>
      </div>
    </button>
  );
}
