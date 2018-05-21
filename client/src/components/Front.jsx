import React from 'react';
import ReactDOM from 'react-dom';
import FrontTop from './FrontTop.jsx'
import FrontBtm from './FrontBtm.jsx'


class Front extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  render() {
    return (
      <div className ="front">
        <FrontTop />
        <FrontBtm /> 
      </div>
    )
  }
}

export default Front