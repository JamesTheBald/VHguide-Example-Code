import React from "react";
import { navigate } from "gatsby";

import { useMyContext } from "../../context/Context";
import { contentFullStories } from "../../content/contentFullStories";

const AdviceFullStory = (props) => {
  const { fullStoryID } = props;
  const { winWidth, log } = useMyContext();

  log && console.log("AdviceFullStory.js runs. fullStoryID=", fullStoryID);

  let story = {};
  let validData = true;
  if (contentFullStories[fullStoryID]?.text) {
    story = contentFullStories[fullStoryID];
    log && console.log("AdviceFullStory.js story=", story);
  } else {
    log && console.log("AdviceFullStory.js - content for fullStoryID", fullStoryID, "not found.");
    navigate("/explore");
    validData = false;
  }

  return (
    <>
      <button className="orangeLink" onClick={() => navigate(-1)}>
        &#60; back
      </button>

      <div className="pt-6 text-25">{story.title}</div>

      <div
        className={`mt-7 baseFont text-blue-black`}
        style={{ columnCount: winWidth < 1024 ? 1 : winWidth < 1919 ? 2 : 3, columnGap: 60 }}
      >
        {validData && (
          <>
            <img src={story.image} alt="Icon" className="mr-6 mb-2  w-30 h-30 float-left" />
            {story.text}
          </>
        )}
      </div>
    </>
  );
};

export default AdviceFullStory;
