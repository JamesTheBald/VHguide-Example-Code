import React, { useState, useEffect, useCallback } from "react";
import { navigate } from "gatsby";

import { useMyContext } from "../../context/Context";
import Pill from "./Pill";
import TopicTree from "./TopicTree";

const PillsAndTrees = props => {
  const { maxStackedWidth } = props;
  const { winWidth, marginOuter, branch, locn, setLocn, noneSelected, setNoneSelected, log, log2 } =
    useMyContext();

  log2 && console.log("PillsAndTrees.js runs. locn=", locn);
  log2 && console.log("PillsAndTrees.js noneSelected=", noneSelected);

  const mixedStackBreakPt = 1444;
  const minRowWidth = 1920;
  const xGap = 50;
  let pillWidthWide, pillWidthNarrow, pillWidthMedium;

  if (winWidth < maxStackedWidth) {
    // Narrow screen case
    pillWidthWide = winWidth - 2 * marginOuter;
    pillWidthNarrow = pillWidthWide;
    pillWidthMedium = pillWidthWide;
  } else if (winWidth < minRowWidth) {
    // Middle screen width cases
    pillWidthWide = winWidth < 1024 ? winWidth - 2 * marginOuter : winWidth < mixedStackBreakPt ? 820 : 765;
    pillWidthNarrow = 372;
    pillWidthMedium = winWidth < mixedStackBreakPt ? 372 : (winWidth - 2 * marginOuter - 2 * xGap) / 3;
  } else {
    // Wide screen case
    const widthPillRow = winWidth - 2 * marginOuter;
    pillWidthWide = (widthPillRow - 2 * xGap) / 2;
    pillWidthMedium = (widthPillRow - 2 * xGap) / 3;
    pillWidthNarrow = (widthPillRow - 2 * xGap) / 4;
  }
  const [pillWidths, setPillWidths] = useState([pillWidthMedium, pillWidthMedium, pillWidthMedium, pillWidthMedium]);

  const calcPillWidthArray = useCallback(
    currWidths => {
      const newWidthArray = [...currWidths];
      newWidthArray.fill(pillWidthNarrow);

      if (noneSelected) {
        newWidthArray.fill(pillWidthMedium);
      } else {
        newWidthArray[locn.branch] = pillWidthWide;
      }
      log2 && console.log("PillsAndTrees.js calcPillWidthArray() setting pillWidths=", newWidthArray);
      return newWidthArray;
    },
    [locn.branch, noneSelected, pillWidthNarrow, pillWidthMedium, pillWidthWide, log2]
  );

  useEffect(() => {
    setPillWidths(curr => calcPillWidthArray(curr));
  }, [locn.branch, calcPillWidthArray]);

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
    setPillWidths(curr => calcPillWidthArray(curr));
    if (branch[clickedBranchNum].linkToDetails) navigate("/details/overview");
  };

  const PillAndTopicTree = ({ branchNum }) => {
    log2 && console.log("PillAndTrees.js PillAndTopicTree() brancNum=", branchNum);
    return (
      <div
        className={`flex flex-col  ${branchNum < 3 && "mr-12"}
                                   ${winWidth < 510 ? "mb-8" : winWidth < 720 ? "mb-10" : "mb-12"}`}
        style={{ width: pillWidths[branchNum] }}
      >
        <Pill branchNum={branchNum} onClickExplore={onClickExplore} noneSelected={noneSelected} />
        {locn.branch === branchNum && !noneSelected && !branch[branchNum].linkToDetails && (
          <TopicTree branchNum={branchNum} />
        )}
      </div>
    );
  };

  const PillGroup = branchNum => {
    log2 && console.log("PillAndTrees.js PillGroup() brancNum=", branchNum);
    return (
      <>
        <PillAndTopicTree branchNum={0} />
        <PillAndTopicTree branchNum={1} />
        <PillAndTopicTree branchNum={2} />
        <PillAndTopicTree branchNum={3} />
      </>
    );
  };

  const PillGroupConditional = branchNum => {
    log2 && console.log("PillAndTrees.js PillGroupConditional() brancNum=", branchNum);
    return (
      <>
        {locn.branch !== 0 && <PillAndTopicTree branchNum={0} />}
        {locn.branch !== 1 && <PillAndTopicTree branchNum={1} />}
        {locn.branch !== 2 && <PillAndTopicTree branchNum={2} />}
        {locn.branch !== 2 && <PillAndTopicTree branchNum={3} />}
      </>
    );
  };

  return (
    <>
      {winWidth < maxStackedWidth ? (
        // Narrow screen case
        <div className="flex flex-col">
          <PillGroup />
        </div>
      ) : winWidth < minRowWidth ? (
        // Middle screen width cases
        winWidth < mixedStackBreakPt ? (
          noneSelected ? (
            <div className="flex flex-col">
              <PillGroup branchNum={locn.branch} />
            </div>
          ) : (
            <div className="flex flex-col">
              <PillAndTopicTree branchNum={locn.branch} />
              <PillGroupConditional branchNum={locn.branch} />
            </div>
          )
        ) : noneSelected ? (
          <div className="flex flex-row">
            <PillGroup />
          </div>
        ) : (
          <div className="flex flex-row">
            <PillAndTopicTree branchNum={locn.branch} />
            <div className="flex flex-col">
              <PillGroupConditional branchNum={locn.branch} />
            </div>
          </div>
        )
      ) : (
        // Wide screen case
        <div className="flex flex-row">
          <PillGroup branchNum={locn.branch} />
        </div>
      )}
    </>
  );
};

export default PillsAndTrees;
