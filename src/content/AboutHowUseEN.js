import React from "react";
import { Link } from "gatsby";

import TypesPopupEN from "./TypesPopupEN";
import { useMyContext } from "../context/Context";

const AboutHowUseEN = props => {
  const { textColumnsStyle } = props;
  const { setLocn, setNoneSelected, setShowContactForm } = useMyContext();

  return (
    <article>
    {/* <article className="relative"> */}
      <h2 className="aboutTitleClass">How do I use the VH Guide?</h2>

      <div className="relative" style={textColumnsStyle}>
        <div className="pb-3">
          The Guide can be used either during an appointment with a vaccine hesitant patient, or outside of patient
          contact hours. As the Guide includes potentially sensitive scripts, you will want to familiarize yourself with
          its content and organization prior to using it synchronously with patients.
        </div>
        <div className="pb-3 relative">
          <span>The Guide is built around examples of typical presentations of vaccine hesitancy. These </span>
          <TypesPopupEN sizeAndPosnClass="left-0 sm:left-16  -top-40  w-full sm:w-3/4 md:w-120" />
          <span> of vaccine hesitancy can be browsed through an interactive </span>
          <Link
            to="/explore"
            className="orangeUnderline"
            onClick={() => {
              setLocn({ branch: 0, topic: 0, subtopic: 0, showSubtopic: false });
              setNoneSelected(true);
            }}
          >
            flowsheet
          </Link>
          . The types may also incorporate further sub-types, each of which describes a more specific presentation of
          vaccine hesitancy. Once you have worked through the menus and identified the &lsquo;type&rsquo; that most
          closely resembles your patient&apos;s hesitancy, you will have access to three tabs of information:
        </div>
        <ul className="ml-6 sm:ml-12  listClass">
          <li>
            An &lsquo;Overview&rsquo; tab which includes common phrases or concerns related to this type of hesitancy,
            as well as some options to consider during consultations;
          </li>
          <li>An &lsquo;Advice&rsquo; tab which provides successful scripts as used by fellow clinicians; and </li>
          <li>A &lsquo;Resources&rsquo; tab which provides links to external sources of relevant information.</li>
        </ul>
        <span>
          The advice, scripts, and resources in the Guide are being updated in response to developments in the COVID-19
          pandemic, vaccine rollout, and user feedback. If you have any comments or suggestions,
          <button className="pl-1.5 orangeUnderline" onClick={() => setShowContactForm(true)}>
            contact us.
          </button>
        </span>
      </div>
    </article>
  );
};

export default AboutHowUseEN;
