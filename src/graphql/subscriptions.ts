import { gql } from '@apollo/client';
import { LIKES_COMMON_FIELDS, SONG_COMMON_FIELDS } from './fragments';

export const NEW_SONG_SUBSCRIPTION = gql`
  subscription {
    newSong {
      ...SongCommonFields
    }
  }
  ${SONG_COMMON_FIELDS}
`;

export const NEW_LIKE_SUBSCRIPTION = gql`
  subscription {
    newLike {
      ...LikesCommonFileds
    }
  }
  ${LIKES_COMMON_FIELDS}
`;