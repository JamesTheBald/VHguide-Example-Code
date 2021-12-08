import React, { useState, useRef } from "react";
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { animateScroll } from "react-scroll";
import { IoIosMenu } from "react-icons/io";

import HesitancyTypesDropDown from "./HesitancyTypesDropDown.js";
import AboutDropDown from "./AboutDropDown.js";
import NavItem from "./NavItem.js";
import { useMyContext } from "../../context/Context";
import { VscClose } from "react-icons/vsc";
import useOnClickOutside from "../../functions/useOnClickOutside";

const NavBar = () => {
  const { branch, navBarHeight, setLocn, setNoneSelected, setShowContactForm, log } = useMyContext();

  const dropDownRef = useRef();
  const [showDropDown, setShowDropDown] = useState(false);

  useOnClickOutside(dropDownRef, () => {
    // log && console.log("useOnClickOutside fired but doing nothing");
    log && console.log("useOnClickOutside fired - setting showDropDown=false");
    setShowDropDown(false);
  });

  const onClickGo = (event, destn) => {
    event.stopPropagation();
    log && console.log("onClickGo() runs. Navigating to destn, closing dropdown & contact form");
    if (destn === "/explore") {
      setLocn({ branch: 0, topic: 0, subtopic: 0, showSubtopic: false });
      setNoneSelected(true);
    }
    navigate(destn);
    setShowDropDown(false);
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
    setShowDropDown(false);
    setShowContactForm(false);
  };

  const onClickOpenHamburger = event => {
    event.stopPropagation();
    setShowDropDown(true);
  };

  const onClickCloseHamburger = event => {
    event.stopPropagation();
    setShowDropDown(false);
  };

  const bgUnselected = "bg-blue-black";
  // const bgUnselected2 = "bg-blue-600";
  const bgSelec = "bg-blue-blackest";
  const dropDownLinkClass =
    "pt-2.5 pb-2  text-left  border-solid border-gray-light  text-14 tracking-0.4 cursor-pointer";

  const NavBarItemsAndDropDowns = () => {
    return (
      <>
        <button onClick={event => onClickGo(event, "/")}>
          <NavItem classNom="mr-5" bgSelec={bgSelec} destn="/">
            <StaticImage src="../../assets/navbar/homeIcon.svg" alt="Home icon" style={{ width: 21 }} loading="eager" />
          </NavItem>
        </button>

        <HesitancyTypesDropDown
          dropDownLinkClass={dropDownLinkClass}
          bgSelec={bgSelec}
          onClickToBranch={onClickToBranch}
          onClickGo={onClickGo}
        />

        <button onClick={event => onClickGo(event, "/pearls")}>
          <NavItem classNom="mr-4" bgSelec={bgSelec} destn="/pearls">
            Clinical Pearls
          </NavItem>
        </button>

        <AboutDropDown dropDownLinkClass={dropDownLinkClass} bgSelec={bgSelec} onClickGo={onClickGo} />
      </>
    );
  };

  // NavBar
  return (
    <>
      <div
        className={`fixed w-full  flex justify-between items-center  ${bgUnselected} border-solid border-b-2 border-gray-light  z-50
                    text-16 tracking-0.3 text-gray-light font-sans`}
        style={{ height: navBarHeight }}
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
          name="Wide screens => normal Navbar"
          className="hidden md:flex items-center  pt-1 ml-8 mr-6 mxs:mr-8 lg:mr-10  relative"
        >
          <NavBarItemsAndDropDowns />
        </div>

        <div name="Narrow screens => Hamburger Navbar" className="md:hidden">
          <button
            name="Hamburger icon container"
            className="w-24 flex justify-center items-center cursor-pointer"
            onClick={event => onClickOpenHamburger(event)}
          >
            <IoIosMenu size={50} />
          </button>

          {showDropDown && (
            // Need the wrapping fragments below
            <>
              <div
                className={`px-10 py-6 absolute top-0 right-0 w-full mxs:w-85 flex flex-col gap-4  
                          rounded-b-xl ${bgUnselected} border-solid border-2 border-t-0 border-gray-light`}
                ref={dropDownRef}
              >
                <button className="p-2 absolute top-2 right-3" onClick={event => onClickCloseHamburger(event)}>
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
