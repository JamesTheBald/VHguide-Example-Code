import React from "react";
import { useMyContext } from "../../context/Context";
import { landingBioContent } from "../../content/landingBioContent";
import LinkToAboutCredits from "../../content/LinkToAboutCredits";

const Home3WhoWeAre = (props) => {
  const { outerGap, topGap } = props;
  const { winWidth } = useMyContext();

  const bioWidth =
    winWidth < 510 ? "100%" : winWidth < 720 ? "80%" : winWidth < 1024 ? "29%" : winWidth < 1600 ? "28%" : "20%";

  return (
    <>
      <div
        className={`w-full flex flex-col items-center  text-blue-black`}
        style={{ paddingLeft: outerGap, paddingRight: outerGap }}
      >
        <div style={{ height: topGap - 20 }} />
        <div className="titleFont titleBig">Who We Are</div>
        <div className="w-25 mxs:w-32 sm:w-40  h-5 mxs:h-6  border-blue-black border-0 border-b-3" />
        <div className="mt-9 max-w-220  smThenBaseFont xl:text-20 text-center">
          The Vaccine Hesitancy Guide was developed by a team of researchers out of the University of Calgary’s School
          of Public Policy. We assembled the Guide’s content out of interviews and conversations with primary care
          clinicians.
        </div>

        <div
          className="mt-10 lg:mt-14 w-full flex flex-col sm:flex-row  
                        items-center sm:items-start justify-between md:justify-around  text-center"
        >
          {landingBioContent.map((currBio, indx) => {
            return (
              <div key={indx} style={{ width: bioWidth }}>
                <img
                  src={currBio.image}
                  alt={`${currBio.name} profile`}
                  className="mx-auto w-2/3 mxs:w-1/2 sm:w-5/6 lg:w-3/4 xl:w-3/4 rounded-full"
                />
                <div className="mt-5 mxs:mt-6 lg:mt-8 titleFont emphFont text-center">{currBio.name}</div>
                <div className="mt-4 mb-12 sm:mb-0  smThenBaseFont">{currBio.info}</div>
              </div>
            );
          })}
        </div>

        <div
          className="sm:mt-10 lg:mt-8  w-70 mxs:w-90 sm:w-120 linkInvPill flex justify-center items-center"
          style={{ height: "43px" }}
        >
          <div className="mt-1 baseFont text-15 mxs:text-16 sm:text-18">
            <LinkToAboutCredits text={"Learn more about our team"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home3WhoWeAre;
