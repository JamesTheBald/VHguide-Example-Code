import React from "react";
import { FiExternalLink } from "react-icons/fi";

import AboutWhatIsThis_EN from "../../content/AboutWhatIsThis_EN";
import AboutWhatIsThis_FR from "../../content/AboutWhatIsThis_FR";
import AboutHowUse_EN from "../../content/AboutHowUse_EN";
import AboutHowUse_FR from "../../content/AboutHowUse_FR";
import AboutEaaseSteps_EN from "../../content/AboutEaaseSteps_EN";
import AboutEaaseSteps_FR from "../../content/AboutEaaseSteps_FR";
import textColumns from "../../functions/textColumns";
import { useMyContext } from "../../context/Context";

const MotivInterview_BI = () => {
  const { lang } = useMyContext();

  return (
    <a
      className="ml-1.5 orangeUnderline"
      href="https://www.canada.ca/content/dam/phac-aspc/documents/services/reports-publications/canada-communicable-disease-report-ccdr/monthly-issue/2020-46/issue-4-april-2-2020/ccdrv46i04a06-eng.pdf"
      rel="noopener noreferrer"
      target="_blank"
    >
      {/* {lang === "EN" ? <></> : <></>} */}
      {lang === "EN" ? <>Motivational Interviewing</> : <>d’entrevue motivationnelle</>}{" "}
      <FiExternalLink className="inline" size={18} />
    </a>
  );
};

const dividingLine = "h-2  w-full  border-t-2 border-solid border-gray-mid";

const AboutTheGuide_BI = () => {
  const { winWidth, lang, log } = useMyContext();

  log && console.log("AboutTheGuide_BI.js lang=", lang);

  const textColumnsStyle = textColumns(winWidth, 1024, 1920);

  const AboutWhatIsThis_SEL = lang === "EN" ? AboutWhatIsThis_EN : AboutWhatIsThis_FR;
  const AboutHowUse_SEL = lang === "EN" ? AboutHowUse_EN : AboutHowUse_FR;
  const AboutEaaseSteps_SEL = lang === "EN" ? AboutEaaseSteps_EN : AboutEaaseSteps_FR;

  log && console.log("AboutTheGuide_BI.js AboutWhatIsThis_SEL=", AboutWhatIsThis_SEL);

  return (
    <>
      <h1 className="titleFont titleBig z-30 mt-9 mxs:mt-16 lg:mt-18">
        {lang === "EN" ? <>About the Guide</> : <>À propos du guide</>}
      </h1>

      <div className="mt-4 sm:mt-6  relative  text-blue-black  z-10">
        <AboutWhatIsThis_SEL MotivInterview_BI={MotivInterview_BI} textColumnsStyle={textColumnsStyle} />
        <div className={`mt-8 mb-8 ${dividingLine}`} />
        <AboutHowUse_SEL textColumnsStyle={textColumnsStyle} />
        <div className={`mt-8 mb-8 ${dividingLine}`} />
        <AboutEaaseSteps_SEL MotivInterview_BI={MotivInterview_BI} textColumnsStyle={textColumnsStyle} />
        <div className="h-12 w-full" />
      </div>
    </>
  );
};

export default AboutTheGuide_BI;
