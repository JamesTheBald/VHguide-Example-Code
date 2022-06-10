import { navigate } from "gatsby";

const changeOARTab = (desiredTabNames, onPediatrics) => {
  // console.log("changeOARTab.js runs. desiredTabNames=", desiredTabNames);

  if (desiredTabNames.key === "advice") {
    if (onPediatrics) {
      navigate("/details/advice/pediatrics");
      return;
    } else {
      // console.log("changeOARTab.js navigating to /details/advice/eaase");
      navigate("/details/advice/eaase");
    }
    return;
  }

  navigate(`/details/${desiredTabNames.key}`);
};

export default changeOARTab;
