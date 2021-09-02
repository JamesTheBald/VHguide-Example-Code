import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Context from "../context/Context";

const LinkToAboutEAASE = (props) => {
  const { text } = props;
  const { scrollTarget, setNavBarOpen, log } = useContext(Context);
  const history = useHistory();

  return (
    <span
      className="ml-1.5 orangeLink"
      onClick={() => {
        log && console.log("LinkToAboutEAASE.js runs. Initial scrollTarget.current=", scrollTarget.current);
        scrollTarget.current = "EAASE Steps";
        setNavBarOpen(false);
        history.push("/about");
      }}
    >
      {text}
    </span>
  );
};

export default LinkToAboutEAASE;
