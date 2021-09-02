import React from "react";
import PropTypes from "prop-types";

import "../../styles/fonts.css";
import "../../styles/hoverText.css";
import "../../styles/styles.css";
import "../../styles/tailwindStyles.css";
// import { useMyContext } from "../../context/Context";

import NavBar from "./NavBar";
import Footer from "./Footer";

const NavFooterLayout = ({ children }) => {
  return (
    <div className="flex flex-col w-full text-blue-main">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

NavFooterLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavFooterLayout;
