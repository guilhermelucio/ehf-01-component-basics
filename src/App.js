import React from "react";
import "./styles.css";
import { CenterContent } from "./components/center-content/CenterContent";
import { CenterText } from "./components/center-text/CenterText";

export default function App() {
  return (
    <div className="App">
      <CenterContent>
        <CenterText>
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
        </CenterText>
      </CenterContent>
    </div>
  );
}
