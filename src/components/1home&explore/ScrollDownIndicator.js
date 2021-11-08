import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

// import { useMyContext } from "../../context/Context";
import { BsChevronDown } from "react-icons/bs";

const ScrollDownIndicator = props => {
  const { additionalClass } = props;
  // const { winHeight } = useMyContext();

  return (
    <AnchorLink
      to="/#hesTypes"
      title="Scroll down to hesitancy types"
      className={`px-10 mb-10 w-full  flex flex-col  justify-center items-center  text-14 ${additionalClass} cursor-pointer`}
      onAnchorLinkClick={() => console.log("index.js Scroll link clicked")}
    >
      <BsChevronDown size={36} />
      <div>scroll</div>
    </AnchorLink>
  );
};

export default ScrollDownIndicator;
