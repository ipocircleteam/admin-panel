import React from "react";
import Sidebar from "../components/sidebar/sidebar";

export default function Admin() {
  const [component, setComponent] = React.useState(<h1>Admin Overview</h1>);

  const changeComponent = (comp: any) => {
    setComponent(comp);
  };

  return (
    <div className="flex justify-center items-start fixed top-[50px]">
      <section className="w-[15vw] h-[95vh] px-[20px] p-4 bg-baseTwo">
        <Sidebar function={changeComponent} />
      </section>
      <section className="w-[85vw] bg-red-500">
        <div>{component}</div>
      </section>
    </div>
  );
}
