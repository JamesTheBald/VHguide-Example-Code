import React from "react";

import { useMyContext } from "../../context/Context";

const LandingText = props => {
  const { titleWidth, content, className, showFullIntro, setShowFullIntro } = props;
  const { winWidth, lang, log, log2 } = useMyContext();
  false && console.log(log);
  log2 && console.log("LandingText.js titleWidth=", titleWidth);

  const ReadMoreOrLess = props => {
    const { msg } = props;
    return (
      <span
        className="underline italic cursor-pointer"
        onClick={() => setShowFullIntro(curr => !curr)}
        onKeyPress={() => setShowFullIntro(curr => !curr)}
        tabIndex={0} // note that tabIndex value should be 0. This keeps it in the normal tab flow.
        role="button"
      >
        {msg}
      </span>
    );
  };

  return (
    <>
      <div className={`flex flex-col ${className}`}>
        <h1 className="mb-5  titleFont titleLanding  whitespace-normal" style={{ width: titleWidth }}>
          {content.mainTitle[lang]}
        </h1>

        <header className="subtitleFont" style={{ width: titleWidth }}>
          <span>{content.introPart1[lang]}</span>

          {winWidth < 510 && !showFullIntro ? (
            <>
              {" ... "}
              <ReadMoreOrLess msg={lang === "EN" ? "read more" : "En lire plus"} />
            </>
          ) : (
            <span>{content.introPart2[lang]}</span>
          )}

          <span className="ml-1.5">
            {content.introPart3[lang]} {/* For persistent content after the 'read more' control */}
            {" "}
            {winWidth < 510 && showFullIntro && <ReadMoreOrLess msg={lang === "EN" ? "Read Less" : "En lire moins"} />}
          </span>
        </header>
      </div>
    </>
  );
};

export default LandingText;
