const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
    entry: "./src/index.tsx",
    mode: "development",
    devServer: {
        port: 8000,
        historyApiFallback: true
    },
    output: {
        publicPath: "auto"
    },
    module: {
        rules: [
            {
                test: /\.(tsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
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
            }/*,
            shared: {
                react: { singleton: true, requiredVersion: "^18.2.0" },
                "react-dom": { singleton: true, requiredVersion: "^18.2.0" }
            }*/
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ],
    resolve: {
        extensions: [".js", ".jsx", "ts", "tsx"]
    }
};
