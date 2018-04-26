import React from "react";
import "./Stats.css";

const Stats = ({ facesRecognised, averageAge, sessionDuration }) => {
  return (
    <div className=" d-flex justify-content-around my-3 border bg-light container py-3">
      <div class="d-flex justify-content-center ">
        <div className="">
          <h5 className="text-right mb-0">Faces Recognised: </h5>
        </div>
        <div className="mx-2">
          <h5 className="mb-0">{facesRecognised}</h5>
        </div>
      </div>
      <div class="d-flex justify-content-center ">
        <div className="">
          <h5 className="text-center mb-0">Average Age: </h5>
        </div>
        <div className="mx-2">
          <h5 className="mb-0">{averageAge}</h5>
        </div>
      </div>
    </div>
  );
};

export default Stats;
