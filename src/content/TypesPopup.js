import React from "react";

const TypesPopup = props => {
  const { sizeAndPosnClass } = props;

  // console.log("TypePopup.js sizeAndPosnClass=", sizeAndPosnClass);

  return (
    // Note: need to put Tailwind class 'relative' on a suitably wide parent element for this to size & position properly
    <span className="hoverRevealTrigger">
      <span className="orangeLink">&lsquo;types&rsquo;</span>

      {/* <div className="dontBreak" name="outer box to prevent column breaking inside"> */}
      <span
        className={`hiddenTillHover absolute  ${sizeAndPosnClass} p-7 baseFont bg-white rounded-2xl shadowGray z-50`}
        //  above class had "-translate-x-1/2" but this doesn't do anything with "transform" utility
        // style={{ top: "50%" }}
        style={{ top: 50 + "px" }}
      >
        <div className="pb-3  text-yellow-darkish font-bold">&lsquo;Type&rsquo;</div>
        <div>
          In this guide, a &lsquo;type&rsquo; is a way of grouping together concerns about vaccines or vaccination that
          share a common psycho-social origin.
        </div>
      </span>
      {/* </div> */}
    </span>
  );
};

export default TypesPopup;
