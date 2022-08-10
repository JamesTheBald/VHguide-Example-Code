// Compare equality of locn objects (e.g. locn and storedLocn) but not using the "showSubtopic" key

const equalLocnObj = (locn1, locn2) => {
  if (locn1.branch !== locn2.branch || locn1.topic !== locn2.topic || locn1.subtopic !== locn2.subtopic) return false;
  else return true;
}

export default equalLocnObj;
