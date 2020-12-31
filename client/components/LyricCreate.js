import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { addLyricToSong } from '../mutations';

class LyricCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
    };
  }

  onSubmit(e) {
    e.preventDefault();

    const { id, mutate } = this.props;
    const { content } = this.state;

    if (!content) {
      alert('Error: lyric content required!');
      return;
    }

    mutate({
      variables: {
        content,
        songId: id,
      },
    })
      .then(() => {
        this.setState({ content: '' });
      })
      .catch((err) => {
        throw new Error(`Error in submitting new lyric: ${err}`);
      });
  }

  render() {
    const { content } = this.state;

    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label htmlFor="lyric-input">Add Lyric</label>
        <input
          id="lyric-input"
          type="text"
          value={content}
          onChange={(e) => this.setState({ content: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default graphql(addLyricToSong)(LyricCreate);
