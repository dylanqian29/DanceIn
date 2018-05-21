import React from 'react';
import ReactDOM from 'react-dom';
import Workshop from './Workshop.jsx';

class Workshops extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  render() {
    return (
      <div>
        <div className=" featurette">
          <div className="featurette-inner text-center">
            <form role="form" className="search">
              <h3 className="no-margin-top h1">Workshops</h3>
              <div className="input-group input-group-lg">
                <input type="search" placeholder="name or zipcode" className="form-control"/>
                  <span className="input-group-btn">
                    <button className="btn btn-danger" type="button">Search</button>
                  </span>
               </div>
            </form>
          </div>        
        </div>
        <div>
          <Workshop/>
        </div>
      </div>
    )
  }
}

export default Workshops