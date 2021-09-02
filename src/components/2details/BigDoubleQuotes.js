import React from "react";

import "remixicon/fonts/remixicon.css";

const BigQuoteSymbol = (featured) => {
  // console.log("BigQuoteSymbol() runs. featured=", featured);
  const featuredArray = Object.values(featured);
  const quotesColor = featuredArray[0] ? "text-blue-pale" : "text-gray-500";

  return <i className={`ri-double-quotes-l leading-none ${quotesColor}`}></i>;
};

export default BigQuoteSymbol;
