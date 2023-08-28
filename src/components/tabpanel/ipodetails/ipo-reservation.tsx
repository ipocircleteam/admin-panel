import React from "react";
import Input from "./input-field";
import { IpoReservationType } from "../../../types";

export default function IpoReservation(props: {
  data: IpoReservationType;
  callback: (data: IpoReservationType) => void;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.callback({
      ...props.data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className="overflow-scroll custom-scrollbar grid grid-cols-1 gap-0 border-r-2 
    w-[100%] h-[30vh] overflow-x-hidden overflow-y-scroll "
    >
      <label className="text-[1.2rem] bg-gray-200 text-primary px-[10px] h-[30px] border-b-2">
        IPO Reservations (Shares Offered)
      </label>

      <Input
        value={props.data.anchor_investor}
        function={handleChange}
        text="Anchor Investor"
        name="anchor_investor"
      />
      <Input
        value={props.data.nii_hni}
        function={handleChange}
        text="NII (HNI)"
        name="nii_hni"
      />
      <Input
        value={props.data.qib}
        function={handleChange}
        text="QIB"
        name="qib"
      />
      <Input
        value={props.data.retail}
        function={handleChange}
        text="Retail"
        name="retail"
      />
      <Input
        value={props.data.other}
        function={handleChange}
        text="Others"
        name="other"
      />
      <Input
        value={props.data.total}
        function={handleChange}
        text="Total"
        name="total"
      />
    </div>
  );
}
