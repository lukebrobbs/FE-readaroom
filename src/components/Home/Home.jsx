import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';

const Home = () => (
  <div className="container-fluid">
    <div className="home row justify-content-center align-items-center">
      <div className="content h-100 d-inline-block Container-fluid d-flex flex-column">
        <h1 className="text-center">
          Read the mood in the room with LIVE data
        </h1>
        <p className="text-center">
          The tool that can help you analyse how your presentation went and
          where you can improve! <br />
          Session data can be stored and re-read to see which bit's worked so
          you can up your game the next time
        </p>
        <div className="btn-group justify-content-center">
          <button className="btn btn-success">Click here to get started</button>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
