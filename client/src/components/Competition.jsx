import React from 'react';
import {Link} from 'react-router-dom';
class Competition extends React.Component {

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
      <div className='container competition' >
        <div className="jumbotron p-3 p-md-5 rounded border border-danger">
          <div className="row">
            <div className="col-md-3">
              <img src="https://s3-us-west-1.amazonaws.com/dancin/bridge.jpg" alt="competition" width="200" height="200" />
            </div>
            <div className=" col-md-9 workshopinfo">
              <h3 className='competitioninfo title '> Bridge </h3>
              <div className='competitioninfo description'> Description: Hosted by Team Millennia (Seasons 2 and 3 of America's Best Dance Crew) and Happiness is NOW, The Bridge Dance Competition features hip hop dance crews from all over the nation and provides a platform for the nation's youth to pursue their passions. </div>
              <div className='competitioninfo location'> Location: Anaheim</div>
              <div className='competitioninfo teams'> Teams: <Link to='/teams/0'>Chaotic3</Link>, <Link to='/teams'>Ascension</Link></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Competition