import React, { useState, useRef, useContext, createContext } from "react";
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
  const [fullStoryID, setFullStoryID] = useState("");
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [noneSelected, setNoneSelected] = useState(true);
  const scrollTarget = useRef("");
  const log = true;
  const log2 = false;

  false && console.log(setWidthAdjRatio);

  // Refactor: Break this out into several context objects/values/providers, to reduce unnecessary re-renders
  const contextValues = {
    branch: branch,
    winWidth: winWidth,
    winHeight: winHeight,
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
