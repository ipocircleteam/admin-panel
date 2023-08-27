import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchIpo } from "../../../reducers/ipo-reducer";
import { IpoReducerType } from "../../../types";

export default function SearchBar() {
  const [ipo, setIpo] = useState("");
  const dispatch = useDispatch();
  const message = useSelector((state: IpoReducerType) => state.ipo.message);

  const Search = () => {
    //   write async logic
    dispatch(searchIpo({ ipoName: ipo }));
  };

  return (
    <div className="p-3 bg-primary rounded-lg border">
          <section className="flex justify-center items-center">
          <input
        type="text"
        placeholder="Enter IPO Name"
        value={ipo}
        onChange={(e) => {
          setIpo(e.target.value);
        }}
        className="w-[100%] p-1 outline-none"
      />
      <button onClick={Search} className="p-1 bg-[#FFFFFF] border-l-2">
        Search
          </button>
      </section>
      <p className="text-base">{message}</p>
    </div>
  );
}
