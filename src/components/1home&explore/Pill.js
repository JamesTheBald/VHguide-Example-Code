import React, { useContext } from "react";
import Context from "../Context";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Pill = (props) => {
  const { branchNum, onClickExplore, noneSelected } = props;
  const { winWidth, locn, branch } = useContext(Context);
  let { log } = useContext(Context);

  const branchName = branch[branchNum].branchName;
  const branchNameShort = branch[branchNum].branchNameShort;

  const pillHeight = winWidth < 510 ? 48 : 72;
  const arrowSize = winWidth < 510 ? 20 : winWidth < 720 ? 25 : 35;

  log = false;
  log && console.log(" ");
  log && console.log("Pill.js branchNum=", branchNum);
  log && console.log("Pill.js locn.branch=", locn.branch);

  const pillColor = noneSelected ? "blue-main" : locn.branch === branchNum ? "blue-main" : "gray-light";
  const pillTextColor = noneSelected ? "gray-light" : locn.branch === branchNum ? "gray-light" : "blue-main";
  const textClass =
    locn.branch === branchNum && !noneSelected
      ? "ml-5 mxs:ml-8 md:ml-9  font-serif font-normal  text-18 mxs:text-22 qsm:text-25 sm:text-30  tracking-0.4 mxs:tracking-0.6"
      : "ml-5 mxs:ml-7 md:ml-8   text-16 mxs:text-18  tracking-0.1";

  const pillShapeClass = "flex flex-row justify-between items-center  rounded-full relative";
  let shadowClass = "shadowGray border border-gray-lightish";

  return (
    <div
      className={`cursor-pointer text-${pillTextColor} bg-${pillColor} ${pillShapeClass} ${
        !(locn.branch === branchNum) ? shadowClass : ""
      }`}
      style={{ height: pillHeight }}
      onClick={() => onClickExplore(branchNum)}
    >
      <div className={`pt-1 ${textClass}`}>{winWidth < 510 ? branchNameShort : branchName}</div>

      <div className="mr-2">
        {locn.branch === branchNum && !branch[branchNum].linkToDetails ? (
          <IoIosArrowDown size={arrowSize} />
        ) : (
          <IoIosArrowForward size={arrowSize} />
        )}
      </div>
    </div>
  );
};

export default Pill;
