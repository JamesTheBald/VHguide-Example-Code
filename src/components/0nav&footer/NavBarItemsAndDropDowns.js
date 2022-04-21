import React from "react";
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { animateScroll } from "react-scroll";

import { useMyContext } from "../../context/Context";
import isNavItemSelected from "../../functions/isNavItemSelected";
import HesTypesDropDown from "./HesTypesDropDown.js";
import AboutDropDown from "./AboutDropDown.js";
import NavItem from "./NavItem.js";
import LanguageSwitcher from "./LanguageSwitcher.js";

const NavBarItemsAndDropDowns = props => {
  const { onClickGo, setShowDropDown } = props;
  const { locn, winWidth, branch, setLocn, setNoneSelected, setShowContactForm, setFixedBackdrop, log, log2 } =
    useMyContext();

  const w = winWidth;

  const onClickToBranch = (evnt, branchNum) => {
    // For hesitancy type pull-down menu links
    log && console.log("NavBar.js onClickToBranch() branchNum=", branchNum);

    setLocn({ branch: branchNum, topic: 0, subtopic: 0, showSubtopic: false });
    setNoneSelected(branchNum === 0 ? false : true);

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

  const padNavBarOnExplorePage =
    w >= 1024 && typeof window !== "undefined" && window.location.pathname === "/explore" ? true : false;
  log2 && console.log("NavBar.js padNavBarOnExplorePage=", padNavBarOnExplorePage);

  const mainLinkClass = "fsm:mr-3  w-full fsm:w-auto";
  const subMenuLinkClass = "pt-2.5 pb-2  border-gray-light  text-14 tracking-0.4 cursor-pointer";
  const stackedSpacing = "pl-7 pt-3 pb-2 my-2 fsm:pl-0 fsm:py-0";

  return (
    <>
      <button
        className={`${mainLinkClass}
                  ${isNavItemSelected("/", locn) && w < 800 ? "subMenuYBorders bgSelec" : ""}`}
        onClick={event => onClickGo(event, "/")}
      >
        <NavItem classNom={`${stackedSpacing}`} destn="/">
          <StaticImage
            src="../../assets/navbar/homeIcon.svg"
            alt="Home icon"
            style={{ width: 23 }}
            loading="eager"
            className="relative fsm:-top-0.5"
          />
        </NavItem>
      </button>

      <div className={mainLinkClass}>
        <HesTypesDropDown subMenuLinkClass={subMenuLinkClass} onClickToBranch={onClickToBranch} onClickGo={onClickGo} />
      </div>

      <button className={`${mainLinkClass} fsm:mr-5`} onClick={event => onClickGo(event, "/details/overview")}>
        <NavItem
          classNom={`${stackedSpacing}  ${
            w < 800 && isNavItemSelected("/details/overview", locn) && w < 800 && "subMenuYBorders bgSelec"
          }`}
          destn="/details/overview"
        >
          Medical Exemptions
        </NavItem>
      </button>

      <button className={mainLinkClass} onClick={event => onClickGo(event, "/pearls")}>
        <NavItem
          classNom={`${stackedSpacing}  ${
            w < 800 && isNavItemSelected("/pearls", locn) && w < 800 && "subMenuYBorders bgSelec"
          }`}
          destn="/pearls"
        >
          Clinical Pearls
        </NavItem>
      </button>

      <div className={mainLinkClass}>
        <AboutDropDown subMenuLinkClass={subMenuLinkClass} onClickGo={onClickGo} />
      </div>

      <div className={`${stackedSpacing} pt-4 fsm:mx-3`}>
        <LanguageSwitcher />
      </div>

      {padNavBarOnExplorePage && <div className="h-4" style={{ width: 15 + "px" }} />}
    </>
  );
};

export default NavBarItemsAndDropDowns;
