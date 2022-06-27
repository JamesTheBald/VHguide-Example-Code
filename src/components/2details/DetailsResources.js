import React from "react";
import { FiExternalLink } from "react-icons/fi";

import { useMyContext } from "../../context/Context";
import { contentPersonasBI } from "../../content/contentPersonasBI";

const DetailsResources = props => {
  const { contentID } = props;
  const { lang, log, log2 } = useMyContext();

  log && console.log("DetailsResources.js runs. contentID=", contentID);
  log2 && console.log("DetailsResources.js contentPersonasBI=", contentPersonasBI);

  let resources = [
    {
      title: { EN: <></>, FR: <></> },
      linkText: { EN: <></>, FR: <></> },
      link: "",
      description: { EN: <></>, FR: <></> },
    },
  ];

  if (contentPersonasBI[contentID]?.resources) {
    resources = contentPersonasBI[contentID].resources;
    log && console.log("DetailsResources.js resources =", resources);
  } else {
    log && console.log("DetailsResources.js - Resources for contentID", contentID, "not found.");
  }

  return (
    <>
      <div className="w-full">
        {/* Panel height independent of winWidth will look tall if there's little content */}

        <div
          className="px-2 pt-3 pb-4  grid grid-cols-1 md:grid-cols-2 mxl:grid-cols-3 grid-flow-row  
                        sm:gap-x-16 lg:gap-x-20  gap-y-10 sm:gap-y-16 lg:gap-y-20"
        >
          {resources.map((currResource, index) => {
            log && console.log("DetailsResources.js resources.map currResource.link=", currResource.link);
            const link = currResource.link;
            // handle cases where link is an object or  a string. 
            const url = typeof link === "string" || link instanceof String ? link : link[lang];

            return (
              <div key={index}>
                <a
                  className="w-11/12 sm:w-5/6 md:w-90 lg:w-100  flex flex-col justify-center"
                  href={url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="text-16 sm:text-20  tracking-0.3 sm:tracking-0.4  font-semibold">
                    {currResource.title[lang]}
                  </div>

                  <div className="mt-2 baseFont">
                    <span className="pr-2 orangeUnderline">
                      <span>{currResource.linkText[lang]}</span>
                      <FiExternalLink className="ml-1 inline" size={18} />
                    </span>
                    <span className="text-blue-black">{currResource.description[lang]}</span>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DetailsResources;
