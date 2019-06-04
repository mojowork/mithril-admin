const webpack = require('webpack');
const path = require('path'); 
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');

let config = { // config object
    mode: 'development',
    entry: {
        app: './src/index.js', // entry file
    },
    output: { // output
        path: path.resolve(__dirname, 'dist'), // ouput path
        filename: '[name]-[hash:7].js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: [
                                ['transform-react-jsx', { // jsx
                                    'pragma': 'm',
                                }],
                            ],
                        }
                    }]
            },
            {
                test: /\.(le|c)ss$/,
                use: [
                    {
                        loader: 'css-hot-loader' //css hot
                    },
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        // Not Use modules
                        // options: { 
                        //     modules: true,
                        //     localIdentName: '[name]_[local]_[hash:7]'
                        // },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: (loader) => [
                                require('autoprefixer')(),
                                //   require('cssnano')()
                            ]
                        }
                    },
                    {
                        loader: 'less-loader',
                    }
                ]
            },
            {
                test: /\.(png|gif|jpe?g|svg)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]?[hash:7]',
                        limit: 8192,
                        outputPath: 'assets/'
                    }
                }]
            },
        ] // end rules
    },
    plugins: [ // webpack plugins
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new webpack.ProvidePlugin({
            m: 'mithril', //Global access
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
    },
    devtool: 'eval-source-map', // enable devtool for better debugging experience
}

module.exports = config;