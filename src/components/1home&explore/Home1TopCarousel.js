import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { isMobile } from 'react-device-detect';

import "../../styles/splide.css";
import landingContent from "../../content/landingContent";
import Home1TopPanel from "./Home1TopPanel";
import { useMyContext } from "../../context/Context";

const Home1TopCarousel = () => {
  const { log, log2 } = useMyContext();
  0 && console.log(log, log2);

  const [showFullIntro, setShowFullIntro] = useState(false);
  const panelHtClass = `${showFullIntro ? "h-195" : "h-180"} mxs:h-220 sm:h-240 md:h-260 lg:h-210 xl:h-220`;

  return (
    <>
      <div className="w-screen overflow-hidden">
        <Splide
          options={{
            type: "slide",
            gap: 40,
            speed: isMobile ? 600 : 1200,  // slide-across time in ms
            waitForTransition: false,  // default=true
            autoplay: true, // default=true
            interval: 15000,
            rewind: true, // default=false
            rewindSpeed: 2000,
            pauseOnHover: false,
            pauseOnFocus: false,
            drag: true, // default=true
            lazyLoad: false, // default = false
            arrows: false,  // default=true
            // updateOnMove: true,  // default=false
          }}
        >
          {landingContent.map((currContent, index) => {
            log2 && console.log("Home1TopCarousel.js index=", index, "& content=", currContent);

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
