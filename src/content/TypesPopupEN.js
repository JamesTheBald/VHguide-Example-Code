import React from "react";

const TypesPopupEN = props => {
  const { sizeAndPosnClass } = props;

  return (
    // Note: need to put Tailwind class 'relative' on a suitably wide parent element for this to size & position properly
    <span className="hoverRevealTrigger">
      <span className="orangeLink">&lsquo;types&rsquo;</span>

      <span
        className={`hiddenTillHover absolute  ${sizeAndPosnClass} p-7 baseFont bg-white rounded-2xl shadowGray z-50`}
        //  above class had "-translate-x-1/2" but this doesn't do anything with "transform" utility
        style={{ top: 50 + "px" }}
      >
        <div className="pb-3  text-yellow-darkish font-bold">&lsquo;Type&rsquo;</div>
        <div>
          In this guide, a &lsquo;type&rsquo; is a way of grouping together concerns about vaccines or vaccination that
          share a common psycho-social origin.
        </div>
      </span>
    </span>
  );
};

export default TypesPopupEN;
