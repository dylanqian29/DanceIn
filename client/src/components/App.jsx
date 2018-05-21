import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Front from './Front.jsx';
import Workshops from './Workshops.jsx';
import Competitions from './Competitions.jsx';
import Dancers from './Dancers.jsx';
import Teams from './Teams.jsx';
import Dancer from './Dancer.jsx'




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/items',
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  render() {
    return (
    <Router>
      <div>
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
            <Link to='./' className="my-0 mr-md-auto font-weight-normal" href="#">DancIn</Link>
          <nav className="my-2 my-md-0 mr-md-3">
            <Link to = '/workshops' className="p-2 text-dark" href="#" >Workshops</Link>
            <Link to='./competitions' className="p-2 text-dark" href="#">Competitions</Link>
            <Link to='./teams' className="p-2 text-dark" href="#">Teams</Link>
            <Link to = './dancers'className="p-2 text-dark" href="#">Dancers</Link>
          </nav>
            <a className="btn btn-outline-danger" href="#">Login</a>
            <a className="btn btn-outline-danger" href="#">Sign up</a>
        </div>
        <div>
          <Route exact path = "/" component = {Front}/> 
          <Route path="/workshops" component = {Workshops}/>
          <Route path="/competitions" component={Competitions}/>
          <Route path="/teams" component={Teams}/>
          <Route path="/dancers" component={Dancers}/>
          <Route path="/dancers/:dancer" component={Dancer}/>
        </div>
      </div>
    </Router>
    
    )
  }
}

export default App