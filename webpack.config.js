var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: 'dist',
        filename: 'app.bundle.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader',
                    'sass-loader'
                ]
            })
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Project',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: 'src/index.html',
        }),
        new ExtractTextPlugin('app.css')
    ]
}