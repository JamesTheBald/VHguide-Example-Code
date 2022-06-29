import React from "react";

const BigDoubleQuotes = featured => {
  // console.log("BigDoubleQuotes() runs. featured=", featured);
  const featuredArray = Object.values(featured);
  const quotesColor = featuredArray[0] ? "text-blue-pale" : "text-gray-500";

  return <i className={`ri-double-quotes-l leading-none ${quotesColor}`} />;
  // ri-double-quotes-l is from remixicons, which is imported as css in NavFooterLayout.js
  // <i /> is the html tag for Idiomatic Text. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i
};

export default BigDoubleQuotes;
