import React from "react";

import ContestTermsEN from "../../content/ContestTermsEN";
import ContestTermsFR from "../../content/ContestTermsFR";
import { useMyContext } from "../../context/Context";

const SurveySlideInPage1 = props => {
  const { showContestTerms, setShowContestTerms, setShowSlideIn, buttonLight, buttonDark } = props;
  const { setFixedBackdrop, lang, log } = useMyContext();

  const ContestTermsSEL = lang === "EN" ? ContestTermsEN : ContestTermsFR;

  const toggleContestTerms = () => {
    setShowContestTerms(currShowTerms => {
      log && console.log("SurveySlideInPage1.js setting showContestTerms to ", !currShowTerms);
      return !currShowTerms;
    });
    setFixedBackdrop(currFixedBackdrop => {
      log && console.log("SurveySlideInPage1.js setting fixedBackdrop to ", !currFixedBackdrop);
      return !currFixedBackdrop;
    });
  };

  return (
    <>
      <div className="mt-9 pr-9 axs:pr-10 pb-5">
        Thanks for browsing! Would you like to answer a short survey, with a chance to win a $100 gift card? &#42;
      </div>
      <div className="flex justify-between">
        <div className="flex">
          <a
            className={`${buttonLight} hover:border-yellow-darkish`}
            href="https://survey.ucalgary.ca/jfe/form/SV_6GbMwSo0jnPE1WS"
            rel="external noreferrer"
            target="_blank"
            onClick={() => setShowSlideIn(false)}
          >
            <div className="">Yes</div>
          </a>

          <button className={`ml-5 ${buttonDark} hover:border-yellow-darkish`} onClick={() => setShowSlideIn(false)}>
            <div className="">No</div>
          </button>
        </div>

        <div className="flex flex-col  text-12 tracking-0.25  mr-6 axs:mt-5">
          {/* <div>(Survey data &#8594; our future funding)</div> */}
          <button
            className="w-36 axs:w-40  text-12 tracking-0.25  underline self-end cursor-pointer"
            onClick={() => toggleContestTerms()}
          >
            &#42;Terms and Conditions apply
          </button>
        </div>
        {showContestTerms && (
          <ContestTermsSEL showContestTerms={showContestTerms} setShowContestTerms={setShowContestTerms} />
        )}
      </div>
    </>
  );
};

export default SurveySlideInPage1;
