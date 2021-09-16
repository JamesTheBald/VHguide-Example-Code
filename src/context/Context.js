import React, { useState, useEffect, useRef, useContext, createContext } from "react";
import { branch } from "../content/branch";
import useWindowSize from "../functions/useWindowSize";

export const myContext = createContext();
export const useMyContext = () => useContext(myContext);

const MyProvider = ({ children }) => {
  const initLocn = {
    branch: 0,
    topic: 0,
    subtopic: 0,
    showSubtopic: false,
  };

  const nomScreenWidth = 1200;

  const { winWidth, winHeight } = useWindowSize();
  const [showContactForm, setShowContactForm] = useState(false);
  const [locn, setLocn] = useState(initLocn);
  const [widthAdjRatio, setWidthAdjRatio] = useState(winWidth / nomScreenWidth);
  // The following line is just so setWidthAdjRation is utilized, so no warning is issued.
  false && console.log(setWidthAdjRatio);
  const [fullStoryID, setFullStoryID] = useState("");
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [noneSelected, setNoneSelected] = useState(true);
  const scrollTarget = useRef("");
  const log = true;
  const log2 = false;
  log && console.log("Context.js runs.");

  useEffect(() => {
    setWidthAdjRatio(winWidth / nomScreenWidth);
    log && console.log("Context.js useEffect runs. Setting WidthAdjRatio=", winWidth / nomScreenWidth);
  }, [winWidth, log]);

  const marginOuter = winWidth < 510 ? 25 : winWidth < 720 ? 50 : winWidth < 1024 ? 50 : winWidth < 1600 ? 100 : 150;
  log && console.log("Context.js marginOuter=", marginOuter);

  // Refactor: Break this out into several context objects/values/providers, to reduce unnecessary re-renders
  const contextValues = {
    branch: branch,
    winWidth: winWidth,
    winHeight: winHeight,
    marginOuter: marginOuter,
    nomScreenWidth: nomScreenWidth,
    showContactForm: showContactForm,
    locn: locn,
    widthAdjRatio: widthAdjRatio,
    fullStoryID: fullStoryID,
    navBarOpen: navBarOpen,
    noneSelected: noneSelected,
    setShowContactForm: setShowContactForm,
    setLocn: setLocn,
    setNoneSelected: setNoneSelected,
    setNavBarOpen: setNavBarOpen,
    setFullStoryID: setFullStoryID,
    scrollTarget: scrollTarget,
    log: log,
    log2: log2,
  };

  return <myContext.Provider value={contextValues}>{children}</myContext.Provider>;
};

// eslint-disable-next-line
export default ({ element }) => <MyProvider>{element}</MyProvider>;
