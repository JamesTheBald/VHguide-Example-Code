import React from "react";
import { Link } from "gatsby";

import { useMyContext } from "../context/Context";

const LinkToAboutEAASE = props => {
  const { text } = props;
  const { scrollTarget, log } = useMyContext();

  return (
    <Link
      to="/about"
      className="ml-1.5 orangeLink"
      onClick={() => {
        scrollTarget.current = "eaaseSteps";
        log && console.log("LinkToAboutEAASE.js runs. scrollTarget.current now=", scrollTarget.current);
      }}
    >
      {text}
    </Link>
  );
};

export default LinkToAboutEAASE;
