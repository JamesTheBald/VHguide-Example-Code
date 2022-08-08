import isJSONstring from "./isJSONstring";
import testLocnObj from "./testLocnObj";

const getStoredLocn = () => {
  const log = true;

  let storedLocn = "";
  if (typeof sessionStorage !== `undefined`) {
    // Global vars like sessionStorage must be protected by something like typeof test (or a useEffect) for Gatsby build to succeed.
    // (These global vars don't exist during the Server-Side Rendering during Gatsby build.)
    const rawLocn = sessionStorage.getItem("locn");

    if (rawLocn && isJSONstring(rawLocn)) {
      storedLocn = JSON.parse(rawLocn); // converts stringified object back to object
      log && console.log("getStoredLocn.js parsed storedLocn=", storedLocn);

      if (testLocnObj(storedLocn)) {
        log && console.log("getStoredLocn.js parsed storedLocn passed testLocnObj test");
      } else {
        storedLocn = "";
        log && console.log("getStoredLocn.js parsed storedLocn failed testLocnObj test");
      }
    } else {
      log && console.log("getStoredLocn.js Bad rawLocn =", rawLocn);
    }
  }
  return storedLocn;
};

export default getStoredLocn;
