import React from "react";
// import { animateScroll } from "react-scroll";

import { useMyContext } from "../../context/Context";
import AdviceEaaseIconAndText from "./AdviceEaaseIconAndText";
import { eaaseTitlesAndButtonsBI } from "../../content/eaaseTitlesAndButtonsBI";

const AdviceEaase = props => {
  const { advice } = props;
  const { lang, log, log2 } = useMyContext();

  0 && console.log(log, log2);
  log && console.log("AdviceEaase.js runs. advice=", advice);
  log && console.log("AdviceEaase.js eaaseTitlesAndButtonsBI=", eaaseTitlesAndButtonsBI);

  if (typeof window !== `undefined`) {
    // animateScroll.scrollToTop({ duration: 300 }); // time in ms
  }

  const blockContainer = "mxs:pr-2 sm:pr-9 md:pr-15   flex flex-col";
  const titleWrapperClass = "-mb-0.5  text-blue-main tracking-0.5 leading-tight";
  const dropCapClass = "font-serif font-semibold text-35 mxs:text-45 sm:text-55";
  const dropCapClassAlt = "font-sans font-semibold text-24 sm:text-30";
  const restOfTitle = "font-sans text-20 sm:text-25";

  return (
    <>
      <div className="h-4 mb-12  border-gray-medium border-solid border-b-3"> </div> {/* Top dividing line */}
      <div className="md:pl-4 lg:pl-7  pb-4  grid grid-cols-1 lg:grid-cols-2 grid-flow-row gap-x-15 gap-y-6 mxs:gap-y-8 sm:gap-y-10">
        {eaaseTitlesAndButtonsBI.map((titleNButtonBI, index) => {
          const titleArray = titleNButtonBI.titleArray[lang];
          log2 && console.log("AdviceEaase.js title=", titleArray);

          return (
            <div key={index}>
              <section className={blockContainer}>
                <h4 className={titleWrapperClass} style={{ lineHeight: 1 }}>
                  {titleArray.map((curr, indx) => {
                    log2 && console.log("AdviceEaase.js indx=", indx, ", curr=", curr);

                    return (
                      <span key={indx}>
                        {indx < 2 && <span className={dropCapClass}>{curr?.substr(0, 1)}</span>}
                        {indx >= 2 && <span className={dropCapClassAlt}>{curr?.substr(0, 1)}</span>}

                        <span className={restOfTitle}>{curr?.substr(1)}</span>
                      </span>
                    );
                  })}
                </h4>
                <AdviceEaaseIconAndText advice={advice} titleNButtonBI={titleNButtonBI} />
              </section>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AdviceEaase;
