import React from "react";
import { navigate } from "gatsby";

import { useMyContext } from "../context/Context";

const LinkToPathAndSection = props => {
  const { text, targetPath, targetPanel, className, offset, style } = props;
  const { scrollTarget, scrollOffset, log, log2 } = useMyContext();

  return (
    <button
      className={className}
      style={style}
      onClick={() => {
        // if (window.scrollY) {
        //   window.scroll(0, 0);  // reset scroll position to top left of the document.
        // }
        navigate(targetPath);
        
        log2 && console.log("LinkToPathAndSection.js button clicked. Initial scrollTarget.current=", scrollTarget.current);
        scrollTarget.current = targetPanel;
        scrollOffset.current = offset;
        log && console.log("LinkToPathAndSection.js Now scrollTarget.current=", targetPanel);
        log && console.log("LinkToPathAndSection.js and scrollOffset.current=", scrollOffset.current);
      }}
    >
      {text}
    </button>
  );
};

export default LinkToPathAndSection;
