import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import * as queries from '../queries';
import * as mutations from '../mutations';

class SongList extends Component {
  deleteSong(id) {
    const {
      mutate,
      data: { refetch },
    } = this.props;

    mutate({
      variables: {
        id,
      },
    }).then(() => refetch());
  }

  renderSongs() {
    const {
      data: { songs, loading },
    } = this.props;

    if (loading) return <div>Loading...</div>;

    if (!songs.length) return <div>No songs yet! Add one now.</div>;

    const songsCopy = [...songs];

    return songsCopy
      .sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      })
      .map(({ title, id }) => (
        <li className="collection-item" key={id}>
          {title}
          <i className="material-icons" onClick={() => this.deleteSong(id)}>
            delete
          </i>
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

export default graphql(mutations.deleteSong)(
  graphql(queries.fetchSongs)(SongList)
);
