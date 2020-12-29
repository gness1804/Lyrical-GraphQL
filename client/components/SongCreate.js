import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import * as queries from '../queries';
import * as mutations from '../mutations';

class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }

  onSubmit(e) {
    e.preventDefault();

    const { title } = this.state;
    const { mutate } = this.props;

    if (!title) {
      alert('Error: song title required!');
      return;
    }

    mutate({
      variables: {
        title,
      },
      refetchQueries: [{ query: queries.fetchSongs }],
    })
      .then(() => {
        // navigate user to home
        hashHistory.push('/');
      })
      .catch((err) => {
        throw new Error(`Error in submitting new song: ${err}`);
      });
  }

  render() {
    return (
      <div>
        <Link to="/">Back Home</Link>
        <h2>Create a New Song</h2>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label htmlFor="song-entry">Song Title:</label>
          <input
            id="song-entry"
            type="text"
            onChange={(e) => this.setState({ title: e.target.value })}
            value={this.state.title}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default graphql(mutations.addSong)(SongCreate);
