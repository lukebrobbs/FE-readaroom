import React, { Component } from 'react';

class Setup extends Component {
  state = {};

  render() {
    return (
      <div className="d-inline-block Container d-flex flex-column">
        <nav className="navbar bg-light container-fluid">
          <h1 className="navbar-brand">Setup</h1>
          <button className="nav-link btn btn-success mx-2">History</button>
        </nav>
        <div className="row">
          <p className="col m-4">
            -To access all previous sessions, click on the HISTORY button above.{' '}
            <br />
            -Or, to setup a NEW session, complete the form below and a new
            session recording will begin on START.
          </p>
        </div>
        <form>
          <div className="form-group row">
            <label class="col-sm-2 col-form-label text-md-right">
              Session: *
            </label>
            <div className="col-sm-8">
              <input
                className="form-control"
                type="text"
                placeholder="Enter your NEW Session Name here"
              />
            </div>
          </div>
          <div className="form-group row">
            <label class="col-sm-2 col-form-label text-md-right">
              Username: *
            </label>
            <div className="col-sm-8">
              <input
                className="form-control"
                type="text"
                placeholder="Enter your Username here"
              />
            </div>
          </div>
        </form>
        <div className="btn-group justify-content-end container">
          <div className="mx-2">
            <button className="btn btn-info">Clear</button>
          </div>
          <div className="mx-2">
            <button className="btn btn-success">Start</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Setup;
