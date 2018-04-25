import React from 'react';

const Stats = ({ facesRecognised, averageAge, sessionDuration }) => {
  return (
    <div className="container">
      <div className="row">
        <div>
          <h2>Faces Recognised:</h2>
        </div>
        <div>
          <h2>{facesRecognised}</h2>
        </div>
      </div>
      <div className="row">
        <div>
          <h2>Average Age:</h2>
        </div>
        <div>
          <h2>{averageAge}</h2>
        </div>
      </div>
      <div className="row">
        <div>
          <h2>Session Duration:</h2>
        </div>
        <div>
          <h2>{sessionDuration}</h2>
        </div>
      </div>
    </div>
  );
};

export default Stats;
