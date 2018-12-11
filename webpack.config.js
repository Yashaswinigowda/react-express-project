
const path = require('path'),
webpack = require('webpack'),
HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
entry: {
     app: ['./src/app/App.tsx', 'webpack-hot-middleware/client'],
     vendor: ['react', 'react-dom']
 },
 output: {
     path: path.resolve(__dirname, 'dist'),
     filename: 'js/[name].bundle.js'
 },
 devtool: 'source-map',
 resolve: {
     extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
 },
 module: {
     rules: [
         {
             test: /\.(ts|tsx)$/,
             loader: 'ts-loader'
         },
         {
            test: /\.scss$/,
            include: [
                path.resolve(__dirname, "src/")
            ],
            use: [
                { loader: "style-loader" },
                {
                    loader: "typings-for-css-modules-loader",
                    options: {
                        namedexport: true,
                        camelcase: true,
                        modules: true
                    }
                },
                { loader: "sass-loader" }
            ]
        },
        // { test: /\.css$/, loader: 'typings-for-css-modules-loader?modules' },
        // { test: /\.scss$/, loader: 'typings-for-css-modules-loader?modules&sass' },
         { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
     ]
 },
 plugins: [
     new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'app', 'index.html') }),
     new webpack.HotModuleReplacementPlugin()
 ]
}