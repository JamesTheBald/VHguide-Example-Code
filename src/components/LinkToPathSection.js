import React from "react";
import { navigate } from "gatsby";

import { useMyContext } from "../context/Context";

const LinkToPathSection = (props) => {
  const { text, targetPath, targetSection, className, style } = props;
  const { scrollTarget, setNavBarOpen, log } = useMyContext();

  return (
    <button
      className={className}
      style={style}
      onClick={() => {
        // log && console.log("LinkToPathSection.js runs. Initial scrollTarget.current=", scrollTarget.current);
        scrollTarget.current = targetSection;
        log && console.log("LinkToPathSection.js Now scrollTarget.current=", scrollTarget.current);
        setNavBarOpen(false);
        navigate(targetPath);
      }}
    >
      {text}
    </button>
  );
};

export default LinkToPathSection;
