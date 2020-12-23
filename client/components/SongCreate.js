import React, { Component } from 'react';

class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }

  render() {
    return (
      <div>
        <h2>Create a New Song</h2>
        <form>
          <label htmlFor="song-entry">Song Title:</label>
          <input
            id="song-entry"
            type="text"
            onChange={(e) => this.setState({ title: e.target.value })}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}

export default SongCreate;
