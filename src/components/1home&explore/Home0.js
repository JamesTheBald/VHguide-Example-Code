import React from "react";
import { navigate } from "gatsby";

import { useMyContext } from "../../context/Context";

import Home1TopPage from "./Home1TopPanel";
import Home2HesTypes from "./Home2HesTypes";
import Home3WhoWeAre from "./Home3WhoWeAre";
import Home4TestimonialsEtc from "./Home4TestimonialsEtc";

const Home0 = () => {
  const { showContactForm, winWidth, setLocn, setNavBarOpen,setNoneSelected, log } = useMyContext;
  log && console.log("Home.js runs. winWidth=", winWidth);

  const onClickGoToExplore = () => {
    setLocn(() => {
      const newLocn = {
        branch: 0,
        topic: 0,
        subtopic: 0,
        showSubtopic: false,
      };
      log && console.log("Home.js onClickGoToExplore resetting locn.branch");
      return newLocn;
    });
    setNoneSelected(true);
    setNavBarOpen(false);
    navigate("/explore");
  };

  // const outerGap = 150 * widthAdjRatio;
  const outerGap = winWidth < 510 ? 25 : winWidth < 720 ? 50 : winWidth < 1024 ? 50 : winWidth < 1600 ? 100 : 150;
  const topGap = winWidth < 510 ? 110 : winWidth < 720 ? 130 : winWidth < 1024 ? 150 : winWidth < 1600 ? 180 : 200;
  const buttonWidth = winWidth < 510 ? 210 : 322;
  const buttonHeight = winWidth < 510 ? 36 : 50;

  const BrowseButton = (props) => {
    const { colors } = props;
    return (
      <button
        className={`pt-1  rounded-full cursor-pointer flex justify-center items-center  smThenBaseFont mxs:text-18  border-2 ${colors}`}
        style={{ width: buttonWidth, height: buttonHeight }}
        onClick={() => onClickGoToExplore()}
      >
        <h2>Browse Hesitancy Types</h2>
      </button>
    );
  };

  return (
    <div className={`${showContactForm ? "fixed" : ""}  spacerFooter bg-white text-blue-black overflow-x-hidden`}>
      <Home1TopPage outerGap={outerGap} BrowseButton={BrowseButton} />
      <Home2HesTypes outerGap={outerGap} topGap={topGap} BrowseButton={BrowseButton} />
      <Home3WhoWeAre outerGap={outerGap} topGap={topGap} />
      <Home4TestimonialsEtc outerGap={outerGap} topGap={topGap} />

      <div className="w-full h-30 md:h-40 xl:h-50"></div>
    </div>
  );
};

export default Home0;
