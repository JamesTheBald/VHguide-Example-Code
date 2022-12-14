import React from "react";

import isNavItemSelected from "../../functions/isNavItemSelected";
import { useMyContext } from "../../context/Context";

// This component creates a 'shield' around the selected navbar item, on wider screens
const NavItem = props => {
  const { classNom, selecOnHover, children, destn } = props;
  const { locn, log, log2 } = useMyContext();
  false && console.log(log, log2);

  const selected = isNavItemSelected(destn, locn);

  return (
    <div className={`${classNom} w-full  flex flex-col items-start  cursor-pointer group  relative`}>
      {/* Narrower Screens */}
      <div className="fsm:hidden w-full  text-left">
        {children}
      </div>

      {/* Wider Screens */}
      <div
        name="'Shield' border for when selected"
        className={`hidden fsm:flex px-3 h-22  w-full  justify-center items-center  relative
                    rounded-b-lg  border-2 fsm:border-t-0 border-gray-light border-solid  z-20
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
