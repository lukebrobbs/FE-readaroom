import React from 'react';
import './LoadingGif.css';

const LoadingGif = () => (
  <div id="gif-body" style={{ height: '200px', width: '100%' }}>
    <div id="loading">
      <div id="ferry">
        <div id="chimney" />
        <div id="waves" />
      </div>
    </div>
  </div>
);

export default LoadingGif;
