import React from "react";
import { consts } from "react-elastic-carousel";

import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import { useMyContext } from "../../context/Context";

const MyArrow = (props) => {
  const { type, onClick, isEdge } = props;
  const { winWidth } = useMyContext();

  const arrowSize = winWidth < 720 ? 40 : 50;

  const pointer =
    type === consts.PREV ? (
      <>
        <IoIosArrowDropleftCircle size={arrowSize} className="mr-4" />
      </>
    ) : (
      <>
        <IoIosArrowDroprightCircle size={arrowSize} className="ml-4" />
      </>
    );
  return (
    <button
      onClick={onClick}
      disabled={isEdge}
      className={isEdge ? `text-blue-black opacity-30` : "text-blue-black opacity-70"}
    >
      {pointer}
    </button>
  );
};

export default MyArrow;
