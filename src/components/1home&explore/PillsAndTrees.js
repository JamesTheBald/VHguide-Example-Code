import React from "react";
import { navigate } from "gatsby";

import { useMyContext } from "../../context/Context";
import Pill from "./Pill";
import TopicTree from "./TopicTree";

const PillsAndTrees = () => {
  const { winWidth, branch, locn, setLocn, noneSelected, setNoneSelected, log, log2 } = useMyContext();

  log2 && console.log("PillsAndTrees.js runs. locn=", locn);
  log2 && console.log("PillsAndTrees.js noneSelected=", noneSelected);

  const sideBySideWidth = 1320;
  const allStretchWidth = 1600;

  const onClickExplore = clickedBranchNum => {
    setNoneSelected(branch[clickedBranchNum].linkToDetails ? true : false);
    setLocn(currLocn => {
      const newLocn = {
        ...currLocn,
        branch: clickedBranchNum,
        topic: 0,
        subtopic: 0,
        showSubtopic: false,
      };
      log && console.log("PillsAndTrees.js onClickExplore setting locn.branch to", clickedBranchNum);
      return newLocn;
    });
    if (branch[clickedBranchNum].linkToDetails) navigate("/details/overview");
  };

  const PillAndTopicTree = ({ branchNum }) => {
    const selected = locn.branch === branchNum ? true : false;
    log && console.log("PillsAndTrees.js PillAndTopicTree() branchNum=", branchNum, "& selected=", selected);
    return (
      <div
        name="pill container"
        className={`mb-8 mxs:mb-10 sm:mb-12  flex flex-col 
        ${
          winWidth < sideBySideWidth
            ? "w-full max-w-220" // stacked
            : noneSelected // side-by-side from here down
            ? "w-1/2" // none selected
            : selected
            ? winWidth < allStretchWidth // selected pills
              ? "w-180 flex-shrink-0" // medium width
              : "w-1/2" // wide
            : "w-full" // unselected
        }
        `}
      >
        <Pill branchNum={branchNum} onClickExplore={onClickExplore} noneSelected={noneSelected} />

        {locn.branch === branchNum && !noneSelected && !branch[branchNum].linkToDetails && (
          <TopicTree branchNum={branchNum} />
        )}
      </div>
    );
  };

  return (
    <>
      {winWidth < sideBySideWidth ? (
        // Narrow screens
        <div className="flex flex-col">
          <PillAndTopicTree branchNum={0} />
          <PillAndTopicTree branchNum={1} />
          <PillAndTopicTree branchNum={2} />
          <PillAndTopicTree branchNum={3} />
        </div>
      ) : // Wider screens
      noneSelected ? (
        <div className="flex flex-col  w-full">
          <div className="flex flex-row gap-14 xl:gap-20">
            <PillAndTopicTree branchNum={0} />
            <PillAndTopicTree branchNum={1} />
          </div>
          <div className="flex flex-row gap-14 xl:gap-20">
            <PillAndTopicTree branchNum={2} />
            <PillAndTopicTree branchNum={3} />
          </div>
        </div>
      ) : (
        // pill is selected
        <div className="flex flex-row gap-14 xl:gap-20  w-full">
          <PillAndTopicTree branchNum={locn.branch} />
          <div className="flex flex-col  w-1/2">
            {locn.branch !== 0 && <PillAndTopicTree branchNum={0} />}
            {locn.branch !== 1 && <PillAndTopicTree branchNum={1} />}
            {locn.branch !== 2 && <PillAndTopicTree branchNum={2} />}
            {locn.branch !== 2 && <PillAndTopicTree branchNum={3} />}
          </div>
        </div>
      )}
    </>
  );
};

export default PillsAndTrees;
