import React from "react";
import Input from "./input-field";
import { SubscriptionsType } from "../../../types";

export default function Subscriptions(props: {
  data: SubscriptionsType;
  callback: (data: SubscriptionsType) => void;
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
    w-[100%] h-[25vh] overflow-x-hidden overflow-y-scroll "
    >
      <label className="text-[1.2rem] bg-gray-200 text-primary px-[10px] h-[30px] border-b-2">
        Subscriptions
      </label>

      <Input
        value={props.data.ipo_id}
        function={handleChange}
        text="Ipo ID"
        name="ipo_id"
      />
      <Input
        value={props.data.category}
        function={handleChange}
        text="Category"
        name="category"
      />
      <Input
        value={props.data.shares_bid}
        function={handleChange}
        text="Shares Bid"
        name="shares_bid"
      />
      <Input
        value={props.data.shares_offered}
        function={handleChange}
        text="Shares Offered"
        name="shares_offered"
      />
      <Input
        value={props.data.updated_at}
        function={handleChange}
        text="Updated At"
        name="updated_at"
      />
    </div>
  );
}
