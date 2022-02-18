import React, { useState, useRef } from "react";
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { animateScroll } from "react-scroll";
import { IoIosMenu } from "react-icons/io";

import HesTypesDropDown from "./HesTypesDropDown.js";
import AboutDropDown from "./AboutDropDown.js";
import NavItem from "./NavItem.js";
import { useMyContext } from "../../context/Context";
import { VscClose } from "react-icons/vsc";
import useOnClickOutside from "../../functions/useOnClickOutside";

const NavBar = () => {
  const { winWidth, branch, setLocn, setNoneSelected, setShowContactForm, setFixedBackdrop, log, log2 } =
    useMyContext();

  false && console.log(log, log2);
  const dropDownRef = useRef();
  // const dropDownRef2 = useRef();
  const [showDropDown, setShowDropDown] = useState(false);

  const navBarHeight = 80; // in pixels

  useOnClickOutside(dropDownRef, () => {
    log && console.log("NavBar.js useOnClickOutside fired outside Ref. showDropDown=false");
    setShowDropDown(false);
  });

  // useOnClickOutside(dropDownRef2, () => {
  //   log && console.log("NavBar.js useOnClickOutside fired outside Ref2. showDropDown=false");
  //   setShowDropDown(false);
  // });

  // For main (wide) navbar selections
  const onClickGo = (event, destn) => {
    event.stopPropagation();
    log && console.log("NavBar.js onClickGo() runs. Navigating to destn, closing dropdown & contact form");

    if (destn === "/explore") {
      setLocn({ branch: 0, topic: 0, subtopic: 0, showSubtopic: false });
      setNoneSelected(true);
    } else if (destn === "/details/overview") {
      setLocn({ branch: 4, topic: 0, subtopic: 0, showSubtopic: false });
    }
    navigate(destn);
    setShowDropDown(false);
    setShowContactForm(false);
    setFixedBackdrop(false);
  };

  // For pull-down menu (narrow screen) selections
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
    setFixedBackdrop(false);
  };

  const onClickHamburger = (event, wantOpen) => {
    event.stopPropagation();
    setShowDropDown(wantOpen);
  };

  const HamburgerIcon = className => {
    return (
      <button
        name="Hamburger icon"
        className={`w-20 mxs:w-24 mxs:mr-2 sm:mr-4  flex justify-center items-center cursor-pointer ${className}`}
        onClick={event => onClickHamburger(event, true)}
      >
        <IoIosMenu size={winWidth < 720 ? 40 : 44} />
      </button>
    );
  };

  const dropDownLinkClass = "pt-2.5 pb-2  border-solid border-gray-light  text-14 tracking-0.4 cursor-pointer";
  const padNavBarOnExplorePage =
    winWidth > 1023 && typeof window !== "undefined" && window.location.pathname === "/explore" ? true : false;
  log2 && console.log("NavBar.js padNavBarOnExplorePage=", padNavBarOnExplorePage);

  // Navbar Links
  const NavBarItemsAndDropDowns = () => {
    return (
      <>
        <button className="my-2.5 mr-2  pr-10 sm:pr-0" onClick={event => onClickGo(event, "/")}>
          <NavItem classNom="mr-5" destn="/">
            <StaticImage
              src="../../assets/navbar/homeIcon.svg"
              alt="Home icon"
              style={{ width: 23 }}
              // style={winWidth < 510 ? { width: 21 } : { width: 23 }}
              loading="eager"
              className="relative sm:-top-0.5"
            />
          </NavItem>
        </button>

        <HesTypesDropDown
          dropDownLinkClass={dropDownLinkClass}
          onClickToBranch={onClickToBranch}
          onClickGo={onClickGo}
        />

        <button className="pr-10 sm:pr-0 mr-2" onClick={event => onClickGo(event, "/details/overview")}>
          <NavItem classNom="mr-4" destn="/details/overview">
            Medical Exemptions
          </NavItem>
        </button>

        <button className="pr-10 sm:pr-0 mr-2" onClick={event => onClickGo(event, "/pearls")}>
          <NavItem classNom="mr-4" destn="/pearls">
            Clinical Pearls
          </NavItem>
        </button>

        <AboutDropDown dropDownLinkClass={dropDownLinkClass} onClickGo={onClickGo} />
        {padNavBarOnExplorePage && <div className="h-4" style={{ width: 15 + "px" }} />}
      </>
    );
  };

  // Main NavBar
  return (
    <>
      <div
        ref={dropDownRef}
        className={`fixed w-full  flex ${showDropDown && "flex-col  border-gray-neutral"} sm:flex-row justify-between 
                    ${!showDropDown && "items-center  border-gray-light"}
                    border-solid border-b border-gray-light  bgUnselec
                    smFont text-gray-light  z-50`}
        style={{ height: navBarHeight + 1 }}
      >
        <button // VH Guide logo
          className="ml-2 mxs:ml-5 sm:ml-6 md:ml-7 lg:ml-8  w-64 mxs:w-72 sm:w-80 lg:w-85  cursor-pointer"
          style={{ height: navBarHeight }}
          onClick={evnt => onClickGo(evnt, "/")}
        >
          <StaticImage src="../../assets/homepage/Logo for Website.svg" alt="VH Guide logo" />
        </button>

        {showDropDown && ( // Close button (narrow & medium screens)
          <button
            className="lg:hidden p-2 absolute top-4 right-8 sm:right-10"
            onClick={event => onClickHamburger(event, false)}
          >
            <VscClose size={30} />
          </button>
        )}

        {/* Wide screens => normal navbar, either on 1 line or split into 2 (stacked) */}
        {showDropDown || winWidth >= 1366 ? (
          <div
            className="hidden lg:mr-6  sm:flex justify-center absolute lg:static  pt-1  w-full lg:w-auto  items-center
                       sm:border-b lg:border-0 border-gray-light  bgUnselec  z-40"
            style={{ top: navBarHeight + 1, height: navBarHeight }}
          >
            <NavBarItemsAndDropDowns />
          </div>
        ) : (
          <div className="hidden sm:inline absolute top-4 right-0">
            <HamburgerIcon />
          </div>
        )}

        {/* Narrow screens - Dropdown menu or Hamburger on Navbar */}
        <div className="sm:hidden">
          {showDropDown ? (
            <div
              // ref={dropDownRef}
              name="Dropdown container"
              className="px-10 pt-5 pb-7  absolute left-0  w-full sm:w-85  flex flex-col items-start gap-4
                         border-b border-gray-light  bgUnselec  rounded-b-3xl"
              style={{ top: navBarHeight + 1 }}
            >
              <NavBarItemsAndDropDowns />
            </div>
          ) : (
            <HamburgerIcon />
          )}
        </div>
      </div>
      <div
        name="spacer, because navbar is fixed"
        style={
          showDropDown && winWidth >= 720 && winWidth < 1366 ? { height: navBarHeight * 2 } : { height: navBarHeight }
        }
      />
    </>
  );
};

export default NavBar;
