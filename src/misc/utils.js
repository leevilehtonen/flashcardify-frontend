export const importImages = () => {
  const context = require.context('./quizImages', false, /\.jpg$/);
  return context
    .keys()
    .reduce((acc, img) => Object.assign({}, acc, { [img.split('/')[1]]: context(img) }), {});
};
export const importImage = async name =>
  new Promise(async (resolve, reject) => {
    try {
      const result = await import(`./quizImages/${name}`);
      resolve(result.default);
    } catch (error) {
      reject(error);
    }
  });
