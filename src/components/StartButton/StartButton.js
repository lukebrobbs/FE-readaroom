import React from "react";
import db from "../../config/config.js";

const sessionsRef = db.collection("readaroom").doc("currentData");

const StartButton = ({ onClick, addToDataPoint }) => {
  let time = 0;
  sessionsRef.onSnapshot(function(doc) {
    let now = time + 3;
    time += 3;
    let docData = doc.data();
    const filteredDocData = docData.emotiondata.map(data => {
      let happyOrSadCount = 0;
      let calmOrAngryCount = 0;
      data.emotions = data.emotions.filter(emotion => {
        if (emotion.Type === "HAPPY" || emotion.Type === "SAD") {
          ++happyOrSadCount;
          return happyOrSadCount === 1;
        }
        if (emotion.Type === "CALM" || emotion.Type === "ANGRY") {
          ++calmOrAngryCount;
          return calmOrAngryCount === 1;
        } else return true;
      });
      return data;
    });
    return addToDataPoint(docData.timestamp, filteredDocData);
  });
  return (
    <button onClick={onClick} className="btn btn-success">
      Start
    </button>
  );
};

export default StartButton;
