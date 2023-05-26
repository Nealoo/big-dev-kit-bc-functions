const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js', // The entry point of your package
  output: {
    path: path.resolve(__dirname, 'dist'), // The directory where the bundled code will be outputted
    filename: 'bc-functions.min.js', // The name of the bundled and minified file
    library: 'bcHelper',
    libraryTarget: 'umd',
  },
};