import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import TypesPopup_EN from "./TypesPopup_EN";
import { useMyContext } from "../context/Context";

const AboutWhatIsThis_EN = props => {
  const { MotivInterview_BI, textColumnsStyle } = props;

  const { setLocn, setNoneSelected, log } = useMyContext();
  false && console.log(log);

  return (
    <article className="relative">
      {/* Add onClick to next line to reveal/collapse following content. Also add pivoting chevron */}
      <h2 className="aboutTitleClass">What is the VH guide?</h2>

      <div style={textColumnsStyle}>
        <div className="pb-3">
          The Guide presents advice, scripts, and resources to help navigate conversations about COVID-19 vaccines with
          hesitant patients. These have been developed with clinicians from across Canada. In the Guide you&apos;ll
          find&#58;
        </div>

        <ul className="listClass relative md:static">
          <li>
            <Link to="/pearls" className="orangeUnderline">
              Clinician-to-clinician advice
            </Link>
            <span className="pl-1.5">on how to counsel patients about their </span>
            {/* Note the interplay of the absolute positioning tailwind classes below and the relative / static ones above */}
            <TypesPopup_EN sizeAndPosnClass="left-0 sm:left-16  top-10  w-full sm:w-3/4 md:w-120" />
            <span>
              . Below you’ll find examples of dialogue from other clinicians who have addressed this type of hesitancy.
            </span>
          </li>
          <li>
            <span>Examples of approaches that work for </span>
            <Link
              to="/details/overview"
              className="orangeUnderline"
              onClick={() => {
                setLocn({ branch: 1, topic: 0, subtopic: 0, showSubtopic: false });
              }}
            >
              undifferentiated vaccine hesitancy
            </Link>
            <span>; and</span>
          </li>
          <li className="relative md:static">
            <span>A</span>
            <Link to="/explore" className="p-1.5 orangeUnderline" onClick={() => setNoneSelected(true)}>
              flowsheet
            </Link>
            <span>for identifying, differentiating, and addressing common </span>
            <TypesPopup_EN sizeAndPosnClass="top-20 md:top-1/4 left-0 md:left-1/4  w-full sm:w-3/4 md:w-120" />
            {/* left-0 sm:left-16  top-10 */}
            <span> of vaccine hesitancy</span>
          </li>
        </ul>
        <div className="pb-3">
          Inside the Guide you will find practical scripts and resources gathered from fellow clinicians that are
          adapted to each &lsquo;type&rsquo; of vaccine hesitancy.
        </div>
        <div className="pb-3">
          <span>The advice, general principles, and scripts in the guide are grounded in the techniques of</span>
          <MotivInterview_BI />
          <span>. Motivational Interviewing encourages both the clinician and the patient to</span>
          <strong className="px-1.5">identify positive motivations for vaccination.</strong>
          <span>This happens in the course of </span>

          <AnchorLink to="/about/#eaaseSteps" title="open, affirming, conversations" className="orangeUnderline" />
          {/* open, affirming, conversations
          </Link> */}

          <span> about options rather than closed, judgmental, pronouncements of expertise.</span>
        </div>
      </div>
    </article>
  );
};

export default AboutWhatIsThis_EN;
