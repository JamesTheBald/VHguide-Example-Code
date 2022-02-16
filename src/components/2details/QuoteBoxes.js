import React from "react";
import { Link } from "gatsby";

import reactElementToJSXString from "react-element-to-jsx-string";
import BigDoubleQuotes from "./BigDoubleQuotes";
import { useMyContext } from "../../context/Context";

const QuoteBoxes = props => {
  const { quoteArray, setFullStoryID } = props;
  const { winWidth, queryData, log, log2 } = useMyContext();

  const pplIcons = queryData.current.pplIcons.edges;

  log2 && console.log("QuoteBoxes.js runs.");
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
    if (quote.label) {
      style = winWidth < 510 ? { padding: "34px 28px 26px 34px" } : { padding: "32px 32px 28px 42px" };
    } else if (quote.image) {
      style = winWidth < 510 ? { padding: "30px 25px 26px 50px" } : { padding: "32px 30px 28px 65px" };
      style.marginLeft = 42;
    } else if (quote.featured) {
      style = winWidth < 510 ? { padding: "34px 36px 36px 56px" } : { padding: "44px 44px 38px 72px" };
    } else {
      // Plain quote
      style = winWidth < 510 ? { padding: "30px 28px 24px 52px" } : { padding: "32px 32px 28px 63px" };
    }
    log2 && console.log("QuoteBoxes.js quotepaddingEtc style=", style);
    return style;
  };

  const iconDistFromTop = quote => {
    const quoteLen = reactElementToJSXString(quote.text).length;
    return quoteLen < 55 ? 18 : quoteLen < 100 ? 32 : 50;
  };

  return (
    <>
      {quoteArray.map((quote, idx) => {
        return (
          <div key={idx}>
            {reactElementToJSXString(quote.text).length > 20 && (
              <div
                name="Outer box to prevent column breaking inside"
                className="pt-4 flex flex-col justify-start  dontBreak relative"
                key={idx}
              >
                {quote.label && (
                  <div className="absolute left-0 top-0 px-4 pt-1.5 pb-0.5 baseFont font-bold bg-gray-neutral rounded-full  z-50">
                    {quote.label}
                  </div>
                )}

                {quote.image && (
                  <div className="absolute z-50" style={{ top: iconDistFromTop(quote) }}>
                    {pplIcons.map((item, index) => {
                      return (
                        item.node.relativePath === quote.image && (
                          <img
                            key={index}
                            src={item.node.publicURL}
                            alt="Icon"
                            className="w-20 mxs:w-22 h-20 mxs:h-22"
                          />
                        )
                      );
                    })}
                  </div>
                )}

                <div
                  name="main visible quote box"
                  className={`mb-8 mxs:mb-10  flex flex-col rounded-3xl relative
                              ${quote.featured ? "quoteBoxFeatured" : "baseFontWide"}
                              ${quoteColorsEtAl(quote)}`}
                  style={quotePaddingEtc(quote)}
                >
                  <div name="inner text box w decorations" className="relative">
                    {!quote.label && !quote.image && (
                      <div className="absolute -left-9 -top-1.5 text-30">
                        <BigDoubleQuotes featured={quote.featured} />
                      </div>
                    )}
                    {quote.text} {/* The quote itself */}
                  </div>

                  {quote.fullStoryID && (
                    <Link
                      to="/details/advice/fullstory"
                      className="mt-3 mr-auto pl-3 pr-2.5 pt-1  smFont leading-normal orangeLink linkPill"
                      onClick={() => {
                        log && console.log("QuoteBoxes.js onClick fullStoryID=", quote.fullStoryID);
                        setFullStoryID(quote.fullStoryID);
                      }}
                    >
                      {quote.fullStoryLinkText}
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
