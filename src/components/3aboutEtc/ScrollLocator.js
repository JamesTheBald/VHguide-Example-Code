import React from "react";
import { useMyContext } from "../../context/Context";
import { Link } from "react-scroll";

const ScrollLocator = props => {
  const { path, contentArray } = props;
  const { winWidth, log2 } = useMyContext();

  log2 && console.log("ScrollLocator.js path=", path);

  const offsetCalc = () => {
    let scrollOffset = -300;
    if (path === "/pearls") {
      scrollOffset = winWidth < 510 ? -450 : winWidth < 1024 ? -500 : winWidth < 1920 ? -500 : -250;
    } else if (path === "/terms") {
      scrollOffset = winWidth < 510 ? -350 : winWidth < 1200 ? -450 : winWidth < 1920 ? -450 : -300;
    } else {
      scrollOffset = winWidth < 510 ? -300 : winWidth < 1024 ? -450 : winWidth < 1920 ? -480 : -250;
    }
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
          return (
            <div key={index}>
              <Link
                activeClass="activeScrollLink"
                to={currPanel.title} // using panel title as id; this references the name field of the section container div
                offset={offsetCalc()}
                spy={true}
                smooth={true}
                duration={600}
              >
                <LinkBody label={currPanel.title} />
              </Link>
            </div>
          );
        })}

        {path === "/about" && (
          <div>
            <Link
              activeClass="activeScrollLink"
              to="Credits"
              offset={offsetCalc()}
              spy={true}
              smooth={true}
              duration={600}
            >
              <LinkBody label="Credits and Collaborator" />
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default ScrollLocator;
