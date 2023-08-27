import React from "react";
import { LogoIcon } from "../../assets";
import Signin from "../signin/signin";

export default function Loader() {
  return (
    <div
      id="loader"
      className="fixed w-[100vw] h-[100vh] flex flex-col justify-center items-center custom-bg"
    >
      <section className="flex justify-center items-center overflow-hidden custom-moveup">
        <img
          className="w-[90px] h-[90px] custom-spin"
          src={LogoIcon}
          alt="IPO Circle"
        />
        <label className="text-[3.3rem] font-bold text-primary custom-width">
          Circle
        </label>
      </section>

      <section className="custom-appear">
        <Signin />
      </section>
    </div>
  );
}
