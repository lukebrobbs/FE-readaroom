import sampleSize from "lodash.samplesize";
import db from "../config.js";

const utils = {
  createTestEmotionData: () => {
    const emotionTypes = [
      "HAPPY",
      "SAD",
      "ANGRY",
      "CONFUSED",
      "DISGUSTED",
      "SURPRISED",
      "CALM"
    ];
    const topThreeEmotions = sampleSize(emotionTypes, 3);
    return topThreeEmotions.map(emotion => {
      return { Type: emotion, Confidence: Math.random() * 100 };
    });
  },
  pushToDb: data => {
    const students = ["0ugZfVl2kWSXBadCVede", "ml0nEehjU4rpZANylukD"];
    const collection = db.collection("students");
    let newDocs = [];
    const newDoc = db.collection(`students/${students[0]}/sessions`).doc();
    newDocs = [...newDocs, newDoc.id];
    newDoc.set({ emotions: utils.createTestEmotionData() }, { merge: true }),
      setInterval(
        newDoc.update({ emotions: utils.createTestEmotionData() }),
        2000
      );
  }
};

export default utils;
