import { navigate } from "gatsby";

const changeOARTab = (desiredTabName, onPediatrics, setSelectedTab) => {
  switch (desiredTabName) {
    case "Overview":
      setSelectedTab("Overview");
      navigate("/details/overview");
      break;
    case "Advice":
      setSelectedTab("Advice");
      if (onPediatrics === true) {
        navigate("/details/advice/pediatrics");
      } else {
        navigate("/details/advice/eaase");
      }
      break;
    case "Resources":
      setSelectedTab("Resources");
      navigate("/details/resources");
      break;
    case "Clinical Pearls":
      setSelectedTab("Clinical Pearls");
      navigate("/details/pearls");
      break;
    default:
      setSelectedTab("Overview");
      navigate("/details/overview");
  }
};

export default changeOARTab;
