import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";

import NavItem from "./NavItem.js";
import { useMyContext } from "../../context/Context";

const AboutDropDown = props => {
  const { dropDownLinkClass, bgSelec, onClickGo } = props;
  const { winWidth, log } = useMyContext();

  const [showAboutDropDown, setShowAboutDropDown] = useState(false);

  const destn="/about";

  const onClickTitle = event => {
    event.stopPropagation();
    winWidth < 1024
      ? setShowAboutDropDown(() => {
          const newShowDropDown = !showAboutDropDown;
          log && console.log("AboutTypesDropDown.js setting showAboutDropDown=", newShowDropDown);
          return newShowDropDown;
        })
      : onClickGo(event, destn);
  };

  const AboutLink = props => {
    const { label, destn, className } = props;
    return (
      <button className={`${dropDownLinkClass} ${className} w-full`} onClick={event => onClickGo(event, destn)}>
        {label}
      </button>
    );
  };

  const pathname = typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <div className="mr-3 w-full  hoverRevealTrigger group relative  flex flex-col items-start">
      <NavItem selecOnHover={true} bgSelec={bgSelec} destn={destn}>
        <button className="flex flex-row" onClick={event => onClickTitle(event, destn)}>
          <div className="md:pl-1 pr-0.5">About</div>
          <div className={`-mr-1 ${showAboutDropDown ? "hidden" : "group-hover:hidden"}`}>
            <BiChevronRight size={24} />
          </div>
          <div className={`-mr-1 ${showAboutDropDown ? "inline" : "hidden group-hover:inline"}`}>
            <BiChevronDown size={24} />
          </div>
        </button>
      </NavItem>

      {/* Dropdown menu for About pages on smaller screens (<1024px wide) */}
      <div className="md:hidden pt-1.5  w-full">
        <div
          className={`${showAboutDropDown ? "flex" : "hidden group-hover:flex"}
            flex-col  pt-1.5 pb-4 pr-6 w-full  border-solid border-t border-gray-light`}
          // style={{ width: 270 }}
        >
          <AboutLink className="ml-6 border-b" label="About the Guide" destn="/about" />
          <AboutLink className="ml-6 border-b" label="Media Coverage" destn="/about/media" />
          <AboutLink className="ml-6 border-b" label="Credits and Collaborators" destn="/about/credits" />
        </div>
      </div>

      {/* Dropdown menu for About pages on bigger screens */}
      <div
        className={`hidden md:inline  w-full  ${pathname.includes("about") ? "z-40" : "z-10"}`}
        style={{ top: 1 + "px", zIndex: 40 }}
      >
        <div
          name="Panel to cover border"
          className={`hiddenTillHover absolute flex justify-center items-start ${bgSelec}`}
          style={{ right: 2, top: 55, width: 80, height: 28 }}
        />

        <div
          className={`hiddenTillHover pt-1.5 absolute  flex flex-col  rounded-b-xl ${bgSelec}`}
          style={{ right: 2, top: 83, width: 240 }}
        >
          <AboutLink className="pl-6 border-b" label="About the Guide" destn="/about" />
          <AboutLink className="pl-6 border-b" label="Media Coverage" destn="/about/media" />
          <AboutLink className="pl-6" label="Credits and Collaborators" destn="/about/credits" />
        </div>
      </div>
    </div>
  );
};

export default AboutDropDown;
