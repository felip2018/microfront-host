const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require("webpack");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require("path");

module.exports = {
    entry: "./src/index.tsx",
    mode: "development",
    devServer: {
        port: 8000,
        historyApiFallback: true,
        static: {
            directory: path.join('public')
        },
        compress: true,
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        clean: true,
        chunkFilename: '[id].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, "src"),
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                            "@babel/preset-env",
                        ],
                        plugins: ["@babel/plugin-transform-runtime"],
                    }
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset/resource"
            }
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "host",
            remotes: {
                app1: "app1@http://localhost:8001/remoteEntry.js",
                app2: "app2@http://localhost:8002/remoteEntry.js"
            }
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ],
    resolve: {
        plugins: [
            new TsconfigPathsPlugin({
                configFile: path.resolve(__dirname, "tsconfig.json"),
                extensions: [".ts", ".tsx", ".js", ".json"]
            })
        ],
        extensions: ['.tsx', '.ts', '.js', '.json'],
        fallback: {
            crypto: false,
            fs: false
        }
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: './src/assets', to: 'assets' }
            ]
        }),
        new webpack.IgnorePlugin({
            resourceRegExp: /\.js\.map$/,
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        })
    ],
    ignoreWarnings: [
        /Module not found: Error: Can't resolve '.\/locale'/,
        {
            module: /sp-ml-document-viewer\.entry\.js/,
            message: /Critical dependency: the request of a dependency is an expression/
        }
    ],
};
