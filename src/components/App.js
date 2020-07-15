import React, { Component } from "react";

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';

class App extends Component {
  state = { artistQuery: '', artist: null, tracks: [] };

  updateArtistQuery = event => {
    this.setState({ artistQuery: event.target.value });
    console.log("event.target.value", event.target.value);
  }

  searchArtist = () => {
    console.log('state', this.state);
    fetch(`${API_ADDRESS}/artist/${artistQuery}`)
      .then(response => response.json())
      .then(json => {
        if (json.artists.total > 0) {
          const artist = json.artists.items[0];

          this.setState({ artist });

        }
      })
      .catch(error => alert(error.message));
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.searchArtist();

      fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
        .then(response => response.json())
        .then(json => this.setState({ tracks: json.tracks }))
        .catch(error => alert(error.message));
    }
  }

  render() {
    return (
      <div>
        <h1>Music Master</h1>
        <input onChange={this.updateArtistQuery}
          onKeyPress={this.handleKeyPress}
          placeholder="Type the artist's name" />&nbsp;
        <button onClick={this.searchArtist} className="btn btn-default">Search</button>
      </div>
    )
  }
}
export default App;