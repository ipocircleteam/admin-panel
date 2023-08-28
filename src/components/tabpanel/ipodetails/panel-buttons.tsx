import React from "react";

export default function PanelButtons(props: {
  save: () => void;
  modify: () => void;
  reset: () => void;
}) {
  return (
    <div className="h-[8vh] bg-primary flex justify-center 
    items-center w-[100%]">

      <button
        id="reset"
        className="bg-white w-[100px] p-2 rounded-lg mx-2"
        onClick={props.reset}
      >
        RESET
      </button>

      <button
        id="save"
        className="bg-white w-[100px] p-2 rounded-lg mx-2"
        onClick={props.save}
      >
        ADD
      </button>

      <button
        id="modify"
        className="bg-white w-[100px] p-2 rounded-lg mx-2"
        onClick={props.modify}
      >
        MODIFY
      </button>
    </div>
  );
}
