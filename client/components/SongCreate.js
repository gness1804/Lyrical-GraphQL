import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';

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

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
