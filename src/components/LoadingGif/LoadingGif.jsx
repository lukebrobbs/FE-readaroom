import React from 'react';
import './LoadingGif.css';
/*
Anders Schmidt Hansen, Little Ferry Loader.
https://codepen.io/andersschmidt/pen/NPVPYP
*/

const LoadingGif = () => (
  <div className="container" id="gif-body" style={{ height: '200px' }}>
    <div id="loading">
      <div id="ferry">
        <div id="chimney" />
        <div id="waves" />
      </div>
    </div>
  </div>
);

export default LoadingGif;
