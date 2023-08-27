import React, { useState } from "react";

export default function SearchBar() {
  const [ipo, setIpo] = useState("");
  return (
    <div className="p-3 bg-blue-100 rounded-lg border">
      <form className="flex justify-center items-center">
        <input
          type="text"
          placeholder="Enter IPO Name"
          value={ipo}
          onChange={(e) => {
            setIpo(e.target.value);
          }}
          className="w-[100%] p-1"
        />
        <button className="p-1 bg-[#FFFFFF] border-l-2">Search</button>
      </form>
    </div>
  );
}
