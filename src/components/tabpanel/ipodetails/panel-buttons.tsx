import React from "react";

export default function PanelButtons(props: {
  save: () => void;
  review: () => void;
  modify: () => void;
  reset: () => void;
}) {
  return (
    <div className="h-[10vh] fixed bottom-0 bg-primary md:rounded-t-lg flex justify-center 
    items-center w-[60%]">
      <button
        id="review"
        className="bg-white w-[100px] p-2 rounded-lg mx-2"
        onClick={props.review}
      >
        Review
      </button>

      <button
        id="reset"
        className="bg-white w-[100px] p-2 rounded-lg mx-2"
        onClick={props.reset}
      >
        Reset
      </button>

      <button
        id="save"
        className="bg-gray-500 w-[100px] p-2 rounded-lg mx-2"
        onClick={props.save}
      >
        Save
      </button>

      <button
        id="modify"
        className="bg-gray-500 w-[100px] p-2 rounded-lg mx-2"
        onClick={props.modify}
      >
        Modify
      </button>
    </div>
  );
}
