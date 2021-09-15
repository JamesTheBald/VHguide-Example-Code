import React from "react";
import { Link } from "gatsby";

import { useMyContext } from "../context/Context";
import Layout from "../components/0nav&footer/NavFooterLayout";
import Home1TopPage from "../components/1home&explore/Home1TopPanel";
import Home2HesTypes from "../components/1home&explore/Home2HesTypes";
import Home3WhoWeAre from "../components/1home&explore/Home3WhoWeAre";
import Home4TestimonialsEtc from "../components/1home&explore/Home4TestimonialsEtc";

const Home = () => {
  const { winWidth, setNoneSelected, showContactForm } = useMyContext();

  const outerGap = winWidth < 510 ? 25 : winWidth < 720 ? 50 : winWidth < 1024 ? 50 : winWidth < 1600 ? 100 : 150;
  const topGap = winWidth < 510 ? 110 : winWidth < 720 ? 130 : winWidth < 1024 ? 150 : winWidth < 1600 ? 180 : 200;
  const buttonWidth = winWidth < 510 ? 210 : 322;
  const buttonHeight = winWidth < 510 ? 36 : 50;

  // const onClickGoToExplore = () => {
  //   setNoneSelected(true);
  // };

  const BrowseButton = props => {
    const { colors } = props;
    return (
      <Link
        to="/explore"
        className={`pt-1  rounded-full cursor-pointer flex justify-center items-center  smThenBaseFont mxs:text-18  border-2 ${colors}`}
        style={{ width: buttonWidth, height: buttonHeight }}
        onClick={() => setNoneSelected(true)}
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
