import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Setup extends Component {
  state = {
    sessionName: '',
    username: ''
  };

  onChange = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value
    });
  };

  render() {
    return (
      <div className="d-inline-block container d-flex flex-column">
        <nav className="navbar bg-light container-fluid">
          <h1 className="navbar-brand">Setup</h1>
          <Link to="/summary" className="nav-link btn btn-success mx-2">
            History
          </Link>
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
            <label className="col-sm-2 col-form-label text-md-right">
              Session: *
            </label>
            <div className="col-sm-8">
              <input
                onChange={this.onChange}
                id="sessionName"
                className="form-control"
                type="text"
                placeholder="Enter your NEW Session Name here"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label text-md-right">
              Username: *
            </label>
            <div className="col-sm-8">
              <input
                onChange={this.onChange}
                id="username"
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
            <Link
              onClick={this.props.onClick}
              to="/livestats"
              className="btn btn-success"
            >
              Start
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Setup;
