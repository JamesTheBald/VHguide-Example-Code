import React from "react";
import { navigate } from "gatsby";

import { useMyContext } from "../../context/Context";

const AdviceEaaseIconAndText = props => {
  const { advice, tab } = props;
  const { winWidth, queryData, log2 } = useMyContext();

  log2 && console.log("AdviceEaaseIconAndText.js advice.eaase[tab].image=", advice?.eaase[tab].image);

  const pplIcons = queryData.current.pplIcons.edges;
  log2 && console.log("AdviceEaaseIconAndText.js pplIcons=", pplIcons);

  const adviceTabNames = {
    engage: "engage",
    affirm: "affirm",
    ask: "ask and share",
    evoke: "evoke",
  };

  const changeAdviceTab = tab => navigate("/details/advice/" + tab);

  const IconImage = () => {
    return (
      <>
        {pplIcons.map((item, index) => {
          return (
            item.node.relativePath === advice.eaase[tab].image && (
              <img
                key={index}
                src={item.node.publicURL}
                alt="Doctor Icon"
                className="mr-3 sm:mr-4 mb-2  w-10 h-10 mxs:w-16 mxs:h-16  sm:w-22 sm:h-22"
              />
            )
          );
        })}
      </>
    );
  };

  const TextBlock = () => {
    return (
      <div className="baseFont text-blue-black">
        <span>&quot;</span>
        {advice.eaase[tab].text}
        <span>&quot;</span>
      </div>
    );
  };

  const MoreWaysPill = () => {
    return (
      <button
        className="mt-2 mr-auto  px-3 pt-1  smFont orangeLink linkPill"
        onClick={() => changeAdviceTab(tab)}
        onKeyPress={() => changeAdviceTab(tab)}
      >
        More ways to {adviceTabNames[tab]}
      </button>
    );
  };

  return (
    <>
      {winWidth < 510 ? (
        <div className="mt-3 mb-2 flex flex-col">
          <div>
            <IconImage />
            <TextBlock />
          </div>
          <MoreWaysPill />
        </div>
      ) : (
        <div className="mt-3 mb-2 flex flex-row">
          <IconImage />
          <div className="flex flex-col flex-shrink">
            <TextBlock />
            <MoreWaysPill />
          </div>
        </div>
      )}
    </>
  );
};

export default AdviceEaaseIconAndText;
