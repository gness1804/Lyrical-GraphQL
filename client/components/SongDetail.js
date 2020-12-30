import React from 'react';
import { graphql } from 'react-apollo';
import { findSong } from '../queries';

const SongDetail = ({ data: { song, loading, error } }) => {
  if (error)
    return (
      <div className="error-text">
        <h5>
          Whoops, there was an error! Check that the song ID in the URL is
          correct and try again.
        </h5>
        {error.message || ''}
      </div>
    );

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
