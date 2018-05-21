import React from 'react';
import ReactDOM from 'react-dom';
import Dancer from './Dancer.jsx';
import { Switch, Route } from 'react-router-dom';
import dummyPeople from '../../../database-mongo/dummyPeople.js'

class Dancers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dancers: [
        {
          id: 0,
          name: 'Shi Hao Hong',
          profilePic: 'https://s3-us-west-1.amazonaws.com/dancin/shi-hao-hong.jpg',
          currentTeam: 'HR Duo',
          previousTeam: 'Chaotic 3',
          currentJob: 'Technical Mentor at Hack Reactor',
          rating: 5.0,
          choreoSong: 'Location - Khalid',
          choreoLink:'https://www.youtube.com/watch?v=4_pg4pkopuk',
        },
        {
          id: 1,
          name: 'Dylan Qian',
          profilePic: 'https://s3-us-west-1.amazonaws.com/dancin/dylan-qian.jpg',
          currentTeam: 'HR Duo',
          previousTeam: 'Ascension',
          currentJob: 'Student at Hack Reactor',
          rating: 5.0,
          choreoSong: "Can't Stop The Feeling - Justin Timberlake",
          choreoLink: 'https://www.youtube.com/watch?v=dX53hWaYNd8',
        },
      ]
    }
  }

  render() {
    console.log(this.state.dancers)
    return (
      <div>
        <div className="featurette">
          <div className="featurette-inner text-center">
            <form role="form" className="search">
              <h3 className="no-margin-top h1">Dancers</h3>
              <div className="input-group input-group-lg">
                <input type="search" className="form-control" />
                <span className="input-group-btn">
                  <button className="btn btn-danger" type="button">Search</button>
                </span>
              </div>
            </form>
          </div>
        </div>
        <div>
          {this.state.dancers.map((dancer)=> <Dancer dancer = {dancer} key = {dancer.id}/>)}
        </div>
        <div>
        </div>
      </div>
    )
  }
}

export default Dancers