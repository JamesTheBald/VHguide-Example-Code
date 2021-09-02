import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
// import { animateScroll } from "react-scroll";
import Context from "../Context";

const AdviceEaaseIconAndText = (props) => {
  const { advice, tab } = props;
  const { winWidth, setNavBarOpen } = useContext(Context);

  // log && console.log("AdviceEaaseIconAndText.js advice.eaase[tab]=", advice?.eaase[tab]);
  // const winWidth = window.innerWidth;

  const adviceTabNames = {
    engage: "engage",
    affirm: "affirm",
    ask: "ask and share",
    evoke: "evoke",
  };

  const history = useHistory();
  const changeAdviceTab = (tab) => {
    history.push("/details/advice/" + tab);
    setNavBarOpen(false);
  };

  const IconImage = () => {
    return (
      <img
        src={advice.eaase[tab].image}
        alt="Icon image"
        className="float-left mr-3 sm:mr-4 mb-2  w-10 h-10 mxs:w-16 mxs:h-16  sm:w-22 sm:h-22"
      />
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
      <div className="mt-2 mr-auto  px-3 pt-1  smFont orangeLink linkPill" onClick={() => changeAdviceTab(tab)}>
        More ways to {adviceTabNames[tab]}
      </div>
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
