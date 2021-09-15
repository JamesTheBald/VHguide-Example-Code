import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";

import { useMyContext } from "../../context/Context";

const VideoSnapshotHome = () => {
  const { widthAdjRatio } = useMyContext();

  return (
    <div className="w-full grid justify-items-center items-center" style={{ gridTemplateAreas: "area1" }}>
      <img style={{ gridArea: "area1" }} src="/videos/video starting snapshot.png" alt="Video snapshot" />
      <div className="opacity-100 text-gray-medium" style={{ gridArea: "area1" }}>
        <AiFillPlayCircle size={(120 * (widthAdjRatio + 2)) / 3} />
      </div>
    </div>
  );
};

export default VideoSnapshotHome;