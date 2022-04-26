import React from "react";
import { navigate } from "gatsby";

import { useMyContext } from "../../context/Context";
import { contentFullStoriesBI } from "../../content/contentFullStoriesBI";

const AdviceFullStory = props => {
  const { fullStoryID } = props;
  const { winWidth, queryData, lang, log } = useMyContext();

  log && console.log("AdviceFullStory.js runs. fullStoryID=", fullStoryID);

  const pplIcons = queryData.current.pplIcons.edges;
  log && console.log("AdviceFullStory.js pplIconsData=", pplIcons);

  let story = {};
  let validData = true;
  if (contentFullStoriesBI[fullStoryID]?.text[lang]) {
    story = contentFullStoriesBI[fullStoryID];
    log && console.log("AdviceFullStory.js story=", story);
    log && console.log("AdviceFullStory.js story.title[lang]=", story.title[lang]);
    log && console.log("AdviceFullStory.js story.text[lang]=", story.text[lang]);
  } else {
    log && console.log("AdviceFullStory.js - content for fullStoryID", fullStoryID, "not found.");
    navigate("/explore");
    validData = false;
  }

  return (
    <section>
      <button className="orangeLink" onClick={() => navigate(-1)}>
        &#60; {lang === "EN" ? "back" : "retourner"}
      </button>

      <h3 className="pt-6 text-25">{story.title[lang]}</h3>

      <div
        className={`mt-7 baseFont text-blue-black`}
        // style={{ columnCount: winWidth < 1024 ? 1 : winWidth < 1919 ? 2 : 3, columnGap: 60 }}
        style={{
          columnCount: winWidth < 1024 ? 1 : winWidth < 1600 ? 2 : 3,
          columnGap: winWidth < 1600 ? 50 : 60,
        }}
      >
        {validData && (
          <p>
            {/* <img src={story.image} alt="Icon" className="mr-6 mb-2  w-30 h-30 float-left" /> */}

            {pplIcons.map((item, index) => {
              return (
                item.node.relativePath === story.image && (
                  <img key={index} src={item.node.publicURL} alt="Icon" className="mr-6 mb-2  w-30 h-30 float-left" />
                )
              );
            })}

            {story.text[lang]}
          </p>
        )}
      </div>
    </section>
  );
};

export default AdviceFullStory;
