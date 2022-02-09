import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
// import { IoClose, IoStar, IoStarOutline } from "react-icons/io5";

import "../../styles/slideInAnimation.css";
// import SurveySlideInPage0 from "./SurveySlideInPage0";
import SurveySlideInPage1 from "./SurveySlideInPage1";
import { useMyContext } from "../../context/Context";
// import useOnClickOutside from "../../functions/useOnClickOutside";

const SurveySlideIn = () => {
  // const { showSlideIn, setShowSlideIn } = props;
  const { winWidth, log, log2 } = useMyContext();
  false && console.log(log, log2);

  const [showSlideIn, setShowSlideIn] = useState(true);
  // const [pageNum, setPageNum] = useState(0);
  // const [tempStars, setTempStars] = useState(0);
  // const [finalStars, setFinalStars] = useState(0);
  // const [showSubmitTip, setShowSubmitTip] = useState(false);
  const [showContestTerms, setShowContestTerms] = useState(false);

  const onClickX = event => {
    event.stopPropagation();
    setShowSlideIn(false);
  };

  // const slideInRef = useRef();
  // useOnClickOutside(slideInRef, () => {
  //   log && console.log("useOnClickOutside fired - setting showSlideIn=false");
  //   log && console.log("useOnClickOutside showSubmitTip=", showSubmitTip, " and showContestTerms=", showContestTerms);
  //   setShowSlideIn(() => {
  //     if (showSubmitTip || showContestTerms) return true;
  //     else return false;
  //   });
  // });

  const buttonBase =
    "px-3 pt-1.5 pb-0.5 mb-auto  flex justify-center items-center text-15 tracking-0.3  rounded-md cursor-pointer  border-2 border-solid";
  const buttonLight = buttonBase + " text-blue-dark bg-gray-light";
  const buttonDark = buttonBase + " text-gray-light bg-blue-black";

  // const ActiveStar = ({ starNum }) => {
  //   log && console.log("SurveySlideIn.js tempStars=", tempStars, " and finalStars=", finalStars);

  //   return (
  //     <button
  //       className="pr-2"
  //       onMouseEnter={() => setTempStars(starNum)}
  //       onMouseLeave={() => setTempStars(0)}
  //       onClick={() => setFinalStars(starNum)}
  //     >
  //       {tempStars < starNum && finalStars < starNum && <IoStarOutline className="" size={30} />}
  //       {(tempStars >= starNum || finalStars >= starNum) && <IoStar className="" size={30} />}
  //     </button>
  //   );
  // };

  if (showSlideIn)
    return (
      <div
        // ref={slideInRef}
        className={`fixed left-0 bottom-0  slideIn   pl-8 pb-7  text-gray-light tracking-0.4
                  bg-blue-black  rounded-t-xl axs:rounded-tl-none axs:rounded-tr-xl  border-t border-r border-gray-light  z-50`}
        // ${!showSlideIn && "invisible"}
        style={
          winWidth > 423
            ? { width: "423px", fontSize: "1.25rem", paddingLeft: "2rem" }
            : { width: "100%", fontSize: "1.15rem", paddingLeft: "1.8rem" }
        }
      >
        <button className="px-2.5 py-3 absolute top-0 right-0" onClick={event => onClickX(event)}>
          <IoClose size={25} />
        </button>

        {/* {pageNum === 0 && (
          <SurveySlideInPage0
            ActiveStar={ActiveStar}
            finalStars={finalStars}
            setPageNum={setPageNum}
            buttonLight={buttonLight}
            showSubmitTip={showSubmitTip}
            setShowSubmitTip={setShowSubmitTip}
          />
        )} */}
        {/* {pageNum === 1 && ( */}
          <SurveySlideInPage1
            showContestTerms={showContestTerms}
            setShowContestTerms={setShowContestTerms}
            setShowSlideIn={setShowSlideIn}
            buttonLight={buttonLight}
            buttonDark={buttonDark}
          />
        {/* )} */}
      </div>
    );
  else return <></>;
};

export default SurveySlideIn;
