import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import "../../styles/splide.css";
import landingContent from "../../content/landingContent";
import Home1TopPanel from "./Home1TopPanel";
import { useMyContext } from "../../context/Context";

const Home1TopCarousel = () => {
  const { log, log2 } = useMyContext();
  0 && console.log(log, log2);

  return (
    <>
      <div className="w-screen overflow-hidden">
        <Splide
          options={{
            gap: 40,
            speed: 1200,
            autoplay: false, // default=true
            interval: 2000,
            rewind: true, // default=false
            rewindSpeed: 2000,
            pauseOnHover: true,
            pauseOnFocus: true,
            lazyLoad: "nearby",
            arrows: false,
            drag: true, // default=true
          }}
        >
          {landingContent.map((currContent, index) => {
            log2 && console.log("Home1TopCarousel.js index=", index, "& content=", currContent);

            return (
              <SplideSlide key={index} className="relative">
                <Home1TopPanel content={currContent} />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </>
  );
};

export default Home1TopCarousel;
