import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";

import NavItem from "./NavItem.js";
import isNavItemSelected from "../../functions/isNavItemSelected";
import { useMyContext } from "../../context/Context";
import { navbarLabels } from "../../content/navbarLabels";

const AboutDropDown = props => {
  const { subMenuLinkClass, onClickGo, chevVertPosn } = props;
  const { locn, winWidth, fsmBrkPt, lang, log } = useMyContext();

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
      className={`w-full fsm:w-auto  pt-1 fsm:pt-0  hoverRevealTrigger group relative  flex flex-col items-start  z-30
               ${!selected && "fsm:border-l fsm:border-r border-opacity-0 hover:border-opacity-100  border-gray-light"}
               ${selected && winWidth < fsmBrkPt && "pb-1 subMenuYBorders  bgSelec"}`}
      style={{ top: 1 }}
    >
      <NavItem classNom={`pl-7 pt-2 fsm:px-0 fsm:py-0`} selecOnHover={true} destn="/about">
        <button className="flex flex-row  w-full fsm:relative fsm:left-1" onClick={event => onClickAbout(event)}>
          <div className="fsm:pl-1 pr-0.5  fsm:pb-0.5">{navbarLabels.about.title[lang]}</div>
          <div
            className={`chevPosn ${showAboutDropDown ? "hidden" : "group-hover:hidden"}`}
            style={{ bottom: chevVertPosn }}
          >
            <BiChevronRight size={24} />
          </div>
          <div
            className={`chevPosn ${showAboutDropDown ? "inline" : "hidden group-hover:inline"}`}
            style={{ bottom: chevVertPosn }}
          >
            <BiChevronDown size={24} />
          </div>
        </button>
      </NavItem>

      {/* Dropdown menu for About pages on NARROW screens */}
      <div className="fsm:hidden w-80">
        <div className={`${showAboutDropDown ? "flex" : "hidden group-hover:flex"} mx-5 pl-5  flex-col`}>
          <AboutLink className="text-left  border-b" label={navbarLabels.about.about[lang]} destn="/about" />
          <AboutLink className="text-left  border-b" label={navbarLabels.about.media[lang]} destn="/about/media" />
          <AboutLink className="text-left" label={navbarLabels.about.credits[lang]} destn="/about/credits" />
        </div>
      </div>

      {/* Dropdown menu for About pages on WIDER screens */}
      <div className={`hidden fsm:inline  w-full  ${selected ? "z-40" : "z-10"}`}>
        <div
          name="Panel to cover border"
          className={`hiddenTillHover absolute bottom-0  flex justify-center items-start  z-30
                      ${selected ? "bgSelec" : "bgUnselec"}`}
          style={selected ? { left: 2, paddingRight: 28 } : { paddingRight: 32 }}
        >
          <div className="invisible">{navbarLabels.about.title[lang]}</div>
          <BiChevronRight size={24} className="invisible" />
        </div>

        <div
          className={`hiddenTillHover pt-1.5 absolute  flex flex-col  rounded-b-xl  whitespace-nowrap
                      border border-gray-light z-0
                      ${selected ? "bgSelec" : "bgUnselec"}`}
          style={selected ? { right: 1, top: 81 } : { right: -1, top: 81 }}
          // style={selected ? { right: 1, top: 81, width: 200 } : { right: -1, top: 81, width: 200 }}
        >
          <AboutLink className="px-5 text-right  border-b" label={navbarLabels.about.about[lang]} destn="/about" />
          <AboutLink
            className="px-5 text-right  border-b"
            label={navbarLabels.about.media[lang]}
            destn="/about/media"
          />
          <AboutLink className="px-5 text-right" label={navbarLabels.about.credits[lang]} destn="/about/credits" />
        </div>
      </div>
    </div>
  );
};

export default AboutDropDown;
