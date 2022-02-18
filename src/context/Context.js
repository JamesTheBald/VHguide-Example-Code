import React, { useState, useEffect, useRef, useContext, createContext } from "react";

import { branch } from "../content/branch";
import WindowSizeListener from "./WindowSizeListener";

export const myContext = createContext();
export const useMyContext = () => useContext(myContext);

const MyProvider = ({ children }) => {
  const log = true;
  const log2 = false;
  log2 && console.log("Context.js runs.");

  const nomScreenWidth = 720; // Key parameter - much formatting is based on this width
  
  const [winWidth, setWinWidth] = useState(nomScreenWidth);
  const [winHeight, setWinHeight] = useState((nomScreenWidth * 9) / 16);
  WindowSizeListener(winWidth, setWinWidth, setWinHeight);

  let marginOuter = 50;
  if (typeof window !== `undefined` && winWidth > 100)
    marginOuter = winWidth < 510 ? 25 : winWidth < 720 ? 50 : winWidth < 1024 ? 75 : winWidth < 1600 ? 100 : 150;
  // Be sure that values for marginOuter correspond with those of stdMargins in /styles/tailwindStyles.css
  log2 && console.log("Context.js runs. marginOuter=", marginOuter);

  const [widthAdjRatio, setWidthAdjRatio] = useState(winWidth / nomScreenWidth);
  useEffect(() => {
    setWidthAdjRatio(winWidth / nomScreenWidth);
    log2 && console.log("Context.js useEffect runs. Setting WidthAdjRatio=", winWidth / nomScreenWidth);
  }, [winWidth, log2]);

  const [showContactForm, setShowContactForm] = useState(false);
  const [fixedBackdrop, setFixedBackdrop] = useState(false);

  const [locn, setLocn] = useState({
    branch: 0,
    topic: 0,
    subtopic: 0,
    showSubtopic: false,
  });
  // const [contentID, setContentID] = useState();
  const [fullStoryID, setFullStoryID] = useState("");

  // pedQuoteGroupInitOpen array allows the appropriate quote group on Pediatrics' Details-Advice page to be expanded upon arrival on the page, after clicking on that topic on <PediatricsOverviewTheySay />
  const pedQuoteGroupInitOpen = useRef(Array(10).fill(false));
  log2 && console.log("Context.js pedQuoteGroupInitOpen.current=", pedQuoteGroupInitOpen.current);

  const [noneSelected, setNoneSelected] = useState(true);
  const queryData = useRef({});

  // One day: Break this out into several context objects/values/providers, to reduce unnecessary re-renders
  const contextValues = {
    winWidth: winWidth,
    winHeight: winHeight,
    widthAdjRatio: widthAdjRatio,
    marginOuter: marginOuter,
    nomScreenWidth: nomScreenWidth,
    showContactForm: showContactForm,
    fixedBackdrop: fixedBackdrop,
    branch: branch,
    locn: locn,
    // contentID: contentID,
    fullStoryID: fullStoryID,
    noneSelected: noneSelected,
    pedQuoteGroupInitOpen: pedQuoteGroupInitOpen,
    setWinWidth: setWinWidth,
    setWinHeight: setWinHeight,
    setShowContactForm: setShowContactForm,
    setFixedBackdrop: setFixedBackdrop,
    setLocn: setLocn,
    // setContentID: setContentID,
    setNoneSelected: setNoneSelected,
    setFullStoryID: setFullStoryID,
    queryData: queryData,
    log: log,
    log2: log2,
  };

  return <myContext.Provider value={contextValues}>{children}</myContext.Provider>;
};

// eslint-disable-next-line
export default ({ element }) => <MyProvider>{element}</MyProvider>;
