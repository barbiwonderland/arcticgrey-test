export const GET_METAOBJECTS_BY_TYPE = `#graphql
query GetMetaobjects($country: CountryCode, $language: LanguageCode,$type: String!)
@inContext(country: $country, language: $language){
    metaobjects(type: $type, first: 50) {
      edges {
        node {
          id
          type
          fields {
            key
            value
            reference {
              ... on MediaImage {
                id
                image {
                  url
                  altText
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  }
` as const;
