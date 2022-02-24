import React from "react";
import { Link } from "gatsby";
import { animateScroll } from "react-scroll";

import { useMyContext } from "../../context/Context";

const BrowseButton = props => {
  const { setNoneSelected } = useMyContext();
  const { className } = props;

  return (
    <Link
      to="/explore"
      className={`pt-1  rounded-full cursor-pointer flex justify-center items-center  smThenBaseFont mxs:text-18  
                    border-2 border-solid ${className} bg-gray-light hover:bg-opacity-0`}
      style={props.style}
      onClick={() => {
        setNoneSelected(true);
        if (typeof window !== `undefined`) {
          animateScroll.scrollToTop({ duration: 0 }); // time in ms
        }
      }}
    >
      <button>Browse Hesitancy Types</button>
    </Link>
  );
};

export default BrowseButton;
