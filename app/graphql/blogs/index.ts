export const GET_ARTICLES= `#graphql
query getArticles {
    result : articles(first: 10, query: "blog_title:'Latest-articles'") {
      listArticles: nodes {
        image {
          url
        }
        title
        tags
      }
    }
  }`