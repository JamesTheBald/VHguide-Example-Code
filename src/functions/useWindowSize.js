// from https://dev.to/reedbarger/how-to-create-a-usewindowsize-react-hook-2bcm
import React from "react";

export default function useWindowSize() {
  const isSSR = typeof window !== "undefined";

  const [windowSize, setWindowSize] = React.useState({
    winWidth: isSSR ? 1200 : window.innerWidth,
    winHeight: isSSR ? 800 : window.innerHeight,
  });

  const log2 = false;
  log2 && console.log("useWindowSize.js runs. isSSR=", isSSR);
  log2 && console.log("useWindowSize.js runs. winWidth=", windowSize.winWidth);
  log2 && console.log("useWindowSize.js runs. winHeight=", windowSize.winHeight);

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
