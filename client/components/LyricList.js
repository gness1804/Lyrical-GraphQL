import React from 'react';

const LyricList = ({ lyrics = [] }) => {
  const renderLyrics = () => {
    if (!lyrics.length) return <p>No lyrics yet! Add some now.</p>;

    return lyrics.map(({ content, id }) => (
      <li key={id} className="collection-item">
        <h4>{content}</h4>
      </li>
    ));
  };

  return <ul className="collection">{renderLyrics()}</ul>;
};

export default LyricList;
