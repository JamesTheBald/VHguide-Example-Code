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
  log && console.log("QuoteBoxes.js runs. quoteArray=", quoteArray);
  log2 && console.log("QuoteBoxes.js runs. pplIcons=", pplIcons);

  const quoteColorsEtAl = quote => {
    const css =
      quote.featured === true
        ? "bg-blue-main text-gray-light"
        : typeof window !== "undefined" && window.location.pathname.match(/pearls/i)
        ? "bg-gray-light text-blue-black  border-3 border-solid border-gray-neutral" // not featured, on pearls
        : "bg-gray-light text-blue-black  border-3 border-solid border-blue-black"; // not featured, not on pearls
    return css;
  };

  const quotePaddingEtc = quote => {
    const style =
      winWidth < 510
        ? quote.featured === true
          ? { padding: "40px 36px 36px 56px" } // padding for featured box (narrow screen)
          : quote.image === ""
          ? { padding: "36px 30px 28px 52px" } // padding for plain quote
          : { padding: "30px 25px 28px 50px", marginLeft: 42 } // padding for quote with icon
        : quote.featured === true
        ? { padding: "44px 44px 40px 72px" }
        : quote.image === ""
        ? { padding: "36px 30px 28px 63px" } // padding for plain quote
        : { padding: "30px 34px 28px 65px", marginLeft: 42 }; // padding for quote with icon
    return style;
  };

  const iconDistFromTop = quote => {
    const quoteLen = reactElementToJSXString(quote.text).length;
    return quoteLen < 100 ? -20 : quoteLen < 140 ? -10 : 0;
  };

  const iconLeftPosn = winWidth < 510 ? -93 : -110;

  return (
    <>
      {quoteArray.map((quote, idx) => {
        log2 && console.log("QuoteBoxes.js quote length=", reactElementToJSXString(quote.text).length);
        return (
          <div key={idx}>
            {reactElementToJSXString(quote.text).length > 12 && (
              <div className="dontBreak" name="Quote Box. Outer box to prevent column breaking inside" key={idx}>
                <div
                  className={`mb-8 mxs:mb-10 sm:mb-12  flex flex-col rounded-3xl relative  baseFont ${quoteColorsEtAl(quote)}`}
                  style={quotePaddingEtc(quote)}
                >
                  <div className="relative">
                    {quote.image === "" ? (
                      <div className={`absolute -left-9 -top-1.5 text-30`}>
                        <BigDoubleQuotes featured={quote.featured} />
                      </div>
                    ) : (
                      <div className="absolute" style={{ left: iconLeftPosn, top: iconDistFromTop(quote) }}>
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
                    {/* The quote itself */}
                    {quote.text}
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
