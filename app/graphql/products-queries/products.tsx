export const COLLECTIONS_QUERY = `#graphql
  fragment Collection on Collection {
    id
    title
    handle
    image {
      id
      url
      altText
      width
      height
    }
  }
  query StoreCollections(
    $country: CountryCode
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    collections(
      first: $first,
      last: $last,
      before: $startCursor,
      after: $endCursor
    ) {
      nodes {
        ...Collection
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
` as const;

export const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
` as const;

export const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
` as const;

export const GET_PRODUCTS_QUERY_ROMPE = `#graphql
query {
  products(first: 10) {
    edges {
      node {
        id
        title
        handle
        description
        variants(first: 10) {
          edges {
            node {
              id
              title
              selectedOptions {
                name
                value
              }
            }
          }
        }
        options {
          name
          values
        }
        images(first: 5) {
          edges {
            node {
              url
              altText
            }
          }
        }
      }
    }
  }
}
` as const;

export const GET_PRODUCTS_QUERY_funca = `#graphql
query GetProducts {
  collection(handle: "products") {
    products(first: 10) {
      nodes {
        id
        title
        handle
        description
        images(first: 10) {
          nodes {
            id
            url
            altText
            width
            height
          }
        }
        variants(first: 10) {
          nodes {
            id
            title
            price {
              amount
            }
          }
        }
      }
    }
  }
}
` as const;

export const GET_PRODUCTS_QUERY_funcafull = `#graphql

query GetProducts {
  collection(handle: "products") {
    products(first: 10) {
      nodes {
        id
        title
        handle
        description
     
        
        images(first: 10) {
          nodes {
            id
            url
            altText
            width
            height
          }
        }
        variants(first: 10) {
          nodes {
            id
            title
            selectedOptions {
              name
              value
            }
            price {
              amount
            }
     
       
          }
        }
     
    }
  }

  }}

  ` as const;

export const GET_PRODUCTS_QUERY = `#graphql

  query ProductsByCollection {
    __type(name: "CurrencyCode") {
      name
      enumValues {
        name
      }
    }
    collection(handle: "products") {
      id
      title
      products(first: 10) {
        edges {
          node {
            id
            title
            handle
            description
            options {
              id
              name
              values
            }
            variants(first: 10) {
              edges {
                node {
                  id
                  title
                  availableForSale
                  selectedOptions {
                    name
                    value
                  }
                  price {
                    amount
                    currencyCode
                  }
                  image {
                    url
                    altText
                  }
                }
              }
            }
            images(first: 10) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
          }
        }
      }
    }
  }
  ` as const;

export const GET_BUNDLES_QUERY = `#graphql
query GetProducts {
  collection(handle: "Bundles") {
    products(first: 10) {
      nodes {
        id
        title
        handle
        description
        images(first: 10) {
          nodes {
            id
            url
            altText
            width
            height
          }
        }
        options {
          id
          name
          values
        }
        variants(first: 10) {
          nodes {
            price {
              amount
            }
          }
        }
      }
    }
  }
}
` as const;

export const GET_PRODUCT_DESCRIPTION = `#graphql
  query getProductDescription($handle: String!) {
    product(handle: $handle) {
      description
    }
  }
` as const;

const PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ProductVariant on ProductVariant {
    availableForSale
    compareAtPrice {
      amount
      currencyCode
    }
    id
    image {
      __typename
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
    selectedOptions {
      name
      value
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
  }
` as const;

const PRODUCT_FRAGMENT = `#graphql
  fragment Product on Product {
    id
    title
    vendor
    handle
    descriptionHtml
    description
    encodedVariantExistence
    encodedVariantAvailability
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
    images(first: 10) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }

    seo {
      description
      title
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
` as const;


export const COLLECTION_PRODUCTS_QUERY = `#graphql
  query CollectionProducts @inContext(country: US, language: EN) {
    collection(handle: "products") {
      id
      title
      description
      products(first: 50) {
        nodes {
          ...Product
        }
      }
    }
  }
  ${PRODUCT_FRAGMENT}
` as const;