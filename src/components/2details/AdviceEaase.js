import React from "react";
import { animateScroll } from "react-scroll";
import { useMyContext } from "../../context/Context";
import AdviceEaaseIconAndText from "./AdviceEaaseIconAndText";

const AdviceEaase = (props) => {
  const { advice } = props;
  const { log } = useMyContext();

  log && console.log("AdviceEaase.js runs.");

  const blockContainer = "mxs:pr-2 sm:pr-9 md:pr-15   flex flex-col";
  const titleWrapperClass = "-mb-0.5  text-blue-main tracking-0.5 leading-tight";
  const dropCapClass = "font-serif text-35 mxs:text-45 sm:text-55";
  const restOfTitle = "font-sans text-20 sm:text-25";

  animateScroll.scrollToTop({ duration: 0 }); // time in ms

  return (
    <>
      <div className="h-4 mb-12  border-gray-medium border-b-3"> </div>

      <div
        className="md:px-4 lg:px-7  pb-4  grid grid-cols-1 lg:grid-cols-2 grid-flow-row
                   gap-x-15 gap-y-6 mxs:gap-y-8 sm:gap-y-10  "
      >
        {/* The 3rd block below is irregular, so it's not worth using a component or .map */}
        <div className={blockContainer}>
          <div className={titleWrapperClass} style={{ lineHeight: 1 }}>
            <span className={dropCapClass}>E</span>
            <span className={restOfTitle}>ngage with open questions</span>
          </div>
          <AdviceEaaseIconAndText advice={advice} tab={"engage"} />
        </div>

        <div className={blockContainer}>
          <div className={titleWrapperClass} style={{ lineHeight: 1 }}>
            <span className={dropCapClass}>A</span>
            <span className={restOfTitle}>ffirm and reflectively listen</span>
          </div>
          <AdviceEaaseIconAndText advice={advice} tab={"affirm"} />
        </div>

        {/* <div className={`{blockContainer} lg:order-4`}> */}
        <div className={blockContainer}>
          <div className={titleWrapperClass} style={{ lineHeight: 1 }}>
            <span className={dropCapClass}>A</span>
            <span className={restOfTitle}>sk for permission then</span>
            <span className={`ml-1.5 ${dropCapClass}`}>S</span>
            <span className={restOfTitle}>hare information</span>
          </div>
          <AdviceEaaseIconAndText advice={advice} tab={"ask"} />
        </div>

        <div className={blockContainer}>
          <div className={titleWrapperClass} style={{ lineHeight: 1 }}>
            <span className={dropCapClass}>E</span>
            <span className={restOfTitle}>voke and evaluate options</span>
          </div>
          <AdviceEaaseIconAndText advice={advice} tab={"evoke"} />
        </div>
      </div>
    </>
  );
};

export default AdviceEaase;
