import React from "react";
// import { StaticImage } from "gatsby-plugin-image";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import { useMyContext } from "../../context/Context";

const Pill = props => {
  const { branchNum, onClickPill, noPillSelected } = props;
  const { winWidth, locn, branch, log, log2 } = useMyContext();

  0 && console.log(log, log2);
  const branchName = branch[branchNum].branchName;
  const branchNameShort = branch[branchNum].branchNameShort;

  const pillHeight = winWidth < 510 ? 48 : 72;
  const arrowSize = winWidth < 510 ? 20 : winWidth < 720 ? 25 : 35;

  log2 && console.log("Pill.js branchNum=", branchNum);

  const pillColor = noPillSelected ? "blue-main" : locn.branch === branchNum ? "blue-main" : "gray-light";
  const pillTextColor = noPillSelected ? "gray-light" : locn.branch === branchNum ? "gray-light" : "blue-main";
  const textClass =
    locn.branch === branchNum && !noPillSelected
      ? "ml-5 mxs:ml-8 md:ml-9  font-serif font-normal  text-18 mxs:text-22 qsm:text-25 sm:text-30  tracking-0.4 mxs:tracking-0.6"
      : "ml-5 mxs:ml-7 md:ml-8   text-16 mxs:text-18  tracking-0.1";

  const pillShapeClass = "flex flex-row justify-between items-center  rounded-lg mxs:rounded-xl sm:rounded-full relative";
  let shadowClass = "shadowGray border border-solid border-gray-lightish";

  return (
    <div className="relative">
      <button
        className={`cursor-pointer text-${pillTextColor} bg-${pillColor} ${pillShapeClass} ${
          !(locn.branch === branchNum) ? shadowClass : ""
          // !(locn.branch === branchNum) ? shadowClass : ""
        } w-full`}
        style={{ height: pillHeight }}
        onClick={() => onClickPill(branchNum)}
      >
        <h2 className={`pt-1 ${textClass}`}>{winWidth < 510 ? branchNameShort : branchName}</h2>

        <div className="mr-2 sm:mr-4">
          {locn.branch === branchNum && !branch[branchNum].linkToDetails && !noPillSelected ? (
            <IoIosArrowDown size={arrowSize} />
          ) : (
            <IoIosArrowForward size={arrowSize} />
          )}
        </div>
      </button>
      {/* {branchNum === 3 && (
        // Banner for New Topics. Need to set branch number per branch.js
        <>
          <StaticImage
            className={`absolute ${noPillSelected && "hidden"} w-20 mxs:w-25 sm:w-28`}
            style={{ top: pillHeight - 1, left: 32 }}
            src="../../assets/homeAndExplore/New Banner - Faded Blue.jpg"
            alt="'New' banner"
          />
          <StaticImage
            className={`absolute ${!noPillSelected && "hidden"} w-20 mxs:w-25 sm:w-28`}
            style={{ top: pillHeight - 1, left: 32 }}
            src="../../assets/homeAndExplore/New Banner - Navy.jpg"
            alt="'New' banner"
          />
        </>
      )} */}
    </div>
  );
};

export default Pill;
