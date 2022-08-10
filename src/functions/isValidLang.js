const isValidLang = inpt => {
  const log1 = false;

  if (inpt && typeof inpt === "string" && (inpt === "EN" || inpt === "FR")) {
    log1 && console.log("isValidLang.js input is ", inpt, " so lang is valid.");
    return true;
  } else {
    log1 && console.log("isValidLang.js input is ", inpt, " so lang is NOT valid.");
    return false;
  }
};

export default isValidLang;
