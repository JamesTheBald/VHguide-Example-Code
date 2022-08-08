const setAndStoreLocn = (setLocn, newLocn) => {
  setLocn(newLocn);
  console.log("Debug: setAndStoreLocn.js saving to sessionStorage: newLocn=", newLocn);
  sessionStorage.setItem("locn", JSON.stringify(newLocn));
};

export default setAndStoreLocn;
