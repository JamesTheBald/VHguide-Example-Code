const testLocnObj = inp => {
  const log1 = false;
  log1 && console.log("testLocnObj.js runs. input object=", inp);

  if (!inp) {
    log1 && console.log("testLocnObj.js test fail: Input is null.");
    return false;
  }

  if (
    typeof inp.branch !== "number" ||
    typeof inp.topic !== "number" ||
    typeof inp.subtopic !== "number" ||
    typeof inp.showSubtopic !== "boolean"
  ) {
    log1 && console.log("testLocnObj.js test fail: One or more locn property is wrong type. input=", inp);
    log1 && console.log("testLocnObj.js typeof inp.branch = ", typeof inp.branch);
    log1 && console.log("testLocnObj.js typeof inp.topic = ", typeof inp.topic);
    log1 && console.log("testLocnObj.js typeof inp.subtopic  = ", typeof inp.subtopic);
    log1 && console.log("testLocnObj.js typeof inp.showSubtopic = ", typeof inp.showSubtopic);
    return false;
  }

  return true;
};

export default testLocnObj;
