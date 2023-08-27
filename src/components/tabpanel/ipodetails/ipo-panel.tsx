import React, { useEffect, useState } from "react";
import $ from "jquery";
import SearchBar from "./search-bar";
import Canvas from "./canvas";
import PanelForm from "./panel-form";
import PanelButtons from "./panel-buttons";
import { searchIpo } from "../../../reducers/ipo-reducer";
import { useSelector, useDispatch } from "react-redux";
import { IpoDetailsType, IpoReducerType } from "../../../types";
import { setIpoData } from "../../../reducers/ipo-reducer";
import { initialIpoData } from "../../../data/ipoData";

export default function IpoPanel() {
  const ipo = useSelector((state: IpoReducerType) => state.ipo.currentIPO);
  const dispatch = useDispatch();

  const [reviewCount, setReviewCount] = useState(0);
  const [data, setData] = useState(ipo);

  useEffect(() => {
    setData(ipo);
  }, [ipo]);

  const Search = (ipoName: string) => {
    //   write async logic
    dispatch(searchIpo({ ipoName: ipoName }));
  };

  const review = () => {
    setReviewCount(reviewCount + 1);
    $("#modify").removeClass(" bg-gray-500");
    $("#modify").addClass(" bg-white");
    $("#save").removeClass(" bg-gray-500");
    $("#save").addClass(" bg-white");
    // dispatch to change data
    dispatch(setIpoData({ ipodata: data }));
  };

  const reset = () => {
    setData(initialIpoData);
    dispatch(setIpoData({ ipodata: initialIpoData }));
  };

  const save = () => {
    if (reviewCount === 0) {
      alert("Please review details before proceeding");
      return;
    }
    //logic to save data
    alert("API integration pending");
  };

  const modify = () => {
    if (reviewCount === 0) {
      alert("Please review details before proceeding");
      return;
    }
    //logic to modify data
    alert("API integration pending");
  };

  const updateData = (data: IpoDetailsType) => {
    setData(data);
  };

  return (
    <div className="flex flex-wrap justify-center items-center w-[100vw] p-2 bg-white">
      <section className="w-[95%] sm:w-[90%] lg:w-[60%]">
        <PanelForm data={data} callback={updateData} />
        <PanelButtons
          save={save}
          review={review}
          modify={modify}
          reset={reset}
        />
      </section>

      <section className="w-[95%] sm:w-[90%] lg:w-[40%]">
        <SearchBar Search={Search} />
        <Canvas details={ipo} />
      </section>
    </div>
  );
}
