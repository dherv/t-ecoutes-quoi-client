import { gql } from '@apollo/client';
import { LIKES_COMMON_FIELDS, SONG_COMMON_FIELDS } from './fragments';

export const LOGIN_MUTATION = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}
`;
export const SIGNUP_MUTATION = gql`
mutation SignUp($name: String!, $email: String!, $password: String!) {
  signup(name: $name, email: $email, password: $password) {
    token
  }
}
`;

export const ADD_SONG_MUTATION = gql`
  mutation AddSong($url: String!) {
    addSong(url: $url) {
      ...SongCommonFields
    }
  }
  ${SONG_COMMON_FIELDS}
`;

export const ADD_LIKE_MUTATION = gql`
  mutation AddLike($songId: ID!) {
    addLike(songId: $songId) {
      ...LikesCommonFileds
    }
  }
  ${LIKES_COMMON_FIELDS}
`;