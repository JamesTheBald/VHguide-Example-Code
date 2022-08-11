import React, { useEffect } from "react";
import { navigate } from "gatsby";

import { useMyContext } from "../context/Context";
import Layout from "../components/0navAndFooter/NavFooterLayout";

const NotFoundPage = () => {
  const { winWidth } = useMyContext();


  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("404.js - Page not found, returning to home page.");
      navigate("/");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const outerMargin = winWidth < 510 ? 25 : winWidth < 1024 ? 50 : 100;

  return (
    <>
      <div className="text-blue-dark" style={{ marginLeft: outerMargin, marginRight: outerMargin }}>
        <h1
          className="mt-40 mb-20  titleFont text-30 mxs:text-35 sm:text-45 md:text-50 lg:text-60   whitespace-normal
                   tracking-0.6 sm:tracking-0.8 md:tracking-1 lg:tracking-1.2"
        >
          Page Not Found
        </h1>
        <div className="mb-60  emphFont">
          <p>There is no page for the current URL.</p>
          <p>Returning to the home page...</p>
        </div>
      </div>
    </>
  );
};

NotFoundPage.Layout = Layout;

export default NotFoundPage;
