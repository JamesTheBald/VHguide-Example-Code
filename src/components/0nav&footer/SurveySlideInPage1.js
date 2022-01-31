import React from "react";

import ContestTerms from "../../content/ContestTerms";
import { useMyContext } from "../../context/Context";

const SurveySlideInPage1 = props => {
  const { showContestTerms, setShowContestTerms, setShowSlideIn, buttonLight, buttonDark } = props;
  const { setFixedBackdrop, log } = useMyContext();

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
        Thank you! Would you like to participate in a short user survey, with a chance to win a $100 gift card? &#42;
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

        <button
          className="mr-6 axs:mt-6  w-36 axs:w-40  text-12 tracking-0.25  underline self-end cursor-pointer"
          onClick={() => toggleContestTerms()}
        >
          &#42;Terms and Conditions apply
        </button>
        {showContestTerms && (
          <ContestTerms showContestTerms={showContestTerms} setShowContestTerms={setShowContestTerms} />
        )}
      </div>
    </>
  );
};

export default SurveySlideInPage1;
