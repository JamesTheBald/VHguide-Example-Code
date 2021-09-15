import React from "react"
import { Link } from "gatsby"

import { useMyContext } from "../../context/Context";

import reactElementToJSXString from "react-element-to-jsx-string"
import BigDoubleQuotes from "./BigDoubleQuotes"

const QuoteBoxes = props => {
  const { quoteArray, fullStoryID, setFullStoryID } = props
  const { winWidth, setNavBarOpen, log, log2 } = useMyContext()

  log && console.log("QuoteBoxes.js runs.")
  log2 && console.log("QuoteBoxes.js runs. quoteArray=", quoteArray)

  // const onClickFullStoryLink = fullStoryID => {
  //   log &&
  //     console.log(
  //       "QuoteBoxes.js onClickFullStoryLink() fullStoryID=",
  //       fullStoryID
  //     )
  //   setFullStoryID(fullStoryID)
  //   setNavBarOpen(false)
  // }

  const quoteColorsAndText = quote => {
    const css =
      quote.featured === true
        ? typeof window !== "undefined" &&
          window.location.pathname === "/pearls"
          ? "bg-blue-main text-gray-light  leading-relaxed  text-18 tracking-0.4" // featured on Pearls
          : "bg-blue-main text-gray-light  leading-relaxed  text-18 mxs:text-22 sm:text-25  tracking-0.4 mxs:tracking-0.5 sm:tracking-0.6"
        : "bg-gray-light text-blue-black border-3 border-blue-black tracking-0.5 leading-7"
    return css
  }

  const quotePaddingEtAl = quote => {
    const style =
      winWidth < 510
        ? quote.featured === true
          ? { padding: "40px 36px 36px 56px" } // padding for featured box (narrow screen)
          : quote.image === ""
          ? { padding: "36px 30px 28px 52px" } // padding for plain quote
          : { padding: "30px 30px 28px 56px", marginLeft: 42 } // padding for quote with icon
        : quote.featured === true
        ? { padding: "44px 44px 40px 72px" }
        : quote.image === ""
        ? { padding: "36px 30px 28px 63px" } // padding for plain quote
        : { padding: "30px 34px 28px 65px", marginLeft: 42 } // padding for quote with icon
    return style
  }

  const iconDistFromTop = quote => {
    const quoteLen = reactElementToJSXString(quote.text).length
    // log && console.log("QuoteBoxes distFromTop() quoteLen=", quoteLen);
    return quoteLen < 100 ? -20 : quoteLen < 140 ? -10 : 0
  }

  const iconLeftPosn = winWidth < 510 ? -100 : -110

  return (
    <>
      {quoteArray.map((quote, idx) => {
        log2 &&
          console.log(
            "QuoteBoxes.js quote length=",
            reactElementToJSXString(quote.text).length
          )
        return (
          <div key={idx}>
            {reactElementToJSXString(quote.text).length > 14 && (
              <div
                className="dontBreak"
                name="Quote Box. Outer box to prevent column breaking inside"
                key={idx}
              >
                <div
                  className={`mb-12  flex flex-col rounded-3xl relative ${quoteColorsAndText(
                    quote
                  )}`}
                  style={quotePaddingEtAl(quote)}
                >
                  <div className="relative">
                    {/* Add big quotes or image icon */}
                    {quote.image === "" ? (
                      <div className={`absolute -left-9 -top-1.5 text-30`}>
                        <BigDoubleQuotes featured={quote.featured} />
                      </div>
                    ) : (
                      <div
                        className="absolute"
                        style={{
                          left: iconLeftPosn,
                          top: iconDistFromTop(quote),
                        }}
                      >
                        <img
                          src={quote.image}
                          alt="Icon"
                          className="w-20 mxs:w-22 h-20 mxs:h-22"
                        />
                      </div>
                    )}
                    {quote.text}
                  </div>

                  {quote.fullStoryID && (
                    <Link
                      to="/details/advice/fullstory"
                      className="mt-3 mr-auto pl-3 pr-2.5 pt-1  smFont leading-normal orangeLink linkPill"
                      onClick={() => {
                        setFullStoryID(fullStoryID)
                        setNavBarOpen(false)
                      }}
                    >
                      {quote.fullStoryLinkText}
                    </Link>

                    // <div
                    //   className="mt-3 mr-auto pl-3 pr-2.5 pt-1  smFont leading-normal orangeLink linkPill"
                    //   onClick={() => onClickFullStoryLink(quote.fullStoryID)}
                    // >
                    //   {quote.fullStoryLinkText}
                    // </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )
      })}
    </>
  )
}

export default QuoteBoxes
