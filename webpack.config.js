const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/index.ts",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "umd",
        clean: true
    },
    resolve: {
        extensions: ['.ts', '.tsx'],
    },
    externals: {
        react: "react"
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            },
            {
                test:/\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            exclude: __dirname + "/../src/images",
                            limit: 4096,
                            name: "[path][name].[ext]",
                            fallback: "file-loader"
                        },
                    },
                ],
            },
        ],

    },
}