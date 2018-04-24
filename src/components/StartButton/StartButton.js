import React from 'react';
import db from '../../config/config.js';

const sessionsRef = db.collection('readaroom').doc('currentData');

const StartButton = ({ onClick, addToDataPoint }) => {
  let time = 0;
  sessionsRef.onSnapshot(function(doc) {
    let now = time + 3;
    time += 3;
    return addToDataPoint(time++, doc.data().emotiondata);
  });
  return (
    <button onClick={onClick} className="btn btn-success">
      Start
    </button>
  );
};

export default StartButton;
