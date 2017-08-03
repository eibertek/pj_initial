var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/dist');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
  entry: [APP_DIR + '/mapComponent.js', APP_DIR + '/slideShow.js', APP_DIR + '/spotifyPlayer.js', APP_DIR + '/stl/index.scss'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    libraryTarget: 'var',
    library: 'etek'    
  },
   module : {
    loaders : [
      {
        test : /\.js?/,
        include : APP_DIR,
        loader : 'babel-loader'
      },
      {
        test : /\.scss?/,
        include : APP_DIR,
        loader : ['style-loader','css-loader','sass-loader']
      }
    ]
  }
};

module.exports = config;