import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { LogoIcon } from "../../assets";
import { UserReducerType } from "../../types";
import { signout } from "../../reducers/user-reducer";

export default function Header() {
  const view = useSelector((state: UserReducerType) => state.user.view);
  const dispatch = useDispatch();

  return (
    <div className="fixed p-4 flex justify-between items-center w-[100vw] h-[50px] overflow-hidden bg-baseTwo border-b-2">
      <section>
        <img className="h-[40px]" src={LogoIcon} alt="IPO Circle" />
      </section>

          <section>
              <p className="text-primary font-bold text-[1.2rem]">{ view }</p>
      </section>

      <section>
        <button
          className="mx-2 font-semibold hover:text-secondary"
          onClick={() => {
            dispatch(signout({}));
          }}
        >
          Log out
        </button>
      </section>
    </div>
  );
}
