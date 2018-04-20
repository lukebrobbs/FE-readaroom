import React, { Component } from 'react';

class Setup extends Component {
  state = {};

  render() {
    return (
      <div>
        <h2>Session details</h2>
        <form>
          <label>Session Name</label>
          <input type="text" />
          <label>Username</label>
          <input type="text" />
        </form>
        <button className="btn btn-primary">Start</button>
      </div>
    );
  }
}

export default Setup;
