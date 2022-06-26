var path = require('path')
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')

var browserConfig = {
    entry: path.resolve(__dirname, 'src', "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"

    },
    module: {

        rules: [
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, './src/'),
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }

            },

            // Second Rule
            {
                test: /\.css$/,
                use: [

                    'style-loader'
                    ,

                    'css-loader',


                ]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 8192,
                        name: "static/media/[name].[hash:8].[ext]"
                    }
                }
            }
        ],
    },
    resolve: {
        extensions: ['', '.jsx', '...'],
    },

    mode: 'development',
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: "true"
        })
    ]
}

var serverConfig = {
    entry: './index.js',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'server-build'),
        filename: 'server.js',
        publicPath: '/'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname),
                exclude: /node_modules/,

                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }


            },
            {
                test: /\.css$/,
                use: [

                    'style-loader'
                    ,

                    'css-loader',


                ]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 8192,
                        name: "static/media/[name].[hash:8].[ext]"
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.jsx', '...'],
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: "false"
        })
    ]
}

module.exports = [browserConfig, serverConfig];

