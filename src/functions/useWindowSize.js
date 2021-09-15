// from https://dev.to/reedbarger/how-to-create-a-usewindowsize-react-hook-2bcm
import React from "react";

export default function useWindowSize() {
  const isSSR = typeof window !== "undefined";
  
  
  
  const [windowSize, setWindowSize] = React.useState({
    winWidth: isSSR ? 1200 : window.innerWidth,
    winHeight: isSSR ? 800 : window.innerHeight,
  });

  function changeWindowSize() {
    setWindowSize({ winWidth: window.innerWidth, winHeight: window.innerHeight });
  }

  React.useEffect(() => {
    changeWindowSize();
    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return windowSize;
}