export const GET_HOME_MEDIA= `#graphql
query getHomeVideo {
    files(query: "media_type:video", first: 1) {
      homeVideo : nodes {
        id
        ... on Video {
          filename
          originalSource {
            url
          }
        }
      }
    }
  }`