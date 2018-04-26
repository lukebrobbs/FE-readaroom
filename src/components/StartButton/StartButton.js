import db from "../../config/config.js";

const sessionsRef = db.collection("readaroom").doc("currentData");

const processChartRows = (timeStamp, dataPoints) => {
  if (dataPoints.length) {
    const emotions = {
      DISGUSTED: 0,
      ANGRY: 0,
      CALM: 0,
      SURPRISED: 0,
      CONFUSED: 0,
      SAD: 0,
      HAPPY: 0
    };
    const emotionPercentages = [timeStamp];
    dataPoints.forEach(dataPoint => {
      dataPoint.emotions.forEach(emotion => (emotions[emotion.Type] += 1));
    });
    const totalRegisteredEmotions = Object.values(emotions).reduce(
      (acc, value) => (acc += value)
    );
    Object.values(emotions).forEach(value => {
      emotionPercentages.push(
        +(value / totalRegisteredEmotions * 100).toFixed(2)
      );
    });
    return emotionPercentages;
  }
  return [timeStamp, 0, 0, 0, 0, 0, 0, 0];
};
const processGraphRows = (timeStamp, dataPoints) => {
  if (dataPoints.length) {
    const emotions = {
      CONFUSED: 0,
      HAPPY: 0
    };
    const emotionPercentages = [timeStamp];
    dataPoints.forEach(dataPoint => {
      dataPoint.emotions.forEach(emotion => {
        if (emotion.Type === "HAPPY" || emotion.Type === "CONFUSED") {
          emotions[emotion.Type] += 1;
        }
      });
    });

    Object.values(emotions).forEach(value => {
      emotionPercentages.push(value);
    });
    return emotionPercentages;
  }
  return [timeStamp, 0, 0];
};

const StartButton = ({ onClick, addToDataPoint, updateAll }) => {
  let time = 0;
  sessionsRef.onSnapshot(function(doc) {
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
    return updateAll(
      time,
      filteredDocData,
      processChartRows(time, filteredDocData),
      processGraphRows(time, filteredDocData)
    );
  });
  return null;
  // <button onClick={onClick} className="btn btn-success">
  //   Start
  // </button>
};

export default StartButton;
