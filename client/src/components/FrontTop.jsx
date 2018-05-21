import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class FrontTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  render() {
    return (
      <div className="competition">
        <div className="competitiontitle">
          <h1>Want to Start Dancing?</h1>
          <h2>Start Today!</h2>
          <Link to='/workshops' href="#" className="btn btn-lg btn-outline-light" role="button">Sign Up</Link>
        </div>
      </div>
    )
  }
}

export default FrontTop