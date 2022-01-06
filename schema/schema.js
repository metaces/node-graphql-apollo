const { Image } = require('./types/image.js');
const { Query } = require('./query');

const typeDefs = [Query, Image];

module.exports = {
  typeDefs,
};