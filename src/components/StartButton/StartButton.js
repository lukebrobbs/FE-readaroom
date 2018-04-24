import React from "react";
import db from "../../config/config.js";

const sessionsRef = db.collection("readaroom").doc("currentData");

const StartButton = ({ onClick, addToDataPoint }) => {
  sessionsRef.onSnapshot(function(doc) {
    return addToDataPoint(doc.data().timestamp, doc.data().emotiondata);
  });
  return (
    <button onClick={onClick} className="btn btn-success">
      Start
    </button>
  );
};

export default StartButton;
