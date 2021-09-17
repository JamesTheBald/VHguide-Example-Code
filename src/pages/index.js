import React from "react";
import { Link } from "gatsby";

import { useMyContext } from "../context/Context";
import Layout from "../components/0nav&footer/NavFooterLayout";
import Home1TopPage from "../components/1home&explore/Home1TopPanel";
import Home2HesTypes from "../components/1home&explore/Home2HesTypes";
import Home3WhoWeAre from "../components/1home&explore/Home3WhoWeAre";
import Home4TestimonialsEtc from "../components/1home&explore/Home4TestimonialsEtc";

const Home = () => {
  const { winWidth, setNavBarOpen, setNoneSelected, showContactForm } = useMyContext();

  const topGap = winWidth < 510 ? 110 : winWidth < 720 ? 130 : winWidth < 1024 ? 150 : winWidth < 1600 ? 180 : 200;

  const BrowseButton = props => {
    const { colors } = props;
    return (
      <Link
        to="/explore"
        className={`pt-1  rounded-full cursor-pointer flex justify-center items-center  smThenBaseFont mxs:text-18  border-2 ${colors}`}
        style={props.style}
        // style={{ width: buttonWidth, height: buttonHeight }}
        onClick={() => {
          setNoneSelected(true);
          setNavBarOpen(false);
        }}
      >
        <h2>Browse Hesitancy Types</h2>
      </Link>
    );
  };

  return (
    <div className={`${showContactForm ? "fixed" : ""}  spacerFooter bg-white text-blue-black overflow-x-hidden`}>
      <Home1TopPage BrowseButton={BrowseButton} />
      <Home2HesTypes topGap={topGap} BrowseButton={BrowseButton} />
      <Home3WhoWeAre topGap={topGap} />
      <Home4TestimonialsEtc topGap={topGap} />
      <div className="w-full h-30 md:h-40 xl:h-50"></div>
    </div>
  );
};

Home.Layout = Layout;
// Above Layout assigning follows https://dev.to/milescrighton/keeping-persistent-ui-across-routes-with-gatsby-s-wrappageelement-4o22

export default Home;
