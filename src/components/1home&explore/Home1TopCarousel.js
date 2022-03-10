import React, { useState } from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

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
            gap: 40,
            speed: 1200,  // slide-across time in ms
            autoplay: false, // default=true
            interval: 10000,
            rewind: true, // default=false
            rewindSpeed: 2000,
            pauseOnHover: true,
            pauseOnFocus: false,
            lazyLoad: "nearby",
            arrows: false,  // default=true
            drag: true, // default=true
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
