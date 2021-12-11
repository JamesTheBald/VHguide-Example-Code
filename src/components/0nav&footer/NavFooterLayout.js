import React from "react";
import PropTypes from "prop-types";

import "../../styles/fonts.css";
import "../../styles/styles.css";
import "../../styles/tailwindStyles.css";
import Seo from "./Seo";

import NavBar from "./NavBar";
import Footer from "./Footer";

const NavFooterLayout = ({ children }) => {
  return (
    <>
      <Seo />
      <div className="flex flex-col justify-between  w-full text-blue-main" style={{ minHeight: 100 + "vh" }}>
        <div className="">
          <NavBar />
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

NavFooterLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavFooterLayout;
