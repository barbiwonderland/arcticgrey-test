import { PRODUCT_VARIANT_FRAGMENT } from "~/graphql/products-queries/products";

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

export const GET_SOCIAL_MEDIA_QUERY = `#graphql
query getInstagramMedia($country: CountryCode, $language: LanguageCode)
@inContext(country: $country, language: $language){
  metaobject(handle: {handle: "instagram-media", type: "instagram_media"}) {
    fields {
      references(first: 50) {
        nodes {
          ... on MediaImage {
            id
            image {
              url
            }
          }
        }
      }
    }
  }
  }
` as const;

export const GET_LIST_IMAGES = `#graphql
query getListImages($country: CountryCode, $language: LanguageCode,$handle: String!)
@inContext(country: $country, language: $language){
  metaobject(handle: {handle: $handle, type: "instagram_media"}) {
    fields {
      references(first: 50) {
        nodes {
          ... on MediaImage {
            id
            image {
              url
            }
          }
        }
      }
    }
  }
  }
` as const;

export const GET_TESTIMONIALS = `#graphql
query getTestimonials{
  metaobjects(type: "testimonials", first: 10) {
  
    nodes {
			id
      fields {
        value
        key
        reference {
          ... on Product {
            id
            title
            description
            images(first: 10) {
              nodes {
                url
              }
            }
        
            options {
              name
              optionValues {
                name
                firstSelectableVariant {
                  ...ProductVariant
                }
                swatch {
                  color
                  image {
                    previewImage {
                      url
                    }
                  }
                }
              }
            }
          }
          ... on Video {
            id
            sources {
              url
            }
          }
        }
      }
    }
  }
}
${PRODUCT_VARIANT_FRAGMENT}
` as const;
