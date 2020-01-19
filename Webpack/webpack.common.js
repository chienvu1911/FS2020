const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js',
        product: './src/product.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, "dist"),
        publicPath: ''
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
                use: [{
                    loader: MiniCssExtractPlugin.loader
                    }, {
                    loader: 'css-loader', // translates CSS into CommonJS modules
                    }, {
                    loader: 'postcss-loader', // Run post css actions
                    options: {
                        plugins: function () { // post css plugins, can be exported to postcss.config.js
                        return [
                            require('precss'),
                            require('autoprefixer')
                        ];
                        }
                    }
                    }, {
                    loader: 'sass-loader' // compiles Sass to CSS
                    }]
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
            filename: "styles.[contenthash].css"
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            filename: 'index.html',
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            filename: 'product.html',
            chunks: ['product']
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
            Util: 'exports-loader?Util!bootstrap/js/dist/util',
            Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown"
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        index: "index.html"
        //đọc content từ thư mục dist 
    },
    mode: "development"
}