import React from "react";
import { useMyContext } from "../../context/Context";

const NavItem = props => {
  const { classNom, iconOffset, text, children, onClickGo, destn } = props;
  const { winWidth, log2 } = useMyContext();

  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  log2 && console.log("NavItem.js destn=", destn, ", pathname=", pathname);

  let selected = false;
  if (destn === "/") {
    if (pathname === "/") selected = true;
  } else if (destn === "/explore" && pathname.includes("details")) selected = true;
  else if (pathname.includes(destn)) selected = true;

  const bgColor = "bg-blue-black";

  return (
    <>
      <button
        className={`${classNom} md:px-3 flex items-center  cursor-pointer ${bgColor}
       ${
         winWidth < 1024 ? "" : selected && "h-22 border-gray-light border-solid border-2 border-t-0 rounded-b-lg z-20"
       }`}
        onClick={evnt => onClickGo(evnt, destn)}
      >
        <div className="flex-shrink-0" style={{ paddingBottom: iconOffset }}>
          {children}
        </div>
        {text && <nav className="ml-1.5 sm:flex-shrink-0">{text}</nav>}
      </button>
    </>
  );
};

export default NavItem;
