import React from "react";

export default function PanelButtons(props: {
    save: () => void
    review: () => void
    modify: () => void
}) {

  return (
    <div className="h-[10vh] bg-primary rounded-t-lg flex justify-center items-center">
      <button
        id="save"
              className="bg-gray-500 w-[100px] p-2 rounded-lg mx-2"
              onClick={props.save}
      >
        Save
      </button>

      <button
        id="review"
              className="bg-white w-[100px] p-2 rounded-lg mx-2"
              onClick={props.review}
      >
        Review
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
