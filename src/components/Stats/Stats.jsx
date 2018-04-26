import React from 'react';

const Stats = ({ facesRecognised, averageAge, sessionDuration }) => {
  return (
    <div className="container border bg-light my-4">
      <div class="input-group m-2">
        <div className="col-auto d-flex align-items-center">
          <h5 className="text-right mb-0">Faces Recognised:</h5>
        </div>
        <div className="col-2 bg-white border d-flex align-items-center">
          <h5 className="mb-0">{facesRecognised}</h5>
        </div>
        <div class="input-group-append">
          <span class="input-group-text">faces</span>
        </div>
      </div>
      <div class="input-group m-2">
        <div className="col-auto d-flex align-items-center">
          <h5 className="text-right mb-0">Average Age:</h5>
        </div>
        <div className="col-2 bg-white border d-flex align-items-center">
          <h5 className="mb-0">{averageAge}</h5>
        </div>
        <div class="input-group-append">
          <span class="input-group-text">years</span>
        </div>
      </div>

      <div className="input-group m-2">
        <div className="col-auto d-flex align-items-center">
          <h5 className="text-right mb-0">Session Duration:</h5>
        </div>
        <div className="col-2 bg-white border d-flex align-items-center">
          <h5 className="mb-0">{sessionDuration}</h5>
        </div>
        <div class="input-group-append">
          <span class="input-group-text">seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
