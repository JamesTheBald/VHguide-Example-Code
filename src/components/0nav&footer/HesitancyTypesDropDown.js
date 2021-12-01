import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";

import NavItem from "./NavItem.js";
import { useMyContext } from "../../context/Context";

const HesitancyTypesDropDown = props => {
  const { dropDownLinkClass, bgSelec, onClickGo, onClickToBranch } = props;
  const { branch } = useMyContext();

  const pathname = typeof window !== "undefined" ? window.location.pathname : "";

  const BranchLink = props => {
    const { branchNum, className } = props;
    return (
      <button className={`${dropDownLinkClass} ${className} w-full`} onClick={evnt => onClickToBranch(evnt, branchNum)}>
        {branch[branchNum].branchNameShortest}
      </button>
    );
  };

  return (
    <div className="mr-3  hoverRevealTrigger group relative  flex flex-col items-start">
      <NavItem selecOnHover={true} text="" bgSelec={bgSelec} onClickGo={onClickGo} destn="/explore">
        <div className="flex flex-row">
          {/* <StaticImage src="../../assets/navbar/personIcon.svg" alt="Person icon" style={{ width: 21 }} /> */}
          <div className="md:pl-0.5 pr-0.5">Hesitancy Types</div>
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
        className={`hidden md:inline ${pathname.includes("explore") ? "z-40" : "z-10"}`}
        style={pathname === "/explore" ? { top: 1 + "px" } : { top: -2.25 + "rem" }}
      >
        <div
          name="Panel to cover border"
          className={`hiddenTillHover absolute flex justify-center items-start ${bgSelec}`}
          style={{ right: 2, top: 55, width: 170, height: 28 }}
        />

        <div
          className={`pt-1.5  hiddenTillHover absolute  flex flex-col  rounded-b-xl ${bgSelec}`}
          style={{ right: 2, top: 83, width: 280 }}
        >
          <BranchLink className="pl-6 border-b" branchNum={0} />
          <BranchLink className="pl-6 border-b" branchNum={1} />
          <BranchLink className="pl-6" branchNum={2} />
        </div>
      </div>

      {/* Dropdown menu for Hesitancy Types on smaller screens (<1024px wide) */}
      <div className="md:hidden  border-solid border-t border-gray-light">
        <div className="pt-1.5 pb-4  hidden group-hover:flex pr-6 w-full flex-col" style={{ width: 270 }}>
          <BranchLink className="ml-6 border-b" branchNum={0} />
          <BranchLink className="ml-6 border-b" branchNum={1} />
          <BranchLink className="ml-6 border-b" branchNum={2} />
        </div>
      </div>
    </div>
  );
};

export default HesitancyTypesDropDown;
