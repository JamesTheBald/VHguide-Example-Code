import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";

import NavItem from "./NavItem.js";
import isNavItemSelected from "../../functions/isNavItemSelected";
import { useMyContext } from "../../context/Context";

const HesTypesDropDown = props => {
  const { dropDownLinkClass, onClickGo, onClickToBranch } = props;
  const { locn, winWidth, branch, log } = useMyContext();

  const [showHesDropDown, setShowHesDropDown] = useState(false);

  const destn = "/explore";
  const selected = isNavItemSelected(destn, locn);

  const onClickTitle = (event, destn) => {
    log && console.log("HesTypesDropDown.js onClickTitle runs");
    event.stopPropagation();
    winWidth < 1024
      ? setShowHesDropDown(() => {
          const newShowDropDown = !showHesDropDown;
          log && console.log("HesTypesDropDown.js setting showHesDropDown=", newShowDropDown);
          return newShowDropDown;
        })
      : onClickGo(event, destn);
  };

  const HesTypeLink = props => {
    const { branchNum, className } = props;
    return (
      <button
        className={`text-left ${dropDownLinkClass} ${className} w-full`}
        onClick={evnt => onClickToBranch(evnt, branchNum)}
      >
        {branch[branchNum].branchName}
      </button>
    );
  };

  // const path = typeof window !== "undefined" ? window.location.pathname : "";
  const chevPosn = "-mr-1 relative bottom-1 sm:bottom-0";

  return (
    // Title & chevron on navbar
    <div
      className={`mr-2 w-full sm:w-auto hoverRevealTrigger group relative  flex flex-col items-start
               ${!selected && "sm:border-l sm:border-r border-opacity-0 hover:border-opacity-100  border-gray-light"}`}
      style={!selected ? { top: 1 } : {}}
    >
      <NavItem selecOnHover={true} destn={destn}>
        <button className="flex flex-row" onClick={event => onClickTitle(event, destn)}>
          <div className="sm:pl-0.5 sm:pb-0.5 pr-0.5">Hesitancy Types</div>
          <div className={`${chevPosn} ${showHesDropDown ? "hidden" : "group-hover:hidden"}`}>
            <BiChevronRight size={24} />
          </div>
          <div className={`${chevPosn} ${showHesDropDown ? "inline" : "hidden group-hover:inline"}`}>
            <BiChevronDown size={24} />
          </div>
        </button>
      </NavItem>

      {/* Dropdown menu for Hesitancy Types on NARROW screens */}
      <div className="sm:hidden pt-1.5  w-full">
        <div className={`${showHesDropDown ? "flex" : "hidden group-hover:flex"} mx-5 pb-4  flex-col`}>
          <HesTypeLink className="border-b" branchNum={0} />
          <HesTypeLink className="border-b" branchNum={1} />
          <HesTypeLink className="border-b" branchNum={2} />
          <HesTypeLink className="border-b" branchNum={3} />
        </div>
      </div>

      {/* Dropdown menu for Hesitancy Types on WIDER screens */}
      <div className={`hidden sm:inline  w-full  ${selected ? "z-40" : "z-10"}`}>
        <div
          name="Panel to cover navbar border"
          className={`hiddenTillHover absolute flex justify-center items-start z-20
                      ${selected ? "bgSelec" : "bgUnselec"} `}
          style={
            selected ? { left: 2, width: 163, bottom: 0, height: 12 } : { left: 0, width: 167, bottom: 0, height: 12 }
          }
        />

        <div
          name="Dropdown menu"
          className={`hiddenTillHover pt-1.5 absolute  flex flex-col  rounded-b-xl  whitespace-nowrap
                      border border-gray-light z-0
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
