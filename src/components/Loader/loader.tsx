import React from "react";
import { LogoIcon } from "../../assets";
import Signin from "../signin/signin";

export default function Loader() {
  return (
    <div
      id="loader"
      className="fixed w-[100vw] h-[100vh] flex flex-col justify-center items-center"
    >
      <section className="flex justify-center items-center overflow-hidden custom-moveup">
        <img
          className="w-[60px] h-[60px] custom-spin"
          src={LogoIcon}
          alt="IPO Circle"
        />
        <label className="text-[2.8rem] font-bold text-primary custom-width">
          Circle
        </label>
      </section>

      <section className="custom-appear">
        <Signin />
      </section>
    </div>
  );
}
