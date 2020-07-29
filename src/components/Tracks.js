import React, {Component} from 'react';

class Tracks extends Component{
  render(){
    const {tracks} = this.props;

    return(
      <div>
        {
          tracks.map(track=>{
            const {id, name, album} = track;
            return(
              <div key = {id} className = 'artist-tracks'>
                <img src = {album.images[0].url} 
                alt = 'tracks-image'></img>
                <p>{name}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Tracks;