import React from "react";
import { FiExternalLink } from "react-icons/fi";

import AboutWhatIsThisEN from "../../content/AboutWhatIsThisEN";
import AboutWhatIsThisFR from "../../content/AboutWhatIsThisFR";
import AboutHowUseEN from "../../content/AboutHowUseEN";
import AboutHowUseFR from "../../content/AboutHowUseFR";
import AboutEaaseStepsEN from "../../content/AboutEaaseStepsEN";
import AboutEaaseStepsFR from "../../content/AboutEaaseStepsFR";
import textColumns from "../../functions/textColumns";
import { useMyContext } from "../../context/Context";

const MotivInterviewBI = () => {
  const { lang } = useMyContext();

  const linkURL =
    lang === "EN"
      ? "https://www.canada.ca/content/dam/phac-aspc/documents/services/reports-publications/canada-communicable-disease-report-ccdr/monthly-issue/2020-46/issue-4-april-2-2020/ccdrv46i04a06-eng.pdf"
      : "https://www.canada.ca/content/dam/phac-aspc/documents/services/reports-publications/canada-communicable-disease-report-ccdr/monthly-issue/2020-46/issue-4-april-2-2020/ccdrv46i04a06f-fra.pdf";

  return (
    <a className="ml-1.5 orangeUnderline" href={linkURL} rel="noopener noreferrer" target="_blank">
      {lang === "EN" ? <>Motivational Interviewing</> : <>l’entrevue motivationnelle</>}{" "}
      <FiExternalLink className="inline" size={18} />
    </a>
  );
};

const dividingLine = "h-2  w-full  border-t-2 border-solid border-gray-mid";

const AboutTheGuideBI = () => {
  const { winWidth, lang, log } = useMyContext();

  log && console.log("AboutTheGuideBI.js lang=", lang);

  const textColumnsStyle = textColumns(winWidth, 1024, 1920);

  const AboutWhatIsThisSEL = lang === "EN" ? AboutWhatIsThisEN : AboutWhatIsThisFR;
  const AboutHowUseSEL = lang === "EN" ? AboutHowUseEN : AboutHowUseFR;
  const AboutEaaseStepsSEL = lang === "EN" ? AboutEaaseStepsEN : AboutEaaseStepsFR;

  log && console.log("AboutTheGuideBI.js AboutWhatIsThisSEL=", AboutWhatIsThisSEL);

  return (
    <>
      <h1 className="titleFont titleBig z-30 mt-9 mxs:mt-16 lg:mt-18">
        {lang === "EN" ? <>About the Guide</> : <>À propos du guide</>}
      </h1>

      <div className="mt-4 sm:mt-6  relative  text-blue-black  z-10">
        <AboutWhatIsThisSEL MotivInterviewBI={MotivInterviewBI} textColumnsStyle={textColumnsStyle} />
        <div className={`mt-8 mb-8 ${dividingLine}`} />
        <AboutHowUseSEL textColumnsStyle={textColumnsStyle} />
        <div className={`mt-8 mb-8 ${dividingLine}`} />
        <AboutEaaseStepsSEL MotivInterviewBI={MotivInterviewBI} textColumnsStyle={textColumnsStyle} />
        <div className="h-12 w-full" />
      </div>
    </>
  );
};

export default AboutTheGuideBI;
