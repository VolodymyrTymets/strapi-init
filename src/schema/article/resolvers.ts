const Query = ({ strapi }) => ({
  article: {
    resolve: async (parent, args, context) => {

      // from doc
      // const {toEntityResponse} = strapi.service(
      //   "plugin::graphql.format"
      // ).returnTypes;
      // get data from db
      // const data = await strapi.services["api::restaurant.restaurant"].find({
      //   filters: {name: args.slug},
      // });

      return {
        data: {
          id: '1',
          attributes: {
            title: 'test'
          }
        }
      };
    },
  },
});

export default Query

