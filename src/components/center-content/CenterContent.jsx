import React from "react";
import PropTypes from "prop-types";
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

CenterContent.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
};

export default CenterContent;
