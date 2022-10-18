import React from "react";
import "./ResultBox.css";

function ResultBox({ new_text }) {
  return (
    <div className="result-box" id="result-box-absolute">
        <div className="h1"> {new_text} </div>
    </div>
  );
}

export default ResultBox;