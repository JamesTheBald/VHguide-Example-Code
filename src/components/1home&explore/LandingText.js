import React from "react";

import { useMyContext } from "../../context/Context";

const LandingText = props => {
  const { titleWidth, content, className, showFullIntro, setShowFullIntro } = props;
  const { winWidth, lang, log, log2 } = useMyContext();
  false && console.log(log);
  log2 && console.log("LandingText.js titleWidth=", titleWidth);

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
              <span
                className="underline italic cursor-pointer"
                onClick={() => setShowFullIntro(curr => !curr)}
                onKeyPress={() => setShowFullIntro(curr => !curr)}
                tabIndex={0}
                role="button"
              >
                {lang === "EN" ? "read more" : "En lire plus"}
              </span>
            </>
          ) : (
            <span>{content.introPart2[lang]}</span>
          )}

          <div className="mt-3">
            {content.introPart3[lang]}{" "}
            {winWidth < 510 && showFullIntro && (
              <span
                className="underline italic cursor-pointer"
                onClick={() => setShowFullIntro(curr => !curr)}
                onKeyPress={() => setShowFullIntro(curr => !curr)}
                tabIndex={0} // note that both tabIndex values should be 0. This keeps it in the normal tab flow.
                role="button"
              >
                {lang === "EN" ? "Read Less" : "En lire moins"}
              </span>
            )}
          </div>
        </header>
      </div>
    </>
  );
};

export default LandingText;
