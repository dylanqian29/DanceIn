import React from 'react';
import ReactDOM from 'react-dom';

class TeamInfo extends React.Component {
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
          <img src="https://s3-us-west-1.amazonaws.com/dancin/chaotic3.png" className="img-thumbnail" alt="dancer" width="200" height="200" />
          <h1 className="text-center"> Chaotic 3 </h1>
          <h4 className="text-center"> USC premiere Hip-Hop dance teams</h4>
          <div className="text-center">
            <a className="btn btn-outline-danger btn-xs btn-space" href="#" role="button">Facebook</a>
            <a className="btn btn-outline-danger btn-xs btn-space" href="#" role="button">LinkedIn</a>
            <a className="btn btn-outline-danger btn-xs btn-space" href="#" role="button">Instagram</a>
            <a className="btn btn-outline-danger btn-xs" href="#" role="button">Website</a>
          </div>
          <br />
          <div className = 'text-left'>
            Chaotic 3 is one of the premiere Hip-Hop dance teams based at the University of Southern California. Originally founded as an artistic outlet for members of the Chinese American Student Association, Chaotic 3 has evolved into a well-known team that strives to foster the passion for dance from new and veteran dancers alike. Through exhibition and competition performances on USC’s campus and around Southern California such as Maxt Out, Prelude aka The Bridge, Urban Street Jam, All Cal, Breakthrough Show, and Fly Girls Competition, they hope to continue to be influenced by the best while maintaining the spirit that is Chaotic 3.
          </div>
          <br/>
      
          <iframe className="embed-responsive-item" width='100%' height='700' src={`https://www.youtube.com/embed/z82uueFbPhA`} allowFullScreen></iframe>

        </div>
      </div>
    )
  }
}

export default TeamInfo