import React from "react";
import { useMyContext } from "../../context/Context";

const NavItem = props => {
  const { classNom, bgSelec, selecOnHover, children, onClickGo, destn } = props;
  const { log2 } = useMyContext();

  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  log2 && console.log("NavItem.js destn=", destn, ", pathname=", pathname);

  let selected = false;
  if (destn === "/") {
    if (pathname === "/") selected = true;
  } else if (destn === "/explore" && pathname.includes("details")) selected = true;
  else if (pathname.includes(destn)) selected = true;

  return (
    <div className={`${classNom}  cursor-pointer group  relative`}>
      <button
        // Narrower screens (dropdown menu from hamburger)
        className="md:hidden"
        onClick={evnt => onClickGo(evnt, destn)}
      >
        {children}
      </button>

      <button
        // Wider screens
        className={`hidden md:block px-4  h-22  rounded-b-lg  border-gray-light border-solid border-2 border-t-0  relative z-30
        ${selected ? bgSelec : "border-opacity-0"}
        ${pathname.includes("explore")          }
        ${selecOnHover && "group-hover:bg-blue-blackest"}
        `}
        onClick={evnt => onClickGo(evnt, destn)}
      >
        {children}
      </button>
    </div>
  );
};

export default NavItem;
