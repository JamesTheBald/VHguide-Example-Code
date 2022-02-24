import React, { useState } from "react";
import { navigate } from "gatsby";
import Collapsible from "react-collapsible";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import { useMyContext } from "../../context/Context";
import DivLine from "../4general/DivLine";
import { medExemptOverviewTheySayContent } from "../../content/medExemptOverviewTheySayContent";

const MedExemptOverviewTheySay = () => {
  const { winWidth, setLocn, log, log2 } = useMyContext();
  0 && console.log(log, log2);

  // mEOTSSO stands for 'medical Exemptions Overview TheySay Section (is) Open'
  const [mEOTSSO, setMEOTSSO] = useState(Array(10).fill(false));

  const arrowSize = winWidth < 720 ? 20 : 22;

  const goToReprodConcerns = (event) => {
    event.stopPropagation();  // stops 'bubbling', ie. stops the click event from also acting on parent elements
    setLocn({
      branch: 0,
      topic: 0,
      subtopic: 3,
      showSubtopic: true,
    });
    navigate("/details/overview");
  };

  const TriggerComponent = (currPanel, sectionNum) => {
    return (
      <>
        <button
          className="w-full flex justify-between  triggerClassName  text-blue-main"
          onClick={() => {
            log2 && console.log("Collapsible section #", sectionNum, "clicked");
            setMEOTSSO(() => {
              let tempMEOTSSO = Array(10).fill(false);
              tempMEOTSSO[sectionNum] = true;
              log2 && console.log("MedExemptOverviewTheySay.js TriggerComponent: Setting mEOTSSO to ", tempMEOTSSO);
              return tempMEOTSSO;
            });
            // goToReprodConcerns();
          }}
        >
          {sectionNum === 5 ? (
            <div
              name="Link to Details-'Concerns About the Science' - Reproducive Impacts"
              className="orangeUnderline text-left"
              onClick={event => goToReprodConcerns(event)}
              onKeyPress={event => goToReprodConcerns(event)}
              role="link"
              tabIndex={sectionNum}
            >
              {currPanel.subheading}
            </div>
          ) : (
            <div className="text-left">{currPanel.subheading}</div>
          )}
          <IoIosArrowDown className="CustomTriggerCSS hideWhenClosed" size={arrowSize} />
          <IoIosArrowForward className="CustomTriggerCSS hideWhenOpen" size={arrowSize} />
        </button>
        <DivLine className="mt-0.5 mb-3 sm:mb-4" />
        <div className="CustomTriggerCSS hideWhenOpen  h-2" />
      </>
    );
  };

  return (
    <>
      <h3 className="mb-5 listTitleClass">What patients are saying:</h3>

      {medExemptOverviewTheySayContent.map((currSection, sectionNum) => {
        log2 && console.log("MedExemptOverviewTheySay.js section#", sectionNum, ", currSection=", currSection);
        const theySayQuotes = currSection.quotes;
        log2 && console.log("MedExemptOverviewTheySay.js theySayQuotes=", theySayQuotes);

        return (
          <Collapsible
            key={sectionNum}
            trigger={TriggerComponent(currSection, sectionNum)}
            triggerClassName="CustomTriggerCSS--closed"
            triggerOpenedClassName="CustomTriggerCSS--open"
            open={mEOTSSO[sectionNum]}
            transitionTime={150}
          >
            <div className="ml-2 mb-3 sm:mb-4  flex flex-col">
              {theySayQuotes.map((currQuote, quoteNum) => {
                log2 && console.log("MedExemptOverviewTheySay.js quote#", quoteNum, ", currQuote=", currQuote);

                return (
                  <div key={quoteNum} className="flex">
                    <i className={`ri-double-quotes-l text-gray-mid leading-none`} />
                    <div key={quoteNum} className="ml-2 mt-1 mb-4">
                      {currQuote}
                    </div>
                  </div>
                );
              })}
            </div>
          </Collapsible>
        );
      })}
    </>
  );
};

export default MedExemptOverviewTheySay;
