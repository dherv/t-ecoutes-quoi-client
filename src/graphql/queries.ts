import { gql } from '@apollo/client';
import { SONG_COMMON_FIELDS } from './fragments';

export const GET_USER = gql`
  query GetUser {
    user {
      id
      name
      avatar
      songs {
        id
        url
      }
      friends {
        id
        name
        avatar
      }
    }
  }
`;

export const GET_SONGS = gql`
  query GetSongs($orderBy: SongOrderByInput) {
    songs(orderBy: $orderBy) {
      ...SongCommonFields
    }
  }
  ${SONG_COMMON_FIELDS}
`;
