import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

class DancerInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  render() {
    console.log(this.props.dancer)
    return (
      <div className='container dancerinfo text-center' >
        <div className="jumbotron rounded border border-danger">
          <div class="row">
            <div class="span4"></div>
            <div class="span4">
              <img src="https://s3-us-west-1.amazonaws.com/dancin/shi-hao-hong.jpg" className="img-thumbnail" alt="dancer" width="200" height="200"  />
            </div>
            <div class="span4"></div>
          </div>
          <h1 className="text-center"> Shi Hao Hong </h1>
          <h3 className = 'dancerteam' ><Link to='/teams/0'>Chaotic3</Link></h3>
          <h4 className="text-center"> I am just a happy boy who loves coding and dancing </h4>
          <div className="text-center"> 
            <a className="btn btn-outline-danger btn-xs btn-space" href="#" role="button">Facebook</a>
            <a className="btn btn-outline-danger btn-xs btn-space" href="#" role="button">LinkedIn</a>
            <a className="btn btn-outline-danger btn-xs btn-space" href="#" role="button">Instagram</a>
            <a className="btn btn-outline-danger btn-xs" href="#" role="button">Website</a>
          </div>
        </div>
      </div>
    )
  }
}

export default DancerInfo