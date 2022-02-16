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
  const {
    winWidth,
    branch,
    navBarHeight,
    setLocn,
    // setContentID,
    setNoneSelected,
    setShowContactForm,
    setFixedBackdrop,
    log,
    log2,
  } = useMyContext();

  false && console.log(log, log2);
  const dropDownRef = useRef();
  const [showDropDown, setShowDropDown] = useState(false);

  useOnClickOutside(dropDownRef, () => {
    log && console.log("NavBar.js useOnClickOutside fired - setting showDropDown=false");
    setShowDropDown(false);
  });

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
    // setContentID(curr => {
    //   const newContentID = destn === "/details/overview" ? "MedicalExemptions" : curr;
    //   log && console.log("NavBar.js onClickGo setContentID to", newContentID);
    //   return newContentID
    // });

    navigate(destn);
    setShowDropDown(false);
    setShowContactForm(false);
    setFixedBackdrop(false);
  };

  // For pull-down menu (narrow screen) selections only
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

  const bgUnselected = "bg-blue-black";
  const bgSelec = "bg-blue-blackest";
  const dropDownLinkClass =
    "pt-2.5 pb-2  text-left  border-solid border-gray-light  text-14 tracking-0.4 cursor-pointer";

  const padNavBarOnExplorePage =
    winWidth > 1023 && typeof window !== "undefined" && window.location.pathname === "/explore" ? true : false;

  log2 && console.log("NavBar.js padNavBarOnExplorePage=", padNavBarOnExplorePage);

  const NavBarItemsAndDropDowns = () => {
    return (
      <>
        <button className="my-2.5 mr-2  pr-10 md:pr-0" onClick={event => onClickGo(event, "/")}>
          <NavItem classNom="mr-5" bgSelec={bgSelec} destn="/">
            <StaticImage
              src="../../assets/navbar/homeIcon.svg"
              alt="Home icon"
              style={{ width: 23 }}
              loading="eager"
              className="relative md:-top-0.5"
            />
          </NavItem>
        </button>

        <HesTypesDropDown
          dropDownLinkClass={dropDownLinkClass}
          bgSelec={bgSelec}
          onClickToBranch={onClickToBranch}
          onClickGo={onClickGo}
        />

        <button className="pr-10 md:pr-0 mr-2" onClick={event => onClickGo(event, "/details/overview")}>
          <NavItem classNom="mr-4" bgSelec={bgSelec} destn="/details/overview">
            Medical Exemptions
          </NavItem>
        </button>

        <button className="pr-10 md:pr-0 mr-2" onClick={event => onClickGo(event, "/pearls")}>
          <NavItem classNom="mr-4" bgSelec={bgSelec} destn="/pearls">
            Clinical Pearls
          </NavItem>
        </button>

        <AboutDropDown dropDownLinkClass={dropDownLinkClass} bgSelec={bgSelec} onClickGo={onClickGo} />
        {padNavBarOnExplorePage && <div className="h-4" style={{ width: 15 + "px" }} />}
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
          className={`hidden md:flex items-center  pt-1 mx-8 lg:mr-10  relative`}
        >
          <NavBarItemsAndDropDowns />
        </div>

        <div name="Narrow screens => Hamburger Navbar" className="md:hidden">
          <button
            name="Hamburger icon container"
            className="w-20 mxs:w-24 mxs:mr-2 sm:mr-4  flex justify-center items-center cursor-pointer"
            onClick={event => onClickHamburger(event, true)}
          >
            <div className="mxs:hidden">
              <IoIosMenu size={40} />
            </div>
            <div className="hidden mxs:block">
              <IoIosMenu size={50} />
            </div>
          </button>

          {showDropDown && (
            // Need the wrapping fragments below
            <>
              <div
                className={`px-10 pt-6 pb-8 absolute top-0 right-0  w-full mxs:w-85  flex flex-col items-start gap-4
                          rounded-b-xl ${bgUnselected} border-solid border-2 border-t-0 border-gray-light`}
                ref={dropDownRef}
              >
                <button className="p-2 absolute top-2 right-3" onClick={event => onClickHamburger(event, false)}>
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
