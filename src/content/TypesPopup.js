import React from "react";

const TypesPopup = () => {
  return (
    // Note: need to put Tailwind class 'relative' on a suitably wide parent element for this to size & position properly
    <span className="hoverRevealTrigger">
      <span className="orangeLink">&lsquo;types&rsquo;</span>

      <div
        className="hiddenTillHover absolute  sm:left-10 md:left-1/4  z-50  w-full sm:w-3/4 md:w-120
                   p-7  baseFont bg-white rounded-2xl shadowGray"
        //  above class had "-translate-x-1/2" but this doesn't do anything with "transform" utility
        // style={{ top: "50%" }}
        style={{ top: 50 + "px" }}
      >
        <div className="pb-3  text-yellow-darkish font-bold">&lsquo;Type&rsquo;</div>
        <div>
          In this guide, a &lsquo;type&rsquo; is a way of grouping together concerns about vaccines or vaccination that
          share a common psycho-social origin.
        </div>
      </div>
    </span>
  );
};

export default TypesPopup;
