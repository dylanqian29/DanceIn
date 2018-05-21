import React from 'react';
import Team from './Team.jsx'

class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [
        {
          id:0,
          name: 'Chaotic3',
          teamPic: 'https://s3-us-west-1.amazonaws.com/dancin/chaotic3.png',
          description: 'Chaotic 3 is one of the premiere Hip-Hop dance teams based at the University of Southern California. Originally founded as an artistic outlet for members of the Chinese American Student Association, Chaotic 3 has evolved into a well-known team that strives to foster the passion for dance from new and veteran dancers alike. Through exhibition and competition performances on USC’s campus and around Southern California such as Maxt Out, Prelude aka The Bridge, Urban Street Jam, All Cal, Breakthrough Show, and Fly Girls Competition, they hope to continue to be influenced by the best while maintaining the spirit that is Chaotic 3.',
          rating: 5.0,
          teamVideoLink: 'https://www.youtube.com/watch?v=z82uueFbPhA',
          teamVideoId: 'z82uueFbPhA',
        },
        {
          id: 1,
          name: 'Ascension',
          teamPic: 'https://s3-us-west-1.amazonaws.com/dancin/ascension.png',
          description: `Ascension was established in 1999 as a competitive dance team to represent UC San Diego at various dance competitions across Southern California. With each new season, we strive to be a better version of ourselves as dancers and individuals while maintaining the core of who we are as a family and living out our motto: "Ascension doin' work."`,
          rating: 5.0,
          teamVideoLink: 'https://www.youtube.com/watch?v=4-IlDbxXMaI',
          teamVideoId: '4-IlDbxXMaI',
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <div className="featurette">
          <div className="featurette-inner text-center">
            <form role="form" className="search">
              <h3 className="no-margin-top h1">Teams</h3>
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
          {this.state.teams.map((team)=><Team team = {team} key = {team.id}/>)}
        </div>
      </div>
    )
  }
}

export default Teams