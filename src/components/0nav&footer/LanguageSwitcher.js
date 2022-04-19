import React from "react";

import { useMyContext } from "../../context/Context";

const LanguageSwitcher = props => {
  const { className, size } = props; // size="sm" or "lg"
  const { lang, setLang, log } = useMyContext();

  const innerBoxWidth = size === "sm" ? 19 : 23;
  const innerBoxHeight = size === "sm" ? 18 : 22;

  const InnerBox = props => {
    const { children, langSel } = props;

    const boxColorsClass = langSel === lang ? "text-yellow-darkish" : "text-blue-black bg-yellow-light";

    return (
      <div
        className={`${boxColorsClass} rounded-sm  flex justify-center items-baseline`}
        style={{ width: innerBoxWidth, height: innerBoxHeight, margin: 1 }}
        onClick={() => {
          setLang(langSel==="EN" ? "FR" : "EN");
          log && console.log("LanguageSwitcher.js InnerBox() onClick lang=", lang);
        }}
      >
        <div style={{ position: "relative", top: 1 }}>{children}</div>
      </div>
    );
  };

  return (
    <div
      className={`border border-yellow-darkish  flex justify-center items-center ${className}`}
      style={{ borderRadius: 4, padding: size === "sm" ? 1 : 2 }}
    >
      <InnerBox size={size} langSel="EN">
        En
      </InnerBox>
      <InnerBox size={size} langSel="FR">
        Fr
      </InnerBox>
    </div>
  );
};

export default LanguageSwitcher;
