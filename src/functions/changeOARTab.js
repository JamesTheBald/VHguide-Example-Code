import { navigate } from "gatsby";

const changeOARTab = (desiredTabName, onPediatrics) => {
  switch (desiredTabName) {
    case "Overview":
      navigate("/details/overview");
      break;
    case "Advice":
      if (onPediatrics === true) {
        navigate("/details/advice/pediatrics");
      } else {
        navigate("/details/advice/eaase");
      }
      break;
    case "Resources":
      navigate("/details/resources");
      break;
    case "Clinical Pearls":
      navigate("/details/pearls");
      break;
    default:
      navigate("/details/overview");
  }
};

export default changeOARTab;
