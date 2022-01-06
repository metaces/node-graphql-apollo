const { gql } = require('apollo-server-express');

const Query = gql`

  type Query {
    images(filters: ImageFilters): [Image]
    image(id: Int!): Image
  }
`;

module.exports = {
  Query,
};
