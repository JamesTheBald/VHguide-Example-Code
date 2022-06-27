import React from "react";
import { Link } from "gatsby";

import reactElementToJSXString from "react-element-to-jsx-string";
import BigDoubleQuotes from "./BigDoubleQuotes";
import { useMyContext } from "../../context/Context";

const QuoteBoxes = props => {
  const { quoteArray, setFullStoryID } = props;
  const { winWidth, queryData, lang, log, log2 } = useMyContext();

  const pplIcons = queryData.current.pplIcons.edges;
  const w = winWidth;

  log2 && console.log("QuoteBoxes.js runs. quoteArray=", quoteArray);
  log2 && console.log("QuoteBoxes.js runs. pplIcons=", pplIcons);

  const quoteColorsEtAl = quote => {
    const css =
      quote.featured === true
        ? "bg-blue-main text-gray-light"
        : "text-blue-black  border-3 border-solid border-gray-neutral";
    return css;
  };

  let style = "";
  const quotePaddingEtc = quote => {
    if (quote.image) {
      style =
        w < 510
          ? { padding: "30px 25px 26px 36px" }
          : w < 720
          ? { padding: "32px 25px 26px 52px" }
          : { padding: "34px 32px 30px 56px" };
      style.marginLeft = w < 510 ? 25 : w < 720 ? 32 : 36;
    } else if (quote.featured) {
      style = w < 510 ? { padding: "34px 30px 36px 44px" } : { padding: "40px 36px 36px 56px" };
    } else {
      // Plain quote
      style = w < 510 ? { padding: "30px 24px 24px 44px" } : { padding: "36px 30px 30px 56px" };
    }
    log2 && console.log("QuoteBoxes.js quotepaddingEtc style=", style);
    return style;
  };

  const iconDistFromTop = quote => {
    const quoteLen = reactElementToJSXString(quote.text[lang]).length;
    return quoteLen < 55 ? 18 : quoteLen < 100 ? 32 : w < 1024 ? 46 : 50;
  };

  return (
    <>
      {quoteArray.map((quote, idx) => {
        log2 && console.log("QuoteBoxes.js quoteArray.map -> quote=", quote);
        const label = quote.label && quote.label[lang];

        return (
          <div key={idx} style={{ breakInside: "avoid" }}>
            {/* Need breakInside: "avoid" or dontBreak Tailwind class for each containing box down from the parent with the columns.
            See: https://developer.mozilla.org/en-US/docs/Web/CSS/break-inside */}
            {reactElementToJSXString(quote.text[lang]).length > 20 && (
              <div className="pt-5 flex flex-col justify-start dontBreak  relative" key={idx}>
                {/* Outer box to prevent column breaking inside */}

                {label && (
                  <div className="absolute top-0 px-6 pt-1.5 pb-1  baseFont text-blue-black font-semibold  bg-gray-neutral  rounded-full z-50">
                    {label}
                  </div>
                )}

                {/* Doctor Icon */}
                {quote.image && (
                  <div className="absolute z-50" style={{ top: iconDistFromTop(quote) }}>
                    {pplIcons.map((item, index) => {
                      return (
                        item.node.relativePath === quote.image && (
                          <img
                            key={index}
                            src={item.node.publicURL}
                            alt="Icon"
                            className="w-12 mxs:w-16 sm:w-18 md:h-20 mxs:h-22"
                          />
                        )
                      );
                    })}
                  </div>
                )}
                {/* Main Quote Box */}
                <div
                  className={`mb-8 mxs:mb-10  flex flex-col rounded-3xl relative baseFontWide  dontBreak
                              ${quoteColorsEtAl(quote)}`}
                  style={quotePaddingEtc(quote)}
                >
                  {label && <div className="h-2" />}
                  <div name="inner text box w decorations" className="relative">
                    {!quote.image && (
                      <div className="absolute -left-7 mxs:-left-8 sm:-left-10 -top-1 sm:-top-2  text-20 sm:text-30">
                        <BigDoubleQuotes featured={quote.featured} />
                      </div>
                    )}
                    {quote.text[lang]} {/* The quote itself */}
                  </div>

                  {/* Link to Full Story page, where applicable */}
                  {quote.fullStoryID && (
                    <Link
                      to="/details/advice/fullstory"
                      className="mt-3 mr-auto pl-3 pr-2.5 pt-1  smFont leading-normal orangeLink linkPill"
                      onClick={() => {
                        log && console.log("QuoteBoxes.js onClick fullStoryID=", quote.fullStoryID);
                        setFullStoryID(quote.fullStoryID);
                      }}
                    >
                      {quote.fullStoryLinkText[lang]}
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default QuoteBoxes;
