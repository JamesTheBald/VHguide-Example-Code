import React from "react";
// import { useMyContext } from "../../context/Context";

const PearlsPreface = () => {
  // const { winWidth } = useMyContext();

  // const columnStyle =
  //   winWidth < 720
  //     ? { columnCount: 1, columnGap: 50 }
  //     : winWidth < 1024
  //     ? { columnCount: 2, columnGap: 50 }
  //     : winWidth < 1600
  //     ? { columnCount: 2, columnGap: 60 }
  //     : winWidth < 1920
  //     ? { columnCount: 3, columnGap: 60 }
  //     : { display: "flex", flexDirection: "column" };

  return (
    <div className="">
      <div className="mt-4 xl:w-72 text-blue-black text-16 sm:text-18" 
      // style={columnStyle}
      >
        <div className="dontBreak">
          This section contains advice from fellow clinicians. Your colleagues describe ways to move beyond vaccine acceptance as a goal to instead talk about motivations and how to become an ally to your patient.
        </div>
          {/* Here you will find peer-to-peer advice on how to approach and conduct vaccine hesitancy conversations. Fellow */}
          {/* clinicians describe their approaches to: */}

        {/* <br />

        <div>
          <strong>Affirming you’re an ally by:</strong>
          <ul className="ml-6 list-disc list-outside">
            <li className="pb-0">Listening closely and reflectively</li>
            <li className="pb-0">Affirming their patient’s worldview</li>
            <li className="pb-0">Drawing their patient in</li>
            <li className="pb-0">Finding a shared, positive goal</li>
          </ul>
        </div>

        <br />

        <div>
          <strong>Lowering the ‘temperature’ by:</strong>
          <ul className="ml-6 list-disc list-outside">
            <li className="pb-0">Checking yourself on the way into the conversation</li>
            <li className="pb-0">De-escalating, and</li>
            <li className="pb-0">Extending the conversation</li>
          </ul>
        </div> */}
      </div>
      <div name="dividing line" className="xl:hidden mt-6 mb-4 w-full  border-gray-medium border-b-3" />
    </div>
  );
};

export default PearlsPreface;
