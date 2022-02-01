import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";

import NavItem from "./NavItem.js";
import { useMyContext } from "../../context/Context";

const HesitancyTypesDropDown = props => {
  const { dropDownLinkClass, bgSelec, onClickGo, onClickToBranch } = props;
  const { winWidth, branch, log } = useMyContext();

  const [showHesDropDown, setShowHesDropDown] = useState(false);

  const destn = "/explore";

  const onClickTitle = (event, destn) => {
    log && console.log("HesitancyTypesDropDown.js onClickTitle runs")
    event.stopPropagation();
    winWidth < 1024
      ? setShowHesDropDown(() => {
          const newShowDropDown = !showHesDropDown;
          log && console.log("HesitancyTypesDropDown.js setting showHesDropDown=", newShowDropDown);
          return newShowDropDown;
        })
      : onClickGo(event, destn);
  };

  const BranchLink = props => {
    const { branchNum, className } = props;
    return (
      <button className={`${dropDownLinkClass} ${className} w-full`} onClick={evnt => onClickToBranch(evnt, branchNum)}>
        {branch[branchNum].branchNameShortest}
      </button>
    );
  };

  const pathname = typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <div className="mr-2 w-full md:w-auto hoverRevealTrigger group relative  flex flex-col items-start">
      <NavItem selecOnHover={true} bgSelec={bgSelec} destn={destn}>
        <button className="flex flex-row" onClick={event => onClickTitle(event, destn)}>
          <div className="md:pl-0.5 pr-0.5">Hesitancy Types</div>
          <div className={`-mr-1 ${showHesDropDown ? "hidden" : "group-hover:hidden"}`}>
            <BiChevronRight size={24} />
          </div>
          <div className={`-mr-1 ${showHesDropDown ? "inline" : "hidden group-hover:inline"}`}>
            <BiChevronDown size={24} />
          </div>
        </button>
      </NavItem>

      {/* Dropdown menu for Hesitancy Types on smaller screens (<1024px wide) */}
      <div className="md:hidden pt-1.5  w-full">
        <div
          className={`${showHesDropDown ? "flex" : "hidden group-hover:flex"}
                      flex-col  pt-1.5 pb-4 pr-6 w-full  border-solid border-t border-gray-light`}
          // style={{ width: 270 }}
        >
          <BranchLink className="ml-6 border-b" branchNum={0} />
          <BranchLink className="ml-6 border-b" branchNum={1} />
          <BranchLink className="ml-6 border-b" branchNum={2} />
          <BranchLink className="ml-6 border-b" branchNum={3} />
        </div>
      </div>

      {/* Dropdown menu for Hesitancy Types on bigger screens */}
      <div
        className={`hidden md:inline  w-full  ${pathname.includes("explore") ? "z-40" : "z-10"}`}
        style={pathname === "/explore" ? { top: 1 + "px" } : { top: -2.25 + "rem" }}
      >
        <div
          name="Panel to cover border"
          className={`hiddenTillHover absolute flex justify-center items-start ${bgSelec}`}
          style={{ right: 2, top: 55, width: 163, height: 28 }}
        />

        <div
          className={`hiddenTillHover pt-1.5 absolute  flex flex-col  rounded-b-xl ${bgSelec}`}
          style={{ right: 2, top: 83, width: 280 }}
        >
          <BranchLink className="pl-6 border-b" branchNum={0} />
          <BranchLink className="pl-6 border-b" branchNum={1} />
          <BranchLink className="pl-6 border-b" branchNum={2} />
          <BranchLink className="pl-6" branchNum={3} />
        </div>
      </div>
    </div>
  );
};

export default HesitancyTypesDropDown;
