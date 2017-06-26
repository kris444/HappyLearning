var path = require('path');
var webpack = require("webpack");

var ManifestPlugin = require('webpack-manifest-plugin');
var ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
var WebpackChunkHash = require("webpack-chunk-hash");

var CleanWebpackPlugin = require("clean-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

const indexHtml = path.join(__dirname, "public", "index.html");

// START: At start clean existing build folder if exists 
let pathsToClean = [
    'build'
];

let cleanOptions = {
    root: path.resolve(__dirname),
    verbose: true,
    dry: false
};

// END: At start clean existing build folder if exists

const config = {
    context: path.resolve('js'),
    entry: ["./app.js"],

    output: {
        path: path.resolve('build/js/'),
        //filename: 'bundle.[hash].js' - to avoid caching for by filename -- https://webpack.js.org/guides/caching/
        filename: 'bundle.[hash].js',
        publicPath: 'build/',
        devtoolLineToLine: true
    },

    plugins: [
        new CleanWebpackPlugin(pathsToClean, cleanOptions),
        new HtmlWebpackPlugin({
            path: path.resolve('build/assets/')
        }),
        function () {
            this.plugin("done", function (stats) {
                require("fs").writeFileSync(
                    path.join(__dirname, "build", "stats.json"),
                    JSON.stringify(stats.toJson())
                )
            });
        },

        //START : chunk manifest for cache burst
        /*     new webpack.optimize.CommonsChunkPlugin({
                 name: ['app'],
                 miniChunks: Infinity
             }),
             new webpack.HashedModuleIdsPlugin(),
             new WebpackChunkHash(),
             new ChunkManifestPlugin({
                 filename: "chunk-manifest.json",
                 manifestVariable: "webpackManifest", 
                 inlineManifest: true
             })*/
        //END : chunk manifest for cache burst
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    },
    // watch: true,
    module: {
        // rules: [
        //     {
        //         test: indexHtml,
        //         use: [
        //             {
        //                 loader: "file-loader",
        //                 options: {
        //                     name: "[name]-dist.[ext]",
        //                 },
        //             },
        //             {
        //                 loader: "extract-loader",
        //             },
        //             {
        //                 loader: "html-loader",
        //                 options: {
        //                     attrs: ["img:src", "link:href"],
        //                     interpolate: true,
        //                 },
        //             },
        //         ],
        //     },
        // ],
        loaders: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
                exclude: /node_modules/,
                loader: "file-loader?name=/assets/images/[name].[ext]"
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.es6']
    }
}


module.exports = config;