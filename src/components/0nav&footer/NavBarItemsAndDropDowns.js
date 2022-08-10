import React from "react";
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { animateScroll } from "react-scroll";

import { useMyContext } from "../../context/Context";
import storeLocn from "../../functions/storeLocn";
import isNavItemSelected from "../../functions/isNavItemSelected";
import HesTypesDropDown from "./HesTypesDropDown.js";
import AboutDropDown from "./AboutDropDown.js";
import { navbarLabels } from "../../content/navbarLabels";
import NavItem from "./NavItem.js";
import LanguageSwitcher from "./LanguageSwitcher.js";

const NavBarItemsAndDropDowns = props => {
  const { onClickGo, setShowDropDown } = props;
  const {
    locn,
    winWidth,
    fsmBrkPt,
    branch,
    setLocn,
    setNoPillSelected,
    setShowContactForm,
    setFixedBackdrop,
    lang,
    log,
    log2,
  } = useMyContext();

  const w = winWidth;

  const onClickToBranch = (evnt, branchNum) => {
    // For hesitancy type pull-down menu links
    log && console.log("NavBar.js onClickToBranch() branchNum=", branchNum);

    setLocn({ branch: branchNum, topic: 0, subtopic: 0, showSubtopic: false });
    storeLocn({ branch: branchNum, topic: 0, subtopic: 0, showSubtopic: false });
    setNoPillSelected(branchNum === 0 ? false : true);

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
  const chevVertPosn = w < 880 ? 4 : 1;

  return (
    <>
      <button
        className={`${mainLinkClass}
                  ${isNavItemSelected("/", locn) && w < fsmBrkPt ? "border-b border-gray-light bgSelec" : ""}`}
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
        <HesTypesDropDown
          subMenuLinkClass={subMenuLinkClass}
          onClickToBranch={onClickToBranch}
          onClickGo={onClickGo}
          chevVertPosn={chevVertPosn}
        />
      </div>

      <button className={`${mainLinkClass} fsm:mr-5`} onClick={event => onClickGo(event, "/details/overview")}>
        <NavItem
          classNom={`${stackedSpacing}  ${
            w < fsmBrkPt && isNavItemSelected("/details/overview", locn) && "subMenuYBorders bgSelec"
          }`}
          destn="/details/overview"
        >
          {navbarLabels.medExempt[lang]}
        </NavItem>
      </button>

      <button className={mainLinkClass} onClick={event => onClickGo(event, "/pearls")}>
        <NavItem
          classNom={`${stackedSpacing}  ${
            w < fsmBrkPt && isNavItemSelected("/pearls", locn) && "subMenuYBorders bgSelec"
          }`}
          destn="/pearls"
        >
          {navbarLabels.pearls[lang]}
        </NavItem>
      </button>

      <div className={mainLinkClass}>
        <AboutDropDown subMenuLinkClass={subMenuLinkClass} onClickGo={onClickGo} chevVertPosn={chevVertPosn} />
      </div>

      <div className={`${stackedSpacing} pt-4 relative -left-2 fsm:ml-3 fsm:mr-5`}>
        <LanguageSwitcher />
      </div>
    </>
  );
};

export default NavBarItemsAndDropDowns;
