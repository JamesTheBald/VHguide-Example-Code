import testLocnObj from "./definedLocnObj";

// Returns true if the input object has the same main key-value pair types as locn
const isLocnObj = obj => {
  const locnObjTest =
    testLocnObj(obj) &&
    typeof obj.branch === "number" &&
    typeof obj.topic === "number" &&
    typeof obj.subtopic === "number" &&
    typeof obj.showSubtopic === "boolean";

  console.log("isLocnObj.js obj=", obj);
  console.log("isLocnObj.js so locnObjTest =", locnObjTest);
  return locnObjTest;
};

export default isLocnObj;
