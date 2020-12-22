import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
class SongList extends Component {
  renderSongs() {
    const {
      data: { songs, loading },
    } = this.props;

    if (loading) return <div>Loading...</div>;

    if (!songs.length) return <div>No songs yet! Add one now.</div>;

    return (
      <ul>
        {songs.map(({ title, id }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h2>My Songs:</h2>
        {this.renderSongs()}
      </div>
    );
  }
}

const query = gql`
  {
    songs {
      title
      id
    }
  }
`;

export default graphql(query)(SongList);
