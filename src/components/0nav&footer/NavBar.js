import React, { useState, useRef } from "react";
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { IoIosMenu } from "react-icons/io";
import { VscClose } from "react-icons/vsc";

import { useMyContext } from "../../context/Context";
import NavBarItemsAndDropDowns from "./NavBarItemsAndDropDowns";
import useOnClickOutside from "../../functions/useOnClickOutside";

const NavBar = () => {
  const { winWidth, setLocn, setNoneSelected, setShowContactForm, setFixedBackdrop, log, log2 } = useMyContext();

  0 && console.log(log, log2);
  const dropDownRef = useRef();
  const [showDropDown, setShowDropDown] = useState(false);

  useOnClickOutside(dropDownRef, () => {
    log2 && console.log("NavBar.js useOnClickOutside fired outside Ref. showDropDown=false");
    setShowDropDown(false);
  });

  const onClickGo = (event, destn) => {
    // For navbar links
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

  const onClickHamburger = (event, wantOpen) => {
    event.stopPropagation();
    setShowDropDown(wantOpen);
  };

  const HamburgerIcon = className => {
    return (
      <button
        name="Hamburger icon"
        className={`w-24  flex justify-center items-center cursor-pointer ${className}`}
        onClick={event => onClickHamburger(event, true)}
      >
        <IoIosMenu size={winWidth < 720 ? 40 : 44} />
      </button>
    );
  };

  const CloseButton = () => {
    return (
      <button
        className="lg:hidden p-2 absolute -top-14 sm:-top-16 right-6"
        onClick={event => onClickHamburger(event, false)}
      >
        <VscClose size={30} />
      </button>
    );
  };

  const navBarHeight = winWidth < 720 ? 65 : 80;

  return (
    <>
      <div // Main Navbar container
        ref={dropDownRef}
        className={`fixed w-full  flex ${showDropDown && "flex-col  border-gray-light"} sm:flex-row justify-between 
                    ${!showDropDown && "items-center  border-gray-light"}
                    border-solid border-b border-gray-light  bgUnselec
                    smFont text-gray-light  z-50`}
        style={{ height: navBarHeight + 1 }}
      >
        <button // VH Guide logo
          className="ml-2 mxs:ml-5 sm:ml-6 md:ml-7 lg:ml-8  w-56 mxs:w-56 sm:w-80 lg:w-85  cursor-pointer"
          style={{ height: navBarHeight }}
          onClick={evnt => onClickGo(evnt, "/")}
        >
          <StaticImage src="../../assets/homepage/Logo for Website.svg" alt="VH Guide logo" />
        </button>

        {/* WIDE screens => normal navbar, either on 1 line or split into 2 (stacked) */}
        {showDropDown || winWidth >= 1366 ? (
          <div
            className="hidden sm:flex justify-center absolute lg:static  lg:mr-6 pt-1  w-full lg:w-auto  items-center
                       sm:border-b lg:border-0 border-gray-light  bgUnselec  z-40"
            style={{ top: navBarHeight + 1, height: navBarHeight }}
          >
            <NavBarItemsAndDropDowns onClickGo={onClickGo} setShowDropDown={setShowDropDown} />
            <CloseButton />
          </div>
        ) : (
          <div className="hidden sm:inline absolute top-4 right-0">
            <HamburgerIcon />
          </div>
        )}

        {/* NARROW screens - Dropdown Menu + Close Button or Hamburger */}
        <div className="sm:hidden relative">
          {showDropDown ? (
            <div
              name="Dropdown menu container"
              className="pt-4 pb-7  absolute left-0  w-full  flex flex-col items-start
                         border-b border-gray-light  bgUnselec  rounded-b-3xl"
              style={{ top: 1 }}
            >
              <NavBarItemsAndDropDowns onClickGo={onClickGo} setShowDropDown={setShowDropDown} />
              <CloseButton />
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
