import React from "react";
import { navigate } from "gatsby";

import { useMyContext } from "../../context/Context";
import storeLocn from "../../functions/storeLocn";
import Pill from "./Pill";
import TopicTree from "./TopicTree";

const PillsAndTrees = () => {
  const { winWidth, branch, locn, setLocn, noPillSelected, setNoPillSelected, lang, log, log2 } = useMyContext();

  0 && console.log(log, log2);
  log && console.log("PillsAndTrees.js runs. noPillSelected=", noPillSelected, ", locn=", locn);

  const sideBySideWidth = lang === "EN" ? 1366 : 1366; // would be 1320 for ENglish, but this is close enough to French, better to keep same
  const allStretchWidth = 1800;

  const onClickPill = clickedBranchNum => {
    setNoPillSelected(branch[clickedBranchNum].linkToDetails);
    // setNoPillSelected(curr => !curr);
    // above: once a pill is opened, at least one pill will always be open, until the user navigates back to this page

    setLocn(() => {
      const newLocn = {
        branch: clickedBranchNum,
        topic: 0,
        subtopic: 0,
        showSubtopic: false,
      };
      log && console.log("PillsAndTrees.js onClickPill setting locn.branch to", clickedBranchNum);

      if (branch[clickedBranchNum].linkToDetails) {
        storeLocn(newLocn);
        navigate("/details/overview");
      }
      return newLocn;
    });
  };

  const PillAndTopicTree = ({ branchNum }) => {
    const selected = locn.branch === branchNum ? true : false;
    log && console.log("PillsAndTrees.js PillAndTopicTree() branchNum=", branchNum, ", selected=", selected);
    // log && console.log("PillsAndTrees.js PillAndTopicTree() noPillSelected=", noPillSelected);

    return (
      <div
        name="pill container"
        className={`mb-8 mxs:mb-10 sm:mb-12  flex flex-col 
        ${
          winWidth < sideBySideWidth
            ? "w-full max-w-220" // stacked
            : noPillSelected // side-by-side from here down
            ? "w-1/2" // none selected
            : selected
            ? winWidth < allStretchWidth // selected pills
              ? "w-180 flex-shrink-0" // medium width
              : "w-1/2" // wide
            : "w-full" // unselected
        }
        `}
      >
        <Pill branchNum={branchNum} onClickPill={onClickPill} noPillSelected={noPillSelected} />

        {locn.branch === branchNum && !noPillSelected && !branch[branchNum].linkToDetails && (
          // Expand topic tree if branch is selected, and there's no noPillSelected or linkToDetails flags set
          <TopicTree branchNum={branchNum} />
        )}
      </div>
    );
  };

  return (
    <>
      {winWidth < sideBySideWidth ? (
        // Narrow screens (stacked pills)
        <div className="flex flex-col">
          <PillAndTopicTree branchNum={0} />
          <PillAndTopicTree branchNum={1} />
          <PillAndTopicTree branchNum={2} />
          <PillAndTopicTree branchNum={3} />
        </div>
      ) : // Wider screens (pills in columns)
      noPillSelected ? (
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
