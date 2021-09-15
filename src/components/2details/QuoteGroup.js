import React from "react";
import { useMyContext } from "../../context/Context";
import QuoteBoxes from "./QuoteBoxes";

const QuoteGroup = props => {
  const { contentArray } = props;
  const { winWidth, setFullStoryID, log2 } = useMyContext();

  log2 && console.log("QuoteGroup.js runs. contentArray=", contentArray);

  return (
    <>
      {contentArray.map((currContent, index) => {
        return currContent.subheading ? (
          <div key={index}>
            <div key={index} className="flex flex-col">
              {index > 0 && <div name="dividing line" className="mt-11 w-full  border-gray-medium border-b-3" />}

              <div className="my-8 sm:my-11  font-semibold  text-18 mxs:text-20 sm:text-25  tracking-0.3 mxs:tracking-0.4 sm:tracking-0.5">
                {currContent.subheading}
              </div>
            </div>
          </div>
        ) : (
          <div
            key={index}
            style={{
              columnCount: winWidth < 950 ? 1 : winWidth < 1600 ? 2 : 3,
              columnGap: winWidth < 1600 ? 50 : 60,
            }}
          >
            <QuoteBoxes quoteArray={currContent.quotes} setFullStoryID={setFullStoryID} />
          </div>
        );
      })}
    </>
  );
};

export default QuoteGroup;