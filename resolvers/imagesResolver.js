// const images = async (_root, args, context) => {
//   return await context.dataSources.imagesDataSource.getImages();
// };

const image = async (_root, args, context, info) => {
  const { id } = args;
  return await context.dataSources.imagesDataSource.getImageById(id);
}

const images = async (_root, args, context, info) => {
  const { filters } = args;
  return await context.dataSources.imagesDataSource.getImageByFilter(filters);
}

module.exports = {
  images,
  image,
};