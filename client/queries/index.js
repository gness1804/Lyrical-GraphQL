import gql from 'graphql-tag';

export const fetchSongs = gql`
  {
    songs {
      title
      id
    }
  }
`;

export const findSong = gql`
  query FindSong($id: ID!) {
    song(id: $id) {
      title
      id
      lyrics {
        id
        likes
        content
      }
    }
  }
`;
