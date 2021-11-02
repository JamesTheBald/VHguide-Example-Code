// import React from "react";
import React from "react";
import { useMyContext } from "../../context/Context";

const NavItem = (props) => {
  const { classNom, iconOffset, text, children, onClickGo, destn } = props;
  const { winWidth } = useMyContext();

  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const selected = pathname === destn ? true : false;
  const bgColor = "bg-blue-black";

  return (
    <>
      <button
        className={`${classNom} sm:ml-1 sm:px-3 flex items-center  cursor-pointer ${bgColor}
       ${winWidth < 720 ? "" : selected && "h-24 border-gray-light border-solid border-2 border-t-0 rounded-b-lg z-20"}`}
        onClick={(evnt) => onClickGo(evnt, destn)}
      >
        <div className="flex-shrink-0" style={{ paddingBottom: iconOffset }}>
          {children}
        </div>
        <nav className="ml-1 sm:flex-shrink-0">{text}</nav>
      </button>
    </>
  );
};

export default NavItem;
