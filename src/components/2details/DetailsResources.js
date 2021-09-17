import React from "react";

import { useMyContext } from "../../context/Context";
import { contentPersonas } from "../../content/contentPersonas";

const DetailsResources = (props) => {
  const { contentID } = props;
  const { log, log2 } = useMyContext();;

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
                  {/* Screenshot for Resources link */}
                  {/* <div className="h-44 md:h-50 lg:h-56  bg-gray-300 flex justify-center   aspect-w-16 aspect-h-9">
                    <div className="flex justify-center object-contain">
                      <img
                        src={currResource.image}
                        // Per https://stackoverflow.com/questions/64910839/require-function-not-working-with-image-in-react
                        // NB: Images must be in /public/images  The alternative, with
                        // <img src={require('./image.jpg).default}  worked but only if the image is in the components subdir
                        // Putting them elsewhere led to a webpack file-loader rabbit hole.
                        alt="Webpage screenshot"
                      />
                    </div>
                  </div> */}

                  <div className="text-16 sm:text-20  tracking-0.3 sm:tracking-0.4  font-semibold">
                    {currResource.label}
                  </div>

                  <div className="mt-2 baseFont">
                    <span className="text-yellow-darkish">{currResource.linkTitle}</span>
                    <span className="pl-1.5 text-blue-black">{currResource.description}</span>
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
