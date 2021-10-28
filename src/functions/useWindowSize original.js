// from https://dev.to/reedbarger/how-to-create-a-usewindowsize-react-hook-2bcm
// and https://spectrum.chat/gatsby-js/general/error-window-is-not-available-during-server-side-rendering~4e299fae-8d72-4ceb-bd14-ec9954f04e62
import { useState, useEffect } from "react";

export default function useWindowSize() {
  const log2 = true;

  let height;
  let width;

  if (typeof window !== `undefined`) {
    height = window.innerHeight;
    width = window.innerWidth;
  }

  const [windowSize, setWindowSize] = useState({
    winWidth: width,
    winHeight: height,
  });

  const debounce = (func, timeout) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };

  useEffect(() => {
    // Debounce function to check window resizing every n=300 milliseconds
    const debouncedHandleResize = debounce(function handleResize() {
      setWindowSize({
        winHeight: window.innerHeight,
        winWidth: window.innerWidth,
      });
      log2 && console.log("useWindowSize.js Setting winWidth=", window.innerWidth);
      log2 && console.log("useWindowSize.js Setting winHeight=", window.innerHeight);
    }, 300);
    window.addEventListener(`resize`, debouncedHandleResize);
    return () => window.removeEventListener(`resize`, debouncedHandleResize);
  }, [log2, setWindowSize]);

  return windowSize;
}
