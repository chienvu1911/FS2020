const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {   
                test: /\.jsx?$/,   
                loader: 'babel-loader',   
                exclude: /node_modules/ 
            }  
                
        ]
    },
    plugins: [
        new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename: "styles.css"
        })
    ],
    mode: "development"
}