const gql = String.raw;

const Article = gql`
  type Article {
    title: String
  }
  type ArticleEntity {
    id: ID
    attributes: Article
  }
  type ArticleEntityResponse {
    data: ArticleEntity
  }
  extend type Query {
   article(slug: String!): ArticleEntityResponse
  }
`

export default Article;
