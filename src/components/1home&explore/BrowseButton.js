import React from "react";
import { Link } from "gatsby";
import { animateScroll } from "react-scroll";

import { useMyContext } from "../../context/Context";

const BrowseButton = props => {
  const { setNoneSelected, setLocn } = useMyContext();
  const { className, buttonDestn, newLocn, children } = props;

  return (
    <Link
      to={buttonDestn}
      className={`pt-1 mxs:pt-1.5  rounded-full cursor-pointer flex justify-center items-center  smThenBaseFont mxs:text-18  
                  border border-solid ${className} hover:bg-opacity-0`}
      style={props.style}
      onClick={() => {
        setLocn(newLocn);
        setNoneSelected(true);
        if (typeof window !== `undefined`) {
          animateScroll.scrollToTop({ duration: 0 }); // time in ms
        }
      }}
    >
      <button>{children}</button>
    </Link>
  );
};

export default BrowseButton;
