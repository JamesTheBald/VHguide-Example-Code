import React from "react";
// import { useMyContext } from "../../context/Context";
import { Link } from "gatsby";
import ScrollDownIndicator from "../components/1home&explore/ScrollDownIndicator";

const LandingText = props => {
  const { titleWidth } = props;
  // const { winWidth } = useMyContext();

  const gapTitleToSubtitle = 25;
  const subtitleFont = "text-14 mxs:text-16 md:text-18  tracking-0.3 md:tracking-0.4";

  return (
    <>
      <div className="flex flex-col text-gray-light" style={{ width: titleWidth }}>
        <h1
          className="titleFont text-30 mxs:text-35 sm:text-45 md:text-50 lg:text-60   whitespace-normal
                               tracking-0.6 sm:tracking-0.8 md:tracking-1 lg:tracking-1.2"
        >
          Are your patients hesitant about getting a COVID-19 vaccine?
        </h1>

        <div style={{ height: `${gapTitleToSubtitle}px` }} />

        <ScrollDownIndicator additionalClass={"mxs:hidden"} />

        <div className={subtitleFont}>
          <h2>
            This Guide supports better clinical conversations about vaccines. It differentiates common types of vaccine
            hesitancy that primary care clinicians may see. Browse through these types to help identify the sources of
            your patients’ hesitancy, and find advice and resources on how to address them.
          </h2>
          <div className={`mt-6  ${subtitleFont} font-vlight italic`}>
            <span>For an overview of how to use this guide, visit the</span>
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
