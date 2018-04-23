import React from 'react';
import './MoodBoard.css';

class MoodBoard extends React.Component {
  render() {
    return (
      <div>
        <h1>MoodBoard</h1>
        <div className="container">
          <div className="progress">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: this.props.happy }}
            />
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: this.props.sad }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MoodBoard;
