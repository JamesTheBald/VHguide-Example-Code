import React from "react";
import { consts } from "react-elastic-carousel";

import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

import { useMyContext } from "../../context/Context";

const MyArrow = props => {
  const { type, onClick, isEdge } = props;
  const { winWidth } = useMyContext();

  const arrowSize = winWidth < 720 ? 40 : 50;

  const pointer =
    type === consts.PREV ? (
      <FiChevronLeft size={arrowSize} className="mr-4" />
    ) : (
      <FiChevronRight size={arrowSize} className="ml-4" />
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
