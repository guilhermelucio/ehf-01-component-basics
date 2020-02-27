import React from "react";
import PropTypes from "prop-types";
import "./CenterText.scss";

export const CenterText = ({ tag, children }) =>
  React.createElement(tag, { className: "App-CenterText" }, children);

CenterText.defaultProps = {
  tag: "div"
};

CenterText.propTypes = {
  tag: PropTypes.string
};
