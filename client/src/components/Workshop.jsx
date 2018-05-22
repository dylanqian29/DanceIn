import React from 'react';
import {Link} from 'react-router-dom';

class Workshop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  render() {
    return (
      <div className = 'container workshop' >
        <div className="jumbotron p-3 p-md-5 rounded border border-danger">
          <div className="row">
            <div className="col-md-3">
              <img src="https://s3-us-west-1.amazonaws.com/dancin/workshop.jpg" alt="workshop1" width="200" height="200"/>
            </div>
            <div className=" col-md-9 workshopinfo">
              <h3 className= 'workshopinfo title'> Fun Workshop for Beginners </h3>
              <h4 className='workshopinfo time'> May 30th Wednesday 8PM </h4> 
              <div className= 'workshopinfo instructors'>Instructors: <Link to = '/dancers/0'>Shi Hao Hong</Link>, <Link to = '/dancers'>Dylan Qian</Link></div>
              <div className='workshopinfo location'> Location: Hack Reactor in San Francisco</div>
              <div className= 'workshopinfo rating'> Rating: 5.0/5.0</div>
              <button type="button" className="workshopinfo btn btn-danger">Join Now</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Workshop