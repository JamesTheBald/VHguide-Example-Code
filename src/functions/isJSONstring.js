// from Gumbo at https://stackoverflow.com/questions/3710204/how-to-check-if-a-string-is-a-valid-json-string

const isJSONstring = inpt => {
  if (typeof inpt !== "string") return false;

  try {
    JSON.parse(inpt);
  } catch (err) {
    return false;
  }

  return true;
};

export default isJSONstring;
