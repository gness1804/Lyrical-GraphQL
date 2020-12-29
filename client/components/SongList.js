import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

class SongList extends Component {
  renderSongs() {
    const {
      data: { songs, loading },
    } = this.props;

    if (loading) return <div>Loading...</div>;

    if (!songs.length) return <div>No songs yet! Add one now.</div>;

    return songs.map(({ title, id }) => (
      <li className="collection-item" key={id}>
        {title}
      </li>
    ));
  }

  render() {
    return (
      <div>
        <h2>My Songs:</h2>
        <ul className="collection">{this.renderSongs()}</ul>
        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
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
