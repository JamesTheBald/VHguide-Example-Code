import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";

import NavItem from "./NavItem.js";
import isNavItemSelected from "../../functions/isNavItemSelected";
import { useMyContext } from "../../context/Context";

const HesTypesDropDown = props => {
  const { subMenuLinkClass, onClickGo, onClickToBranch } = props;
  const { locn, winWidth, branch, log } = useMyContext();

  const [showHesDropDown, setShowHesDropDown] = useState(false);

  const onClickExplore = event => {
    log && console.log("HesTypesDropDown.js onClickExplore runs");
    event.stopPropagation();
    winWidth < 720
      ? setShowHesDropDown(() => {
          const newShowDropDown = !showHesDropDown;
          log && console.log("HesTypesDropDown.js setting showHesDropDown=", newShowDropDown);
          return newShowDropDown;
        })
      : onClickGo(event, "/explore");
    onClickToBranch(event, 0);
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
  log && console.log("HesTypesDropDown.js selected=", selected);

  return (
    // Title & chevron on navbar
    <div
      className={`w-full sm:w-auto pt-0.5 pb-2 sm:py-0  hoverRevealTrigger group relative  flex flex-col items-start  z-30
               ${!selected && "sm:border-l sm:border-r border-opacity-0 hover:border-opacity-100  border-gray-light"}
              ${selected && winWidth < 720 && "pb-1 subMenuYBorders bgSelec"}`}
      style={{ top: 1 }}
    >
      {/* Hesitancy Types navbar/dropdown main entry */}
      <NavItem classNom="pl-7 pt-3  sm:px-0 sm:py-0" selecOnHover={true} destn={"/explore"}>
        <button className="flex flex-row  w-full" onClick={event => onClickExplore(event)}>
          <div className="sm:pl-0.5 sm:pb-0.5 pr-0.5">Hesitancy Types</div>
          <div className={`chevPosn ${showHesDropDown ? "hidden" : "group-hover:hidden"}`}>
            <BiChevronRight size={24} />
          </div>
          <div className={`chevPosn ${showHesDropDown ? "inline" : "hidden group-hover:inline"}`}>
            <BiChevronDown size={24} />
          </div>
        </button>
      </NavItem>

      {/* Dropdown (sub-)menu for Hesitancy Types on NARROW screens */}
      <div className="sm:hidden  w-80">
        <div className={`${showHesDropDown ? "flex" : "hidden group-hover:flex"} mx-5 pl-5  flex-col`}>
          <HesTypeLink className="border-b" branchNum={0} />
          <HesTypeLink className="border-b" branchNum={1} />
          <HesTypeLink className="border-b" branchNum={2} />
          <HesTypeLink className="" branchNum={3} />
        </div>
      </div>

      {/* Dropdown (sub-)menu for Hesitancy Types on WIDER screens */}
      <div className={`hidden sm:inline  w-full  ${selected ? "z-40" : "z-10"}`}>
        <div
          name="Panel to cover navbar border"
          className={`hiddenTillHover absolute flex justify-center items-start z-30
                      ${selected ? "bgSelec" : "bgUnselec"} `}
          style={
            selected ? { left: 2, width: 167, bottom: 0, height: 12 } : { left: 0, width: 171, bottom: 0, height: 12 }
          }
        />

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
