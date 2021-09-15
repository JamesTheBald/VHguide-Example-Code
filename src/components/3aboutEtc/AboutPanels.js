import React, { useEffect } from "react"
import { useMyContext } from "../../context/Context";
import { Element, scroller } from "react-scroll"

import QuoteGroup from "../2details/QuoteGroup"
import Credits from "./Credits"

const AboutPanels = props => {
  const { contentArray } = props
  const { winWidth, scrollTarget, log } = useMyContext()

  log && console.log("")
  // log && console.log("AboutPanel.js runs. scrollTarget.current=", scrollTarget.current);
  log && console.log("AboutPanel.js runs. contentArray=", contentArray)

  useEffect(() => {
    if (scrollTarget.current) {
      log &&
        console.log(
          "AboutPanels.js scrollTarget.current=",
          scrollTarget.current
        )
      scroller.scrollTo(String(scrollTarget.current), {
        duration: 1000,
        smooth: true,
        offset: winWidth < 1024 ? -300 : winWidth < 1920 ? -300 : -175,
      })
    }
  }, [scrollTarget, winWidth, log])

  useEffect(() => {
    log &&
      console.log('AboutPanels.js useEffect#2 setting scrollTarget.current=""')
    scrollTarget.current = ""
  }, [scrollTarget, log])

  const yGapBetweenControlPanels = 65
  const panelBaseClass =
    "p-5 mxs:p-9 sm:p-15 w-full bg-gray-light rounded-3xl shadowGray"
  const panelTitleClass =
    "font-semibold text-blue-main text-20 sm:text-25 tracking-0.4 sm:tracking-0.5"
  const panelTextClass =
    "text-16 sm:text-18 text-blue-black tracking-0.3 sm:tracking-0.4"

  let columnStyle = { columnCount: 1, columnGap: winWidth < 1600 ? 50 : 60 }
  // location.pathname === "/about"
  //   ? { columnCount: 1, columnGap: winWidth < 1600 ? 50 : 60 }
  //   : // ? { columnCount: winWidth < 1200 ? 1 : 2, columnGap: winWidth < 1600 ? 50 : 60 }
  //     // ? { columnCount: winWidth < 1024 ? 1 : winWidth < 1600 ? 2 : 3, columnGap: winWidth < 1600 ? 50 : 60 }
  //     {}
  // Beware changing the winWidth breakpoints above - Need to also change them for screenshot in EAASE steps in aboutContent.js

  return (
    <>
      {contentArray.map(currPanel => {
        return (
          <div key={`#${currPanel.title}`}>
            <Element name={currPanel.title}>
              <div className={panelBaseClass} style={columnStyle}>
                {typeof window !== "undefined" &&
                window.location.pathname === "/pearls" ? (
                  <>
                    <div className="font-serif font-bold text-22 mxs:text-32 sm:text-40 tracking-0.4 mxs:tracking-0.6 sm:tracking-0.8">
                      {currPanel.title}
                    </div>
                    <QuoteGroup contentArray={currPanel.content} />
                  </>
                ) : (
                  <>
                    <div className={panelTextClass}>{currPanel.content}</div>
                  </>
                )}
              </div>
              <div style={{ height: yGapBetweenControlPanels }} />
            </Element>
          </div>
        )
      })}

      {typeof window !== "undefined" && window.location.pathname === "/about" && (
        <div>
          <Element name="Credits">
            <div className={panelBaseClass}>
              <Credits
                panelTitle={panelTitleClass}
                panelText={panelTextClass}
              />
            </div>
          </Element>
        </div>
      )}

      <div style={{ height: 100 }} />
      {typeof window !== "undefined" &&
        window.location.pathname === "/about" && (
          <div style={{ height: 300 }} />
        )}
    </>
  )
}

export default AboutPanels
