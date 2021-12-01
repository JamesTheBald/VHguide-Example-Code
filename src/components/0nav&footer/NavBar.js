import React, { useState, useRef } from "react";
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { animateScroll } from "react-scroll";

import { IoIosMenu } from "react-icons/io";
import { BiChevronDown } from "react-icons/bi";

import HesitancyTypesDropDown from "./HesitancyTypesDropDown.js";
import AboutDropDown from "./AboutDropDown.js";
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

  const bgUnselected = "bg-blue-black";
  const bgSelec = "bg-blue-blackest";
  const dropDownLinkClass =
    "pt-2.5 pb-2  text-left  border-solid border-gray-light  text-14 tracking-0.4 cursor-pointer";

  const NavBarItemsAndDropDowns = () => {
    return (
      <>
        <NavItem classNom="mr-5" bgSelec={bgSelec} onClickGo={onClickGo} destn="/">
          <StaticImage src="../../assets/navbar/homeIcon.svg" alt="Home icon" style={{ width: 21 }} loading="eager" />
        </NavItem>

        <HesitancyTypesDropDown
          dropDownLinkClass={dropDownLinkClass}
          bgSelec={bgSelec}
          onClickToBranch={onClickToBranch}
          onClickGo={onClickGo}
        />

        <NavItem classNom="mr-4" bgSelec={bgSelec} onClickGo={onClickGo} destn="/pearls">
          Clinical Pearls
        </NavItem>

        <AboutDropDown dropDownLinkClass={dropDownLinkClass} bgSelec={bgSelec} onClickGo={onClickGo} />
      </>
    );
  };

  return (
    <>
      <div
        className={`fixed w-full  flex justify-between items-center  ${bgUnselected} border-solid border-b-2 border-gray-light  z-50
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
                          rounded-b-xl ${bgUnselected} border-solid border-2 border-t-0 border-gray-light`}
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
