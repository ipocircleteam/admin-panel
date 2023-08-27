import React, { useState } from "react";
import $ from "jquery";
import SearchBar from "./search-bar";
import Canvas from "./canvas";
import PanelForm from "./panel-form";
import PanelButtons from "./panel-buttons";
import { useSelector, useDispatch } from "react-redux";
import { IpoDetailsType, IpoReducerType } from "../../../types";
import { setIpoData } from "../../../reducers/ipo-reducer";

export default function IpoPanel() {
  const ipo = useSelector((state: IpoReducerType) => state.ipo.currentIPO);
  const dispatch = useDispatch();

  const [reviewCount, setReviewCount] = useState(0);
  const [data, setData] = useState(ipo);

  const review = () => {
    setReviewCount(reviewCount + 1);
    $("#modify").removeClass(" bg-gray-500");
    $("#modify").addClass(" bg-white");
    $("#save").removeClass(" bg-gray-500");
    $("#save").addClass(" bg-white");
    // dispatch to change data
    dispatch(setIpoData({ ipodata: data }));
  };

  const save = () => {
    if (reviewCount === 0) {
      alert("Please review details before proceeding");
      return;
    }
    //logic to save data
      alert("API integration pending")
  };

  const modify = () => {
    if (reviewCount === 0) {
      alert("Please review details before proceeding");
      return;
    }
    //logic to modify data
      alert("API integration pending")
  };
    
    const updateData = (data: IpoDetailsType) => {
        setData(data);
    }

  return (
    <div className="flex justify-center items-center w-[100vw] p-2 bg-white">
      <section className="w-[40%] p-2 overflow-hidden">
        <SearchBar />
        <Canvas details={ipo} />
      </section>

      <section className="w-[60%]">
        <PanelForm data={data} callback={updateData} />
        <PanelButtons save={save} review={review} modify={modify} />
      </section>
    </div>
  );
}
