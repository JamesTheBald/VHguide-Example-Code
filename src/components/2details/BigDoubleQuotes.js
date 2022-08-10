import React from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";

import { useMyContext } from "../../context/Context";

const BigDoubleQuotes = featured => {
  const { lang, log, log2 } = useMyContext();
  0 && console.log(log, log2);
  log2 && console.log("BigDoubleQuotes() runs. featured=", featured);

  const featuredArray = Object.values(featured);
  const quotesColor = featuredArray[0] ? "text-blue-pale" : "text-gray-500";

  return (
    <>
      {lang === "EN" ? (
        // ri-double-quotes-l is from remixicons, which is imported as css in NavFooterLayout.js
        // <i /> is the html tag for Idiomatic Text. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i
        <i className={`ri-double-quotes-l  text-20 sm:text-30 leading-none ${quotesColor}`} />
      ) : (
        <FaAngleDoubleLeft className={`relative -left-0.5 top-1  text-20 sm:text-30  leading-none ${quotesColor}`} />
      )}
    </>
  );
};

export default BigDoubleQuotes;
