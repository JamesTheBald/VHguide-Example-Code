import React from "react";
// import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

import "../../styles/fonts.css";
import "../../styles/styles.css";
import "../../styles/tailwindStyles.css";
import "../../styles/collapsible.css";
import "remixicon/fonts/remixicon.css";

import Seo from "./Seo";
import SurveySlideIn from "./SurveySlideIn";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useMyContext } from "../../context/Context";

const NavFooterLayout = ({ children }) => {
  const { fixedBackdrop, lang } = useMyContext();

  // const hasYScrollbar = useRef();
  // useEffect(() => {
  //   if (typeof window !== `undefined`) hasYScrollbar.current = window.innerWidth - document.body.offsetWidth > 0;
  //   // if (typeof window !== `undefined`) hasYScrollbar.current = window.visualViewport.width < window.Width;
  //   console.log("NavFooterLayout.js hasYScrollbar=", hasYScrollbar.current);
  // }, []);

  return (
    <div className="overflow-hidden"> 
      {/* Suppress scrollbars at this hierarchy level -esp. horizontal ones */}
      <Seo />
      <div
        className={`${fixedBackdrop ? "fixed" : "relative"} 
                    flex flex-col justify-between  w-screen text-blue-main`}
        style={{ minHeight: 100 + "vh" }}
      >
        <div className="">
          <NavBar />
          {children}
        </div>
        <Footer />
        {/* {lang === "EN" && <SurveySlideIn />} */}
      </div>
    </div>
  );
};

NavFooterLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavFooterLayout;
