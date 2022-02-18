const isNavItemSelected = (destn, locn) => {
  let selected = false;
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";

  if (destn === "/" && pathname === "/") selected = true;
  if (destn === "/explore" && pathname === "/explore") selected = true;
  if (destn === "/explore" && pathname.includes("details") && locn.branch !== 4) selected = true;
  if (destn === "/details/overview" && pathname.includes("details") && locn.branch === 4) selected = true;
  if (destn === "/pearls" && pathname === "/pearls") selected = true;
  if (destn === "/about" && pathname.includes("about")) selected = true;

  const log = false;
  log && console.log("isNavItemSelected.js destn=", destn, ", pathname=", pathname);
  log && console.log("isNavItemSelected.js so selected=", selected);

  return selected;
};

export default isNavItemSelected;