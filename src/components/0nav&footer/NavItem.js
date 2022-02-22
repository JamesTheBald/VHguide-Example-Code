import React from "react";

import isNavItemSelected from "../../functions/isNavItemSelected";
import { useMyContext } from "../../context/Context";

const NavItem = props => {
  const { classNom, selecOnHover, children, destn } = props;
  const { locn, log, log2 } = useMyContext();
  false && console.log(log, log2);

  const selected = isNavItemSelected(destn, locn);

  return (
    <div className={`${classNom} w-full  flex flex-col items-start  cursor-pointer group  relative`}>
      <div name="Narrow screens" className="sm:hidden w-full  text-left">
        {children}
      </div>

      <div
        name="'Shield' border for when selected - Wider screens"
        className={`hidden sm:flex px-3 h-22  w-full  justify-center items-center  relative
                    rounded-b-lg  border-2 sm:border-t-0 border-gray-light border-solid  z-20
        ${selected ? "bgSelec" : "border-opacity-0"}
        ${selected && selecOnHover && "group-hover:bg-selec"}
        ${!selected && selecOnHover && "group-hover:bgUnselec"}
        `}
        style={{ top: 2 }}
      >
        {children}
      </div>
    </div>
  );
};

export default NavItem;
