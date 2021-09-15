import React from "react";
import { navigate } from "gatsby";

import { IoIosMenu } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import NavItem from "./NavItem.js";
import { useMyContext } from "../../context/Context";
import { VscClose } from "react-icons/vsc";

const NavBar = () => {
  const { branch, widthAdjRatio, navBarOpen, setLocn, setNoneSelected, setNavBarOpen, setShowContactForm } =
    useMyContext();

  const onClickGo = (evnt, destn) => {
    if (destn === "/explore") {
      setLocn({ branch: 0, topic: 0, subtopic: 0, showSubtopic: false });
      setNoneSelected(true);
    }
    navigate(destn);
    setNavBarOpen(false);
    setShowContactForm(false);
  };

  // For pull-down menu selections only
  const onClickToBranch = (evnt, branchNum) => {
    setLocn({ branch: branchNum, topic: 0, subtopic: 0, showSubtopic: false });
    setNoneSelected(false);
    if (branch[branchNum].linkToDetails) {
      navigate("/details/overview");
    } else {
      navigate("/explore");
    }
    setNavBarOpen(false);
    setShowContactForm(false);
  };

  const onClickHamburger = event => {
    console.log("NavBar.js navBarOpen=", navBarOpen);
    event.stopPropagation();
    setNavBarOpen(!navBarOpen);
  };

  const navBarHeight = 20; // in Tailwind spacing units, i.e. in pixels = 4x this
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const bgColor = "bg-blue-black";
  const bord = pathname === "/" ? "border-b-2" : "";
  const marginLeftIcon = 38 * widthAdjRatio;
  const hesitancyDropDownClass = "py-3  text-left  border-b border-gray-light  text-14 tracking-0.4 cursor-pointer";

  const NavBarItemsAndDropDowns = () => {
    return (
      <>
        <NavItem classNom="mt-3 sm:mt-0" iconOffset={5} text="Home" onClickGo={onClickGo} destn="/">
          <img src="/images/navbar/homeIcon.svg" alt="Home icon" style={{ width: 20 }} />
        </NavItem>

        <div className="hoverRevealTrigger group relative  flex flex-col items-start">
          <NavItem iconOffset={5} text="Hesitancy Types" onClickGo={onClickGo} destn="/explore">
            <img src="/images/navbar/personIcon.svg" alt="Person icon" style={{ width: 22 }} />
          </NavItem>

          <div
            name="Dropdown menu for Hesitancy Types on bigger screens"
            className={`hidden sm:inline  absolute ${pathname === "/explore" ? "top-0 z-40" : "-top-9 z-20"}`}
          >
            <div
              name="Panel to cover border, hold down-chevron"
              className={`hiddenTillHover absolute flex justify-center items-start ${bgColor} z-30`}
              style={{ left: 7, top: 60, width: 169, height: 32 }}
            >
              <IoIosArrowDown size={24} />
            </div>

            <>
              <div
                className={`hiddenTillHover absolute   rounded-b-xl ${bgColor}
                ${pathname === "/" ? "border border-gray-light" : ""}`}
                style={{ left: 6, top: 87, width: 290 }}
              >
                <div className="flex flex-col">
                  <button className={`pl-6 ${hesitancyDropDownClass}`} onClick={evnt => onClickToBranch(evnt, 0)}>
                    {branch[0].branchNameShortest}
                  </button>
                  <div className={`pl-6 ${hesitancyDropDownClass}`}>{branch[1].branchNameShortest}</div>
                  <div className="pl-6 py-3  w-full text-left">{branch[2].branchNameShortest}</div>
                </div>
              </div>
            </>
          </div>

          <div name="Dropdown menu for Hesitancy Types on small screens" className="sm:hidden">
            <div
              className="hidden group-hover:flex pr-6 w-full flex-col  border-t border-gray-light"
              style={{ width: 270 }}
            >
              <button className={`ml-6 ${hesitancyDropDownClass}`} onClick={evnt => onClickToBranch(evnt, 0)}>
                {branch[0].branchNameShortest}
              </button>
              <button className={`ml-6 ${hesitancyDropDownClass}`} onClick={evnt => onClickToBranch(evnt, 1)}>
                {branch[1].branchNameShortest}
              </button>
              <button className={`ml-6 ${hesitancyDropDownClass}`} onClick={evnt => onClickToBranch(evnt, 2)}>
                {branch[2].branchNameShortest}
              </button>
            </div>
          </div>
        </div>

        <NavItem iconOffset={5} text="Clinical Pearls" onClickGo={onClickGo} destn="/pearls">
          <img src="/images/navbar/pearlIcon.svg" alt="Pearl icon" style={{ width: 24 }} />
        </NavItem>

        <NavItem iconOffset={5} text="About" onClickGo={onClickGo} destn="/about">
          <img src="/images/navbar/infoSymbol.svg" alt="Info symbol" style={{ width: 24 }} />
        </NavItem>
      </>
    );
  };

  return (
    <>
      <div
        className={`fixed h-${navBarHeight} w-full  flex justify-between items-center   
                    text-16  tracking-0.3 text-gray-light font-sans  ${bgColor} ${bord} z-50`}
        onClick={() => setNavBarOpen(false)}
        aria-hidden="true"
      >
        <button
          name="VH Guide logo"
          className="ml-6 sm:ml-9 md:ml-11  pt-1 flex flex-col justify-start items-center  leading-none font-normal cursor-pointer"
          style={{ marginLeft: marginLeftIcon }}
          onClick={evnt => onClickGo(evnt, "/")}
        >
          <div className="text-25 mxs:text-30 tracking-0.6">VH</div>
          <div className="text-10 mxs:text-12 tracking-0.5">GUIDE</div>
        </button>

        <div
          name="Normal Navbar, Along the Top"
          className="hidden sm:flex sm:items-center  pt-1 ml-12 mr-6 mxs:mr-8 sm:mr-10  relative"
        >
          <NavBarItemsAndDropDowns />
        </div>

        <div name="Hamburger/Dropdown Navbar" className="sm:hidden">
          <button
            name="Hamburger icon container"
            className="w-24 flex justify-center items-center cursor-pointer"
            onClick={event => onClickHamburger(event)}
          >
            <IoIosMenu size={50} />
          </button>

          {navBarOpen && (
            <>
              <div
                name="Dropdown list"
                className={`px-10 py-6 absolute top-0 right-0 w-full mxs:w-85 flex flex-col gap-4 
                            rounded-b-xl ${bgColor} border-2 border-t-0 border-gray-light`}
              >
                <button className="p-2 absolute top-2 right-3" onClick={event => onClickHamburger(event)}>
                  <VscClose size={30} />
                </button>

                <NavBarItemsAndDropDowns />
              </div>
            </>
          )}
        </div>
      </div>
      <div name="spacer, because navbar is fixed" className={`h-${navBarHeight}`} />
    </>
  );
};

export default NavBar;
