import React, { useRef, useState } from "react";
import homePageVideo from "../../assets/homepage/Video for Home Page - processed.mp4";
import { AiFillPlayCircle } from "react-icons/ai";
// import VideoSnapshotHome from "./VideoSnapshotHome";
import { useMyContext } from "../../context/Context";

const Home2HesTypes = props => {
  const { BrowseButton } = props;
  const { widthAdjRatio } = useMyContext();

  const vidRef = useRef(null);
  const [playButtonVisible, setPlayButtonVisible] = useState(true);

  const HesTypesPanel = ({ className }) => {
    return (
      <section className={className}>
        {/* {{ top: winWidth < 510 ? "90%" : winWidth < 720 ? "92%" : winWidth < 1024 ? "94%" : "96%", width: "90%" }} */}
        <h2 className="titleFont titleBig">Hesitancy Types</h2>
        <div className="pt-3">
          Browse the ‘types’ of COVID-19 vaccine hesitancies that primary care teams are encountering to access advice,
          tips, conversational strategies, and other resources to improve conversations with patients.
        </div>
        <div className="pt-3">
          Following the Guide’s EAASE steps can help you change the conversation from being about vaccine acceptance to
          focusing on allyship and your patient’s motivations. The literature says this is an important change to make
          if you want to improve the conversation.
        </div>
        <div className="h-8" />
        <BrowseButton classExt="max-w-56 mxs:max-w-80  h-9 mxs:h-12  text-blue-dark hover:text-gray-light" />
      </section>
    );
  };

  const VideoPlayerPanel = ({ className }) => {
    return (
      <div className={className} style={{ gridTemplateAreas: "area1" }}>
        <video ref={vidRef} className="focus:z-40" controls style={{ gridArea: "area1", zIndex: 20 }}>
          <source src={homePageVideo} type="video/mp4" preload="metadata" muted={true} />
          <track src="" kind="captions" srcLang="en" label="no audio, no captions available" />
        </video>

        <button
          className={`opacity-80 text-gray-medium z-30 ${
            !playButtonVisible && "hidden"
          } flex justify-center items-center`}
          style={{ gridArea: "area1" }}
          onClick={() => {
            vidRef.current.play();
            setPlayButtonVisible(false);
          }}
        >
          <AiFillPlayCircle size={(100 * (widthAdjRatio + 2)) / 3} />
        </button>
      </div>
    );
  };

  return (
    <>
      <div className={`w-full stdMargins text-gray-light`}>
        <div className="sectionGapHomePage" />

        <div
          id="hesTypes"
          className="mxs:mx-4 sm:mx-8 md:mx-12 lg:mx-16 justify-center  flex flex-col xl:flex-row  relative "
        >
          <HesTypesPanel
            className="sm:ml-auto  xl:ml-0 xl:my-auto xl:order-2   
            w-full sm:w-5/6 sm:max-w-140 md:w-140 lg:w-150 xl:w-140  z-50
            px-5 mxs:px-8 sm:px-10 md:px-14  py-5 mxs:py-7 sm:py-9 md:py-12
          bg-blue-black rounded-2xl mxs:rounded-3xl sm:rounded-4xl  xl:rounded-l-none  smThenBaseFont"
          />
          <VideoPlayerPanel
            className="xl:order-1  -top-2 sm:-top-6 xl:top-0  w-full md:w-11/12 lg:w-5/6 xl:w-300  relative grid justify-center
            pt-2 sm:pt-6 pb-2  border-3 border-solid border-gray-black  bg-black   overflow-hidden
            rounded-2xl mxs:rounded-3xl sm:rounded-4xl"
          />
          {/* px-1 py-6  bg-black  */}
        </div>
      </div>
    </>
  );
};

export default Home2HesTypes;
