import React, { useState, useRef } from "react";
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { animateScroll } from "react-scroll";

import { IoIosMenu } from "react-icons/io";
import { BiChevronDown } from "react-icons/bi";

import NavItem from "./NavItem.js";
import { useMyContext } from "../../context/Context";
import { VscClose } from "react-icons/vsc";
import useOnClickOutside from "../../functions/useOnClickOutside";

const NavBar = () => {
  const { branch, navBarHeight, setLocn, setNoneSelected, setShowContactForm, log } = useMyContext();

  const dropDownRef = useRef();
  const [navBarOpen, setNavBarOpen] = useState(false);
  useOnClickOutside(dropDownRef, () => setNavBarOpen(false));

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
    if (typeof window !== `undefined`) {
      animateScroll.scrollToTop({ duration: 0 }); // time in ms
    }
    setNavBarOpen(false);
    setShowContactForm(false);
  };

  const onClickHamburger = event => {
    log && console.log("NavBar.js navBarOpen=", navBarOpen);
    event.stopPropagation();
    setNavBarOpen(!navBarOpen);
  };

  const bgColor = "bg-blue-black";
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  // const bord = pathname !== "/" ? "" : "border-solid border-b-2";
  // log && console.log("NavBar.js pathname=", pathname, " so border= ", bord);

  const hesitancyDropDownClass = "py-3  text-left  border-solid border-gray-light  text-14 tracking-0.4 cursor-pointer";

  const NavBarItemsAndDropDowns = () => {
    return (
      <>
        <NavItem classNom="mr-5" iconOffset={3} text="Home" onClickGo={onClickGo} destn="/">
          <StaticImage src="../../assets/navbar/homeIcon.svg" alt="Home icon" style={{ width: 21 }} loading="eager" />
        </NavItem>

        <div className="mr-3  hoverRevealTrigger group relative  flex flex-col items-start">
          <NavItem iconOffset={0} text="" onClickGo={onClickGo} destn="/explore">
            <div className="flex flex-row">
              <div className="mb-0">
                <StaticImage src="../../assets/navbar/personIcon.svg" alt="Person icon" style={{ width: 21 }} />
              </div>
              <div className="px-1">Hesitancy Types</div>
              <BiChevronDown size={24} />
            </div>
          </NavItem>

          <div
            name="Dropdown menu for Hesitancy Types on bigger screens"
            className="hidden md:inline  absolute"
            style={pathname === "/explore" ? { top: 1 + "px", zIndex: 40 } : { top: -2.25 + "rem", zIndex: 20 }}
          >
            <div
              name="Panel to cover border, hold down-chevron"
              className={`hiddenTillHover absolute flex justify-center items-start ${bgColor} z-30`}
              style={{ left: 7, top: 60, width: 160, height: 32 }}
            >
              {/* <IoIosArrowDown size={24} /> */}
            </div>

            <>
              <div
                className={`pt-1.5  hiddenTillHover absolute   rounded-b-xl ${bgColor}
                
                ${pathname === "/" ? "border border-solid border-gray-light" : ""}`}
                style={{ left: 6, top: 87, width: 290 }}
              >
                <div className="flex flex-col">
                  <button
                    className={`pl-6 ${hesitancyDropDownClass} border-b`}
                    onClick={evnt => onClickToBranch(evnt, 0)}
                  >
                    {branch[0].branchNameShortest}
                  </button>
                  <button
                    className={`pl-6 ${hesitancyDropDownClass} border-b`}
                    onClick={evnt => onClickToBranch(evnt, 1)}
                  >
                    {branch[1].branchNameShortest}
                  </button>
                  <button className={`pl-6 ${hesitancyDropDownClass}`} onClick={evnt => onClickToBranch(evnt, 2)}>
                    {branch[2].branchNameShortest}
                  </button>
                </div>
              </div>
            </>
          </div>

          <div name="Dropdown menu for Hesitancy Types on smaller screens (<1024px wide)" className="md:hidden">
            <div
              className="mt-1 pt-1.5 hidden group-hover:flex pr-6 w-full flex-col  border-solid border-t border-gray-light"
              style={{ width: 270 }}
            >
              <button className={`ml-6 ${hesitancyDropDownClass} border-b`} onClick={evnt => onClickToBranch(evnt, 0)}>
                {branch[0].branchNameShortest}
              </button>
              <button className={`ml-6 ${hesitancyDropDownClass} border-b`} onClick={evnt => onClickToBranch(evnt, 1)}>
                {branch[1].branchNameShortest}
              </button>
              <button className={`ml-6 ${hesitancyDropDownClass} border-b`} onClick={evnt => onClickToBranch(evnt, 2)}>
                {branch[2].branchNameShortest}
              </button>
            </div>
          </div>
        </div>

        <NavItem iconOffset={3} text="Clinical Pearls" classNom="mr-4" onClickGo={onClickGo} destn="/pearls">
          <StaticImage src="../../assets/navbar/pearlIcon.svg" alt="Pearl icon" style={{ width: 22 }} />
        </NavItem>

        <NavItem iconOffset={3} classNom="" text="About" onClickGo={onClickGo} destn="/about">
          {/* <div className="pl-0.5"><BiChevronDown size={24} /></div> */}
          <StaticImage src="../../assets/navbar/infoSymbol.svg" alt="Info symbol" style={{ width: 22 }} />
        </NavItem>
      </>
    );
  };

  return (
    <>
      <div
        className={`fixed w-full  flex justify-between items-center   ${bgColor} border-solid border-b-2 border-gray-light  z-50
                    text-16 tracking-0.3 text-gray-light font-sans`}
        style={{ height: navBarHeight }}
        onClick={() => setNavBarOpen(false)}
        aria-hidden="true"
      >
        <button
          name="VH Guide logo"
          className="ml-2 mxs:ml-5 sm:ml-6 md:ml-7 lg:ml-8  w-60 mxs:w-72 sm:w-80 lg:w-85 
                     flex flex-col justify-start items-center  leading-none font-normal cursor-pointer"
          onClick={evnt => onClickGo(evnt, "/")}
        >
          <StaticImage src="../../assets/homepage/Logo for Website.svg" alt="VH Guide logo" />
        </button>

        <div
          name="Normal Navbar, Along the Top"
          className="hidden md:flex items-center  pt-1 ml-8 mr-6 mxs:mr-8 lg:mr-10  relative "
        >
          <NavBarItemsAndDropDowns />
        </div>

        <div name="Hamburger/Dropdown Navbar" className="md:hidden">
          <button
            name="Hamburger icon container"
            className="w-24 flex justify-center items-center cursor-pointer"
            onClick={event => onClickHamburger(event)}
          >
            <IoIosMenu size={50} />
          </button>

          {navBarOpen && (
            // Need the wrapping fragments below
            <>
              <div
                ref={dropDownRef}
                className={`px-10 py-6 absolute top-0 right-0 w-full mxs:w-85 flex flex-col gap-4  
                          rounded-b-xl ${bgColor} border-solid border-2 border-t-0 border-gray-light`}
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
      <div name="spacer, because navbar is fixed" style={{ height: navBarHeight }} />
    </>
  );
};

export default NavBar;
