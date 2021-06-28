// src/mocks/handlers.js
import { graphql } from 'msw';
import * as data from './data';

export const handlers = [
  graphql.mutation("SignUp", (req, res, ctx) => {
    return res(
      ctx.data({
        signup: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTYyNDU4MTMxMX0.f3aC_mxlAZjEd2eq0RQdy27bNbcA8Ggn-xV-jmpeoyA",
        },
      })
    );
  }),

  graphql.mutation("Login", (req, res, ctx) => {
    return res(
      ctx.data({
        login: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYyNDU4MTMzOX0.XG1eB2W_DVhXkMLKuCDWcXK4dX_Fwi1DC-hexVKX87M",
        },
      })
    );
  }),

  graphql.query("GetUser", (req, res, ctx) => {
    return res(
      ctx.data({
        user: data.user_1_withsong,
      })
    );
  }),

  graphql.query("GetSongs", (req, res, ctx) => {
    return res(
      ctx.data({
        songs: [data.song_1, data.song_2],
      })
    );
  }),

  graphql.mutation("AddSong", (req, res, ctx) => {
    return res(
      ctx.data({
        song: data.song_3,
      })
    );
  }),

  graphql.mutation("AddLike", (req, res, ctx) => {
    return res(
      ctx.data({
        addLike: data.like_1,
      })
    );
  }),

  graphql.mutation("AddFriend", (req, res, ctx) => {
    return res(
      ctx.data({
        addFriend: data.friend_1,
      })
    );
  }),

  // graphql.mutation("AddLike", (req, res, ctx) => {
  //   return res(
  //     ctx.errors([
  //       {
  //         message: "you can only like once",
  //       },
  //     ])
  //   );
  // }),

  // Handle Subscriptions
  // graphql.operation(async (req, res, ctx) => {
  //   console.log("HERERERER")
  //   return res(
  //     ctx.data({
  // newSong: {
  //   id: "3",
  //   url: "new_song",
  //   type: "new_song",
  //   duration: "02:00",
  //   image: "new_song",
  //   __typename: "Song",
  //   user: {
  //     id: "1",
  //     __typename: "User",
  //   },
  //   likes: [],
  // },
  //     })
  //   );
  // }),
];
