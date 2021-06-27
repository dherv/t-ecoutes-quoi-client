import { gql } from '@apollo/client';

export const LIKES_COMMON_FIELDS = gql`
  fragment LikesCommonFileds on Like {
    id
    user {
      id
    }
    song {
      id
    }
  }
`;

export const SONG_COMMON_FIELDS = gql`
  fragment SongCommonFields on Song {
    id
    url
    type
    duration
    image
    user {
      id
      name
    }
    likes {
      ...LikesCommonFileds
    }
  }
  ${LIKES_COMMON_FIELDS}
`;