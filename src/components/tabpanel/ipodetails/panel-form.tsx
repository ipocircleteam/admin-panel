import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IpoReducerType } from "../../../types";
import Input from "./input-field";

export default function PanelForm() {
  const ipo = useSelector((state: IpoReducerType) => state.ipo.currentIPO);
  const [data, setData] = useState(ipo);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...ipo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="h-[77vh] overflow-scroll">
          <Input value={data.id} function={handleChange} text="ID" name="id" />
          <Input value={data.id} function={handleChange} text="ID" name="id" />
          <Input value={data.id} function={handleChange} text="ID" name="id" />
          <Input value={data.id} function={handleChange} text="ID" name="id"  />
    </div>
  );
}
