import React from "react";
import { FiExternalLink } from "react-icons/fi";

import AboutWhatIsThis from "../../content/AboutWhatIsThis";
import AboutHowUse from "../../content/AboutHowUse";
import AboutEaaseSteps from "../../content/AboutEaaseSteps";
import textColumns from "../../functions/textColumns";
import { useMyContext } from "../../context/Context";

const MotivationalInterviewing = () => {
  return (
    <a
      className="ml-1.5 orangeUnderline"
      href="https://www.canada.ca/content/dam/phac-aspc/documents/services/reports-publications/canada-communicable-disease-report-ccdr/monthly-issue/2020-46/issue-4-april-2-2020/ccdrv46i04a06-eng.pdf"
      rel="noopener noreferrer"
      target="_blank"
    >
      Motivational Interviewing <FiExternalLink className="inline" size={18} />
    </a>
  );
};

const dividingLine = "h-2  w-full  border-t-2 border-solid border-gray-mid";

const AboutTheGuide = () => {
  const { winWidth } = useMyContext();
  const textColumnsStyle = textColumns(winWidth, 1024, 1920);

  return (
    <>
      <h1 className="titleFont titleBig z-30 mt-9 mxs:mt-16 lg:mt-18">About the Guide</h1>

      <div className="mt-4 sm:mt-6  relative  text-blue-black  z-10">
        <AboutWhatIsThis MotivationalInterviewing={MotivationalInterviewing} textColumnsStyle={textColumnsStyle} />
        <div className={`mt-8 mb-8 ${dividingLine}`} />
        <AboutHowUse textColumnsStyle={textColumnsStyle} />
        <div className={`mt-8 mb-8 ${dividingLine}`} />
        <AboutEaaseSteps MotivationalInterviewing={MotivationalInterviewing} textColumnsStyle={textColumnsStyle} />
        <div className="h-8 w-full" />
      </div>
    </>
  );
};

export default AboutTheGuide;
