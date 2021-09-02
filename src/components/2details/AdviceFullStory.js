import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Context from "../Context";
import { contentFullStories } from "../../content/contentFullStories";

const AdviceFullStory = (props) => {
  const { fullStoryID } = props;
  const { winWidth, log } = useContext(Context);

  const history = useHistory();
  let story = {};

  let validData = true;
  if (contentFullStories[fullStoryID]?.text) {
    story = contentFullStories[fullStoryID];
    log && console.log("AdviceFullStory.js runs. fullStoryID=", fullStoryID);
  } else {
    log && console.log("AdviceFullStory.js - content for fullStoryID", fullStoryID, "not found.");
    // setFullStoryID("");
    history.push("/explore");
    validData = false;
  }

  return (
    <>
      <div className="orangeLink" onClick={() => history.goBack()}>
        &#60; back
      </div>

      <div className="pt-6 text-25">{story.title}</div>

      <div
        className={`mt-7 baseFont text-blue-black`}
        style={{ columnCount: winWidth < 1024 ? 1 : winWidth < 1919 ? 2 : 3, columnGap: 60 }}
      >
        {validData && (
          <>
            <img src={story.image} alt="Icon image" className="mr-6 mb-2  w-30 h-30 float-left" />
            {story.text}
          </>
        )}
      </div>
    </>
  );
};

export default AdviceFullStory;
