const path = require("path");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');


let pathsToClean = [
    'build'
];

let cleanOptions = {
    root: path.resolve(__dirname),
    verbose: true,
    dry: false
};


module.exports = {
    entry: "./src/app.tsx",
    output: {
        path: path.join(__dirname, "build"),
        publicPath: "/build/",
        filename: "bundle.js"
    },

    devServer: {
        //contentBase:  "./build",
        compress: true,
        inline: true, //not in iframe mode
        // hot:true,
        // clientLogLevel: "info",
        stats: { colors: true },
        // publicPath: "/assets/",
        // port: 9000
    },

    // Enable sourcemaps for debugging webpack's output.
    //devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        alias: {
            "ag-grid-root": __dirname + "/node_modules/ag-grid"
        },
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(pathsToClean, cleanOptions),
        new HtmlWebpackPlugin({
            title: 'Production'
        })
        // new BundleAnalyzerPlugin({
        //     // Can be `server`, `static` or `disabled`. 
        //     // In `server` mode analyzer will start HTTP server to show bundle report. 
        //     // In `static` mode single HTML file with bundle report will be generated. 
        //     // In `disabled` mode you can use this plugin to just generate Webpack Stats JSON file by setting `generateStatsFile` to `true`. 
        //     analyzerMode: 'server',
        //     // Host that will be used in `server` mode to start HTTP server. 
        //     analyzerHost: '127.0.0.1',
        //     // Port that will be used in `server` mode to start HTTP server. 
        //     analyzerPort: 8888,
        //     // Path to bundle report file that will be generated in `static` mode. 
        //     // Relative to bundles output directory. 
        //     reportFilename: 'report.html',
        //     // Module sizes to show in report by default. 
        //     // Should be one of `stat`, `parsed` or `gzip`. 
        //     // See "Definitions" section for more information. 
        //     defaultSizes: 'parsed',
        //     // Automatically open report in default browser 
        //     openAnalyzer: true,
        //     // If `true`, Webpack Stats JSON file will be generated in bundles output directory 
        //     generateStatsFile: false,
        //     // Name of Webpack Stats JSON file that will be generated if `generateStatsFile` is `true`. 
        //     // Relative to bundles output directory. 
        //     statsFilename: 'stats.json',
        //     // Options for `stats.toJson()` method. 
        //     // For example you can exclude sources of your modules from stats file with `source: false` option. 
        //     // See more options here: https://github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21 
        //     statsOptions: null,
        //     // Log level. Can be 'info', 'warn', 'error' or 'silent'. 
        //     logLevel: 'info'
        // })
    ],


    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};

