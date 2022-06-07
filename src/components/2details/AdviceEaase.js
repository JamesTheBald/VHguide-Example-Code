import React from "react";
import { animateScroll } from "react-scroll";

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
    animateScroll.scrollToTop({ duration: 0 }); // time in ms
  }

  const blockContainer = "mxs:pr-2 sm:pr-9 md:pr-15   flex flex-col";
  const titleWrapperClass = "-mb-0.5  text-blue-main tracking-0.5 leading-tight";
  const dropCapClass = "font-serif text-35 mxs:text-45 sm:text-55";
  const restOfTitle = "font-sans text-20 sm:text-25";

  return (
    <>
      <div className="h-4 mb-12  border-gray-medium border-solid border-b-3"> </div> {/* Top dividing line */}
      <div className="md:pl-4 lg:pl-7  pb-4  grid grid-cols-1 lg:grid-cols-2 grid-flow-row gap-x-15 gap-y-6 mxs:gap-y-8 sm:gap-y-10">
        {eaaseTitlesAndButtonsBI.map((curr, index) => {
          const title1 = curr.title1[lang];
          const title2 = curr.title2 ? curr.title2[lang] : "";

          return (
            <div key={index}>
              <section className={blockContainer}>
                <h4 className={titleWrapperClass} style={{ lineHeight: 1 }}>
                  <span className={dropCapClass}>{title1.substr(0, 1)}</span>
                  <span className={restOfTitle}>{title1.substr(1)}</span>
                  <span className={`ml-1.5 ${dropCapClass}`}>{title2.substr(0, 1)}</span>
                  <span className={restOfTitle}>{title2.substr(1)}</span>
                </h4>
                <AdviceEaaseIconAndText advice={advice} tab={"ask"} />
              </section>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AdviceEaase;

{
  /* <section className={blockContainer}>
<h4 className={titleWrapperClass} style={{ lineHeight: 1 }}>
  <span className={dropCapClass}>E</span>
  <span className={restOfTitle}>ngage with open questions</span>
</h4>
<AdviceEaaseIconAndText advice={advice} tab={"engage"} />
</section>

<section className={blockContainer}>
<h4 className={titleWrapperClass} style={{ lineHeight: 1 }}>
  <span className={dropCapClass}>A</span>
  <span className={restOfTitle}>ffirm and reflectively listen</span>
</h4>
<AdviceEaaseIconAndText advice={advice} tab={"affirm"} />
</section> */
}

{
  /* <div className={`{blockContainer} lg:order-4`}> */
}
{
  /* <section className={blockContainer}>
<h4 className={titleWrapperClass} style={{ lineHeight: 1 }}>
  <span className={dropCapClass}>A</span>
  <span className={restOfTitle}>sk for permission then</span>
  <span className={`ml-1.5 ${dropCapClass}`}>S</span>
  <span className={restOfTitle}>hare information</span>
</h4>
<AdviceEaaseIconAndText advice={advice} tab={"ask"} />
</section>

<section className={blockContainer}>
<h4 className={titleWrapperClass} style={{ lineHeight: 1 }}>
  <span className={dropCapClass}>E</span>
  <span className={restOfTitle}>voke and evaluate options</span>
</h4>
<AdviceEaaseIconAndText advice={advice} tab={"evoke"} />
</section> */
}
