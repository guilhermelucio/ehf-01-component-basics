import React from "react";
import "./CenterContent.scss";

export const CenterContent = ({ children, width, height }) => (
  <div className="App-CenterContent" style={{ width, height }}>
    {children}
  </div>
);

CenterContent.defaultProps = {
  width: "100%",
  height: "100vh"
};

export default CenterContent;
