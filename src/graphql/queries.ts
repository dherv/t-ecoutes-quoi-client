import { gql } from '@apollo/client';
import { SONG_COMMON_FIELDS } from './fragments';

export const GET_USER = gql`
  query GetUser {
    user {
      id
      name
      songs {
        id
        url
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
