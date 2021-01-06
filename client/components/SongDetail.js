import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import { findSong } from '../queries';
import LyricCreate from '../components/LyricCreate';
import LyricList from '../components/LyricList';

const SongDetail = ({ data: { song, loading, error }, params: { id } }) => {
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

  const { title, lyrics } = song;

  return (
    <div>
      <Link to="/">Back Home</Link>
      <h3>{title}</h3>
      <LyricList lyrics={lyrics} songId={id} />
      <LyricCreate id={id} />
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
