// src/mocks/handlers.js
import { graphql } from 'msw';

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

  graphql.query("GetUser", (req,res,ctx) => {
    return res(
      ctx.data({
        user: {
          id: "1",
          name: "Alice",
          songs : [{
            id: "1",
            url: "test_url"
          }]
        }
      })
    )
  }),

  graphql.query("GetSongs", (req, res, ctx) => {
    return res(
      ctx.data({
        songs: [
          {
            id: "1",
            url: "url_test",
            type: "type_test",
            duration: "02:00",
            image: "image_url",
            __typename: "Song",
            user: {
              id: "1",
              name: "Alice",
              __typename: "User",
            },
            likes: [
              {
                id: "1",
                __typename: "Like",
                user: {
                  id: "1",
                  __typename: "User",
                },
                song: {
                  id: "1",
                  __typename: "Song",
                },
              },
            ],
          },
          {
            id: "2",
            url: "test_me_url",
            type: "type_test",
            duration: "02:00",
            image: "image_url",
            __typename: "Song",
            user: {
              id: "1",
              name: "Alice",
              __typename: "User",
            },
            likes: [],
          },
        ],
      })
    );
  }),

  graphql.mutation("AddSong", (req, res, ctx) => {
    return res(
      ctx.data({
        song: {
          id: "3",
          url: "song_3",
          type: "playlist",
          duration: "02:00",
          image: "song_3_image",
          __typename: "Song",
          user: {
            id: "1",
            name: "Alice",
            __typename: "User",
          },
          likes: [],
        },
      })
    );
  }),

  graphql.mutation("AddLike", (req, res, ctx) => {
    return res(
      ctx.data({
        addLike: {
          __typename: "Like",
          id: "1",
          user: {
            id: "1",
          },
          song: {
            id: "1",
          },
        },
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
