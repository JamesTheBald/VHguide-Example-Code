import React, { useState, useRef } from "react";
// import React, { useState, useRef, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { detect } from "detect-browser";

import "../../styles/splide.css";
import landingSlidesContentBI from "../../content/landingSlidesContentBI";
import Home1TopPanel from "./Home1TopPanel";
import { useMyContext } from "../../context/Context";

const Home1TopCarousel = () => {
  const { winWidth, lang, log, log2 } = useMyContext();
  0 && console.log(log, log2);

  const [showFullIntro, setShowFullIntro] = useState(false);
  const panelHtClass =
    lang === "EN"
      ? `${showFullIntro ? "h-200" : "h-190"} mxs:h-220 sm:h-240 md:h-260 lg:h-210 xl:h-220`
      : `${showFullIntro ? "h-220" : "h-190"} mxs:h-240 sm:h-270 md:h-260 lg:h-210 xl:h-220`;

  const browser = detect(); // from https://www.npmjs.com/package/detect-browser
  log2 && console.log("Home1TopCarousel.js browser object=", browser);

  let isMobile = false;
  if (typeof window !== `undefined`) isMobile = window.matchMedia("only screen and (max-width: 1024px)").matches;
  // See Dekin88's answer on https://stackoverflow.com/questions/3514784/what-is-the-best-way-to-detect-a-mobile-device

  const slideSpeed = browser.name === "safari" ? 300 : isMobile ? 600 : 1200;
  // faster sliding on Safari because it doesn't render the slide content until the slide stops sliding

  const splideRef = useRef();

  // useEffect(() => {
  //   if (lang === "FR" && currContent.buttonFuncFlag === "french")
  //     // may need to set currContent.buttonFuncFlag to a useRef.current within the .map below, so this value is accessible here.
  //         splideRef.current.splide.go('>'); // switches to the next carousel slide. See https://splidejs.com/guides/apis/#go
  //  }, [lang, splideRef]);

  return (
    <>
      <div className="overflow-hidden" style={{ width: winWidth - 15 }}>
        <Splide
          options={{
            type: "slide",
            gap: 40,
            speed: slideSpeed, // slide-across time in ms
            waitForTransition: true, // default=true
            autoplay: true, // default=true
            interval: 15000,
            rewind: true, // default=false
            rewindSpeed: 2000,
            pauseOnHover: false,
            pauseOnFocus: false,
            drag: true, // default=true
            lazyLoad: "nearby", // default = false
            preloadPages: 1,
            arrows: false, // default=true
          }}
          ref={splideRef}
        >
          {landingSlidesContentBI.map((currContent, index) => {
            log2 && console.log("Home1TopCarousel.js index=", index, "& content=", currContent);

            // if (lang === "FR" && currContent.buttonFuncFlag === "french") return null;
            // Returning null creates a mismatch between the number of slides on the EN and FR sites, which causes navigation problems (eg. nav dots stop working)

            return (
              <SplideSlide key={index} className={`relative ${panelHtClass}`}>
                <Home1TopPanel
                  content={currContent}
                  showFullIntro={showFullIntro}
                  setShowFullIntro={setShowFullIntro}
                />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </>
  );
};

export default Home1TopCarousel;
