import React from "react";
import { Link } from "gatsby";
import { animateScroll } from "react-scroll";

import { branchFR } from "../../content/branchFR";
import { useMyContext } from "../../context/Context";
import storeLocn from "../../functions/storeLocn";

const BrowseButton = props => {
  const { setNoPillSelected, setLocn, setBranch, setLang, log, log2 } = useMyContext();
  const { className, buttonDestn, buttonFuncFlag, newLocn, children } = props;
  0 && console.log(log, log2);

  const buttonClass =
    "pt-1 mxs:pt-1.5  rounded-full cursor-pointer flex justify-center items-center  smThenBaseFont mxs:text-18  border border-solid  hover:bg-opacity-0";

  if (buttonFuncFlag === "survey") {
    return (
      <a href={buttonDestn} className={`${buttonClass} ${className}`} style={props.style}>
        <button>{children}</button>
      </a>
    );
  }

  return (
    <Link
      to={buttonDestn}
      className={`${buttonClass} ${className}`}
      style={props.style}
      onClick={() => {
        setLocn(newLocn);
        storeLocn(newLocn);
        setNoPillSelected(true);
        if (typeof window !== `undefined`) {
          animateScroll.scrollToTop({ duration: 0 }); // time in ms
        }
        if (buttonFuncFlag === "french") {
          setLang("FR");
          setBranch(branchFR);
          log && console.log("BrowseButton.js saving to sessionStorage: lang= FR");
          sessionStorage.setItem("lang", "FR");
        }
      }}
    >
      <button>{children}</button>
    </Link>
  );
};

export default BrowseButton;
