const { ImageDataSource } = require('./images.js');

const dataSources = () => ({
  imagesDataSource: new ImageDataSource(),
});

module.exports = {
  dataSources,
};