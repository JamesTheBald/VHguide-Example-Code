import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";

import NavItem from "./NavItem.js";
import isNavItemSelected from "../../functions/isNavItemSelected";
import { useMyContext } from "../../context/Context";
import { navbarLabels } from "../../content/navbarLabels";

const HesTypesDropDown = props => {
  const { subMenuLinkClass, onClickGo, onClickToBranch, chevVertPosn } = props;
  const { locn, contentID, winWidth, fsmBrkPt, branch, lang, log, log2 } = useMyContext();
  0 && console.log(log, log2);

  const path = typeof window !== "undefined" ? window.location.pathname : "";
  const [showHesDropDown, setShowHesDropDown] = useState(
    path.match(/\/explore|\/detail/i) && winWidth < 880 && contentID !== "MedicalExemptions"
  );

  const onClickExplore = event => {
    log2 && console.log("HesTypesDropDown.js onClickExplore runs");
    event.stopPropagation();
    if (winWidth < 1366) {
      setShowHesDropDown(() => {
        const newShowDropDown = !showHesDropDown;
        log2 && console.log("HesTypesDropDown.js setting showHesDropDown=", newShowDropDown);
        return newShowDropDown;
      });
    } else {
      onClickGo(event, "/explore");
    }
  };

  const HesTypeLink = props => {
    const { branchNum, className } = props;
    return (
      <button
        className={`text-left ${subMenuLinkClass} ${className} w-full`}
        onClick={evnt => onClickToBranch(evnt, branchNum)}
      >
        {branch[branchNum].branchName}
      </button>
    );
  };

  const selected = isNavItemSelected("/explore", locn);
  log2 && console.log("HesTypesDropDown.js selected=", selected);
  log2 && console.log("HesTypesDropDown.js navbarLabels.hesType[lang]=", navbarLabels.hesType[lang]);

  return (
    // Title & chevron on navbar
    <div
      className={`w-full fsm:w-auto pt-0.5 pb-2 fsm:py-0  hoverRevealTrigger group relative  flex flex-col items-start  z-30
               ${!selected && "fsm:border-l fsm:border-r border-opacity-0 hover:border-opacity-100  border-gray-light"}
              ${selected && winWidth < fsmBrkPt && "pb-1 subMenuYBorders bgSelec"}`}
      style={{ top: 1 }}
    >
      {/* Hesitancy Types  */}
      <NavItem classNom="pl-7 pt-3  fsm:px-0 fsm:py-0" selecOnHover={true} destn={"/explore"}>
        <button className="flex flex-row  w-full" onClick={event => onClickExplore(event)}>
          <div className="fsm:pl-0.5 fsm:pb-0.5 pr-0.5">{navbarLabels.hesType[lang]}</div>
          <div
            className={`chevPosn ${showHesDropDown ? "hidden" : "group-hover:hidden"}`}
            style={{ bottom: chevVertPosn }}
          >
            <BiChevronRight size={24} />
          </div>
          <div
            className={`chevPosn ${showHesDropDown ? "inline" : "hidden group-hover:inline"}`}
            style={{ bottom: chevVertPosn }}
          >
            <BiChevronDown size={24} />
          </div>
        </button>
      </NavItem>

      {/*  Dropdown (sub-)menu for Hesitancy Types on NARROW screens */}
      <div className="fsm:hidden  w-80">
        <div className={`${showHesDropDown ? "flex" : "hidden group-hover:flex"} mx-5 pl-5  flex-col`}>
          <HesTypeLink className="border-b" branchNum={0} />
          <HesTypeLink className="border-b" branchNum={1} />
          <HesTypeLink className="border-b" branchNum={2} />
          <HesTypeLink className="" branchNum={3} />
        </div>
      </div>

      {/* Dropdown (sub-)menu for Hesitancy Types on WIDER screens */}
      <div className={`hidden fsm:inline  w-full  ${selected ? "z-40" : "z-10"}`}>
        <div
          name="Panel to cover navbar border"
          className={`hiddenTillHover absolute bottom-1  flex justify-center items-start  z-30
                      ${selected ? "bgSelec" : "bgUnselec"} `}
          style={selected ? { left: 2, paddingRight: 22 } : { paddingRight: 28 }}
        >
          <div className="invisible">{navbarLabels.hesType[lang]}</div>
          <BiChevronRight size={24} className="invisible" />
        </div>

        <div
          name="Dropdown menu"
          className={`hiddenTillHover pt-1.5 absolute  flex flex-col  rounded-b-xl  whitespace-nowrap
                      border border-gray-light z-20
                      ${selected ? "bgSelec" : "bgUnselec"}`}
          style={selected ? { left: 1, top: 81 } : { left: -1, top: 81 }}
        >
          <HesTypeLink className="px-5 border-b" branchNum={0} />
          <HesTypeLink className="px-5 border-b" branchNum={1} />
          <HesTypeLink className="px-5 border-b" branchNum={2} />
          <HesTypeLink className="px-5" branchNum={3} />
        </div>
      </div>
    </div>
  );
};

export default HesTypesDropDown;
