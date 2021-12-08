import React from "react";

import { useMyContext } from "../context/Context";
import { Link } from "gatsby";
import ScrollDownIndicator from "../components/1home&explore/ScrollDownIndicator";

const LandingText = props => {
  const { titleWidth } = props;
  const { log, log2 } = useMyContext();

  false && console.log(log);
  log2 && console.log("LandingText.js titleWidth=", titleWidth);

  // const gapTitleToSubtitle = 25;
  const subtitleFont = "text-14 mxs:text-16 md:text-18  tracking-0.3 mxs:tracking-0.4";

  return (
    <>
      <div className="flex flex-col text-gray-light">
        <h1
          className="mxs:mb-4  titleFont text-30 mxs:text-35 sm:text-45 md:text-50 lg:text-60 xl:text-70  whitespace-normal
                     tracking-0.6 mxs:tracking-0.8 sm:tracking-1 md:tracking-1.1 lg:tracking-1.2 xl:tracking-1.4"
          style={{ width: titleWidth }}
        >
          Are your patients hesitant about getting a COVID-19 vaccine?
        </h1>

        {/* <div className="hidden mxs:block" style={{ height: `${gapTitleToSubtitle}px` }} /> */}

        <div className="mxs:hidden  w-full flex justify-center z-20">
          <ScrollDownIndicator additionalClass={""} />
        </div>

        <div className={subtitleFont} style={{ width: titleWidth }}>
          <header>
            The Vaccine Hesitancy Guide supports better clinical conversations about vaccines. It differentiates common
            types of vaccine hesitancy that primary care clinicians may see. Browse through these types to help identify
            the sources of your patients’ hesitancy, and find advice and resources on how to address them.
          </header>

          <div className={`mt-6  ${subtitleFont} font-light italic`}>
            <span>For an overview of how to use the guide, visit the</span>
            <Link to="/about" className="px-1.5  underline cursor-pointer">
              about
            </Link>
            <span>page.</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingText;
