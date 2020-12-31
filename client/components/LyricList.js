import React from 'react';

const LyricList = ({ lyrics = [] }) => {
  const renderSongs = () => {
    if (!lyrics.length) return <p>No lyrics yet! Add some now.</p>;

    return lyrics.map(({ content, id }) => (
      <div key={id}>
        <h4>{content}</h4>
      </div>
    ));
  };

  return <ul className="collection">{renderSongs()}</ul>;
};

export default LyricList;
