const { image, images } = require('./imagesResolver');

const resolvers = {
  Query: {
    images,
    image,
  },
};

module.exports = {
  resolvers,
};