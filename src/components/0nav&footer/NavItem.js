import React from "react";
import { useMyContext } from "../../context/Context";

const NavItem = props => {
  const { classNom, bgSelec, selecOnHover, children, destn } = props;
  const { log2 } = useMyContext();

  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  log2 && console.log("NavItem.js destn=", destn, ", pathname=", pathname);

  let selected = false;
  if (destn === "/") {
    if (pathname === "/") selected = true;
  } else if (destn === "/explore" && pathname.includes("details")) selected = true;
  else if (pathname.includes(destn)) selected = true;

  return (
    <div className={`${classNom}  flex flex-col items-start  cursor-pointer group  relative`}>
      <div name="Narrower screens" className="md:hidden">
        {children}
      </div>

      <div
        name="Wider screens"
        className={`hidden md:flex px-4 h-22  justify-center items-center
        rounded-b-lg  border-gray-light border-solid border-2 border-t-0  relative z-30
        ${selected ? bgSelec : "border-opacity-0"} ${selecOnHover && "group-hover:bg-blue-blackest"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default NavItem;
