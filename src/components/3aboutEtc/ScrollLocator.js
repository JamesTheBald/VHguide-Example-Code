import React from "react";
import { useMyContext } from "../../context/Context";
import { Link } from "react-scroll";

const ScrollLocator = props => {
  const { path, contentArray } = props;
  const { winWidth, log, log2 } = useMyContext();

  false && console.log(log, log2);
  log2 && console.log("ScrollLocator.js path=", path);
  log2 && console.log("ScrollLocator.js contentArray=", contentArray);

  const offsetCalc = indx => {
    let scrollOffset = -300;

    if (path.match(/pearls/i)) {
      log && console.log("ScrollLocator.js Using pearls offsets");
      if (indx === 0) {
        scrollOffset = -750;
      } else {
        scrollOffset = winWidth < 510 ? -300 : winWidth < 1024 ? -300 : winWidth < 1920 ? -300 : -250;
      }
    } else if (indx === 0) {
      scrollOffset = -500;
    } else if (path.match(/terms/i)) {
      scrollOffset = winWidth < 510 ? -320 : winWidth < 1024 ? -350 : winWidth < 1920 ? -350 : -200;
    } else {
      scrollOffset = winWidth < 510 ? -350 : winWidth < 1024 ? -400 : winWidth < 1920 ? -380 : -250;
    }
    log2 && console.log("ScrollLocator.js offsetCalc() indx=", indx, ", scrollOffset=", scrollOffset);

    return scrollOffset;
  };

  const scrollLocatorLineHeight = winWidth < 510 ? 28 : 35; // px

  const LinkBody = props => {
    const { label } = props;
    return (
      <div className="flex flex-row cursor-pointer">
        <div
          className="flex flex-row justify-center relative"
          style={{ width: "5px", height: scrollLocatorLineHeight }}
        >
          <div className="unselectedBar" />
          <div className="selectedBar" style={{ height: `${scrollLocatorLineHeight - 10}px` }} />
        </div>
        <div style={{ width: "23px" }} />
        <div className="flex items-center tracking-0.4" style={{ height: scrollLocatorLineHeight }}>
          {label}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="pb-6  flex flex-col  text-16 sm:text-20 font-sans tracking-0.3 sm:tracking-0.4">
        {contentArray.map((currPanel, index) => {
          log2 && console.log("ScrollLocator.js map function. index=", index, "& currPanel=", currPanel);

          return (
            <div key={index}>
              <Link
                activeClass="activeScrollLink"
                to={currPanel.panelID} // using panel title as id; this references the name field of the section container div
                offset={offsetCalc(index)}
                spy={true}
                smooth={true}
                duration={600}
              >
                <LinkBody label={currPanel.title} />
              </Link>
            </div>
          );
        })}

        {path.match(/about/i) && (
          // {path === "/about" && (
          <div>
            <Link
              activeClass="activeScrollLink"
              to="credits"
              offset={offsetCalc(contentArray.length)}
              spy={true}
              smooth={true}
              duration={600}
            >
              <LinkBody label="Credits and Collaborators" />
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default ScrollLocator;
