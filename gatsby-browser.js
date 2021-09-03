import React from "react"
import './src/styles/tailwindStyles.css';

import MyProvider from "./src/context/Context";
export const wrapRootElement = MyProvider;

export function wrapPageElement({ element, props }) {
  const Layout = element.type.Layout ?? React.Fragment
  return <Layout {...props}>{element}</Layout>
}