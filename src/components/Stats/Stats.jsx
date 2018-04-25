import React from 'react';

const Stats = ({ facesRecognised, averageAge, sessionDuration }) => {
  return (
    <div className="container border bg-light">
      <div className="row">
        <div className="col">
          <h2 className="text-right">Faces Recognised:</h2>
        </div>
        <div className="col">
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
