import React from "react";
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
  const { fixedBackdrop } = useMyContext();

  return (
    <>
      <Seo />
      <div
        className={`${fixedBackdrop ? "fixed" : "relative"} 
                    flex flex-col justify-between  w-full text-blue-main  overflow-hidden`}
        style={{ minHeight: 100 + "vh" }}
      >
        <div className="">
          <NavBar />
          {children}
        </div>
        <Footer />
        <SurveySlideIn />
      </div>
    </>
  );
};

NavFooterLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavFooterLayout;
