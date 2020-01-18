const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "./dist"),
        publicPath: 'dist/'
    },
    module:{
        rules:[
            {
                test: /\.(png|jpg)$/,
                use: ['file-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {   
                test: /\.jsx?$/,   
                loader: 'babel-loader',   
                exclude: /node_modules/ 
            }  
                
        ]
    },
    plugins: [
        new TerserPlugin()
    ],
    mode: "development"
}