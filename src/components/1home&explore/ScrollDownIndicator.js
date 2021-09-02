// import React from "react";
import React, { useContext } from "react";
import Scroll from "react-scroll";
import { useMyContext } from "../../context/Context";
import { BsChevronDown } from "react-icons/bs";

const ScrollDownIndicator = (props) => {
  const { additionalClass } = props;
  const { winHeight } = useMyContext();

  const scroll = Scroll.animateScroll;
  const scrollDist = winHeight - 100;

  return (
    <div className={`mb-10 w-full  flex flex-col  justify-center items-center  text-14 ${additionalClass}`}>
      <div className="px-10 cursor-pointer" onClick={() => scroll.scrollMore(scrollDist, { duration: 500 })}>
        <BsChevronDown size={36} />
        <div>scroll</div>
      </div>
    </div>
  );
};

{
  /* <div className="absolute top-0 w-full flex justify-center" style={{ height: winHeight }}>
        <div className="absolute bottom-6  flex flex-col  justify-center items-center  text-14">
          <BsChevronDown size={36} />
          <div>scroll</div>
        </div>
      </div> */
}
export default ScrollDownIndicator;
