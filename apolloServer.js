const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginLandingPageDisabled, 
  ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core')

const { typeDefs } = require('./schema/schema');
const { resolvers } = require('./resolvers');
const { dataSources } = require('./dataSources/index.js');

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  // plugins: [
  //   ApolloServerPluginLandingPageGraphQLPlayground({

  //   }),
  //   ApolloServerPluginLandingPageDisabled
  // ]
});

module.exports = {
  apolloServer,
};