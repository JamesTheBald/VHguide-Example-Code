import React from "react";
import { FiExternalLink } from "react-icons/fi";

import { useMyContext } from "../../context/Context";
import { contentPersonas } from "../../content/contentPersonas";

const DetailsResources = props => {
  const { contentID } = props;
  const { log, log2 } = useMyContext();

  log && console.log("DetailsResources.js runs. contentID=", contentID);
  log2 && console.log("DetailsResources.js contentPersonas=", contentPersonas);

  let resources = "";
  if (contentPersonas[contentID]?.advice?.resources[0]) {
    resources = contentPersonas[contentID].advice.resources;
    log && console.log("DetailsResources.js resources =", resources);
  } else {
    log && console.log("DetailsResources.js - Resources for contentID", contentID, "not found.");
    resources = [
      {
        label: "",
        image: "",
        linkTitle: "",
        link: "",
        description: "",
      },
    ];
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
            return (
              <div key={index}>
                <a
                  className="w-11/12 sm:w-5/6 md:w-90 lg:w-100  flex flex-col justify-center"
                  href={currResource.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="text-16 sm:text-20  tracking-0.3 sm:tracking-0.4  font-semibold">
                    {currResource.title}
                  </div>

                  <div className="mt-2 baseFont">
                    <span className="pr-2 orangeUnderline">
                      <span>{currResource.linkText}</span>
                      <FiExternalLink className="ml-1 inline" size={18} />
                    </span>
                    <span className="text-blue-black">{currResource.description}</span>
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
