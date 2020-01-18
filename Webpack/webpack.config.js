const path = require('path');

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
            }
        ]
    },
    mode: "development"
}