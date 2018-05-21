import React from 'react';
import ReactDOM from 'react-dom';
import DancerInfo from './DancerInfo.jsx';
import Dancers from './Dancers.jsx';
import { Switch, Route, Link } from 'react-router-dom';
import VideoModal from './VideoModal.jsx';


class Dancer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)

  }

  openModal() {
    this.setState({ 
      isOpen: true,
     })
  }

  closeModal(){
    this.setState({
      isOpen: false,
    })
  }


  render() {
    let dancerLink = '/dancer/' + this.props.dancer.id
    console.log(dancerLink)
    return (
      <div className='container dancers' >
        <div className="jumbotron p-3 p-md-5 rounded border border-danger">
          <div className="row">
            <div className="col-md-3">
              <img src={this.props.dancer.profilePic} className="img-thumbnail" alt="dancer" width="200" height="200" />
            </div>
            <div className=" col-md-9 dancerinfo">
              <Link to = '/dancers' className='dancerinfo name'> {this.props.dancer.name}</Link>
              <div className='dancerinfo currteam'>Current Team: {this.props.dancer.currentTeam}</div>
              <div className='dancerinfo prevteam'>Previous Team: {this.props.dancer.previousTeam}</div>
              <div className='dancerinfo currjob'> Current Job: {this.props.dancer.currentJob}</div>
              <div className='dancerinfo rating'> Rating: {this.props.dancer.rating}/5.0</div>
              <div onClick={this.openModal} className='dancerinfo videos'> Videos: {this.props.dancer.choreoSong}</div>
              <button type="button" className="dancerinfo btn btn-danger"> Connect</button>
              {this.state.isOpen && (
                <VideoModal
                  id={this.props.dancer.choreoId}
                  closeModal = {this.closeModal}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dancer