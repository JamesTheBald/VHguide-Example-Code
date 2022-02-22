import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";

import NavItem from "./NavItem.js";
import isNavItemSelected from "../../functions/isNavItemSelected";
import { useMyContext } from "../../context/Context";

const AboutDropDown = props => {
  const { subMenuLinkClass, onClickGo } = props;
  const { locn, winWidth, log } = useMyContext();

  const [showAboutDropDown, setShowAboutDropDown] = useState(false);

  const onClickAbout = event => {
    event.stopPropagation();
    if (winWidth < 1366) {
      setShowAboutDropDown(() => {
        const newShowDropDown = !showAboutDropDown;
        log && console.log("AboutTypesDropDown.js setting showAboutDropDown=", newShowDropDown);
        return newShowDropDown;
      });
    } else onClickGo(event, "/about");
  };

  const AboutLink = props => {
    const { label, destn, className } = props;
    return (
      <button className={`${subMenuLinkClass} ${className} w-full`} onClick={event => onClickGo(event, destn)}>
        {label}
      </button>
    );
  };

  const selected = isNavItemSelected("/about", locn);

  return (
    // Title & chevron on navbar
    <div
      className={`w-full sm:w-auto  pt-1 sm:pt-0  hoverRevealTrigger group relative  flex flex-col items-start  z-30
               ${!selected && "sm:border-l sm:border-r border-opacity-0 hover:border-opacity-100  border-gray-light"}
               ${selected && winWidth < 720 && "pb-1 subMenuYBorders  bgSelec"}`}
      style={{ top: 1 }}
    >
      <NavItem classNom={`pl-7 pt-2 sm:px-0 sm:py-0`} selecOnHover={true} destn="/about">
        <button className="flex flex-row  w-full sm:relative sm:left-1" onClick={event => onClickAbout(event)}>
          <div className="sm:pl-1 pr-0.5  sm:pb-0.5">About</div>
          <div className={`chevPosn ${showAboutDropDown ? "hidden" : "group-hover:hidden"}`}>
            <BiChevronRight size={24} />
          </div>
          <div className={`chevPosn ${showAboutDropDown ? "inline" : "hidden group-hover:inline"}`}>
            <BiChevronDown size={24} />
          </div>
        </button>
      </NavItem>

      {/* Dropdown menu for About pages on NARROW screens */}
      <div className="sm:hidden w-80">
        <div className={`${showAboutDropDown ? "flex" : "hidden group-hover:flex"} mx-5 pl-5  flex-col`}>
          <AboutLink className="text-left  border-b" label="About the Guide" destn="/about" />
          <AboutLink className="text-left  border-b" label="Media Coverage" destn="/about/media" />
          <AboutLink className="text-left" label="Credits and Collaborators" destn="/about/credits" />
        </div>
      </div>

      {/* Dropdown menu for About pages on WIDER screens */}
      <div className={`hidden sm:inline  w-full  ${selected ? "z-40" : "z-10"}`}>
        <div
          name="Panel to cover border"
          className={`hiddenTillHover absolute flex justify-center items-start  z-30
                      ${selected ? "bgSelec" : "bgUnselec"}
          `}
          style={
            selected ? { right: 2, width: 97, bottom: 0, height: 12 } : { right: 0, width: 101, bottom: 0, height: 12 }
          }
        />

        <div
          className={`hiddenTillHover pt-1.5 absolute  flex flex-col  rounded-b-xl  whitespace-nowrap
                      border border-gray-light z-0
                      ${selected ? "bgSelec" : "bgUnselec"}`}
          style={selected ? { right: 1, top: 81 } : { right: -1, top: 81 }}
          // style={selected ? { right: 1, top: 81, width: 200 } : { right: -1, top: 81, width: 200 }}
        >
          <AboutLink className="px-5 text-right  border-b" label="About the Guide" destn="/about" />
          <AboutLink className="px-5 text-right  border-b" label="Media Coverage" destn="/about/media" />
          <AboutLink className="px-5 text-right" label="Credits and Collaborators" destn="/about/credits" />
        </div>
      </div>
    </div>
  );
};

export default AboutDropDown;
