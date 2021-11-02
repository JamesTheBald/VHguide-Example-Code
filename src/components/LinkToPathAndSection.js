import React from "react";
import { navigate } from "gatsby";

import { useMyContext } from "../context/Context";

const LinkToPathAndSection = props => {
  const { text, targetPath, targetPanel, className, style } = props;
  const { scrollTarget, log, log2 } = useMyContext();

  return (
    <button
      className={className}
      style={style}
      onClick={() => {
        navigate(targetPath);
        log2 && console.log("LinkToPathAndSection.js button clicked. Initial scrollTarget.current=", scrollTarget.current);
        scrollTarget.current = targetPanel;
        log && console.log("LinkToPathAndSection.js Now scrollTarget.current=", targetPanel);
      }}
    >
      {text}
    </button>
  );
};

export default LinkToPathAndSection;
