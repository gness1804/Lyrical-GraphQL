import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
class SongList extends Component {
  render() {
    const {
      data: { songs },
    } = this.props;

    if (songs) {
      if (!songs.length) return <div>No songs yet! Add one now.</div>;
      return (
        <div>
          {songs.map(({ title, id }) => (
            <div key={id}>{title}</div>
          ))}
        </div>
      );
    }
    return <div>Loading...</div>;
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
