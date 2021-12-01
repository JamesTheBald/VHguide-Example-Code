import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";

import NavItem from "./NavItem.js";
// import { useMyContext } from "../../context/Context";

const AboutDropDown = props => {
  const { dropDownLinkClass, bgSelec, onClickGo } = props;
  // const { branch } = useMyContext();

  const pathname = typeof window !== "undefined" ? window.location.pathname : "";

  const AboutLink = props => {
    const { label, destn, className } = props;
    return (
      <button className={`${dropDownLinkClass} ${className} w-full`} onClick={evnt => onClickGo(evnt, destn)}>
        {label}
      </button>
    );
  };

  return (
    <div className="mr-3  hoverRevealTrigger group relative  flex flex-col items-start">
      <NavItem selecOnHover={true} text="" bgSelec={bgSelec} onClickGo={onClickGo} destn="/about">
        <div className="flex flex-row">
          <div className="md:pl-1 pr-0.5">About</div>
          <div className="group-hover:hidden -mr-1">
            <BiChevronRight size={24} />
          </div>
          <div className="hidden group-hover:inline -mr-1">
            <BiChevronDown size={24} />
          </div>
        </div>
      </NavItem>

      {/* Dropdown menu for Hesitancy Types on bigger screens */}
      <div
        className={`hidden md:inline ${pathname.includes("about") ? "z-40" : "z-10"}`}
        style={{ top: 1 + "px", zIndex: 40 }}
      >
        <div
          name="Panel to cover border"
          className={`hiddenTillHover absolute flex justify-center items-start ${bgSelec}`}
          style={{ right: 2, top: 55, width: 80, height: 28 }}
        />

        <div
          className={`pt-1.5  hiddenTillHover absolute  flex flex-col  rounded-b-xl ${bgSelec}`}
          style={{ right: 2, top: 83, width: 240 }}
        >
          <AboutLink className="pl-6 border-b" label="About the Guide" destn="/about" />
          <AboutLink className="pl-6 border-b" label="Media Coverage" destn="/about/media" />
          <AboutLink className="pl-6" label="Credits and Collaborators" destn="/about/credits" />
        </div>
      </div>

      {/* Dropdown menu for Hesitancy Types on smaller screens (<1024px wide) */}
      <div className="md:hidden  border-solid border-t border-gray-light">
        <div className="pt-1.5 pb-4  hidden group-hover:flex pr-6 w-full flex-col" style={{ width: 270 }}>
          <AboutLink className="ml-6 border-b" label="About the Guide" destn="/about" />
          <AboutLink className="ml-6 border-b" label="Media Coverage" destn="/about/media" />
          <AboutLink className="ml-6 border-b" label="Credits and Collaborators" destn="/about/credits" />
        </div>
      </div>
    </div>
  );
};

export default AboutDropDown;
