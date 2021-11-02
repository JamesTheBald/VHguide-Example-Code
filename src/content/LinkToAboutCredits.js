import React from "react";
import { Link } from "gatsby";
import { scroller } from "react-scroll";

import { useMyContext } from "../context/Context";

const LinkToAboutCredits = props => {
  const { text } = props;
  const { scrollTarget, setNavBarOpen, log } = useMyContext();

  return (
    <Link
      // className="ml-1.5 orangeLink"
      to="/about"
      onClick={() => {
        log && console.log("LinkToAboutCredits.js runs. Initial scrollTarget.current=", scrollTarget.current);
        scrollTarget.current = "credits";
        setNavBarOpen(false);
        scroller.scrollMore(200);
      }}
    >
      {text}
    </Link>
  );
};

export default LinkToAboutCredits;
