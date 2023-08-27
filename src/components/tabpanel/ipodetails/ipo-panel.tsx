import React, { useState } from "react";
import $ from "jquery";
import SearchBar from "./search-bar";
import Canvas from "./canvas";
import PanelForm from "./panel-form";
import PanelButtons from "./panel-buttons";
import { useSelector, useDispatch } from "react-redux";
import { IpoReducerType } from "../../../types";
import { setIpoData } from "../../../reducers/ipo-reducer";
import { initialIpoData } from "../../../data/ipoData";

export default function IpoPanel() {
  const ipo = useSelector((state: IpoReducerType) => state.ipo.currentIPO);
  const dispatch = useDispatch();

  const [reviewCount, setReviewCount] = useState(0);
  const [ipodata, setData] = useState(initialIpoData);

  const review = () => {
    setReviewCount(reviewCount + 1);
    $("#modify").removeClass(" bg-gray-500");
    $("#modify").addClass(" bg-white");
    $("#save").removeClass(" bg-gray-500");
    $("#save").addClass(" bg-white");
    // dispatch to change data
    dispatch(setIpoData({ ipodata: ipodata }));
  };

  const save = () => {
    if (reviewCount === 0) {
      alert("Please review details before proceeding");
      return;
    }
    //logic to save data
  };

  const modify = () => {
    if (reviewCount === 0) {
      alert("Please review details before proceeding");
      return;
    }
    //logic to modify data
  };

  return (
    <div className="flex justify-center items-center w-[100vw] p-2">
      <section className="w-[60%]">
        <PanelForm />
        <PanelButtons save={save} review={review} modify={modify} />
      </section>

      <section className="w-[40%] p-2 overflow-hidden">
        <SearchBar />
        <Canvas details={ipo} />
      </section>
    </div>
  );
}
