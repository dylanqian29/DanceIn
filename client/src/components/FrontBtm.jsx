import React from 'react';
import ReactDOM from 'react-dom';

class FrontBtm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  render() {
    return (
      <div>
        <div className="workshop">
          <div className = 'workshoptitle'>
            <h1>Have Dance Moves to Share?</h1>
            <h2>Start Today!</h2>
            <a href="#" className="btn btn-lg btn-outline-light" role="button">Host a Workshop</a>
          </div>
        </div>
      </div>
    )
  }
}

export default FrontBtm