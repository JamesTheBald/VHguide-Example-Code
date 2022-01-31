import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import { useMyContext } from "../../context/Context";

const Pill = props => {
  const { branchNum, onClickExplore, noneSelected } = props;
  const { winWidth, locn, branch, log } = useMyContext();

  false && console.log(log);
  const branchName = branch[branchNum].branchName;
  const branchNameShortest = branch[branchNum].branchNameShortest;

  const pillHeight = winWidth < 510 ? 48 : 72;
  const arrowSize = winWidth < 510 ? 20 : winWidth < 720 ? 25 : 35;

  log && console.log("Pill.js branchNum=", branchNum);

  const pillColor = noneSelected ? "blue-main" : locn.branch === branchNum ? "blue-main" : "gray-light";
  const pillTextColor = noneSelected ? "gray-light" : locn.branch === branchNum ? "gray-light" : "blue-main";
  const textClass =
    locn.branch === branchNum && !noneSelected
      ? "ml-5 mxs:ml-8 md:ml-9  font-serif font-normal  text-18 mxs:text-22 qsm:text-25 sm:text-30  tracking-0.4 mxs:tracking-0.6"
      : "ml-5 mxs:ml-7 md:ml-8   text-16 mxs:text-18  tracking-0.1";

  const pillShapeClass = "flex flex-row justify-between items-center  rounded-full relative";
  let shadowClass = "shadowGray border border-solid border-gray-lightish";

  return (
    <div className="relative">
      <button
        className={`cursor-pointer text-${pillTextColor} bg-${pillColor} ${pillShapeClass} ${
          !(locn.branch === branchNum) ? shadowClass : ""
          // !(locn.branch === branchNum) ? shadowClass : ""
        } w-full`}
        style={{ height: pillHeight }}
        onClick={() => onClickExplore(branchNum)}
      >
        <h2 className={`pt-1 ${textClass}`}>{winWidth < 510 ? branchNameShortest : branchName}</h2>

        <div className="mr-2 sm:mr-4">
          {locn.branch === branchNum && !branch[branchNum].linkToDetails && !noneSelected ? (
            <IoIosArrowDown size={arrowSize} />
          ) : (
            <IoIosArrowForward size={arrowSize} />
          )}
        </div>
      </button>
      {branchNum === 3 && (
        <>
          <StaticImage
            className={`absolute ${noneSelected && "hidden"}`}
            style={{ top: pillHeight - 1, left: 32 }}
            src="../../assets/homepage/New Banner - Faded Blue.jpg"
            alt="'New' banner"
          />
          <StaticImage
            className={`absolute ${!noneSelected && "hidden"}`}
            style={{ top: pillHeight - 1, left: 32 }}
            src="../../assets/homepage/New Banner - Navy.jpg"
            alt="'New' banner"
          />
        </>
      )}
    </div>
  );
};

export default Pill;
