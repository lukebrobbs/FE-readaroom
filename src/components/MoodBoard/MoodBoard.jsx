import React from 'react';
import './MoodBoard.css';

class MoodBoard extends React.Component {
  render() {
    return (
      <div>
        <h1>MoodBoard</h1>
        <p>
          Currently tracking {this.props.data.occupants || '0'} people in the
          room
        </p>
        <div className="container">
          <div className="progress my-4" style={{ height: '50px' }}>
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: this.props.data.happy + '%' }}
            >
              <h3>Happy</h3>
            </div>
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: this.props.data.sad + '%' }}
            >
              <h3>Sad</h3>
            </div>
          </div>
          <div className="progress my-4" style={{ height: '50px' }}>
            <div
              className="progress-bar bg-danger"
              role="progressbar"
              style={{ width: this.props.data.angry + '%' }}
            >
              <h3>Angry</h3>
            </div>
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{ width: this.props.data.calm + '%' }}
            >
              <h3>Calm</h3>
            </div>
          </div>
          <div className="progress my-4" style={{ height: '50px' }}>
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{ width: this.props.data.confused + '%' }}
            >
              <h3>Confused</h3>
            </div>
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: this.props.data.disgusted + '%' }}
            >
              <h3>Disgusted</h3>
            </div>
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{ width: this.props.data.surprised + '%' }}
            >
              <h3>Surprised</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MoodBoard;
