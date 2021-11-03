import React, { useState, useEffect, useRef, useContext, createContext } from "react";

import { branch } from "../content/branch";
import WindowSizeListener from "./WindowSizeListener";

export const myContext = createContext();
export const useMyContext = () => useContext(myContext);

const MyProvider = ({ children }) => {
  const log = true;
  const log2 = false;
  log && console.log("Context.js runs.");

  const nomScreenWidth = 720;
  const navBarHeight = 80; // in pixels

  const [winWidth, setWinWidth] = useState(nomScreenWidth);
  const [winHeight, setWinHeight] = useState((nomScreenWidth * 9) / 16);
  WindowSizeListener(setWinWidth, setWinHeight);

  let marginOuter = 50;
  if (typeof window !== `undefined` && winWidth > 100)
    marginOuter = winWidth < 510 ? 25 : winWidth < 720 ? 50 : winWidth < 1024 ? 75 : winWidth < 1600 ? 100 : 150;
  // Be sure that values for marginOuter correspond with those of stdMargins in /styles/tailwindStyles.css
  log && console.log("Context.js marginOuter=", marginOuter);

  const [widthAdjRatio, setWidthAdjRatio] = useState(winWidth / nomScreenWidth);
  useEffect(() => {
    setWidthAdjRatio(winWidth / nomScreenWidth);
    log && console.log("Context.js useEffect runs. Setting WidthAdjRatio=", winWidth / nomScreenWidth);
  }, [winWidth, log]);

  const [showContactForm, setShowContactForm] = useState(false);

  const [locn, setLocn] = useState({
    branch: 0,
    topic: 0,
    subtopic: 0,
    showSubtopic: false,
  });
  const [fullStoryID, setFullStoryID] = useState("");
  const [noneSelected, setNoneSelected] = useState(true);
  const scrollTarget = useRef("");
  const queryData = useRef({});

  // Refactor: Break this out into several context objects/values/providers, to reduce unnecessary re-renders
  const contextValues = {
    winWidth: winWidth,
    winHeight: winHeight,
    widthAdjRatio: widthAdjRatio,
    navBarHeight: navBarHeight,
    marginOuter: marginOuter,
    nomScreenWidth: nomScreenWidth,
    showContactForm: showContactForm,
    branch: branch,
    locn: locn,
    fullStoryID: fullStoryID,
    noneSelected: noneSelected,
    setWinWidth: setWinWidth,
    setWinHeight: setWinHeight,
    setShowContactForm: setShowContactForm,
    setLocn: setLocn,
    setNoneSelected: setNoneSelected,
    setFullStoryID: setFullStoryID,
    scrollTarget: scrollTarget,
    queryData: queryData,
    log: log,
    log2: log2,
  };

  return <myContext.Provider value={contextValues}>{children}</myContext.Provider>;
};

// eslint-disable-next-line
export default ({ element }) => <MyProvider>{element}</MyProvider>;
