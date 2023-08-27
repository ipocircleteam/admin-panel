import React from "react";
import SearchBar from "./search-bar";
import Canvas from "./canvas";
import PanelForm from "./panel-form";
import PanelButtons from "./panel-buttons";
import { useSelector } from "react-redux";
import { IpoReducerType } from "../../../types";

export default function IpoPanel() {
  const ipo = useSelector((state: IpoReducerType) => state.ipo.currentIPO);

  return (
    <div className="flex justify-center items-center w-[100vw] p-2">
      <section className="w-[60%]">
        <PanelForm />
        <PanelButtons />
      </section>

      <section className="w-[40%] border-l-2 border-gray-400 p-2 overflow-hidden">
        <SearchBar />
        <Canvas details={ipo} />
      </section>
    </div>
  );
}
