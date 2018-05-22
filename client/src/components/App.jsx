import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Front from './Front.jsx';
import Workshops from './Workshops.jsx';
import Competitions from './Competitions.jsx';
import Dancers from './Dancers.jsx';
import Teams from './Teams.jsx';
import Dancer from './Dancer.jsx';
import DancerInfo from './DancerInfo.jsx';
import Login from './Login.jsx';
import TeamInfo from './TeamInfo.jsx';




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
            <Link to='/' className="my-0 mr-md-auto font-weight-normal" href="#">DanceIn</Link>
          <nav className="my-2 my-md-0 mr-md-3">
            <Link to = '/workshops' className="p-2 text-dark" href="#" >Workshops</Link>
            <Link to='/competitions' className="p-2 text-dark" href="#">Competitions</Link>
            <Link to='/teams' className="p-2 text-dark" href="#">Teams</Link>
            <Link to = '/dancers'className="p-2 text-dark" href="#">Dancers</Link>
          </nav>
            <Link to = './login' className="btn btn-outline-danger btn-space" href="#">Login</Link>
            <a className="btn btn-outline-danger" href="#">Sign up</a>
        </div>
        <div>
          <Switch> 
            <Route exact path = "/" component = {Front}/> 
            <Route exact path="/workshops" component = {Workshops}/>
            <Route exact path="/competitions" component={Competitions}/>
            <Route exact path="/teams" component={Teams}/>
            <Route exact path="/dancers" component={Dancers}/>
            <Route exact path="/login" component={Login} />
            <Route exact path={`/dancers/:dancerId`} component={DancerInfo} />
            <Route exact path={`/teams/:teamId`} component={TeamInfo}/>
          </Switch>
        </div>
      </div>
    </Router>
    )
  }
}

export default App