import React, { useState } from "react";

export default function SearchBar(props: { Search: (ipo: string) => void }) {
  const [ipo, setIpo] = useState("");

  return (
    <div className="p-2 border-2  w-[100%] m-0">
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
        <button
          onClick={() => {
            props.Search(ipo);
          }}
          className="p-1 bg-[#FFFFFF] border-l-2"
        >
          Search
        </button>
      </section>
    </div>
  );
}
