import React from 'react';
import VideoModal from './VideoModal.jsx';
import {Link} from 'react-router-dom';

class Team extends React.Component {

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

  closeModal() {
    this.setState({
      isOpen: false,
    })
  }


  render() {
    return (
      <div className='container team' >
        <div className="jumbotron p-3 p-md-5 rounded border border-danger">
          <div className="row">
            <div className="col-md-3">
              <img src={this.props.team.teamPic} onClick={this.openModal} alt="competition" width="200" height="200" />
            </div>
            <div className=" col-md-9 workshopinfo">
              <Link to={`/teams/${this.props.team.id}`} className='teaminfo title'> {this.props.team.name} </Link>
              <div className='teaminfo description'> Description: {this.props.team.description} </div>
              <div className='teaminfo rating'> Rating: {this.props.team.rating}/5.0</div>
              {this.state.isOpen && (
                <VideoModal
                  id={this.props.team.teamVideoId}
                  closeModal={this.closeModal}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Team