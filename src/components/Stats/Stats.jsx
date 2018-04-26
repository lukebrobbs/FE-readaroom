import React from 'react';

const Stats = ({ facesRecognised, averageAge, sessionDuration }) => {
  return (
    <div className="container border bg-light my-4">
      <div className="row">
        <div className="col-4">
          <h2 className="text-right">Faces Recognised:</h2>
        </div>
        <div className="col-6">
          <h2>{facesRecognised}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <h2 className="text-right">Average Age:</h2>
        </div>
        <div className="col-6">
          <h2>{averageAge}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <h2 className="text-right">Session Duration:</h2>
        </div>
        <div className="col-6">
          <h2>{sessionDuration}</h2>
        </div>
      </div>
    </div>
  );
};

export default Stats;
