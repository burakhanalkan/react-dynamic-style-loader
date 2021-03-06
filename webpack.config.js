var webpack =require('webpack');
var yargs = require('yargs');

const options = yargs
  .alias('p', 'optimize-minimize')
  .alias('d', 'debug')
  .argv;

const jsLoader = 'babel?cacheDirectory';

module.exports = {
    entry: {
      'react-dynamic-style-loader': './src/index.js'
    },
    output: {
       path: '.',
       filename: options.optimizeMinimize ? 'index.min.js' : 'index.js',
       library: 'ReactDynamicStyleLoader',
       libraryTarget: 'umd'
    },

    module: { 
        loaders: 
        [
            {
                test: /\.js/,
                loader: jsLoader,
                exclude: /node_modules/
            }
        ]
    },
    
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
            'NODE_ENV': JSON.stringify(options.optimizeMinimize ? 'production' : 'development')
            }
        })
    ],
    
    externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    }
  ]
}