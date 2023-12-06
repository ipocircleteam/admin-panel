import React from "react";
import { CompanyFinanceType } from "../../../types";
import Input from "./input-field";

export default function CompanyFinances(props: {
  data: CompanyFinanceType;
  callback: (data: CompanyFinanceType) => void;
}) {
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   props.callback({
  //     "y2019": {
  //       ...props.data.y2019,
  //     [e.target.name]: e.target.value,
  //     },
  //     "y2020": {
  //       ...props.data.y2020,
  //     [e.target.name]: e.target.value,
  //     },
  //     "y2019": {
  //       ...props.data.y2019,
  //     [e.target.name]: e.target.value,
  //     },
  //     "y2019": {
  //       ...props.data.y2019,
  //     [e.target.name]: e.target.value,
  //     },
  //     "y2023": {
  //       ...props.data.y2023,
  //     [e.target.name]: e.target.value,
  //     },
  //     "y2024": {
  //       ...props.data.y2024,
  //     [e.target.name]: e.target.value,
  //     },
  //   });
  // };

  return (
    <div
      className="overflow-scroll grid grid-cols-1 gap-0 border-r-2 
    w-[100%] overflow-x-hidden overflow-y-scroll h-[80vh]"
    >
      <label className="text-[1.2rem] border-primary bg-gray-200 text-primary px-[10px] h-[30px] border-b-2">
        Company Finances
      </label>
      <h1 className="bg-gray-100">Year 2023</h1>
      <Input
        value={props.data.y2023.networth}
        function={(e) => {
          props.callback({
            ...props.data,
            y2023: {
              ...props.data.y2023,
              networth: Number(e.target.value),
            },
          });
        }}
        text="Net Worth"
        name="y2023.networth"
      />

      <Input
        value={props.data.y2023.assets}
        function={(e) => {
          props.callback({
            ...props.data,
            y2023: {
              ...props.data.y2023,
              assets: Number(e.target.value),
            },
          });
        }}
        text="Assets"
        name="y2023.assets"
      />

      <Input
        value={props.data.y2023.borrowing}
        function={(e) => {
          props.callback({
            ...props.data,
            y2023: {
              ...props.data.y2023,
              borrowing: Number(e.target.value),
            },
          });
        }}
        text="Borrowing"
        name="y2023.borrowing"
      />

      <Input
        value={props.data.y2023.profit_after_tax}
        function={(e) => {
          props.callback({
            ...props.data,
            y2023: {
              ...props.data.y2023,
              profit_after_tax: Number(e.target.value),
            },
          });
        }}
        text="Profit After Tax"
        name="y2023.profit_after_tax"
      />

      <Input
        value={props.data.y2023.revenue}
        function={(e) => {
          props.callback({
            ...props.data,
            y2023: {
              ...props.data.y2023,
              revenue: Number(e.target.value),
            },
          });
        }}
        text="Revenue"
        name="y2023.revenue"
      />

      <Input
        value={props.data.y2023.reserves}
        function={(e) => {
          props.callback({
            ...props.data,
            y2023: {
              ...props.data.y2023,
              reserves: Number(e.target.value),
            },
          });
        }}
        text="Reserves"
        name="y2023.reserves"
      />
      <hr />

      <h1 className="bg-gray-100">Year 2022</h1>
      <Input
        value={props.data.y2022.networth}
        function={(e) => {
          props.callback({
            ...props.data,
            y2022: {
              ...props.data.y2022,
              networth: Number(e.target.value),
            },
          });
        }}
        text="Net Worth"
        name="y2022.networth"
      />

      <Input
        value={props.data.y2022.assets}
        function={(e) => {
          props.callback({
            ...props.data,
            y2022: {
              ...props.data.y2022,
              assets: Number(e.target.value),
            },
          });
        }}
        text="Assets"
        name="y2022.assets"
      />

      <Input
        value={props.data.y2022.borrowing}
        function={(e) => {
          props.callback({
            ...props.data,
            y2022: {
              ...props.data.y2022,
              borrowing: Number(e.target.value),
            },
          });
        }}
        text="Borrowing"
        name="y2022.borrowing"
      />

      <Input
        value={props.data.y2022.profit_after_tax}
        function={(e) => {
          props.callback({
            ...props.data,
            y2022: {
              ...props.data.y2022,
              profit_after_tax: Number(e.target.value),
            },
          });
        }}
        text="Profit After Tax"
        name="y2022.profit_after_tax"
      />

      <Input
        value={props.data.y2022.revenue}
        function={(e) => {
          props.callback({
            ...props.data,
            y2022: {
              ...props.data.y2022,
              revenue: Number(e.target.value),
            },
          });
        }}
        text="Revenue"
        name="y2022.revenue"
      />

      <Input
        value={props.data.y2022.reserves}
        function={(e) => {
          props.callback({
            ...props.data,
            y2022: {
              ...props.data.y2022,
              reserves: Number(e.target.value),
            },
          });
        }}
        text="Reserves"
        name="y2022.reserves"
      />
      <hr />

      <h1 className="bg-gray-100">Year 2021</h1>
      <Input
        value={props.data.y2021.networth}
        function={(e) => {
          props.callback({
            ...props.data,
            y2021: {
              ...props.data.y2021,
              networth: Number(e.target.value),
            },
          });
        }}
        text="Net Worth"
        name="y2021.networth"
      />

      <Input
        value={props.data.y2021.assets}
        function={(e) => {
          props.callback({
            ...props.data,
            y2021: {
              ...props.data.y2021,
              assets: Number(e.target.value),
            },
          });
        }}
        text="Assets"
        name="y2021.assets"
      />

      <Input
        value={props.data.y2021.borrowing}
        function={(e) => {
          props.callback({
            ...props.data,
            y2021: {
              ...props.data.y2021,
              borrowing: Number(e.target.value),
            },
          });
        }}
        text="Borrowing"
        name="y2021.borrowing"
      />

      <Input
        value={props.data.y2021.profit_after_tax}
        function={(e) => {
          props.callback({
            ...props.data,
            y2021: {
              ...props.data.y2021,
              profit_after_tax: Number(e.target.value),
            },
          });
        }}
        text="Profit After Tax"
        name="y2021.profit_after_tax"
      />

      <Input
        value={props.data.y2021.revenue}
        function={(e) => {
          props.callback({
            ...props.data,
            y2021: {
              ...props.data.y2021,
              revenue: Number(e.target.value),
            },
          });
        }}
        text="Revenue"
        name="y2021.revenue"
      />

      <Input
        value={props.data.y2021.reserves}
        function={(e) => {
          props.callback({
            ...props.data,
            y2021: {
              ...props.data.y2021,
              reserves: Number(e.target.value),
            },
          });
        }}
        text="Reserves"
        name="y2021.reserves"
      />
      <hr />

      <h1 className="bg-gray-100">Year 2020</h1>
      <Input
        value={props.data.y2020.networth}
        function={(e) => {
          props.callback({
            ...props.data,
            y2020: {
              ...props.data.y2020,
              networth: Number(e.target.value),
            },
          });
        }}
        text="Net Worth"
        name="y2020.networth"
      />

      <Input
        value={props.data.y2020.assets}
        function={(e) => {
          props.callback({
            ...props.data,
            y2020: {
              ...props.data.y2020,
              assets: Number(e.target.value),
            },
          });
        }}
        text="Assets"
        name="y2020.assets"
      />

      <Input
        value={props.data.y2020.borrowing}
        function={(e) => {
          props.callback({
            ...props.data,
            y2020: {
              ...props.data.y2020,
              borrowing: Number(e.target.value),
            },
          });
        }}
        text="Borrowing"
        name="y2020.borrowing"
      />

      <Input
        value={props.data.y2020.profit_after_tax}
        function={(e) => {
          props.callback({
            ...props.data,
            y2020: {
              ...props.data.y2020,
              profit_after_tax: Number(e.target.value),
            },
          });
        }}
        text="Profit After Tax"
        name="y2020.profit_after_tax"
      />

      <Input
        value={props.data.y2020.revenue}
        function={(e) => {
          props.callback({
            ...props.data,
            y2020: {
              ...props.data.y2020,
              revenue: Number(e.target.value),
            },
          });
        }}
        text="Revenue"
        name="y2020.revenue"
      />

      <Input
        value={props.data.y2020.reserves}
        function={(e) => {
          props.callback({
            ...props.data,
            y2020: {
              ...props.data.y2020,
              reserves: Number(e.target.value),
            },
          });
        }}
        text="Reserves"
        name="y2020.reserves"
      />
      <hr />

      <h1 className="bg-gray-100">Year 2019</h1>
      <Input
        value={props.data.y2019.networth}
        function={(e) => {
          props.callback({
            ...props.data,
            y2019: {
              ...props.data.y2019,
              networth: Number(e.target.value),
            },
          });
        }}
        text="Net Worth"
        name="y2019.networth"
      />

      <Input
        value={props.data.y2019.assets}
        function={(e) => {
          props.callback({
            ...props.data,
            y2019: {
              ...props.data.y2019,
              assets: Number(e.target.value),
            },
          });
        }}
        text="Assets"
        name="y2019.assets"
      />

      <Input
        value={props.data.y2019.borrowing}
        function={(e) => {
          props.callback({
            ...props.data,
            y2019: {
              ...props.data.y2019,
              borrowing: Number(e.target.value),
            },
          });
        }}
        text="Borrowing"
        name="y2019.borrowing"
      />

      <Input
        value={props.data.y2019.profit_after_tax}
        function={(e) => {
          props.callback({
            ...props.data,
            y2019: {
              ...props.data.y2019,
              profit_after_tax: Number(e.target.value),
            },
          });
        }}
        text="Profit After Tax"
        name="y2019.profit_after_tax"
      />

      <Input
        value={props.data.y2019.revenue}
        function={(e) => {
          props.callback({
            ...props.data,
            y2019: {
              ...props.data.y2019,
              revenue: Number(e.target.value),
            },
          });
        }}
        text="Revenue"
        name="y2019.revenue"
      />

      <Input
        value={props.data.y2019.reserves}
        function={(e) => {
          props.callback({
            ...props.data,
            y2019: {
              ...props.data.y2019,
              reserves: Number(e.target.value),
            },
          });
        }}
        text="Reserves"
        name="y2019.reserves"
      />
      <hr />
    </div>
  );
}
