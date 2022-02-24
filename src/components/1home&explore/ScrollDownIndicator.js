import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import { useMyContext } from "../../context/Context";
import { BsChevronDown } from "react-icons/bs";

const ScrollDownIndicator = props => {
  const { additionalClass } = props;
  const { winWidth } = useMyContext();

  return (
    <AnchorLink
      to="/#hesTypes"
      title="Scroll down to hesitancy types"
      className={`px-10 py-5 md:py-8 mb-5 mxs:mb-0  flex flex-col  justify-center items-center  text-12 mxs:text-14 ${additionalClass} cursor-pointer`}
      onAnchorLinkClick={() => console.log("index.js Scroll link clicked")}
    >
      <BsChevronDown size={winWidth < 510 ? 24 : 36} />
      <div>scroll</div>
    </AnchorLink>
  );
};

export default ScrollDownIndicator;
