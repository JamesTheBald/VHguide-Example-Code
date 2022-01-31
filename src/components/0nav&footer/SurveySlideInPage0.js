import React from "react";

const SurveySlideInPage0 = props => {
  const { ActiveStar, finalStars, setPageNum, buttonLight, showSubmitTip, setShowSubmitTip } = props;

  // from https://curiousprogrammer.dev/blog/debugging-gatsby-plugin-google-gtag-for-google-analytics-4-with-gatsby/
  const trackClickEvent = data => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click", data);
    }
  };

  const closeTip = event => {
    event.stopPropagation();
    setShowSubmitTip(false);
  };

  return (
    <div className="" onClick={event => closeTip(event)} onKeyPress={event => closeTip(event)} tabIndex={0} role="link">
      <div className="pt-11 pr-14 pb-5">
        Thanks for browsing! How would you rate your overall experience with vhguide.ca?
      </div>
      <div className="flex">
        <div className="flex justify-between">
          <ActiveStar starNum={1} />
          <ActiveStar starNum={2} />
          <ActiveStar starNum={3} />
          <ActiveStar starNum={4} />
          <ActiveStar starNum={5} />
        </div>

        <button
          className={`ml-4 relative ${buttonLight} hover:text-gray-light hover:bg-blue-black`}
          onClick={event => {
            if (finalStars > 0) {
              trackClickEvent({ siteRating: { finalStars } });
              setPageNum(1);
            } else {
              event.stopPropagation();
              setShowSubmitTip(true);
            }
          }}
        >
          <div className="">Submit</div>

          {showSubmitTip && (
            <select
              className="absolute w-50 -top-30 px-2 py-2 bg-gray-light text-blue-black rounded-lg"
              onClick={event => closeTip(event)}
              onKeyPress={event => closeTip(event)}
            >
              Please select a number of stars, from 1 (very poor) to 5 (very good), then click Submit
            </select>
          )}
        </button>
      </div>
    </div>
  );
};

export default SurveySlideInPage0;
