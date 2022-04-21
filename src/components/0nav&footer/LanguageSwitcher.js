import React from "react";

import { useMyContext } from "../../context/Context";
import { branchFR } from "../../content/branchFR";
import { branchEN } from "../../content/branchEN";

const LanguageSwitcher = props => {
  const { className } = props;
  const { winWidth, lang, setLang, setBranch, log } = useMyContext();

  const widthLg = 800;  // This should match the fsm: ("fairly small") breakpoint width in tailwind.config.js
  const innerBoxWidth = winWidth < widthLg ? 19 : 23;
  const innerBoxHeight = winWidth < widthLg ? 18 : 22;

  const InnerBox = props => {
    const { children, langSel } = props;

    const boxColorsClass = langSel === lang ? "text-blue-black bg-yellow-light" : "text-yellow-darkish";

    const selectLang = () => {
      setLang(langSel);
      setBranch(langSel === "EN" ? branchEN : branchFR);

      log && console.log("LanguageSwitcher.js InnerBox() onClick lang=", lang);
    };

    return (
      <div
        className={`${boxColorsClass} rounded-sm  flex justify-center items-baseline`}
        style={{ width: innerBoxWidth, height: innerBoxHeight, margin: 1 }}
        onClick={() => selectLang()}
        onKeyPress={() => selectLang()}
        tabIndex={0}
        role="button"
      >
        <div style={{ position: "relative", top: 1 }}>{children}</div>
      </div>
    );
  };

  return (
    <div
      className={`border border-yellow-darkish flex justify-center items-center ${className}`}
      style={
        winWidth < widthLg
          ? { borderRadius: 4, padding: 1, fontSize: 0.875 + "rem" }
          : { borderRadius: 4, padding: 2, fontSize: 1 + "rem" }
      }
    >
      <InnerBox langSel="EN">En</InnerBox>
      <InnerBox langSel="FR">Fr</InnerBox>
    </div>
  );
};

export default LanguageSwitcher;
