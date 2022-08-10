// Function to store locn to sessionStorage
import testLocnObj from "./testLocnObj";

const log = false;

const storeLocn = locn1 => {
  if (testLocnObj(locn1)) {
    log && console.log("Context.js storeLocn() storing locn=", locn1);
    sessionStorage.setItem("locn", JSON.stringify(locn1)); // sessionStorage only saves strings so stringify the object
  } else {
    log && console.log("Context.js storeLocn() No storing. Bad new locn =", locn1);
    return;
  }
};

export default storeLocn;
