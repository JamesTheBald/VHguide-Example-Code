import isJSONstring from "./isJSONstring";
import equalLocnObj from "./equalLocnObj";

const getStoredLocn = () => {
  const log = true;
  const log2 = false;

  if (typeof sessionStorage !== `undefined`) {
    // Global vars like sessionStorage must be protected by something like typeof test (or a useEffect) for Gatsby build to succeed.
    // (These global vars don't exist during the Server-Side Rendering during Gatsby build.)

    const rawLocn = sessionStorage.getItem("locn");
    log2 && console.log("getStoredLocn.js rawLocn=", rawLocn);

    if (rawLocn && isJSONstring(rawLocn)) {
      const storedLocn = JSON.parse(rawLocn); // converts stringified object back to object
      log && console.log("getStoredLocn.js (parsed) storedLocn=", storedLocn);

      if (testLocnObj(storedLocn) && !equalLocnObj(storedLocn, locn)) {
        // Update locn with value from sessionStorage
        log && console.log("getStoredLocn.js Updating locn to newLocn = storedLocn = ", storedLocn);
        setLocn(storedLocn);
      } else {
        log && console.log("getStoredLocn.js No change to locn.");
      }
    } else {
      log && console.log("getStoredLocn.js No valid stored locn object from sessionStorage, so storing locn =", locn);
      // sessionStorage.setItem("locn", JSON.stringify(locn)); // sessionStorage only saves strings so stringify the object
    }
  }

  return storedLocn;
};

export default getStoredLocn;
