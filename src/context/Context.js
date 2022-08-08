import React, { useState, useEffect, useRef, useContext, createContext } from "react";

import isValidLang from "../functions/isValidLang";
import getContIDandName from "../functions/getContIDandName";
import setAdviceAndRelateds from "../functions/setAdviceAndRelateds";

import { branchEN } from "../content/branchEN";
import { branchFR } from "../content/branchFR";
import WindowSizeListener from "./WindowSizeListener";

const myContext = createContext();
export const useMyContext = () => useContext(myContext);

const MyProvider = ({ children }) => {
  // This context function is invoked by most components... so a lot!

  const log = false; // for important debugging output
  const log2 = false; // for more complete debugging output

  // STATE VARIABLES FOR FORMATTING
  const nomScreenWidth = 720; // Key parameter - much formatting is based on this width
  const fsmBrkPt = 880; // This must match the fsm: ("fairly small") breakpoint width in tailwind.config.js
  const [winWidth, setWinWidth] = useState(nomScreenWidth);
  const [winHeight, setWinHeight] = useState((nomScreenWidth * 9) / 16);
  WindowSizeListener(winWidth, setWinWidth, setWinHeight); // for automatic content resizing upon window size change

  let marginOuter = 50;
  if (typeof window !== `undefined` && winWidth > 100)
    marginOuter = winWidth < 510 ? 25 : winWidth < 720 ? 50 : winWidth < 1024 ? 75 : winWidth < 1600 ? 100 : 150;
  // Be sure that values for marginOuter correspond with those of stdMargins in /styles/tailwindStyles.css
  log2 && console.log("Context.js marginOuter=", marginOuter);

  const [widthAdjRatio, setWidthAdjRatio] = useState(winWidth / nomScreenWidth);
  useEffect(() => {
    setWidthAdjRatio(winWidth / nomScreenWidth);
    log2 && console.log("Context.js useEffect runs. Setting WidthAdjRatio=", winWidth / nomScreenWidth);
  }, [winWidth, log2]);

  const [showContactForm, setShowContactForm] = useState(false);
  const [fixedBackdrop, setFixedBackdrop] = useState(false); // This is to prevent the background from scrolling when a modal is open

  // STATE FOR CONTENT
  const queryData = useRef({});
  const [locn, setLocn] = useState({
    branch: 0,
    topic: 0,
    subtopic: 0,
    showSubtopic: false,
  });
  const initLang = "EN"; // Declare temp variables so it can be used without useState async delay. (Is this necessary?)
  const [lang, setLang] = useState(initLang); // Sets current language. default is "EN" for English, alt is "FR" for French
  const [branch, setBranch] = useState(initLang === "EN" ? branchEN : branchFR);
  const [contentID, setContentID] = useState("");
  const [fullStoryID, setFullStoryID] = useState("");
  const [hesType, setHesType] = useState();
  const [advice, setAdvice] = useState();
  const [related, setRelated] = useState();

  log && console.log("Context.js runs. lang =", lang, " and locn=", locn);

  // Retrieve storedLang and update lang to be same as storedLang, if it's different
  if (typeof sessionStorage !== `undefined`) {
    // Global vars like sessionStorage should first be tested typeof test (or a useEffect) for Gatsby build to succeed. See Gatsby docs

    const storedLang = sessionStorage.getItem("lang");
    log && console.log("Context.js sessionStorage retrieved storedLang=", storedLang);

    if (isValidLang(storedLang)) {
      if (storedLang !== lang) {
        log && console.log("Context.js Updating lang to storedLang =", storedLang);
        setLang(storedLang);

        // Update branch to match language
        const newBranch = storedLang === "EN" ? branchEN : branchFR;
        log && console.log("Context.js Setting branch=", newBranch);
        setBranch(newBranch);
      } else {
        log2 && console.log("Context.js No change to lang or branch.");
      }
    } else {
      log && console.log("Context.js storedLang not valid so storing lang=", lang);
      sessionStorage.setItem("lang", lang);
    }
  }

  // The following function calls are inside a useEffect to avoid extra re-renders due to the setState function calls
  useEffect(() => {
    const { contIDTemp, hesTypeTemp } = getContIDandName(locn, branch, setContentID, setHesType, log, log2);
    log && console.log("Context.js contentIDTemp=", contIDTemp, " and hesTypeTemp=", hesTypeTemp);

    setAdviceAndRelateds(contIDTemp, setAdvice, setRelated, log, log2);
  }, [locn, branch, setContentID, setHesType, setAdvice, setRelated, log, log2]);

  //
  // STATE FOR DISPLAY SETTINGS
  const [noPillSelected, setNoPillSelected] = useState(true);
  const pedQuoteGroupInitOpen = useRef(Array(20).fill(false));
  // pedQuoteGroupInitOpen array allows the appropriate quote group on Pediatrics' Details-Advice page to be expanded
  // upon arrival on the page, after clicking on that topic on < PediatricsOverviewTheySay />

  // STATE OUTPUT
  const contextValues = {
    winWidth: winWidth,
    winHeight: winHeight,
    widthAdjRatio: widthAdjRatio,
    fsmBrkPt: fsmBrkPt,
    marginOuter: marginOuter,
    nomScreenWidth: nomScreenWidth,
    showContactForm: showContactForm,
    fixedBackdrop: fixedBackdrop,
    branch: branch,
    locn: locn,
    lang: lang,
    contentID,
    hesType,
    advice,
    related,
    fullStoryID: fullStoryID,
    noPillSelected: noPillSelected,
    pedQuoteGroupInitOpen: pedQuoteGroupInitOpen,
    setWinWidth: setWinWidth,
    setWinHeight: setWinHeight,
    setShowContactForm: setShowContactForm,
    setFixedBackdrop: setFixedBackdrop,
    setLocn: setLocn,
    setLang: setLang,
    setBranch: setBranch,
    setNoPillSelected: setNoPillSelected,
    setFullStoryID: setFullStoryID,
    queryData: queryData,
    log: log,
    log2: log2,
  };
  // Consider breaking this out into several context objects/values/providers, if that will reduce unnecessary re-renders

  return <myContext.Provider value={contextValues}>{children}</myContext.Provider>;
};

// eslint-disable-next-line
export default ({ element }) => <MyProvider>{element}</MyProvider>;
