import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

import { useMyContext } from "../context/Context";
import Layout from "../components/0nav&footer/NavFooterLayout";
import Home1TopPage from "../components/1home&explore/Home1TopPanel";
import Home2HesTypes from "../components/1home&explore/Home2HesTypes";
import Home3WhoWeAre from "../components/1home&explore/Home3WhoWeAre";
import Home4TestimonialsEtc from "../components/1home&explore/Home4TestimonialsEtc";

const Home = () => {
  const { showContactForm, setNavBarOpen, setLocn, setNoneSelected } = useMyContext;

  const log1 = true;

  // Initial screen is static, so winWidth and other values from context are undefined initially
  // ADD A LISTENER FOR WINDOW WIDTH
  const [winWidth1, setWinWidth1] = useState(1000);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWinWidth1 (window.innerWidth);
      log1 && console.log("Home0.js useEffect setting winWidth =", winWidth1)
    }
  }, [winWidth1]);

  // const outerGap = 150 * widthAdjRatio;
  const outerGap = winWidth1 < 510 ? 25 : winWidth1 < 720 ? 50 : winWidth1 < 1024 ? 50 : winWidth1 < 1600 ? 100 : 150;
  const topGap = winWidth1 < 510 ? 110 : winWidth1 < 720 ? 130 : winWidth1 < 1024 ? 150 : winWidth1 < 1600 ? 180 : 200;
  const buttonWidth = winWidth1 < 510 ? 210 : 322;
  const buttonHeight = winWidth1 < 510 ? 36 : 50;

  const BrowseButton = props => {
    const { colors } = props;
    return (
      <Link
        to="/explore"
        className={`pt-1  rounded-full cursor-pointer flex justify-center items-center  smThenBaseFont mxs:text-18  border-2 ${colors}`}
        style={{ width: buttonWidth, height: buttonHeight }}
        // onClick={() => onClickGoToExplore()}
      >
        <h2>Browse Hesitancy Types</h2>
      </Link>
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

Home.Layout = Layout;
// Above Layout assigning follows https://dev.to/milescrighton/keeping-persistent-ui-across-routes-with-gatsby-s-wrappageelement-4o22

export default Home;
