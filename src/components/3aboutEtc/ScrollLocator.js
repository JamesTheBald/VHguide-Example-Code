import React from "react";
import { useMyContext } from "../../context/Context";
import { Link } from "react-scroll";

const ScrollLocator = (props) => {
  const { contentArray } = props;
  const { winWidth } = useMyContext();

  const scrollLocatorLineHeight = winWidth < 510 ? 28 : 35; // px

  const offsetCalc = () => {
    let scrollOffset = -300;
    // if (location.pathname === "/pearls") {
    //   scrollOffset = winWidth < 1024 ? -750 : winWidth < 1920 ? -650 : -250;
    //   // scrollOffset = winWidth < 1920 ? (indx === 0 ? -700 : -300) : indx === 0 ? -400 : -200;
    //   // Different offset for first panel vs subsequent panels
    // // } else if (location.pathname === "/terms") {
    // //   scrollOffset = winWidth < 510 ? -350 : winWidth < 1920 ? -450 : -250;
    //   // scrollOffset = winWidth < 1920 ? (indx === 0 ? -700 : -300) : indx === 0 ? -400 : -300;
    // } else {
      scrollOffset = winWidth < 510 ? -350 : winWidth < 1920 ? -450 : -250;
      // scrollOffset = winWidth < 1920 ? (indx === 0 ? -450 : -450) : indx === 0 ? -400 : -200;
    // }
    return scrollOffset;
  };

  const LinkBody = (props) => {
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
      <div className="flex flex-col  text-16 sm:text-20 font-sans tracking-0.3 sm:tracking-0.4">
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

        {/* {location.pathname === "/about" && (
          <Link
            activeClass="activeScrollLink"
            to={"Credits"}
            offset={offsetCalc()}
            // offset={winWidth < 510 ? -300 : winWidth < 1920 ? -450 : -200}
            spy={true}
            smooth={true}
            duration={600}
          >
            <LinkBody label={"Credits & Collaborators"} />
          </Link>
        )} */}
      </div>
    </>
  );
};

export default ScrollLocator;
