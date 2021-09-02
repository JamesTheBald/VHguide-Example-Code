import React, { useState, useEffect, useContext, useCallback } from "react";
import { useHistory } from "react-router-dom";
import Context from "../Context";

import Pill from "./Pill";
import TopicTree from "./TopicTree";

const PillsAndTrees = (props) => {
  const { maxColWidth, marginOuter, noneSelected, setNoneSelected } = props;
  const [order, setOrder] = useState([0, 1, 2]);
  const { winWidth, branch, locn, setLocn, setNavBarOpen, setWinWidth, setWinHeight, log, log2 } = useContext(Context);

  log && console.log("");
  log && console.log("PillsAndTrees.js runs. locn=", locn);
  log && console.log("PillsAndTrees.js noneSelected=", noneSelected);

  const mixedStackBreakPt = 1444;
  const minRowWidth = 1800;
  const xGap = 50;
  let pillWidthWide;
  let pillWidthNarrow;
  let pillWidthMedium;

  if (winWidth < maxColWidth) {
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
  const [pillWidths, setPillWidths] = useState([pillWidthMedium, pillWidthMedium, pillWidthMedium]);

  const calcOrder = useCallback(
    (branchNum) => {
      let newOrder = [0, 1, 2];
      if (winWidth < minRowWidth) {
        newOrder = noneSelected || branchNum === 0 ? [0, 1, 2] : branchNum === 1 ? [1, 0, 2] : [1, 2, 0];
      }
      log2 && console.log("PillsAndTrees.js calcOrder() setting order to", newOrder);
      return newOrder;
    },
    [winWidth, minRowWidth, noneSelected, log2]
  );

  const calcPillWidthArray = useCallback(
    (currWidths) => {
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
    setOrder(calcOrder(locn.branch));
    setPillWidths((curr) => calcPillWidthArray(curr));
  }, [calcOrder, locn.branch, calcPillWidthArray]);

  const history = useHistory();
  const onClickExplore = (clickedBranchNum) => {
    setOrder(calcOrder(clickedBranchNum));
    setNoneSelected(branch[clickedBranchNum].linkToDetails ? true : false);
    setLocn((currLocn) => {
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
    branch[clickedBranchNum].linkToDetails;
    setWinWidth(window.innerWidth);
    setWinHeight(window.innerHeight);
    setPillWidths((curr) => calcPillWidthArray(curr));
    setNavBarOpen(false);
    if (branch[clickedBranchNum].linkToDetails) history.push("/details/overview");
  };

  const PillAndTopicTree = ({ branchNum }) => {
    return (
      <div
        className={`flex flex-col  ${order[branchNum] !== 2 ? "mr-12" : ""}
                                   ${winWidth < 510 ? "mb-8" : winWidth < 720 ? "mb-10" : "mb-12"}`}
        style={{ width: pillWidths[branchNum], order: order[branchNum] }}
      >
        <Pill branchNum={branchNum} onClickExplore={onClickExplore} noneSelected={noneSelected} />
        {locn.branch === branchNum && !noneSelected && !branch[branchNum].linkToDetails && (
          <TopicTree branchNum={branchNum} />
        )}
      </div>
    );
  };

  const PillGroup = () => {
    return (
      <>
        <PillAndTopicTree branchNum={0} />
        <PillAndTopicTree branchNum={1} />
        <PillAndTopicTree branchNum={2} />
      </>
    );
  };

  const PillGroupConditional = () => {
    return (
      <>
        {locn.branch !== 0 && <PillAndTopicTree branchNum={0} />}
        {locn.branch !== 1 && <PillAndTopicTree branchNum={1} />}
        {locn.branch !== 2 && <PillAndTopicTree branchNum={2} />}
      </>
    );
  };

  return (
    <>
      {winWidth < maxColWidth ? (
        // Narrow screen case
        <div className="flex flex-col">
          <PillGroup />
        </div>
      ) : winWidth < minRowWidth ? (
        // Middle screen width cases
        winWidth < mixedStackBreakPt ? (
          noneSelected ? (
            <div className="flex flex-col">
              <PillGroup />
            </div>
          ) : (
            <div className="flex flex-col">
              <PillAndTopicTree branchNum={locn.branch} />
              <PillGroupConditional />
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
              <PillGroupConditional />
            </div>
          </div>
        )
      ) : (
        // Wide screen case
        <div className="flex flex-row">
          <PillGroup />
        </div>
      )}
    </>
  );
};

export default PillsAndTrees;
