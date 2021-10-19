import React from "react";
import { navigate } from "gatsby";
// import { StaticImage } from "gatsby-plugin-image";
import { useMyContext } from "../../context/Context";

const AdviceEaaseIconAndText = props => {
  const { advice, tab, pplIconsData } = props;
  const { winWidth, setNavBarOpen, log, log2 } = useMyContext();

  log && console.log("AdviceEaaseIconAndText.js advice.eaase[tab]=", advice?.eaase[tab]);
  log && console.log("AdviceEaaseIconAndText.js pplIconsData.pplIcons.edges=", pplIconsData.pplIcons.edges);

  const adviceTabNames = {
    engage: "engage",
    affirm: "affirm",
    ask: "ask and share",
    evoke: "evoke",
  };

  const changeAdviceTab = tab => {
    navigate("/details/advice/" + tab);
    setNavBarOpen(false);
  };

  const IconImage = () => {
    log2 && console.log("AdviceEaaseIconAndText.js advice.eaase[tab].image=", advice.eaase[tab].image);
    return (
      <>
        {pplIconsData.pplIcons.edges.map((item, index) => {
          if (item.node.relativePath === advice.eaase[tab].image) {
            return (
              <div key={index}>
                <img
                  src={item.node.publicURL}
                  alt="Doctor Icon"
                  className="float-left mr-3 sm:mr-4 mb-2  w-10 h-10 mxs:w-16 mxs:h-16  sm:w-22 sm:h-22"
                />
              </div>
            );
          } else {
            return null;
          }
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
        <>
          <div className="mt-3 mb-2 flex flex-row">
            <IconImage />
            <div className="flex flex-col">
              <TextBlock />
              <MoreWaysPill />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AdviceEaaseIconAndText;
