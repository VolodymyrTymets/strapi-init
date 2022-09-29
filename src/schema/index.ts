import Article from "./article/schema";
import ArticleResolvers from "./article/resolvers";

export default ({ strapi }) => ({
  typeDefs: `
    ${Article}
  `,
  resolvers: {
    Query: {
      ...ArticleResolvers({ strapi })
    }
  },
  resolversConfig: {
    "Query.article": {
      auth: false,
    },
  },
});
