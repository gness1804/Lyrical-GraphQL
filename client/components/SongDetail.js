import React from 'react';
import { graphql } from 'react-apollo';
import { findSong } from '../queries';

const SongDetail = ({ data: { song, loading } }) => {
  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h3>{song.title}</h3>
    </div>
  );
};

export default graphql(findSong, {
  options: ({ params: { id } }) => {
    return {
      variables: {
        id,
      },
    };
  },
})(SongDetail);
