import React from "react";
import { Link } from "gatsby";

import { useMyContext } from "../context/Context";

const LinkToAboutEAASE = (props) => {
  const { text } = props;
  const { scrollTarget, setNavBarOpen, log } = useMyContext();

  return (
    <Link
      to="/about"
      className="ml-1.5 orangeLink"
      onClick={() => {
        log && console.log("LinkToAboutEAASE.js runs. Initial scrollTarget.current=", scrollTarget.current);
        scrollTarget.current = "EAASE Steps";
        setNavBarOpen(false);
      }}
    >
      {text}
    </Link>
  );
};

export default LinkToAboutEAASE;
