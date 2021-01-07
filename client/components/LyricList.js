import React from 'react';
import { graphql } from 'react-apollo';
import { likeLyric } from '../mutations';
import { findSong } from '../queries';

const LyricList = ({ lyrics = [], songId, mutate }) => {
  const renderLyrics = () => {
    const addLike = (lyricId, likes) => {
      mutate({
        variables: {
          id: lyricId,
        },
        refetchQueries: [
          {
            query: findSong,
            variables: {
              id: songId,
            },
          },
        ],
        optimisticResponse: {
          __typename: 'Mutation',
          likeLyric: {
            id: lyricId,
            __typename: 'LyricType',
            likes: likes + 1,
          },
        },
      });
    };

    if (!lyrics.length) return <p>No lyrics yet! Add some now.</p>;

    return lyrics.map(({ content, id, likes }) => (
      <li key={id} className="collection-item">
        <p>{content}</p>
        <div className="vote-box">
          <i
            className="material-icons thumb-up"
            onClick={() => addLike(id, likes)}
          >
            thumb_up
          </i>
          {likes}
        </div>
      </li>
    ));
  };

  return <ul className="collection">{renderLyrics()}</ul>;
};

export default graphql(likeLyric)(LyricList);
