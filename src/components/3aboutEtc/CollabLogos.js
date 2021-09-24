// import React from "react";
import React from "react";
import { useMyContext } from "../../context/Context";
import logoContent from "../../content/logoContent";

const CollabLogos = (props) => {
  const { size } = props;
  let { widthAdjRatio } = useMyContext();

  // For Flex layout
  const margins = "mr-auto axs:mr-10 mxs:mr-16 sm:mr-20 md:mr-24  mb-10 mxs:mb-14";
  const logoClass =
    size === "small"
      ? margins + " h-10 mxs:h-12 sm:h-14 md:h-16 lg:h-18  max-w-40 mxs:max-w-48 sm:max-w-56 md:max-w-60 lg:max-w-70"
      : margins + " h-14 mxs:h-15 sm:h-18 md:h-22 lg:h-25  max-w-52 mxs:max-w-60 sm:max-w-70 md:max-w-80 lg:max-w-90";
  // : margins + " h-28 mxs:h-30 sm:h-36 md:h-44 lg:h-50  max-w-100 mxs:max-w-120 sm:max-w-140 md:max-w-160 lg:max-w-180";

  // For Grid layout
  // const collabLogo = "max-h-14 mxs:max-h-16 sm:max-h-18 md:max-h-22 lg:max-h-25";

  return (
    <div>
      <div
        className={`mt-8 ${
          size === "big" ? "ml-10 mxs:ml-16" : "ml-14 mxs:ml-28"
        }  flex flex-col axs:flex-row axs:flex-wrap`}
        // className="mt-6  grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 grid-flow-row
        //            gap-x-12 md:gap-x-18 gap-y-6 mxs:gap-y-8 sm:gap-y-10  justify-items-center"
      >
        {logoContent.map((currLogo, indx) => {
          const scale = currLogo.scale ? currLogo.scale : 1;
          const xCompensation = scale !== 1 ? scale * 12 * (widthAdjRatio+1)/2 : 0;
          const yCompensation = scale !== 1 ? scale * 3.33 * widthAdjRatio : 0;


          return currLogo.useDivWrapper ? (
            <div key={indx} className={logoClass}>
              <img className="" src={currLogo.path} alt={currLogo.alt} />
            </div>
          ) : (
            <img
              key={indx}
              className={logoClass}
              style={{
                transform: `scale(${(scale, scale)})`,
                paddingBottom: yCompensation,
                marginTop: yCompensation,
                marginLeft: xCompensation,
                marginRight: xCompensation,
              }}
              src={currLogo.path}
              alt={currLogo.alt}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CollabLogos;
