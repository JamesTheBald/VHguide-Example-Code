// adapted from https://dev.to/reedbarger/how-to-create-a-usewindowsize-react-hook-2bcm
// and https://spectrum.chat/gatsby-js/general/error-window-is-not-available-during-server-side-rendering~4e299fae-8d72-4ceb-bd14-ec9954f04e62
import React, { useEffect } from "react";

const WindowSizeListener = (winWidth, setWinWidth, setWinHeight) => {
  const log2 = false;

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
      // only listen for changes in window width, to avoid 'scroll-to-top' bug on mobile. (Scrolling causes the scroll bar or browser navbar to appear/disappear, which changes the window height, which triggers a refresh (due to this listener), which causes the page to scroll to the top. 
      // https://stackoverflow.com/questions/17328742/mobile-chrome-fires-resize-event-on-scroll
      if (winWidth !== window.innerWidth) {
        setWinHeight(window.innerHeight);
        setWinWidth(window.innerWidth);
        log2 && console.log("WindowSizeListener.js Setting winWidth=", window.innerWidth);
        log2 && console.log("WindowSizeListener.js Setting winHeight=", window.innerHeight);
      }
    }, 300);
    window.addEventListener(`resize`, debouncedHandleResize);
    return () => window.removeEventListener(`resize`, debouncedHandleResize);
  }, [winWidth, setWinWidth, setWinHeight, log2]);

  return <></>;
};

export default WindowSizeListener;
