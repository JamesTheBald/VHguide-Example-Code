import React, { useState, useEffect } from "react";
import { Link, graphql } from "gatsby";
import { animateScroll } from "react-scroll";

import { useMyContext } from "../context/Context";
import Layout from "../components/0nav&footer/NavFooterLayout";
import Home1TopPage from "../components/1home&explore/Home1TopPanel";
import Home2HesTypes from "../components/1home&explore/Home2HesTypes";
import Home3WhoWeAre from "../components/1home&explore/Home3WhoWeAre";
import Home4TestimonialsEtc from "../components/1home&explore/Home4TestimonialsEtc";

const Home = props => {
  const { data } = props;
  const { winWidth, setWinWidth, setWinHeight, setNavBarOpen, setNoneSelected, showContactForm, queryData } =
    useMyContext();
  queryData.current = data;

  const [topGap2, setTopGap2] = useState(
    winWidth < 510 ? 110 : winWidth < 720 ? 180 : winWidth < 1024 ? 150 : winWidth < 1600 ? 180 : 200
  );

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const wid = window.innerWidth;
      console.log("index.js useEffect has mounted, window var is defined. Setting winWidth, winHeight & topGap2.");
      setWinWidth(wid);
      setWinHeight(window.innerHeight);
      setTopGap2(wid < 510 ? 130 : wid < 720 ? 140 : wid < 1024 ? 150 : wid < 1366 ? 180 : 200);
    } else {
      console.log("index.js HAS MOUNTED BUT WINDOW VAR IS STILL UNDEFINED!! Trying again after delay.");
      const timer = setTimeout(setWinWidth(window.innerWidth), 500);
      // The above use of window.innerWidth will kick an error if window var is STILL undefined after timeout
      clearTimeout(timer);
    }
  }, [setWinWidth, setWinHeight]);

  const BrowseButton = props => {
    const { colors } = props;
    return (
      <Link
        to="/explore"
        className={`pt-1  rounded-full cursor-pointer flex justify-center items-center  smThenBaseFont mxs:text-18  border-2 ${colors}`}
        style={props.style}
        onClick={() => {
          setNoneSelected(true);
          setNavBarOpen(false);
          if (typeof window !== `undefined`) {
            animateScroll.scrollToTop({ duration: 0 }); // time in ms
          }
        }}
      >
        <button>Browse Hesitancy Types</button>
      </Link>
    );
  };

  return (
    <>
      <main className={`${showContactForm ? "fixed" : ""}  spacerFooter bg-white text-blue-black overflow-x-hidden`}>
        <Home1TopPage BrowseButton={BrowseButton} />
        <Home2HesTypes topGap2={topGap2} BrowseButton={BrowseButton} />
        <Home3WhoWeAre topGap2={topGap2} />
        <Home4TestimonialsEtc topGap2={topGap2} />
        <div className="w-full h-30 md:h-40 xl:h-50"></div>
      </main>
    </>
  );
};

export const query = graphql`
  query ImagesQuery {
    homepagePics: allFile(filter: { sourceInstanceName: { eq: "homepagePics" }, extension: { eq: "jpg" } }) {
      edges {
        node {
          dir
          relativePath
          sourceInstanceName
          childImageSharp {
            gatsbyImageData(formats: JPG, placeholder: BLURRED)
          }
        }
      }
    }
    featuredOnLogos: allFile(filter: { sourceInstanceName: { eq: "featuredOnLogos" } }) {
      edges {
        node {
          dir
          relativePath
          sourceInstanceName
          childImageSharp {
            gatsbyImageData(formats: AUTO, quality: 90, placeholder: BLURRED, layout: CONSTRAINED, height: 120)
          }
          publicURL
        }
      }
    }
    collabLogos: allFile(filter: { sourceInstanceName: { eq: "collabLogos" } }) {
      edges {
        node {
          dir
          relativePath
          sourceInstanceName
          publicURL
        }
      }
    }
    pplIcons: allFile(filter: { sourceInstanceName: { eq: "peopleIcons" }, extension: { eq: "svg" } }) {
      edges {
        node {
          dir
          relativePath
          sourceInstanceName
          publicURL
        }
      }
    }
    webinarShots: allFile(filter: { sourceInstanceName: { eq: "webinarShots" } }) {
      edges {
        node {
          dir
          relativePath
          sourceInstanceName
          childImageSharp {
            gatsbyImageData(formats: AUTO, placeholder: BLURRED, height: 300)
          }
          publicURL
        }
      }
    }
  }
`;

Home.Layout = Layout;
// Above Layout assigning follows https://dev.to/milescrighton/keeping-persistent-ui-across-routes-with-gatsby-s-wrappageelement-4o22

export default Home;
