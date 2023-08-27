import React from "react";
import { CompanyFinancesType } from "../../../types";
import Input from "./input-field";

export default function CompanyFinances(props: {
  data: CompanyFinancesType;
  callback: (data: CompanyFinancesType) => void;
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
    w-[100%] h-[37vh] overflow-x-hidden overflow-y-scroll "
    >
      <label className="text-[1.2rem] bg-gray-200 text-primary px-[10px] h-[30px] border-b-2">
        Company Finances
      </label>
      <Input
        value={props.data.ipo_id}
        function={handleChange}
        text="Ipo ID"
        name="ipo_id"
      />

      <Input
        value={props.data.net_worth}
        function={handleChange}
        text="Net Worth"
        name="net_worth"
      />

      <Input
        value={props.data.assets}
        function={handleChange}
        text="Assets"
        name="assets"
      />

      <Input
        value={props.data.borrowing}
        function={handleChange}
        text="Borrowing"
        name="borrowing"
      />

      <Input
        value={props.data.period}
        function={handleChange}
        text="Period"
        name="period"
      />

      <Input
        value={props.data.profit_after_tax}
        function={handleChange}
        text="Profit After Tax"
        name="profit_after_tax"
      />

      <Input
        value={props.data.revenue}
        function={handleChange}
        text="Revenue"
        name="revenue"
      />

      <Input
        value={props.data.reserves}
        function={handleChange}
        text="Reserves"
        name="reserves"
      />
    </div>
  );
}
